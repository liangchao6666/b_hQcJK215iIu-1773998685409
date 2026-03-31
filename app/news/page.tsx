import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Link from "next/link"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export const metadata = {
  title: "新闻资讯 - 中创股份",
  description: "了解中创股份的最新新闻、公司动态和行业资讯",
}

const newsItems = [
  {
    id: 1,
    title: "AI重塑软件 赋能产业未来 中创股份出席2025软件技术大会",
    date: "2025-03-10",
    category: "公司新闻",
    image: "/images/banners/middleware-hero.png",
    description: "近日，由中科软科技股份有限公司主办的\"2025软件技术大会\"在北京国家会议中心隆重举行。本次大会以\"AI重塑软件，赋能产业未来\"为主题，邀请了来自业界的专家学者和企业代表参加。",
    content: "大会现场，与会嘉宾深入探讨了AI技术在软件开发中的应用前景。中创股份以其在中间件和数字化平台领域的领先技术，为与会者展示了如何通过AI赋能企业数字化转型。",
  },
  {
    id: 2,
    title: "实力彰显！中创股份荣登\"2025数智生态500强\"榜单",
    date: "2025-03-05",
    category: "公司荣誉",
    image: "/images/banners/middleware-hero.png",
    description: "近日，权威数据机构发布了\"2025数智生态500强\"榜单，中创股份凭借其在基础中间件、数智化平台等领域的创新成果，荣登榜单。",
    content: "这一荣誉是对中创股份多年来在数字化、智能化领域持续创新和投入的充分认可。未来，中创股份将继续深化技术创新，为客户提供更加优质的产品和服务。",
  },
  {
    id: 3,
    title: "2026第十五届双态IT用户大会圆满举办 中创股份分享最新实践",
    date: "2025-02-28",
    category: "活动资讯",
    image: "/images/banners/middleware-hero.png",
    description: "由中国计算机用户协会主办的第十五届双态IT用户大会在北京召开，中创股份作为参展企业，展示了在容器云、中间件统一管理等领域的创新解决方案。",
    content: "本届大会汇集了来自金融、政务、运营商等各个行业的IT决策者和技术专家。中创股份通过案例分享和产品演示，展现了如何帮助企业构建稳定、高效、创新的IT系统。",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header activePath="/news" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-12 md:py-16 lg:py-20">
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <ScrollReveal>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl 3xl:text-6xl">
                新闻资讯
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg 3xl:text-xl">
                洞察产业前沿，把握行业发展动向和创新趋势
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* News Content */}
        <section className="py-12 md:py-16 lg:py-20 3xl:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {newsItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 100}>
                  <article className="group overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "16 / 9" }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 3xl:p-8">
                      <div className="flex items-center gap-3 text-xs md:text-sm 3xl:text-base">
                        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-primary">
                          {item.category}
                        </span>
                        <time className="text-muted-foreground">{item.date}</time>
                      </div>

                      <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary md:mt-4 md:text-xl 3xl:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground md:mt-4 md:text-base 3xl:text-lg">
                        {item.description}
                      </p>

                      <Link
                        href={`/news/company`}
                        className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all duration-300 hover:gap-2 md:text-base 3xl:text-lg"
                      >
                        了解更多
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                          <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
