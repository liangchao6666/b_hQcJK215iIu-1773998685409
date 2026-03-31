"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { paasCases } from "@/lib/paas-cases-data"

export function PaaSCasesSection() {
  const [caseOffset, setCaseOffset] = useState(0)
  const visibleCases = 4
  const maxCaseOffset = Math.max(0, paasCases.length - visibleCases)
  const scrollCasePrev = () => setCaseOffset((prev) => Math.max(prev - 1, 0))
  const scrollCaseNext = () => setCaseOffset((prev) => Math.min(prev + 1, maxCaseOffset))

  return (
    <section className="relative bg-white py-12 md:py-16 3xl:py-24" style={{ overflowX: "clip" }}>
      {/* Dynamic background decorations */}
      <div className="pointer-events-none absolute left-[3%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[4%] top-[12%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.2s infinite" }} />
      <div className="pointer-events-none absolute left-[6%] bottom-[22%] h-[7px] w-[7px] rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 8s ease-in-out 2.5s infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 10s ease-in-out 0.3s infinite" }} />
      <div className="pointer-events-none absolute left-[8%] top-[8%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 13s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[10%] bottom-[5%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.05] blur-[55px]" style={{ animation: "orb-drift 16s ease-in-out 2s infinite" }} />

      <div className="relative z-10 mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#242222] md:mb-12 md:text-3xl 3xl:mb-16 3xl:text-[40px]">
            典型案例
          </h2>
        </ScrollReveal>

        {/* Desktop: transform-based carousel */}
        <div className="relative mx-auto hidden max-w-[1340px] lg:block 3xl:max-w-[1800px]">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={scrollCasePrev}
            className="absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
            style={{ left: "-56px", width: "40px", height: "40px", boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.1)", opacity: caseOffset === 0 ? 0.3 : 1, pointerEvents: caseOffset === 0 ? "none" : "auto" }}
            aria-label="上一个案例"
          >
            <svg width="18" height="6" viewBox="0 0 18 6" fill="none">
              <path d="M5.5 0.5L1 3L5.5 5.5" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 3H18" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={scrollCaseNext}
            className="absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
            style={{ right: "-56px", width: "40px", height: "40px", boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.1)", opacity: caseOffset >= maxCaseOffset ? 0.3 : 1, pointerEvents: caseOffset >= maxCaseOffset ? "none" : "auto" }}
            aria-label="下一个案例"
          >
            <svg width="18" height="6" viewBox="0 0 18 6" fill="none">
              <path d="M12.5 0.5L17 3L12.5 5.5" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 3H0" stroke="#BF1920" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Cards track */}
          <div className="flex gap-6 py-4" style={{ transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)", transform: `translateX(calc(-${caseOffset} * (calc(25% + 24px))))` }}>
            {paasCases.map((card, idx) => {
              const isVisible = idx >= caseOffset && idx < caseOffset + visibleCases
              return (
                <div key={card.slug} className="flex-shrink-0 transition-opacity duration-500" style={{ width: "calc(25% - 18px)", opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? "auto" : "none" }}>
                  <Link href={`/cases/${card.slug}`} className="group relative block h-[380px] w-full cursor-pointer overflow-hidden rounded-xl shadow-[0px_0px_20px_rgba(40,38,38,0.09)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-[0px_12px_40px_rgba(191,25,32,0.3)] 3xl:h-[500px]">
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-white" />
                    <div className="pointer-events-none absolute inset-0 h-full w-full opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                      <Image src={card.photo} alt={card.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-white/90 transition-all duration-500 group-hover:bg-[rgba(191,25,32,0.82)] group-hover:backdrop-blur-[10px]" />
                    <div className="absolute bottom-6 right-6 opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80">
                      <Image src="/images/subtract-icon.png" alt="" width={217} height={200} className="h-[180px] w-[195px] object-contain 3xl:h-[200px] 3xl:w-[217px]" />
                    </div>
                    <div className="relative z-10 p-5 3xl:p-7">
                      <span className="mb-2 inline-block rounded-full bg-[#BF1920]/10 px-3 py-1 text-xs font-semibold text-[#BF1920] transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white">
                        {card.tag}
                      </span>
                      <h3 className="mt-2 text-lg font-medium leading-[1.5] text-[#242222] transition-colors duration-500 group-hover:text-white 3xl:text-[22px] 3xl:leading-[34px]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.7] text-[#242222]/80 transition-colors duration-500 group-hover:text-white/95 3xl:mt-5 3xl:text-[16px] 3xl:leading-[28px]">
                        {card.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#BF1920] transition-colors duration-500 group-hover:text-white/90">
                        <span>{card.metrics}</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white/60 transition-all duration-500 group-hover:w-full" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {paasCases.map((card) => (
              <div key={card.slug} className="w-[280px] flex-shrink-0 snap-start">
                <Link href={`/cases/${card.slug}`} className="group relative block h-[380px] w-full cursor-pointer overflow-hidden rounded-xl shadow-[0px_0px_20px_rgba(40,38,38,0.09)]">
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white" />
                  <div className="pointer-events-none absolute inset-0 h-full w-full opacity-60">
                    <Image src={card.photo} alt={card.title} fill sizes="(max-width: 640px) 100vw, 280px" className="object-cover" />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white/90" />
                  <div className="absolute bottom-6 right-6 opacity-60">
                    <Image src="/images/subtract-icon.png" alt="" width={217} height={200} className="h-[180px] w-[195px] object-contain" />
                  </div>
                  <div className="relative z-10 p-5">
                    <span className="mb-2 inline-block rounded-full bg-[#BF1920]/10 px-3 py-1 text-xs font-semibold text-[#BF1920]">
                      {card.tag}
                    </span>
                    <h3 className="mt-2 text-lg font-medium leading-[1.5] text-[#242222]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-[1.7] text-[#242222]/80">{card.desc}</p>
                    <p className="mt-3 text-xs font-semibold text-[#BF1920]">{card.metrics}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-6">
            <button type="button" onClick={scrollCasePrev} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg active:scale-90" style={{ boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.08)" }} aria-label="上一个案例">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 1L1 7L7 13" stroke="#BF1920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" onClick={scrollCaseNext} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white transition-all duration-300 hover:shadow-lg active:scale-90" style={{ boxShadow: "0px 4px 12px rgba(84, 30, 30, 0.08)" }} aria-label="下一个案例">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 1L7 7L1 13" stroke="#BF1920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
