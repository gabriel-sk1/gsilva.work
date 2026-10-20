import { Cpu, Database, GraduationCap, Code } from "@phosphor-icons/react/dist/ssr";
import { LayerCard, Text } from "@cloudflare/kumo";

const strengths = [
  { icon: Code, label: "Desenvolvimento full stack", detail: "Aplicações web e APIs com TypeScript, React, Next.js e Node.js." },
  { icon: Database, label: "Bancos de dados", detail: "Modelagem e consultas com PostgreSQL, MySQL, MariaDB e SQLite." },
  { icon: Cpu, label: "Hardware e sistemas", detail: "Montagem, diagnóstico térmico e otimização de computadores." },
  { icon: GraduationCap, label: "Engenharia da computação", detail: "Estudos contínuos em arquitetura, algoritmos e fundamentos." },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-kumo-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Text as="p" variant="secondary" DANGEROUS_className="text-sm">Sobre mim</Text>
          <Text as="h2" variant="heading" DANGEROUS_className="mt-2 block text-2xl text-kumo-strong sm:text-3xl">Entender a rotina antes de desenhar a solução.</Text>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-kumo-subtle">
            <p>Gosto de entender a necessidade real de quem vai usar o sistema e construir soluções simples, estáveis e funcionais, sem complicação desnecessária.</p>
            <p>Desenvolvi um sistema interno de gestão fabril com controle de matérias-primas, ordens de serviço, apontamentos de produção, relatórios operacionais e consulta a banco legado via ODBC. A experiência me ensinou a pensar no usuário final e nos problemas concretos da operação.</p>
            <p>Meus primeiros projetos com lógica e redes foram no ecossistema FiveM, com Lua e MySQL. Também trabalhei com montagem e manutenção de computadores, experiência que complementa meus estudos em Engenharia da Computação.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {strengths.map(({ icon: Icon, label, detail }) => (
            <LayerCard key={label} className="px-4 py-3">
              <div className="flex items-start gap-3"><span className="h-lh flex items-center text-kumo-subtle"><Icon size={18} aria-hidden="true" /></span><div className="grid gap-1"><Text as="h3" variant="heading" DANGEROUS_className="text-base text-kumo-strong">{label}</Text><Text variant="secondary" DANGEROUS_className="text-sm leading-5">{detail}</Text></div></div>
            </LayerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
