"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const cases = [
  {
    id: 1,
    title: "金融行业",
    description: "为银行提供数据治理服务，实现数据资产的统一管理和数据质量的持续改进。",
    image: "/images/cases/case-1.png",
  },
  {
    id: 2,
    title: "电商平台",
    description: "为电商网站提供数据治理服务，确保数据的一致性和准确性，提升数据价值。",
    image: "/images/cases/case-2.png",
  },
  {
    id: 3,
    title: "电信运营商",
    description: "为电信业务提供数据治理服务，实现数据标准的统一管理和数据质量的监控。",
    image: "/images/cases/case-3.png",
  },
  {
    id: 4,
    title: "政府部门",
    description: "为政务服务提供数据治理服务，实现数据资源的有效管理和利用。",
    image: "/images/cases/case-4.png",
  },
  {
    id: 5,
    title: "制造业",
    description: "为制造企业提供数据治理服务，确保生产数据的准确性和一致性。",
    image: "/images/cases/case-5.png",
  },
  {
    id: 6,
    title: "医疗健康",
    description: "为医疗机构提供数据治理服务，确保医疗数据的质量和安全。",
    image: "/images/cases/case-6.png",
  },
]

export function CasesSection() {
  const [activeCase, setActiveCase] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const casesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveCase((prev) => (prev + 1) % cases.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering])

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24 lg:px-0 lg:py-[120px] 3xl:py-[180px]">
      {/* Floating particles */}
      <div className="pointer-events-none absolute left-[10%] top-[18%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 9s ease-in-out 1.5s infinite" }} />
      <div className="pointer-events-none absolute left-[6%] bottom-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 0.8s infinite" }} />
      <div className="pointer-events-none absolute right-[14%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 6s ease-in-out 2s infinite" }} />
      {/* Soft glow orbs */}
      <div className="pointer-events-none absolute right-[35%] top-[5%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute left-[30%] bottom-[10%] h-[160px] w-[160px] rounded-full bg-[#BF1920]/[0.05] blur-[40px]" style={{ animation: "orb-drift 15s ease-in-out 3s infinite" }} />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 3xl:max-w-[1400px]">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-2xl font-bold leading-[100%] text-[#242222] md:mb-[60px] md:text-3xl 3xl:mb-[90px] 3xl:text-[40px]">
            典型案例
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 3xl:gap-16">
          {/* Left side: Case image and arrows */}
          <div className="relative w-full lg:w-[550px] lg:flex-shrink-0 3xl:w-[660px]">
            <ScrollReveal delay={100}>
              <div
                className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-white transition-all duration-500 hover:shadow-2xl md:h-[500px] 3xl:h-[570px]"
                style={{
                  background: "linear-gradient(180deg, #F5B2B4 0%, #F9F7F9 75%)",
                  boxShadow: "0px 4px 18px rgba(81, 21, 21, 0.1), inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                }}
              >
                <div
                  className="flex h-[90%] w-[92%] items-center justify-center rounded-2xl border-2 border-white bg-white"
                  style={{
                    boxShadow: "inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                    backdropFilter: "blur(3.9px)",
                  }}
                >
                  {/* Case image */}
                  <Image
                    src={cases[activeCase].image}
                    alt={cases[activeCase].title}
                    width={489}
                    height={339}
                    className="h-auto w-[79%] object-contain transition-opacity duration-500"
                    style={{ opacity: 1 }}
                  />
                </div>

                {/* Left arrow */}
                <button
                  onClick={() => setActiveCase((prev) => (prev - 1 + cases.length) % cases.length)}
                  className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#BF1920]/20 bg-white/80 shadow-lg transition-all duration-300 hover:bg-[#BF1920] hover:text-white hover:shadow-xl md:left-4 md:h-12 md:w-12 3xl:left-6 3xl:h-14 3xl:w-14"
                  style={{ zIndex: 10 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 1L4 8L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Right arrow */}
                <button
                  onClick={() => setActiveCase((prev) => (prev + 1) % cases.length)}
                  className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#BF1920]/20 bg-white/80 shadow-lg transition-all duration-300 hover:bg-[#BF1920] hover:text-white hover:shadow-xl md:right-4 md:h-12 md:w-12 3xl:right-6 3xl:h-14 3xl:w-14"
                  style={{ zIndex: 10 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 1L12 8L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Case number */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-[#242222] md:bottom-6 md:left-6 md:text-base 3xl:bottom-8 3xl:left-8 3xl:text-lg">
                  <span>{String(activeCase + 1).padStart(2, "0")}</span>
                  <span>/</span>
                  <span>{String(cases.length).padStart(2, "0")}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side: Case content */}
          <div className="w-full lg:w-[550px] lg:flex-shrink-0 3xl:w-[660px]">
            <ScrollReveal delay={300}>
              <div
                className="relative h-[400px] w-full overflow-hidden rounded-2xl border-2 border-white md:h-[500px] 3xl:h-[570px]"
                style={{
                  background: "linear-gradient(180deg, #F9F7F9 0%, #F9F7F9 75%)",
                  boxShadow: "0px 4px 18px rgba(81, 21, 21, 0.1), inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                }}
              >
                <div
                  className="flex h-[90%] w-[92%] flex-col justify-center rounded-2xl border-2 border-white bg-white p-6 md:p-8 3xl:p-10"
                  style={{
                    boxShadow: "inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                    backdropFilter: "blur(3.9px)",
                  }}
                >
                  {/* Case title */}
                  <h3 className="mb-4 text-2xl font-bold leading-[130%] text-[#242222] md:mb-6 md:text-3xl 3xl:mb-8 3xl:text-4xl">
                    {cases[activeCase].title}
                  </h3>

                  {/* Red bar */}
                  <div className="mb-6 h-1 w-20 bg-[#BF1920] md:mb-8 md:w-24 3xl:mb-10 3xl:w-32" />

                  {/* Case description */}
                  <p className="text-sm leading-[200%] text-[#242222]/80 md:text-base 3xl:text-lg">
                    {cases[activeCase].description}
                  </p>

                  {/* Case list */}
                  <div className="mt-8 flex flex-col gap-4 md:mt-10 md:gap-5 3xl:mt-12 3xl:gap-6">
                    {cases.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveCase(index)}
                        className={`flex items-center gap-3 py-2 transition-all duration-300 ${index === activeCase ? 'text-[#BF1920]' : 'text-[#242222]/60 hover:text-[#242222]'}`}
                      >
                        <div className={`h-2 w-2 rounded-full ${index === activeCase ? 'bg-[#BF1920]' : 'bg-[#242222]/30'}`} />
                        <span className="text-sm md:text-base 3xl:text-lg">{item.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
