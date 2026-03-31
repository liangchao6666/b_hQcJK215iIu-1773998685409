'use client'

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import type { CaseItem } from "@/lib/cases-data"

interface OtherCasesProps {
  cases: CaseItem[]
  currentSlug: string
}

export function OtherCases({ cases, currentSlug }: OtherCasesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const otherCases = cases.filter((c) => c.slug !== currentSlug)

  if (otherCases.length === 0) {
    return null
  }

  return (
    <section>
      <div className="mb-4 flex items-center gap-2 3xl:mb-6">
        <div className="h-1 w-1.5 rounded-full bg-[#BF1920]" />
        <h2 className="text-xl font-bold text-foreground md:text-2xl lg:text-3xl 3xl:text-4xl">
          其他案例
        </h2>
      </div>

      <div className="relative mt-6 3xl:mt-8">
        {/* Scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar 3xl:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          } as React.CSSProperties}
        >
          {otherCases.map((relatedCase) => (
            <Link
              key={relatedCase.slug}
              href={`/cases/${relatedCase.slug}`}
              className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:shadow-lg w-[300px] md:w-[350px] lg:w-[380px] 3xl:w-[420px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={relatedCase.photo}
                  alt={relatedCase.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute left-3 top-3 inline-block rounded-full bg-white/90 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur-sm 3xl:text-xs">
                  {relatedCase.tag}
                </span>
              </div>
              <div className="p-4 3xl:p-5">
                <h4 className="text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-[#BF1920] 3xl:text-base">
                  {relatedCase.title}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2 3xl:text-sm">
                  {relatedCase.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll buttons */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#BF1920] text-white shadow-lg transition-all hover:shadow-xl active:scale-95 3xl:h-12 3xl:w-12 3xl:-translate-x-6"
          aria-label="向左滚动"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="3xl:h-6 3xl:w-6">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#BF1920] text-white shadow-lg transition-all hover:shadow-xl active:scale-95 3xl:h-12 3xl:w-12 3xl:translate-x-6"
          aria-label="向右滚动"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="3xl:h-6 3xl:w-6">
            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  )
}
