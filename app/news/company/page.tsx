import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { NewsHeroSection } from "@/components/news/news-hero-section"
import { CompanyNewsList } from "@/components/news/company-news-list"

export const metadata = {
  title: "新闻资讯 - 中创股份",
  description: "中创股份最新的新闻资讯和企业动态",
}

export default function CompanyNewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NewsHeroSection />
      <main className="flex-1">
        <CompanyNewsList />
      </main>
      <Footer />
    </div>
  )
}
