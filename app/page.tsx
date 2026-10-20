import { PortfolioHero } from "@/components/ui/portfolio-hero";
import { AboutSection } from "@/components/ui/about-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { CredentialsSection } from "@/components/ui/credentials-section";
import { ContactSection } from "@/components/ui/contact-section";
import { PortfolioFooter } from "@/components/ui/portfolio-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-kumo-base text-kumo-default">
      <PortfolioHero />
      <AboutSection />
      <ProjectsSection />
      <CredentialsSection />
      <ContactSection />
      <PortfolioFooter />
    </main>
  );
}
