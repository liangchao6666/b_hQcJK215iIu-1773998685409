"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

export function LoadBalancerHeroSection() {
  const navItems = useMemo(() => getNavItems("/products"), [])

  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Banner image */}
      <img
        src="/images/banners/middleware-banner.png"
        alt="中创负载均衡软件"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} variant="overlay" isDarkBg={false} />

      {/* Main title and subtitle text content */}
      {/* 原稿画布 1440×554，left:313px≈21.7% */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '21.7%' }}>
        {/* Title: 原稿 45px / 1440px ≈ 3.125vw，但容器仅 300-554px 高，用较小 vw */}
        <h1
          className="font-sans font-bold text-[#332C2B]"
          style={{ fontSize: 'clamp(14px, 2vw, 28px)', lineHeight: '1.3' }}
        >
          中创负载均衡软件
        </h1>

        {/* Red accent line */}
        <div
          className="bg-[#BF1920]"
          style={{ width: 'clamp(40px, 4vw, 60px)', height: '3px', marginTop: 'clamp(8px, 1.2vw, 18px)' }}
        />

        {/* Subtitle 1 */}
        <p
          className="font-sans font-normal text-[#332C2B]"
          style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: '1.5', opacity: 0.8, marginTop: 'clamp(6px, 0.8vw, 12px)' }}
        >
          高性能、高可用的负载均衡解决方案
        </p>

        {/* Subtitle 2 */}
        <p
          className="font-sans font-normal text-[#332C2B]"
          style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: '1.5', opacity: 0.8, marginTop: 'clamp(4px, 0.6vw, 8px)' }}
        >
          为企业应用提供可靠的流量分发服务
        </p>
      </div>

      {/* Free trial and video buttons */}
      <div className="absolute bottom-10 z-20 flex flex-row items-center gap-3 lg:bottom-14 3xl:bottom-20 3xl:gap-4" style={{ left: '21.7%' }}>
        <Link
          href="/trial"
          className="group inline-flex items-center justify-center rounded bg-[#BF1920] px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#a8151b] hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 md:text-base 3xl:px-8 3xl:py-3 3xl:text-lg"
        >
          免费试用
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 1L7 7.5L1 14" stroke="white" strokeWidth="2" />
          </svg>
        </Link>
        <Link
          href="/video"
          className="group inline-flex items-center justify-center rounded border-2 border-[#BF1920] bg-transparent px-6 py-2.5 text-sm font-medium text-[#BF1920] shadow-lg transition-all duration-300 hover:bg-[#BF1920] hover:text-white hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 md:text-base 3xl:px-8 3xl:py-3 3xl:text-lg"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2 transition-colors duration-300">
            <path d="M3 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V12C15 12.5304 14.7893 13.0391 14.4142 13.4142C14.0391 13.7893 13.5304 14 13 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M10.5 8L6 5.5V10.5L10.5 8Z" fill="currentColor" />
          </svg>
          查看视频
        </Link>
      </div>
    </div>
  )
}
