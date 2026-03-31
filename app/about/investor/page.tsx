import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanyTabs } from "@/components/about/company-tabs"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "投资者关系 - 中创软件",
  description: "中创软件的投资者关系信息",
}

export default function CompanyInvestorPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <AboutHeroSection />
      <CompanyTabs />
      <Footer />
    </div>
  )
}
