"use client"

import Image from "next/image"
import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const caseCards = [
  { title: "某大型央企全栈式自主可控超大型数字化系统建设", description: "持续服务客户超xxx年，实现SOA、微服务架构同等替代国外中间件产品，实现了xxx个集群节点和xxx个微服务实例的规模化部署，支撑了客户包括调度等核心业务系统的稳定高效运行。", image: "/images/as_img2.png" },
  { title: "金融行业应用服务器信创迁移项目", description: "在某大型国有银行实现了对国外产品高标准替代，在服务器等硬件环境规格降低的情况下实现了应用系统性能与替换前持平。在某全国领先的商业银行支撑信贷风控等关键业务系统稳定运行，并与中创PaaS平台一起为用户提供了全栈式的云原生开发交付和运行支撑平台，帮助用户大幅提升需求变更上线速度，助力高效业务创新。", image: "/images/as_img3.png" },
  { title: "党政领域应用服务器信创迁移项目", description: "在全国xxx个部委及xxx个省份广泛应用，与国产主流芯片、操作系统、数据库及云平台深度适配，为业务系统提供了安全、可靠、稳定的运行环境，并帮助用户实现了灵活的部署、集中式的运维、完善的性能监控及故障诊断等全生命周期管理支撑。", image: "/images/as_img4.png" },
  { title: "交通行业数字化转型项目", description: "为某省级交通运输管理部门提供全栈式中间件支撑，实现高速公路收费、监控、应急调度等核心业务系统的国产化替代，支撑日均xxx级交易数据的高效处理与稳定运行。", image: "/images/as_img2.png" },
  { title: "能源行业智能运维管理平台", description: "为某大型能源集团构建统一的中间件运维管理平台，实现对全国范围内xxx套业务系统的集中监控、智能告警和自动化运维，大幅降低运维成本，提升系统可用性至xxx%。", image: "/images/as_img3.png" },
  { title: "医疗健康信息化建设项目", description: "在某省级卫生健康委员会的全民健康信息平台建设中，提供高可靠性的消息中间件和应用服务器支撑，实现全省医疗数据的互联互通，日均处理健康数据超xxx条，保障医疗业务系统7×24小时不间断运行。", image: "/images/as_img4.png" },
]

export function CasesCarousel() {
  const [caseOffset, setCaseOffset] = useState(0)
  const visibleCases = 3
  const maxCaseOffset = caseCards.length - visibleCases
  const scrollCasePrev = () => setCaseOffset((prev) => Math.max(prev - 1, 0))
  const scrollCaseNext = () => setCaseOffset((prev) => Math.min(prev + 1, maxCaseOffset))

  return (
    <section className="relative bg-white py-12 md:py-16 3xl:py-24" style={{ overflowX: "clip" }}>
      <div className="pointer-events-none absolute left-[3%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[4%] top-[12%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.2s infinite" }} />
      <div className="pointer-events-none absolute left-[6%] bottom-[22%] h-[7px] w-[7px] rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 2.5s infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 10s ease-in-out 0.3s infinite" }} />
      <div className="pointer-events-none absolute left-[8%] top-[8%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 13s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[5%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.05] blur-[55px]" style={{ animation: "orb-drift 16s ease-in-out 2s infinite" }} />

      <div className="relative z-10 mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#242222] md:mb-12 md:text-3xl 3xl:mb-16 3xl:text-[40px]">典型案例</h2>
        </ScrollReveal>

        {/* Desktop */}
        <div className="relative mx-auto hidden max-w-[1020px] 3xl:max-w-[1380px] lg:block">
          <button type="button" onClick={scrollCasePrev} className="absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95" style={{ left: "-56px", width: "40px", height: "40px", boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.1)", opacity: caseOffset === 0 ? 0.3 : 1, pointerEvents: caseOffset === 0 ? "none" : "auto" }} aria-label="上一个案例">
            <svg width="18" height="6" viewBox="0 0 18 6" fill="none"><path d="M5.5 0.5L1 3L5.5 5.5" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M1 3H18" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
          <button type="button" onClick={scrollCaseNext} className="absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95" style={{ right: "-56px", width: "40px", height: "40px", boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.1)", opacity: caseOffset >= maxCaseOffset ? 0.3 : 1, pointerEvents: caseOffset >= maxCaseOffset ? "none" : "auto" }} aria-label="下一个案例">
            <svg width="18" height="6" viewBox="0 0 18 6" fill="none"><path d="M12.5 0.5L17 3L12.5 5.5" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 3H0" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>

          <div className="flex gap-[45px] py-4" style={{ transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)", transform: `translateX(calc(-${caseOffset} * (calc((100% - 90px) / 3 + 45px))))` }}>
            {caseCards.map((card, idx) => {
              const isVisible = idx >= caseOffset && idx < caseOffset + visibleCases
              return (
                <div key={idx} className="flex-shrink-0 transition-opacity duration-500" style={{ width: "calc((100% - 90px) / 3)", opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? "auto" : "none" }}>
                  <div className="group relative h-[380px] w-full cursor-pointer overflow-hidden rounded-xl shadow-[0px_0px_20px_rgba(40,38,38,0.09)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-[0px_12px_40px_rgba(191,25,32,0.3)] 3xl:h-[500px]">
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-white" />
                    <div className="pointer-events-none absolute inset-0 h-full w-full opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                      <Image src={card.image || "/placeholder.svg"} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-white/90 transition-all duration-500 group-hover:bg-[rgba(191,25,32,0.82)] group-hover:backdrop-blur-[10px]" />
                    <div className="absolute bottom-6 right-6 opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-105">
                      <Image src="/images/subtract-icon.png" alt="" width={217} height={200} className="h-[180px] w-[195px] object-contain 3xl:h-[200px] 3xl:w-[217px]" />
                    </div>
                    <div className="relative z-10 p-5 3xl:p-7">
                      <h3 className="text-lg font-medium leading-[1.5] text-[#242222] transition-colors duration-500 group-hover:text-white 3xl:text-[22px] 3xl:leading-[34px]">{card.title}</h3>
                      <p className="mt-3 text-sm leading-[1.7] text-[#242222]/80 transition-colors duration-500 group-hover:text-white/95 3xl:mt-5 3xl:text-[16px] 3xl:leading-[28px]">{card.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white/60 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {caseCards.map((card, idx) => (
              <div key={idx} className="w-[280px] flex-shrink-0 snap-start">
                <div className="group relative h-[380px] w-full cursor-pointer overflow-hidden rounded-xl shadow-[0px_0px_20px_rgba(40,38,38,0.09)]">
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white" />
                  <div className="pointer-events-none absolute inset-0 h-full w-full opacity-60"><Image src={card.image || "/placeholder.svg"} alt="" fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover" /></div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white/90" />
                  <div className="absolute bottom-6 right-6 opacity-60"><Image src="/images/subtract-icon.png" alt="" width={217} height={200} className="h-[180px] w-[195px] object-contain" /></div>
                  <div className="relative z-10 p-5">
                    <h3 className="text-lg font-medium leading-[1.5] text-[#242222]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-[1.7] text-[#242222]/80">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-6">
            <button type="button" onClick={scrollCasePrev} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg active:scale-90" style={{ boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.08)" }} aria-label="上一个案例">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7L7 13" stroke="#BF1920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" onClick={scrollCaseNext} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg active:scale-90" style={{ boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.08)" }} aria-label="下一个案例">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1L7 7L1 13" stroke="#BF1920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
