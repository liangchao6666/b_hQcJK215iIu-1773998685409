import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanyTabs } from "@/components/about/company-tabs"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "发展历程 - 中创软件",
  description: "中创软件的发展历程与里程碑",
}

export default function CompanyHistoryPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <AboutHeroSection />
      <CompanyTabs />
      <Footer />
    </div>
  )
}
