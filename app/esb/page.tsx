import { ESBHeroSection } from "@/components/esb/hero-section"
import { OverviewSection } from "@/components/esb/overview-section"
import { ValueSection } from "@/components/esb/value-section"
import { CasesSection } from "@/components/esb/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function ESBPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <ESBHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
