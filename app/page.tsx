import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CertificationsSection } from "@/components/certifications-section"
import { FooterSection } from "@/components/footer-section"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      <FadeIn delay={100}>
        <HeroSection />
      </FadeIn>
      <FadeIn delay={200}>
        <TechnologiesSection />
      </FadeIn>
      <FadeIn delay={300}>
        <AboutSection />
      </FadeIn>
      <FadeIn delay={350}>
        <ExperienceSection />
      </FadeIn>
      <FadeIn delay={400}>
        <PortfolioSection />
      </FadeIn>
      <FadeIn delay={500}>
        <CertificationsSection />
      </FadeIn>
      <FadeIn delay={700}>
        <FooterSection />
      </FadeIn>
    </main>
  )
}
