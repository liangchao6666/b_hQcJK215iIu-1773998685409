import { WorkflowMiddlewareHeroSection } from "@/components/workflow-middleware/hero-section"
import { OverviewSection } from "@/components/workflow-middleware/overview-section"
import { ValueSection } from "@/components/workflow-middleware/value-section"
import { CasesSection } from "@/components/workflow-middleware/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function WorkflowMiddlewarePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <WorkflowMiddlewareHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
