import Link from "next/link"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

const navItems = getNavItems("/support/online")

export function OnlineServiceHeroSection() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Background image */}
      <img
        src="/images/online-services-banner.png"
        alt="在线客服支持"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Header navItems={navItems} variant="overlay" isDarkBg={false} />

      {/* Main title and subtitle text content */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '21.7%' }}>
        {/* Title */}
        <h1
          className="font-sans font-bold text-[#332C2B]"
          style={{ fontSize: 'clamp(14px, 2vw, 28px)', lineHeight: '1.3' }}
        >
          在线服务
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
          您可将遇到的问题填写之后，我们会尽快安排专业人员进行回复
        </p>
      </div>

      {/* Buttons only */}
      <div className="absolute bottom-10 z-20 flex flex-row items-center gap-3 lg:bottom-14 3xl:bottom-20 3xl:gap-4" style={{ left: '21.7%' }}>
        <Link
          href="/support/online#contact"
          className="group inline-flex items-center justify-center rounded bg-[#BF1920] px-4 py-2 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#a8151b] hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 sm:px-6 sm:py-2.5 sm:text-sm md:text-base 3xl:px-8 3xl:py-3"
        >
          立即咨询
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 1L7 7.5L1 14" stroke="white" strokeWidth="2" />
          </svg>
        </Link>
        <Link
          href="tel:400-618-6180"
          className="group inline-flex items-center justify-center rounded border-2 border-[#BF1920] bg-transparent px-4 py-2 text-xs font-medium text-[#BF1920] shadow-lg transition-all duration-300 hover:bg-[#BF1920] hover:text-white hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 sm:px-6 sm:py-2.5 sm:text-sm md:text-base 3xl:px-8 3xl:py-3"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mr-2 transition-colors duration-300">
            <path d="M14.5 10.5V13.5C14.5 13.8978 14.342 14.2794 14.0607 14.5607C13.7794 14.842 13.3978 15 13 15C11.3587 14.9998 9.77664 14.3626 8.63886 13.2248C7.50108 12.087 6.86384 10.5049 6.86384 8.8636C6.86384 7.22233 7.50108 5.64026 8.63886 4.50247C9.77664 3.36469 11.3587 2.72745 13 2.72727C13.3978 2.72727 13.7794 2.88531 14.0607 3.16665C14.342 3.44799 14.5 3.82957 14.5 4.22727V7.22727" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.36 6.09091C10.7256 5.73545 11.0251 5.30909 11.2395 4.84545M11.9636 8.54545C12.3929 7.90909 12.6824 7.15909 12.7927 6.36364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">400-618-6180</span>
        </Link>
      </div>
    </div>
  )
}
