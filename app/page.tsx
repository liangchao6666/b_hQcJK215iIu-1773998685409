import { HeroSection } from "@/components/home/hero-section"
import { StatsBar } from "@/components/home/stats-bar"
import { ProductsSection } from "@/components/home/products-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { CustomersSection } from "@/components/home/customers-section"
import { CasesSection } from "@/components/home/cases-section"
import { HonorsSection } from "@/components/home/honors-section"
import { NewsSection } from "@/components/home/news-section"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/shared/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <HeroSection />
      <StatsBar />
      <ProductsSection />
      <SolutionsSection />
      <CasesSection />
      <NewsSection />
      <CustomersSection />
      <HonorsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
