"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { CONTACT_FORM_LIMITS } from "@/data/contact";

interface ContactFormProps {
  isConfigured: boolean;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ isConfigured }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      setStatus("error");
      setFeedback(
        "O envio pelo formulário ainda está em configuração. Envie sua mensagem diretamente para arturfer2006@hotmail.com."
      );
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setFeedback(
          data?.error ??
            "Não foi possível enviar sua mensagem. Tente novamente ou use arturfer2006@hotmail.com."
        );
        return;
      }

      setStatus("success");
      setFeedback("Mensagem enviada com sucesso. Obrigado pelo contato!");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setStatus("error");
      setFeedback(
        "Falha de conexão ao enviar a mensagem. Tente novamente ou use arturfer2006@hotmail.com."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Campo honeypot oculto para proteção contra spam automatizado */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-name"
          className="text-ink text-[11px] font-medium tracking-[0.18em] uppercase"
        >
          Nome
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          minLength={CONTACT_FORM_LIMITS.nameMin}
          maxLength={CONTACT_FORM_LIMITS.nameMax}
          autoComplete="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isConfigured || status === "submitting"}
          className="border-ink/45 text-ink placeholder:text-muted/70 focus:border-cobalt w-full border bg-transparent px-3.5 py-2.5 text-sm transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-65"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="text-ink text-[11px] font-medium tracking-[0.18em] uppercase"
        >
          E-mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          minLength={CONTACT_FORM_LIMITS.emailMin}
          maxLength={CONTACT_FORM_LIMITS.emailMax}
          autoComplete="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isConfigured || status === "submitting"}
          className="border-ink/45 text-ink placeholder:text-muted/70 focus:border-cobalt w-full border bg-transparent px-3.5 py-2.5 text-sm transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-65"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-ink text-[11px] font-medium tracking-[0.18em] uppercase"
        >
          Mensagem
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          minLength={CONTACT_FORM_LIMITS.messageMin}
          maxLength={CONTACT_FORM_LIMITS.messageMax}
          placeholder="Como posso ajudar?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!isConfigured || status === "submitting"}
          className="border-ink/45 text-ink placeholder:text-muted/70 focus:border-cobalt w-full resize-y border bg-transparent px-3.5 py-3 text-sm transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-65"
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={!isConfigured || status === "submitting"}
          aria-disabled={!isConfigured || status === "submitting"}
          className="bg-cobalt hover:bg-cobalt-hover inline-flex min-w-[240px] items-center justify-center gap-3 px-7 py-3.5 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <span
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white"
                aria-hidden="true"
              />
              <span>Enviando mensagem...</span>
            </>
          ) : (
            <>
              <span>Enviar mensagem</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </>
          )}
        </button>

        {!isConfigured ? (
          <p role="status" className="text-muted mt-3 text-xs leading-relaxed">
            Envio automático em configuração. Para contato imediato, escreva para{" "}
            <a
              href="mailto:arturfer2006@hotmail.com"
              className="text-ink hover:text-cobalt font-medium underline underline-offset-2 transition-colors"
            >
              arturfer2006@hotmail.com
            </a>
            .
          </p>
        ) : null}

        <div aria-live="polite">
          {status === "success" ? (
            <div role="status" className="border-rule mt-6 border-t pt-5">
              <div className="flex items-start gap-4">
                <span
                  className="bg-cobalt mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-white"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                  </svg>
                </span>

                <div>
                  <p className="text-ink text-[11px] font-medium tracking-[0.22em] uppercase">
                    MENSAGEM ENVIADA
                  </p>
                  <p className="text-ink mt-1.5 text-lg leading-snug font-bold tracking-tight">
                    Obrigado pelo contato.
                  </p>
                  <p className="text-muted mt-1 text-sm leading-relaxed">
                    Sua mensagem foi enviada com sucesso. Retornarei assim que possível.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {status === "error" ? (
            <div role="alert" className="border-rule mt-6 border-t pt-5">
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-red-700 text-white"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M8 4V8.5" />
                    <path d="M8 11.5V12" />
                  </svg>
                </span>

                <div>
                  <p className="text-[11px] font-medium tracking-[0.22em] text-red-700 uppercase">
                    NÃO FOI POSSÍVEL ENVIAR
                  </p>
                  <p className="text-ink mt-1.5 text-lg leading-snug font-bold tracking-tight">
                    Ocorreu um problema no envio.
                  </p>
                  <p className="text-muted mt-1 text-sm leading-relaxed">{feedback}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}
