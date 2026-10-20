import { Medal, BookOpen, Globe, Lightbulb } from "@phosphor-icons/react/dist/ssr";
import { Badge, LayerCard, Text } from "@cloudflare/kumo";

const credentials = [
  { icon: BookOpen, badge: "Graduação", title: "Bacharelado em Engenharia da Computação", institution: "Cruzeiro do Sul Virtual", date: "Em andamento · previsão: 2031", description: "Curso superior EAD, conciliado com prática de desenvolvimento e aprofundamento em computação e arquitetura." },
  { icon: Globe, badge: "Inglês fluente", title: "Core English Program", institution: "Quest Language Studies", date: "Concluído em agosto de 2024", description: "Formação focada em conversação e escrita técnica para comunicação em times globais." },
  { icon: Lightbulb, badge: "Negócios e processos", title: "Formação em Empreendedorismo", institution: "SEBRAE", date: "Concluído em dezembro de 2024", description: "Noções de fluxo de caixa, custos de operação e processos corporativos aplicadas à construção de software." },
  { icon: Medal, badge: "Lógica matemática", title: "Concurso Canguru de Matemática Brasil", institution: "Canguru Sem Fronteiras (KSF)", date: "Premiação em agosto de 2022", description: "Competição de resolução de problemas lógicos e matemáticos." },
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="border-b border-kumo-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <Text as="p" variant="secondary" DANGEROUS_className="text-sm">Formação</Text>
          <Text as="h2" variant="heading" DANGEROUS_className="mt-2 block text-2xl text-kumo-strong sm:text-3xl">Estudos, certificações e raciocínio lógico.</Text>
          <Text as="p" variant="secondary" DANGEROUS_className="mt-3 text-sm leading-6">Base teórica e aprendizado contínuo junto à prática de desenvolvimento.</Text>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {credentials.map(({ icon: Icon, badge, title, institution, date, description }) => (
            <LayerCard key={title} className="px-5 py-4">
              <div className="flex flex-wrap items-start justify-between gap-3"><div className="flex items-start gap-3"><span className="h-lh flex items-center text-kumo-subtle"><Icon size={20} aria-hidden="true" /></span><Text as="h3" variant="heading" DANGEROUS_className="text-base text-kumo-strong">{title}</Text></div><Badge variant="secondary">{badge}</Badge></div>
              <Text as="p" DANGEROUS_className="mt-3 text-sm font-medium">{institution}</Text>
              <Text as="p" variant="secondary" DANGEROUS_className="mt-1 text-sm">{date}</Text>
              <Text as="p" variant="secondary" DANGEROUS_className="mt-3 text-sm leading-6">{description}</Text>
            </LayerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
