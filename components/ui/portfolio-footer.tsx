import { Text } from "@cloudflare/kumo";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#cases" },
  { label: "Formação", href: "#credentials" },
  { label: "Contato", href: "#contact" },
];

export function PortfolioFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-7 sm:px-8">
      <Text as="p" variant="secondary" DANGEROUS_className="text-sm">© {new Date().getFullYear()} Gabriel Silva</Text>
      <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-kumo-subtle hover:text-kumo-strong">{link.label}</a>)}
      </nav>
    </footer>
  );
}
