import { DataCacheHeroSection } from "@/components/data-cache/hero-section"
import { OverviewSection } from "@/components/data-cache/overview-section"
import { ValueSection } from "@/components/data-cache/value-section"
import { CasesSection } from "@/components/data-cache/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function DataCachePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <DataCacheHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
