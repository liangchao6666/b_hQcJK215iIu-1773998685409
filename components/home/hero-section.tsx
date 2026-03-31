"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

// 完全移除 ParticleField 以排除它作为内存泄漏源
function ParticleField() {
  return null
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let frameId: number | null = null
    const handleScroll = () => {
      if (frameId !== null) return
      frameId = requestAnimationFrame(() => {
        try {
          const total = document.documentElement.scrollHeight - window.innerHeight
          if (total > 0) setProgress((window.scrollY / total) * 100)
        } catch (error) {
          // Silently ignore scroll calculation errors
        }
        frameId = null
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [])
  return (
    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full">
      <div className="h-full bg-gradient-to-r from-[#BF1920] via-[#e64950] to-[#BF1920] transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  )
}

const bannerSlides = [
  {
    type: "video" as const,
    src: "/images/banner/banner-1.mp4",
    fallback: "/images/banner/banner-3.png",
    alt: "全球AI布局",
  },
  {
    type: "image" as const,
    src: "/images/banner/banner-2.png",
    fallback: "",
    alt: "中创智能体中间件",
  },
  {
    type: "image" as const,
    src: "/images/banner/banner-1.png",
    fallback: "",
    alt: "中创API网关软件",
  },
  {
    type: "image" as const,
    src: "/images/banner/banner-4.png",
    fallback: "",
    alt: "数据安全云服务",
  },
]

const SLIDE_INTERVAL = 10000 // 10 seconds

const navItems = getNavItems("/")

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || bannerSlides.length <= 1) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [mounted])

  return (
    <>
      <ScrollProgress />
      <div className="relative flex h-[700px] w-full flex-col overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className="pointer-events-none absolute inset-0 transition-all duration-[1500ms] ease-in-out"
            style={{
              opacity: mounted && currentSlide === index ? 1 : 0,
              transform: mounted && currentSlide === index ? "scale(1)" : "scale(1.03)",
            }}
            suppressHydrationWarning
          >
            {slide.type === "video" ? (
              <>
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    try {
                      e.currentTarget.style.display = "none"
                      const fallbackEl = e.currentTarget.nextElementSibling as HTMLElement | null
                      if (fallbackEl) fallbackEl.style.display = "block"
                    } catch (error) {
                      // Silently fail on error handler failure
                    }
                  }}
                />
                {slide.fallback && (
                  <img
                    src={slide.fallback}
                    alt={slide.alt}
                    className="absolute inset-0 h-full w-full object-contain hidden"
                    onError={(e) => {
                      try {
                        e.currentTarget.style.display = "none"
                      } catch (error) {
                        // Silently fail on error handler failure
                      }
                    }}
                  />
                )}
              </>
            ) : (
              <img 
                src={slide.src} 
                alt={slide.alt} 
                className="absolute inset-0 h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                onError={(e) => {
                  try {
                    e.currentTarget.style.display = "none"
                  } catch (error) {
                    // Silently fail on error handler failure
                  }
                }}
              />
            )}
          </div>
        ))}
        <ParticleField />

        <Header variant="overlay" navItems={navItems} isDarkBg={false} />

        {/* Slide 1 text: 中创股份 */}
        <div
          className="absolute inset-0 z-10 flex items-center transition-all duration-[1500ms] ease-in-out"
          style={{
            opacity: currentSlide === 0 ? 1 : 0,
            transform: currentSlide === 0 ? "translateY(0)" : "translateY(20px)",
            pointerEvents: currentSlide === 0 ? "auto" : "none",
          }}
          suppressHydrationWarning
        >
          <div className="mx-auto w-full max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="max-w-3xl 3xl:max-w-[945px]">
              <h1
                suppressHydrationWarning
                className="text-[59px] sm:text-[71px] md:text-[83px] lg:text-[95px] xl:text-[107px] 2xl:text-[119px] 3xl:text-[131px]"
                style={{
                  fontFamily: "'YouSheBiaoTiHei', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "#000000",
                  letterSpacing: "0.1em",
                }}
              >
                中创股份
              </h1>
              <p
                suppressHydrationWarning
                className="mt-6 text-[29px] sm:mt-7 sm:text-[31px] md:mt-8 md:text-[33px] lg:text-[35px] xl:text-[37px] 2xl:text-[39px] 3xl:text-[41px]"
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "0.18em",
                  color: "#242222",
                }}
              >
                践行国家战略·共创数智未来
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 text: 中创智能体中间件 */}
        <div
          className="absolute inset-0 z-10 flex transition-all duration-[1500ms] ease-in-out"
          style={{
            opacity: currentSlide === 1 ? 1 : 0,
            transform: currentSlide === 1 ? "translateY(0)" : "translateY(20px)",
            pointerEvents: currentSlide === 1 ? "auto" : "none",
            alignItems: "center",
            paddingTop: "16px",
          }}
          suppressHydrationWarning
        >
          <div className="mx-auto w-full max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="max-w-[630px]">
              <h1
                suppressHydrationWarning
                className="text-[29px] text-black sm:text-[37px] md:text-[45px] lg:text-[53px] xl:text-[61px] 2xl:text-[71px] 3xl:text-[81px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, lineHeight: 1 }}
              >
                中创智能体中间件
              </h1>
              <p
                suppressHydrationWarning
                className="mt-[20px] text-[12px] text-black sm:mt-[28px] sm:text-[14px] md:mt-[32px] md:text-[16px] lg:mt-[40px] lg:text-[18px] xl:mt-[48px] xl:text-[20px] 2xl:mt-[54px] 2xl:text-[24px] 3xl:mt-[60px] 3xl:text-[28px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, lineHeight: 1 }}
              >
                面向企业流程智能体管理平台
              </p>
              <p
                suppressHydrationWarning
                className="mt-[8px] text-[10px] text-black/70 sm:mt-[10px] sm:text-[12px] md:mt-[12px] md:text-[14px] lg:mt-[14px] lg:text-[16px] xl:mt-[16px] xl:text-[18px] 2xl:mt-[18px] 2xl:text-[20px] 3xl:mt-[20px] 3xl:text-[22px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400, lineHeight: 1 }}
              >
                {`为企业提供快速、安全、敏捷的AI应用部署能力`}
              </p>
              {/* 三色圆点 + 虚线 */}
              <div className="mt-[12px] flex items-center gap-[8px] sm:mt-[16px] sm:gap-[10px] md:mt-[20px] md:gap-[12px] lg:mt-[24px] lg:gap-[14px] xl:mt-[28px] xl:gap-[16px] 3xl:mt-[32px]">
                <div className="flex gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px]">
                  <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#BF1920] sm:h-[12px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[16px] lg:w-[16px]" />
                  <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#397BEC] sm:h-[12px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[16px] lg:w-[16px]" />
                  <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#EBC805] sm:h-[12px] sm:w-[12px] md:h-[14px] md:w-[14px] lg:h-[16px] lg:w-[16px]" />
                </div>
                <div className="w-[200px] border-t border-dashed border-black/10 sm:w-[280px] md:w-[360px] lg:w-[440px] xl:w-[528px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 text: 中创API网关软件 */}
        <div
          className="absolute inset-0 z-10 flex items-center transition-all duration-[1500ms] ease-in-out"
          style={{
            opacity: currentSlide === 2 ? 1 : 0,
            transform: currentSlide === 2 ? "translateY(0)" : "translateY(20px)",
            pointerEvents: currentSlide === 2 ? "auto" : "none",
          }}
          suppressHydrationWarning
        >
          <div className="mx-auto w-full max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="max-w-[708px]">
              <h1
                suppressHydrationWarning
                className="text-[29px] text-black sm:text-[37px] md:text-[45px] lg:text-[53px] xl:text-[61px] 2xl:text-[71px] 3xl:text-[81px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, lineHeight: 1 }}
              >
                中创API网关软件
              </h1>
              <p
                suppressHydrationWarning
                className="mt-[20px] text-[12px] text-black/80 sm:mt-[28px] sm:text-[14px] md:mt-[36px] md:text-[16px] lg:mt-[44px] lg:text-[18px] xl:mt-[52px] xl:text-[20px] 2xl:mt-[58px] 2xl:text-[24px] 3xl:mt-[65px] 3xl:text-[28px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, lineHeight: 1 }}
              >
                {`一站式流量管控与AI赋能，让智能更简单`}
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4 text: 中间件产品 */}
        <div
          className="absolute inset-0 z-10 flex items-center transition-all duration-[1500ms] ease-in-out"
          style={{
            opacity: currentSlide === 3 ? 1 : 0,
            transform: currentSlide === 3 ? "translateY(0)" : "translateY(20px)",
            pointerEvents: currentSlide === 3 ? "auto" : "none",
          }}
          suppressHydrationWarning
        >
          <div className="mx-auto w-full max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="max-w-3xl 3xl:max-w-[945px]">
              <p
                suppressHydrationWarning
                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] 3xl:text-[26px]"
                style={{
                  fontFamily: "var(--font-noto-sans-sc), 'Noto Sans SC', sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  color: "#242222",
                }}
              >
                高可靠·高性能·高可用·高安全
              </p>
              <p
                suppressHydrationWarning
                className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] 3xl:text-[26px]"
                style={{
                  fontFamily: "var(--font-noto-sans-sc), 'Noto Sans SC', sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  color: "#242222",
                }}
              >
                中间件产品体系支撑
              </p>
              <h1
                suppressHydrationWarning
                className="mt-8 text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[44px] 3xl:text-[50px]"
                style={{
                  fontFamily: "var(--font-noto-sans-sc), 'Noto Sans SC', sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  color: "#000000",
                }}
              >
                打造新一代信息技术的关键基础设施
              </h1>
            </div>
          </div>
        </div>

        {bannerSlides.length > 1 && (
          <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-[#BF1920]" : "w-2 bg-foreground/30 hover:bg-foreground/50"}`}
                aria-label={`切换到第 ${index + 1} 张幻灯片`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
