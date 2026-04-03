import { FileExchangeHeroSection } from "@/components/file-exchange/hero-section"
import { OverviewSection } from "@/components/file-exchange/overview-section"
import { ValueSection } from "@/components/file-exchange/value-section"
import { CasesSection } from "@/components/file-exchange/cases-section"
import { Footer } from "@/components/shared/footer"
import { OnlineServiceWidget } from "@/components/online-service-widget"

export default function FileExchangePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <FileExchangeHeroSection />
      <OverviewSection />
      <ValueSection />
      <CasesSection />
      <Footer />
      <OnlineServiceWidget />
    </div>
  )
}
