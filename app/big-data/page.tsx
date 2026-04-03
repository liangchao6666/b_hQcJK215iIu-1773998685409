import { BigDataHeroSection } from "@/components/big-data/hero-section"
import { OverviewSection } from "@/components/big-data/overview-section"
import { ValueSection } from "@/components/big-data/value-section"
import { CasesSection } from "@/components/big-data/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function BigDataPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <BigDataHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
