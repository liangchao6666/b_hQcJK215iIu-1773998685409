import { DataGovernanceHeroSection } from "@/components/data-governance/hero-section"
import { OverviewSection } from "@/components/data-governance/overview-section"
import { ValueSection } from "@/components/data-governance/value-section"
import { CasesSection } from "@/components/data-governance/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function DataGovernancePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <DataGovernanceHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
