import { MiddlewareManagerHeroSection } from "@/components/middleware-manager/hero-section"
import { OverviewSection } from "@/components/middleware-manager/overview-section"
import { ValueSection } from "@/components/middleware-manager/value-section"
import { CasesSection } from "@/components/middleware-manager/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function MiddlewareManagerPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MiddlewareManagerHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
