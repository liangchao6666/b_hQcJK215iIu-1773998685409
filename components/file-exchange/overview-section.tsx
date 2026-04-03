"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function OverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 md:py-16 lg:px-0 lg:py-[80px] lg:pt-[80px] 3xl:py-[120px] 3xl:pt-[121px]">
      {/* Background Wave */}
      <div className="pointer-events-none absolute inset-0 h-full w-full opacity-50">
        <Image
          src="/images/section-bg-wave.png"
          alt=""
          fill
          className="object-cover"
          style={{ mixBlendMode: "soft-light" }}
          loading="eager"
        />
      </div>
      {/* Dynamic background decorations */}
      <div className="pointer-events-none absolute left-[3%] top-[12%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 7s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[5%] top-[22%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 9s ease-in-out 1.5s infinite" }} />
      <div className="pointer-events-none absolute left-[10%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 8s ease-in-out 0.8s infinite" }} />
      <div className="pointer-events-none absolute right-[12%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 6s ease-in-out 2s infinite" }} />
      <div className="pointer-events-none absolute right-[30%] top-[8%] h-[200px] w-[200px] rounded-full bg-[#BF1920]/[0.06] blur-[60px]" style={{ animation: "orb-drift 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute left-[20%] bottom-[5%] h-[160px] w-[160px] rounded-full bg-[#BF1920]/[0.05] blur-[50px]" style={{ animation: "orb-drift 15s ease-in-out 3s infinite" }} />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 3xl:max-w-[1340px]">
        <ScrollReveal>
          <h2 className="mb-8 text-center text-2xl font-bold leading-[100%] text-[#242222] md:mb-[50px] md:text-3xl 3xl:mb-[70px] 3xl:text-[40px]">
            产品概述
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          <ScrollReveal delay={100}>
            <div className="w-full lg:w-[440px] lg:flex-shrink-0 lg:pt-[40px] 3xl:w-[592px] 3xl:pt-[61px]">
              <p className="text-sm leading-[200%] text-[#242222] md:text-base lg:text-[16px] lg:leading-[200%] 3xl:text-[22px]">
                中创业务信息和电子文件交换系统是一款企业级文件交换解决方案，为企业提供安全、高效的文件交换和信息共享能力。产品支持大文件传输、安全加密、权限控制、审计追踪等功能，能够满足企业内部和外部的文件交换需求，确保文件传输的安全性和可靠性。
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden lg:block lg:w-[50px] lg:flex-shrink-0 3xl:w-[74px]" />

          <ScrollReveal delay={300}>
            <div className="w-full lg:w-[500px] lg:flex-shrink-0 3xl:w-[674px]">
              <div
                className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  width: "100%",
                  aspectRatio: "674.1 / 428",
                  background: "linear-gradient(180deg, #F5B2B4 0%, #F9F7F9 75%)",
                  boxShadow: "0px 4px 18px rgba(81, 21, 21, 0.1), inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-2xl border-2 border-white bg-white"
                  style={{
                    width: "92%",
                    height: "87.5%",
                    boxShadow: "inset 0px 2px 3px rgba(87, 13, 13, 0.31)",
                    backdropFilter: "blur(3.9px)",
                  }}
                >
                  <Image
                    src="/images/inforsuite-architecture.png"
                    alt="业务信息和电子文件交换系统架构图"
                    width={489}
                    height={339}
                    className="h-auto w-[79%] object-contain"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
