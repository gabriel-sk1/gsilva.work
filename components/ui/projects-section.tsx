import { ArrowUpRight, Factory, Users, Receipt, Robot, Headphones } from "@phosphor-icons/react/dist/ssr";
import { Badge, LayerCard, Text } from "@cloudflare/kumo";

const projects = [
  { icon: Factory, type: "Aplicação web", title: "Sistema de gestão fabril", subtitle: "Produção, estoque e integração ODBC", description: "Sistema interno para apoiar o fluxo de produção fabril e reduzir tarefas manuais.", details: ["Apontamento e acompanhamento de produção em tempo real", "Controle de matérias-primas e ordens de serviço", "Consulta sanitizada a banco relacional legado via ODBC", "Laudos em PDF, assinatura digital e etiquetas com barcode/QR"], stack: "TypeScript · Next.js · Node.js · PostgreSQL · Docker", className: "lg:col-span-2" },
  { icon: Users, type: "Estudo de redes", title: "Scripts e lógica para FiveM", subtitle: "Lua · Node.js · MySQL", description: "Laboratório prático com scripts no ecossistema FiveM.", details: ["Arquitetura cliente-servidor orientada a eventos", "Estudos de concorrência e sincronização de estado", "Integridade relacional para evitar inconsistências e duplicação de dados"], stack: "Lua · Node.js · MySQL", className: "" },
  { icon: Receipt, type: "Automação", title: "Automação fiscal e documentos", subtitle: "Parsing e geração de PDF", description: "Ferramentas para automatizar a leitura de documentos e gerar materiais operacionais.", details: ["Parsing de XMLs da SEFAZ com fast-xml-parser", "Geração de notas e laudos operacionais com jsPDF", "Suporte a assinatura digital, barcode e QR Code"], stack: "fast-xml-parser · jsPDF · Barcode · QR Code", className: "" },
  { icon: Robot, type: "Projeto de estudo", title: "Sexta-Feira AI", subtitle: "Assistente desktop", description: "Assistente desktop em Python com voz, hotword e visão de tela.", details: ["Áudio bidirecional com Gemini Live a 24 kHz", "Hotword offline em pt-BR com Vosk", "Leitura de tela com EasyOCR e interface PyQt6", "Comandos locais e histórico em SQLite com WAL"], stack: "Python · Gemini Live · Vosk · EasyOCR · PyQt6 · SQLite", className: "" },
  { icon: Headphones, type: "Projeto pessoal", title: "skmusic Streaming", subtitle: "Player de áudio e PWA", description: "Player desenvolvido como estudo prático de áudio e streaming.", details: ["Manipulação de áudio com Web Audio API", "Streaming com FFmpeg e sincronização via Spotify API", "Estudo de OAuth do Spotify, Docker Compose e Nginx reverso"], stack: "React 19 · PWA · FFmpeg · Spotify API · Docker", className: "" },
];

export function ProjectsSection() {
  return (
    <section id="cases" className="border-b border-kumo-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <Text as="p" variant="secondary" DANGEROUS_className="text-sm">Projetos</Text>
          <Text as="h2" variant="heading" DANGEROUS_className="mt-2 block text-2xl text-kumo-strong sm:text-3xl">Software para problemas do mundo real.</Text>
          <Text as="p" variant="secondary" DANGEROUS_className="mt-3 text-sm leading-6">Projetos desenvolvidos para necessidades práticas, estudos de lógica e experimentação técnica.</Text>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, type, title, subtitle, description, details, stack, className }) => (
            <LayerCard key={title} className={`flex flex-col px-5 py-4 ${className}`}>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><span className="inline-flex items-center gap-2 text-kumo-subtle"><Icon size={20} aria-hidden="true" /><Text variant="secondary" DANGEROUS_className="text-sm">{type}</Text></span><ArrowUpRight size={16} className="text-kumo-subtle" aria-hidden="true" /></div>
              <Text as="h3" variant="heading" DANGEROUS_className="text-lg text-kumo-strong">{title}</Text>
              <Text as="p" variant="secondary" DANGEROUS_className="mt-1 text-sm">{subtitle}</Text>
              <Text as="p" DANGEROUS_className="mt-4 text-sm leading-6">{description}</Text>
              <ul className="mt-3 grid list-disc gap-2 pl-5 text-kumo-subtle">
                {details.map((detail) => <Text key={detail} as="li" variant="secondary" DANGEROUS_className="text-sm leading-5">{detail}</Text>)}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-5"><Badge variant="secondary">{stack}</Badge></div>
            </LayerCard>
          ))}
        </div>
        <p className="mt-7 text-sm text-kumo-subtle"><strong className="font-medium text-kumo-default">Aprendizado contínuo.</strong> Construindo ferramentas práticas e resolvendo problemas reais.</p>
      </div>
    </section>
  );
}
