import type { Metadata } from "next"
import { ProductsHeroSection } from "@/components/products/hero-section"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "产品介绍 - 中创软件",
  description: "中创软件产品体系介绍",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <ProductsHeroSection />
      <Footer />
    </div>
  )
}
