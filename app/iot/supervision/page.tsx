import { UMPHeroSection } from "@/components/ump/hero-section"
import { UMPOverviewSection } from "@/components/ump/overview-section"
import { UMPValueSection } from "@/components/ump/value-section"
import { UMPCasesSection } from "@/components/ump/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function UMPSuperVisionPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <UMPHeroSection />
      <UMPOverviewSection />
      <UMPValueSection />
      <UMPCasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
