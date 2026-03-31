"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { cases } from "@/lib/cases-data"

/* ── Case Card Component ─────────────────────────────────────── */
function CaseCard({ caseItem, index }: { caseItem: (typeof cases)[0]; index: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <Link href={`/cases/${caseItem.slug}`} className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-foreground/[0.06]">
        {/* Fixed-height photo area */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
          <img
            src={caseItem.photo}
            alt={caseItem.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          {/* Default gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

          {/* Hover overlay with description - hidden */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 opacity-0 transition-opacity duration-500 hidden 3xl:p-6">
            <p className="text-sm leading-relaxed text-white/90 3xl:text-base">{caseItem.desc}</p>
          </div>

          {/* Tag badge */}
          <div className="absolute left-4 top-4 z-10 3xl:left-5 3xl:top-5">
            <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 shadow-sm backdrop-blur-sm 3xl:px-4 3xl:py-1.5 3xl:text-xs">
              {caseItem.tag}
            </span>
          </div>

          {/* Metric badge - bottom right, hidden on hover */}
          <div className="absolute bottom-4 right-4 z-10 transition-opacity duration-500 group-hover:opacity-0 3xl:bottom-5 3xl:right-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm 3xl:px-4 3xl:py-1.5 3xl:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#BF1920]" />
              {caseItem.metrics}
            </span>
          </div>
        </div>

        {/* Bottom content area - fixed height, no expansion */}
        <div className="relative px-5 py-4 3xl:px-6 3xl:py-5">
          {/* Red accent line on hover */}
          <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#BF1920] transition-all duration-500 group-hover:w-full" />

          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-foreground transition-colors duration-300 group-hover:text-[#BF1920] md:text-sm 3xl:text-base">
              {caseItem.title}
            </h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="flex-shrink-0 text-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#BF1920]"
            >
              <path
                d="M4 10H16M16 10L11 5M16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

/* ── Main Section ─────────────────────────────────────────────── */
export function CasesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-10 text-center lg:mb-14 3xl:mb-16">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-[32px] 3xl:text-[40px]">
              成功案例
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-primary animate-line-sweep 3xl:w-16" />
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:mt-4 md:text-base 3xl:text-lg">
              前沿技术与品质服务，助力企业数智化转型
            </p>
          </div>
        </ScrollReveal>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 3xl:gap-6">
          {cases.slice(0, 6).map((caseItem, index) => (
            <CaseCard key={caseItem.title} caseItem={caseItem} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={500}>
          <div className="mt-10 flex justify-center lg:mt-14 3xl:mt-16">
            <Link
              href="/cases"
              className="group inline-flex items-center justify-center rounded-full bg-[#BF1920] px-8 py-3 text-base font-medium text-white shadow-[0_4px_16px_rgba(191,25,32,0.25)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(191,25,32,0.35)] hover:scale-105 active:scale-95 3xl:px-10 3xl:py-3.5 3xl:text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                查看全部案例
                <svg
                  width="19"
                  height="6"
                  viewBox="0 0 19 6"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M0 3H17M17 3L14 0.5M17 3L14 5.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
