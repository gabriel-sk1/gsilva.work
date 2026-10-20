"use client";

import { useEffect, useState } from "react";
import { ArrowRight, GithubLogo, House, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Badge, LinkButton, Text } from "@cloudflare/kumo";
import { TechBanner } from "@/components/ui/tech-banner";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#cases" },
  { label: "Formação", href: "#credentials" },
  { label: "Contato", href: "#contact" },
];

export function PortfolioHero() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const activationLine = headerHeight + (window.innerHeight - headerHeight) * 0.3;
        const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= activationLine);
        if (current) setActiveSection(current.id);

        const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
        if (atPageEnd) setActiveSection("contact");
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);
  return (
    <>
    <header className="sticky top-0 z-40 border-b border-kumo-line bg-kumo-base/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 pt-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Caminho da página" className="flex h-10 items-center gap-2 text-sm">
            <a href="#top" className="inline-flex items-center gap-1 text-kumo-subtle hover:text-kumo-strong"><House size={16} aria-hidden="true" />Portfólio</a>
            <span aria-hidden="true" className="text-kumo-subtle">/</span>
            <span aria-current="page" className="font-medium text-kumo-strong">Gabriel Silva</span>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/bielsk1" target="_blank" rel="noreferrer" aria-label="GitHub de Gabriel Silva" className="inline-flex h-8 items-center gap-2 rounded-md px-2 text-sm text-kumo-subtle hover:bg-kumo-tint hover:text-kumo-strong"><GithubLogo size={16} aria-hidden="true" />GitHub</a>
            <a href="https://linkedin.com/in/gabriel-silva-9a0494426" target="_blank" rel="noreferrer" aria-label="LinkedIn de Gabriel Silva" className="inline-flex h-8 items-center gap-2 rounded-md px-2 text-sm text-kumo-subtle hover:bg-kumo-tint hover:text-kumo-strong"><LinkedinLogo size={16} aria-hidden="true" />LinkedIn</a>
          </div>
        </div>
        <nav aria-label="Navegação principal" className="mt-3 -mb-px flex gap-1 overflow-x-auto border-b border-kumo-line [scrollbar-width:thin] [scrollbar-color:var(--color-kumo-line)_transparent] [--scroll-fade-width:2rem]" data-overflowing>
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href.slice(1) ? "location" : undefined} onClick={() => setActiveSection(item.href.slice(1))} className={`shrink-0 border-b-2 px-3 py-2 text-sm motion-safe:transition-[border-color,transform] motion-safe:duration-200 motion-safe:ease-out ${activeSection === item.href.slice(1) ? "-translate-y-px border-kumo-brand text-kumo-strong" : "border-transparent text-kumo-subtle hover:border-kumo-line hover:text-kumo-strong"}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
    <section id="top" className="border-b border-kumo-line bg-kumo-base">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <Badge variant="secondary">Disponível para oportunidades</Badge>
          <Text as="h1" variant="heading" size="lg" DANGEROUS_className="mt-5 block text-4xl leading-tight text-kumo-strong sm:text-6xl">
            Desenvolvedor de software focado em soluções práticas.
          </Text>
          <Text as="p" DANGEROUS_className="mt-4 max-w-2xl text-sm leading-6 text-kumo-subtle">
            Desenvolvo sistemas web, ERPs industriais e aplicações em tempo real. Gosto de entender o problema de ponta a ponta e entregar software claro, útil e confiável.
          </Text>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <LinkButton href="#cases" variant="primary" icon={<ArrowRight size={16} aria-hidden="true" />}>Ver projetos</LinkButton>
            <LinkButton href="mailto:cerqueira.gabriel@pm.me" variant="secondary">Falar comigo</LinkButton>
          </div>
        </div>
      </div>
      <TechBanner />
    </section>
    </>
  );
}
