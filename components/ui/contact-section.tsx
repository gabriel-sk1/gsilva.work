"use client";

import { useState } from "react";
import { Check, Copy, Envelope } from "@phosphor-icons/react";
import { Button, LayerCard, LinkButton, Text } from "@cloudflare/kumo";

const email = "cerqueira.gabriel@pm.me";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="border-b border-kumo-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <Text as="p" variant="secondary" DANGEROUS_className="text-sm">Contato</Text>
          <Text as="h2" variant="heading" DANGEROUS_className="mt-2 block text-2xl text-kumo-strong sm:text-3xl">Vamos conversar?</Text>
          <Text as="p" variant="secondary" DANGEROUS_className="mt-3 text-sm leading-6">Aberto a oportunidades, colaborações e conversas sobre tecnologia.</Text>
        </div>
        <LayerCard className="px-5 py-4">
          <div>
            <Text as="p" variant="secondary" DANGEROUS_className="text-sm">E-mail</Text>
            <a href={`mailto:${email}`} className="mt-1 inline-flex items-center gap-2 text-base font-medium text-kumo-strong hover:underline"><Envelope size={18} aria-hidden="true" />{email}</a>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button variant="secondary" onClick={copyEmail}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}{copied ? "Copiado" : "Copiar e-mail"}</Button>
              <LinkButton href={`mailto:${email}`} variant="primary">Enviar mensagem</LinkButton>
            </div>
          </div>
        </LayerCard>
      </div>
    </section>
  );
}
