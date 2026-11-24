import { NextResponse } from "next/server";
import { CONTACT_FORM_LIMITS } from "@/data/contact";

const MAX_PAYLOAD_BYTES = 16_384;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface ContactPayload {
  name: unknown;
  email: unknown;
  message: unknown;
  website?: unknown;
}

function hasHeaderInjection(value: string): boolean {
  return /[\r\n]/.test(value);
}

function sanitizeSingleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function isOriginAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const host = request.headers.get("host");
  if (!host) return false;

  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isOriginAllowed(request)) {
    return NextResponse.json({ error: "Origem da requisição não autorizada." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Formato de requisição inválido." }, { status: 415 });
  }

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const declaredSize = Number(contentLengthHeader);
    if (!Number.isFinite(declaredSize) || declaredSize > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: "Conteúdo excede o tamanho máximo permitido." },
        { status: 413 }
      );
    }
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ error: "Não foi possível ler a requisição." }, { status: 400 });
  }

  if (new TextEncoder().encode(rawBody).length > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      { error: "Conteúdo excede o tamanho máximo permitido." },
      { status: 413 }
    );
  }

  let parsed: ContactPayload;
  try {
    parsed = JSON.parse(rawBody) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  if (!parsed || typeof parsed !== "object") {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  // Honeypot anti-spam: bots preenchem o campo oculto `website`
  if (typeof parsed.website === "string" && parsed.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = typeof parsed.name === "string" ? parsed.name.trim() : "";
  const email = typeof parsed.email === "string" ? parsed.email.trim() : "";
  const message = typeof parsed.message === "string" ? parsed.message.trim() : "";

  if (
    name.length < CONTACT_FORM_LIMITS.nameMin ||
    name.length > CONTACT_FORM_LIMITS.nameMax ||
    hasHeaderInjection(name)
  ) {
    return NextResponse.json(
      {
        error: `Informe um nome válido entre ${CONTACT_FORM_LIMITS.nameMin} e ${CONTACT_FORM_LIMITS.nameMax} caracteres.`,
      },
      { status: 400 }
    );
  }

  if (
    email.length < CONTACT_FORM_LIMITS.emailMin ||
    email.length > CONTACT_FORM_LIMITS.emailMax ||
    hasHeaderInjection(email) ||
    !EMAIL_REGEX.test(email)
  ) {
    return NextResponse.json({ error: "Informe um endereço de e-mail válido." }, { status: 400 });
  }

  if (
    message.length < CONTACT_FORM_LIMITS.messageMin ||
    message.length > CONTACT_FORM_LIMITS.messageMax
  ) {
    return NextResponse.json(
      {
        error: `A mensagem deve ter entre ${CONTACT_FORM_LIMITS.messageMin} e ${CONTACT_FORM_LIMITS.messageMax} caracteres.`,
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "arturfer2006@hotmail.com";

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "O envio pelo formulário ainda está em configuração. Utilize o e-mail arturfer2006@hotmail.com para entrar em contato.",
      },
      { status: 503 }
    );
  }

  const safeName = sanitizeSingleLine(name);
  const safeEmail = sanitizeSingleLine(email);
  const subject = `Contato pelo portfólio — ${safeName}`;
  const textBody = [`Nome: ${safeName}`, `E-mail: ${safeEmail}`, "", "Mensagem:", message].join(
    "\n"
  );

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: safeEmail,
        subject,
        text: textBody,
      }),
    });

    if (!resendResponse.ok) {
      return NextResponse.json(
        {
          error:
            "Não foi possível entregar sua mensagem no momento. Tente novamente mais tarde ou envie diretamente para arturfer2006@hotmail.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        error:
          "Erro de comunicação ao enviar a mensagem. Utilize arturfer2006@hotmail.com como alternativa.",
      },
      { status: 502 }
    );
  }
}
