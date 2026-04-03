import { LoadBalancerHeroSection } from "@/components/load-balancer/hero-section"
import { OverviewSection } from "@/components/load-balancer/overview-section"
import { ValueSection } from "@/components/load-balancer/value-section"
import { CasesSection } from "@/components/load-balancer/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function LoadBalancerPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <LoadBalancerHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
