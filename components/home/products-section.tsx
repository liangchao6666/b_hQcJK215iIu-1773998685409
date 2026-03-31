"use client"

import Link from "next/link"
import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const products = [
  {
    title: "基础中间件",
    desc: "企业级基础设施的核心支撑平台",
    icon: "/images/icon-25.png",
    href: "/middleware",
    items: [
      { name: "应用服务器", href: "/middleware" },
      { name: "负载均衡软件", href: "/middleware/load-balancer" },
      { name: "分布式数据缓存中间件", href: "/middleware/data-cache" },
      { name: "消息中间件", href: "/middleware/messaging" },
      { name: "工作流中间件", href: "/middleware/workflow" },
      { name: "企业服务总线", href: "/middleware/service-hotline" },
      { name: "中间件统一管理平台", href: "/middleware/management" },
    ],
  },
  {
    title: "数智化平台",
    desc: "数据驱动的智能化业务平台",
    icon: "/images/icon-22.png",
    href: "/digital-platform",
    items: [
      { name: "数据集成平台", href: "/digital-platform/data-integration" },
      { name: "数据治理平台", href: "/digital-platform/data-governance" },
      { name: "大数据分析平台", href: "/digital-platform/big-data" },
      { name: "AI模型管理平台", href: "/digital-platform/ai-model" },
      { name: "业务信息和电子文件交换系统", href: "/digital-platform/file-exchange" },
      { name: "DTP数据传输中心", href: "/digital-platform/dtp" },
    ],
  },
  {
    title: "PaaS云平台",
    desc: "灵活弹性的云原生应用集成平台",
    icon: "/images/icon-33.png",
    href: "/paas",
    items: [
      { name: "PaaS平台", href: "/paas/platform" },
      { name: "iPaaS应用集成服务平台", href: "/paas/ipaas" },
      { name: "业务流程PaaS平台", href: "/paas/bpm" },
    ],
  },
  {
    title: "物联网平台",
    desc: "万物互联的智慧感知管控平台",
    icon: "/images/icon-32.png",
    href: "/iot",
    items: [
      { name: "应用安全", href: "/iot/app-security" },
      { name: "统一监管平台", href: "/iot/supervision" },
      { name: "物联网监控平台", href: "/iot/monitoring" },
      { name: "高速公路智慧管控平台", href: "/iot/highway" },
    ],
  },
  {
    title: "应用安全产品",
    desc: "全方位信息安全防护体系",
    icon: "/images/icon-44.png",
    href: "/security",
    items: [
      { name: "防篡改软件", href: "/security/anti-tamper" },
      { name: "web应用防火墙", href: "/security/waf" },
      { name: "业务文件安全传输平台", href: "/security/file-transfer" },
    ],
  },
]

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = products[activeIndex]

  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-4 lg:px-8 lg:pt-6 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:pt-8">
        <ScrollReveal>
          <div className="mb-10 -mt-[30px] text-center lg:mb-14 3xl:mb-16">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl 3xl:text-[40px]">
              {"产品体系"}
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 animate-line-sweep rounded-full bg-primary 3xl:w-16" />
            <p className="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base 3xl:text-lg">
              {"30年的技术积累\u2014\u2014源于自主可控的优秀开发经验"}
            </p>
          </div>
        </ScrollReveal>

        {/* Main layout: top nav + bottom preview */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 3xl:gap-8">
            {/* Top: horizontal navigation tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 3xl:gap-5">
              {products.map((product, index) => {
                const isActive = activeIndex === index
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-400 md:px-5 md:py-3.5 3xl:gap-4 3xl:px-6 3xl:py-4 ${
                      isActive
                        ? "bg-gradient-to-r from-[#FCFAFB] to-[#F6F3F7] shadow-[0_4px_16px_rgba(74,7,7,0.08)]"
                        : "bg-transparent hover:bg-[#F9F7F8]"
                    }`}
                  >
                    {/* Bottom active indicator bar */}
                    <div
                      className={`absolute bottom-0 left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-t-full transition-all duration-400 ${
                        isActive ? "bg-[#BF1920] opacity-100" : "bg-transparent opacity-0"
                      }`}
                    />

                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-400 md:h-12 md:w-12 3xl:h-14 3xl:w-14 ${
                        isActive
                          ? "bg-[#BF1920]/[0.06]"
                          : "bg-foreground/[0.03] group-hover:bg-foreground/[0.05]"
                      }`}
                    >
                      <img
                        src={product.icon || "/placeholder.svg"}
                        alt={product.title}
                        className={`h-6 w-5 object-contain transition-all duration-400 md:h-7 md:w-6 3xl:h-8 3xl:w-7 ${
                          isActive ? "drop-shadow-[0_0_4px_rgba(191,25,32,0.2)]" : ""
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3
                        className={`text-sm font-bold transition-colors duration-300 md:text-base 3xl:text-lg ${
                          isActive ? "text-[#BF1920]" : "text-foreground group-hover:text-foreground"
                        }`}
                      >
                        {product.title}
                      </h3>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Bottom: preview panel */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-foreground/[0.06] bg-gradient-to-br from-[#FCFAFB] to-[#F4F1F5] shadow-[0_8px_30px_rgba(74,7,7,0.05)]">
              {/* Content area */}
              <div className="relative p-5 md:p-6 3xl:p-8">
                {/* Grid stack: all panels occupy same cell, only active is visible */}
                <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
                {products.map((product, index) => {
                  const isActive = activeIndex === index
                  return (
                  <div
                    key={index}
                    className="transition-all duration-400 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      pointerEvents: isActive ? "auto" : "none",
                      visibility: isActive ? "visible" : "hidden",
                    }}
                    aria-hidden={!isActive}
                  >
                    {/* Product header in preview */}
                    <div className="relative mb-4 3xl:mb-5">
                      {/* Icon - top right corner, large decorative */}
                      <div className="absolute -top-1 right-0">
                        <img
                          src={product.icon || "/placeholder.svg"}
                          alt={product.title}
                          className="h-[72px] w-[60px] object-contain 3xl:h-[84px] 3xl:w-[72px]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {/* Title text - left aligned */}
                      <div className="pr-24 3xl:pr-28">
                        <h3 className="text-lg font-bold text-foreground md:text-xl 3xl:text-2xl">
                          {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-foreground/50 3xl:text-base">{product.desc}</p>
                      </div>
                    </div>

                    {/* Sub-product grid in preview - max 2 rows with scroll */}
                    <div className="grid max-h-[180px] grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2 md:max-h-[200px] 3xl:max-h-[220px] 3xl:gap-4">
                      {product.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="group/item flex items-start gap-3 rounded-xl border border-foreground/[0.05] bg-white/70 px-4 py-3.5 transition-all duration-300 hover:border-[#BF1920]/15 hover:bg-white hover:shadow-[0_4px_16px_rgba(74,7,7,0.07)] 3xl:px-5 3xl:py-4"
                          style={{ animationDelay: `${idx * 60}ms` }}
                        >
                          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#BF1920]/[0.06] text-[10px] font-bold text-[#BF1920]/70 transition-colors duration-300 group-hover/item:bg-[#BF1920]/[0.1] group-hover/item:text-[#BF1920] 3xl:h-9 3xl:w-9 3xl:text-xs">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold text-foreground/80 transition-colors duration-300 group-hover/item:text-foreground 3xl:text-base">
                              {item.name}
                            </span>
                            <p className="mt-1.5 text-xs leading-relaxed text-foreground/40 transition-colors duration-300 group-hover/item:text-foreground/55 3xl:text-sm">
                              {"提供高性能、高可用的企业级技术支撑能力"}
                            </p>
                          </div>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="mt-0.5 flex-shrink-0 text-foreground/15 transition-all duration-300 group-hover/item:text-[#BF1920]/50"
                          >
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                  )
                })}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
