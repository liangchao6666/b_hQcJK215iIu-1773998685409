import { MessageMiddlewareHeroSection } from "@/components/message-middleware/hero-section"
import { OverviewSection } from "@/components/message-middleware/overview-section"
import { ValueSection } from "@/components/message-middleware/value-section"
import { CasesSection } from "@/components/message-middleware/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function MessageMiddlewarePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <MessageMiddlewareHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
