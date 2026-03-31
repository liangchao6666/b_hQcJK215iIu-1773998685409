"use client"

import Link from "next/link"
import React, { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const solutions = [
  {
    tab: "AI 智能体管理平台",
    title: "AI 智能体管理平台解决方案",
    slug: "ai-agent",
    icon: "/images/solution-ai-agent.png",
    desc: "企业级全场景 AI 智能体管理平台，通过整合大模型能力、RAG 知识库及安全防护机制，实现智能体的全生命周期管理，帮助企业提升工作效率，打通业务最后一公里。",
  },
  {
    tab: "信创中间件双活容灾",
    title: "信创中间件双活容灾解决方案",
    slug: "disaster-recovery",
    icon: "/images/solution-middleware.png",
    desc: "基于自主可控技术体系，提供覆盖消息中间件、应用服务器、负载均衡等全栈中间件产品，支持多活容灾与自动故障转移，为关键行业核心系统提供安全、稳定的基础设施支撑。",
  },
  {
    tab: "数据中台解决方案",
    title: "数据中台解决方案",
    slug: "data-platform",
    icon: "/images/solution-data-platform.png",
    desc: "一站式数据中台解决方案，整合数据采集、存储、处理、分析等全流程能力，为企业打造统一的数据基础设施，助力数据驱动决策和业务创新，加速企业数字化转型。",
  },
]

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const handleTabClick = (idx: number) => {
    if (idx === activeIndex) return
    setActiveIndex(idx)
    setAnimKey(prev => prev + 1)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F8FA] to-[#F0EEF2] py-14 md:py-20 lg:py-[70px] 3xl:py-[90px]">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BF1920]/[0.02] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#BF1920]/[0.015] blur-[100px]" />
      </div>

      {/* Subtle flowing lines background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 700" preserveAspectRatio="xMidYMid slice">
          <path d="M-200,180 Q400,100 960,180 T2120,140" fill="none" stroke="rgba(191,25,32,0.07)" strokeWidth="0.8" className="subtle-line-1" />
          <path d="M-200,360 Q500,290 960,360 T2120,330" fill="none" stroke="rgba(191,25,32,0.05)" strokeWidth="0.8" className="subtle-line-2" />
          <path d="M-200,520 Q450,460 960,530 T2120,500" fill="none" stroke="rgba(191,25,32,0.06)" strokeWidth="0.8" className="subtle-line-3" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        {/* Section title */}
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl lg:text-[32px] 3xl:text-[40px]">
            解决方案
          </h2>
          <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-primary animate-line-sweep 3xl:w-16" />
          <p className="mt-3 text-center text-sm text-muted-foreground md:mt-4 md:text-base lg:text-base 3xl:text-lg">
            多样化解决方案，助力企业数智化转型
          </p>
        </ScrollReveal>

        {/* Horizontal tab bar */}
        <ScrollReveal delay={100}>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-10 lg:mt-12 lg:gap-4 3xl:mt-14 3xl:gap-5">
            {solutions.map((sol, idx) => (
              <button
                key={idx}
                onClick={() => handleTabClick(idx)}
                className={`relative overflow-hidden rounded-full px-5 py-2.5 text-center text-sm font-medium transition-all duration-500 md:px-6 md:py-3 md:text-base 3xl:px-8 3xl:py-3.5 3xl:text-lg ${
                  activeIndex === idx
                    ? "bg-[#BF1920] text-white shadow-[0_4px_16px_rgba(191,25,32,0.3)] scale-[1.02]"
                    : "bg-white/70 text-foreground/70 hover:bg-white hover:text-foreground shadow-sm hover:scale-[1.01]"
                }`}
              >
                <span className="relative z-10">{sol.tab}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content area: left text + right image */}
        <div className="mt-10 md:mt-12 lg:mt-14 3xl:mt-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-8 3xl:gap-10">
            {/* Left: title + desc + CTA */}
            <div
              key={`text-${animKey}`}
              className="w-full animate-fade-slide-up lg:w-1/2 lg:flex-shrink-0 lg:pt-0 3xl:pt-0"
            >
              <h3 className="text-xl font-bold text-foreground md:text-2xl lg:text-[26px] 3xl:text-[32px]">
                {solutions[activeIndex].title}
              </h3>
              <p className="mt-4 text-sm leading-[200%] text-foreground/60 md:text-base lg:mt-6 lg:text-base 3xl:mt-8 3xl:text-lg">
                {solutions[activeIndex].desc}
              </p>
              <Link
                href={`/solutions/${solutions[activeIndex].slug}`}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#BF1920] px-6 py-2.5 text-sm font-medium text-white shadow-[0_4px_16px_rgba(191,25,32,0.25)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(191,25,32,0.35)] hover:scale-105 md:mt-8 lg:mt-10 lg:px-7 lg:py-3 lg:text-base 3xl:mt-12 3xl:px-8 3xl:py-3.5 3xl:text-lg"
              >
                了解详情
                <svg
                  width="19"
                  height="6"
                  viewBox="0 0 19 6"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M0 3H17M17 3L14 0.5M17 3L14 5.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            </div>

            {/* Right: all images rendered, CSS controls visibility for instant switching */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-start lg:justify-start">
              <div className="relative h-[300px] w-full md:h-[360px] lg:h-[380px] 3xl:h-[480px]">
                {solutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeIndex === idx
                        ? "opacity-100 scale-100 translate-x-0"
                        : "opacity-0 scale-95 translate-x-8 pointer-events-none"
                    }`}
                  >
                    <div className={activeIndex === idx ? "solution-img-float relative h-full w-full" : "relative h-full w-full"}>
                      <img
                        src={sol.icon}
                        alt={sol.title}
                        className="w-full h-full object-contain drop-shadow-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
