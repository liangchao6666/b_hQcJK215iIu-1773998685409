import { MiddlewareHeroSection } from "@/components/middleware/hero-section"
import { OverviewSection } from "@/components/middleware/overview-section"
import { ValueSection } from "@/components/middleware/value-section"
import { CasesSection } from "@/components/middleware/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function MiddlewarePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MiddlewareHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
