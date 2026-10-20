"use client";

import { useState } from "react";
import Image from "next/image";
import { Database } from "@phosphor-icons/react/dist/ssr";
import { LayerCard, Text } from "@cloudflare/kumo";

const technologies = [
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "Next.js", icon: "nextdotjs.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Vue.js", icon: "vuedotjs.svg" },
  { name: "HTML5", icon: "html5.svg" },
  { name: "CSS3", icon: "css3.svg" },
  { name: "Node.js", icon: "nodedotjs.svg" },
  { name: "Go", icon: "go.svg" },
  { name: "Lua", icon: "lua.svg" },
  { name: "Cfx.re", icon: "fivem.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "MariaDB", icon: "mariadb.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "HeidiSQL", icon: "database.svg", generic: "database" },
  { name: "Google Cloud", icon: "googlecloud.svg" },
  { name: "Microsoft Azure", icon: "azure.svg" },
  { name: "Windows Server", icon: "windows.svg" },
  { name: "Firebase", icon: "firebase.svg" },
  { name: "Appwrite", icon: "appwrite.svg" },
  { name: "Supabase", icon: "supabase.svg" },
  { name: "Resend", icon: "resend.svg" },
  { name: "Git Bash", icon: "gitforwindows.svg" },
  { name: "XAMPP", icon: "xampp.svg" },
  { name: "APIs REST", icon: "openapiinitiative.svg" },
  { name: "Business Intelligence (BI)", icon: "looker.svg" },
];

export function TechBanner() {
  const [isPaused, setIsPaused] = useState(false);
  const rows = [technologies.slice(0, 15), technologies.slice(15)];

  return (
    <section aria-labelledby="technology-heading" className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-12">
      <LayerCard className="overflow-hidden px-5 py-5 sm:px-8 sm:py-6">
        <Text id="technology-heading" as="h2" variant="heading" DANGEROUS_className="mb-4 block text-sm text-kumo-subtle sm:mb-5">Tecnologias e ferramentas que uso no dia a dia</Text>
        <div
          className="relative -mx-5 grid gap-3 overflow-hidden border-y border-kumo-line py-3 sm:-mx-8 sm:gap-4 sm:py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false); }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              <ul aria-label={`Tecnologias, fileira ${rowIndex + 1}`} className={`flex w-max list-none items-center gap-8 px-5 sm:gap-12 sm:px-8 ${rowIndex === 0 ? "animate-logo-marquee" : "animate-logo-marquee-reverse"} ${isPaused ? "[animation-play-state:paused]" : ""}`}>
                {[...row, ...row].map(({ name, icon, generic }, index) => (
                  <li key={`${name}-${index}`} aria-hidden={index >= row.length} className="flex min-w-28 shrink-0 items-center justify-center gap-2.5 text-kumo-subtle opacity-70 grayscale transition-opacity hover:opacity-100">
                    {generic === "database" ? <Database size={28} weight="duotone" aria-hidden="true" /> : null}
                    {!generic ? <Image src={`/brand-icons/${icon}`} alt="" aria-hidden="true" width={30} height={30} className="h-7 w-7 object-contain" /> : null}
                    <span className="whitespace-nowrap text-sm font-medium">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </LayerCard>
    </section>
  );
}
