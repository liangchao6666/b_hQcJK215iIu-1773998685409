import { AIModelHeroSection } from "@/components/ai-model/hero-section"
import { OverviewSection } from "@/components/ai-model/overview-section"
import { ValueSection } from "@/components/ai-model/value-section"
import { CasesSection } from "@/components/ai-model/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function AIModelPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <AIModelHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
