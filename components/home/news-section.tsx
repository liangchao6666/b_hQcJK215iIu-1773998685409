"use client"

import { useState, useEffect, useRef } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const newsImages = [
  { src: "/images/news/1.jpg", alt: "万马奔腾启新程：中创股份交出高质量蛇年答卷" },
  { src: "/images/news/2.jpg", alt: "中创股份喜开通过CMM1-DEV V3.0 ML5级整评" },
  { src: "/images/news/3.jpg", alt: "融融全身数字化转型，中创股份出席2026第十五届双点IT用户大会" },
]

const newsItems = [
  { title: "AI重塑软件 赋能产业未来 中创股份出席2025软件技术大会", desc: "近日，由中科软科技股份有限公司主办的\"2025软件技术大会\"在北京国家会议中心隆重举行。本次大会以\"AI重塑软件，赋能产业未来\"......" },
  { title: "实力彰显！中创股份荣登\"2025数智生态500强\"榜单", desc: "近日，由中科软科技股份有限公司主办的\"2025软件技术大会\"在北京国家会议中心隆重举行。本次大会以\"AI重塑软件，赋能产业未来\"......" },
  { title: "AI重塑软件 赋能产业未来 中创股份出席2025软件技术大会", desc: "近日，由中科软科技股份有限公司主办的\"2025软件技术大会\"在北京国家会议中心隆重举行。本次大会以\"AI重塑软件，赋能产业未来\"......" },
]

export function NewsSection() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0)
  const [newsAutoPlay, setNewsAutoPlay] = useState(true)

  useEffect(() => {
    if (!newsAutoPlay) return
    const timer = setInterval(() => {
      setActiveNewsIndex((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [newsAutoPlay])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F8FA] to-[#F0EEF2] py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#BF1920]/[0.015] blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#BF1920]/[0.01] blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-8 text-center lg:mb-10 3xl:mb-12">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl 3xl:text-[40px]">新闻资讯</h2>
            <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-primary animate-line-sweep 3xl:w-16" />
            <p className="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base 3xl:text-lg">洞察产业前沿——把握行业发展动向和创新趋势</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10 3xl:gap-12">
          <ScrollReveal>
            <div className="flex h-full w-full flex-shrink-0 flex-col lg:w-[480px] 3xl:w-[600px]">
              <div className="relative flex-1 overflow-hidden rounded-xl" style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)", aspectRatio: "652 / 414" }}>
                {newsImages.map((img, index) => (
                  <img key={index} src={img.src || "/placeholder.svg"} alt={img.alt} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${activeNewsIndex === index ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} loading="lazy" decoding="async" />
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                {[0, 1, 2].map((idx) => (
                  <div key={idx} className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-border/20">
                    <div key={`progress-${idx}-${activeNewsIndex}`} className={`news-progress-bar absolute inset-y-0 left-0 rounded-full bg-primary ${activeNewsIndex === idx ? "news-progress-active" : "w-0"}`} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex h-full flex-1 flex-col justify-between" onMouseEnter={() => setNewsAutoPlay(false)} onMouseLeave={() => setNewsAutoPlay(true)}>
              {newsItems.map((news, idx) => (
                <a key={idx} href="#" className={`group block cursor-pointer rounded-lg px-5 py-5 transition-all duration-300 3xl:px-6 3xl:py-6 ${activeNewsIndex === idx ? "bg-primary/5 shadow-sm" : "hover:bg-primary/5"}`} onMouseEnter={() => setActiveNewsIndex(idx)}>
                  <h3 className={`text-base font-medium leading-relaxed transition-colors duration-300 md:text-lg 3xl:text-xl ${activeNewsIndex === idx ? "text-primary" : "text-foreground group-hover:text-primary"}`}>{news.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground md:text-sm 3xl:text-base">{news.desc}</p>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-8 flex justify-center lg:mt-10 3xl:mt-12">
          <a href="#" className="group inline-flex items-center justify-center rounded bg-primary px-5 py-2 text-base font-normal text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-95 3xl:px-6 3xl:py-2.5 3xl:text-lg">
            <span className="relative z-10 flex items-center">
              查看更多
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" className="ml-3 transition-transform duration-300 group-hover:translate-x-1"><path d="M1 1L9 9L1 17" stroke="white" strokeWidth="2" /></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
