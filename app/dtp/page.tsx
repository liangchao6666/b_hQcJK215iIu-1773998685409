import { DTPHeroSection } from "@/components/dtp/hero-section"
import { OverviewSection } from "@/components/dtp/overview-section"
import { ValueSection } from "@/components/dtp/value-section"
import { CasesSection } from "@/components/dtp/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function DTPPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <DTPHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
