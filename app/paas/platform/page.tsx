import { PaaSHeroSection } from "@/components/paas/hero-section"
import { PaaSOverviewSection } from "@/components/paas/overview-section"
import { PaaSValueSection } from "@/components/paas/value-section"
import { PaaSCasesSection } from "@/components/paas/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function PaaSPlatformPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <PaaSHeroSection />
      <PaaSOverviewSection />
      <PaaSValueSection />
      <PaaSCasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
