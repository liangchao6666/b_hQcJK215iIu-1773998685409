"use client"

import { useMemo } from "react"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

export function ProductsHeroSection() {
  const navItems = useMemo(() => getNavItems("/about/introduction"), [])
  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Background image */}
      <img
        src="/images/products-banner.jpg"
        alt="中国创造 软件中坚"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} variant="overlay" isDarkBg={false} />

      {/* Main title and subtitle text content */}
      {/* 左对齐布局，与应用服务器保持一致 */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '21.7%' }}>
        {/* Main title */}
        <h1
          className="font-sans font-bold text-[#332C2B]"
          style={{ fontSize: 'clamp(14px, 2vw, 28px)', lineHeight: '1.3' }}
        >
          中国创造 &nbsp; 软件中坚
        </h1>

        {/* Red accent line */}
        <div
          className="bg-[#BF1920]"
          style={{ width: 'clamp(40px, 4vw, 60px)', height: '3px', marginTop: 'clamp(8px, 1.2vw, 18px)' }}
        />

        {/* Subtitle */}
        <p
          className="font-sans font-normal text-[#332C2B]"
          style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: '1.5', opacity: 0.8, marginTop: 'clamp(6px, 0.8vw, 12px)' }}
        >
          国有自主知识产权 · 国产信息安全技术领先者
        </p>
      </div>
    </div>
  )
}
