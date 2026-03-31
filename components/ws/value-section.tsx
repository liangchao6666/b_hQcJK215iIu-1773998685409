"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"

const valueItems = [
  {
    title: "多重防护、网站安全加固",
    circleLine1: "多重防护",
    circleLine2: "安全加固",
    prevLine1: "深度适配",
    prevLine2: "国产支持",
    nextLine1: "7*24发布",
    nextLine2: "权验审计",
    description: "构建应用攻击实时防护、篡改实时阻断、木马病毒识别告警、网站内容发布实时审计的多重防护体系。",
    icon: "/images/ws/value-1.png",
  },
  {
    title: "7*24网站发布权验与审计",
    circleLine1: "7*24发布",
    circleLine2: "权验审计",
    prevLine1: "多重防护",
    prevLine2: "安全加固",
    nextLine1: "双机热备",
    nextLine2: "运行可靠",
    description: "实时校验和审计网站文件是否含有隐式篡改、恶意链接、木马病毒、确保网站文件正确无误。",
    icon: "/images/ws/value-2.png",
  },
  {
    title: "双机热备、运行可靠",
    circleLine1: "双机热备",
    circleLine2: "运行可靠",
    prevLine1: "7*24发布",
    prevLine2: "权验审计",
    nextLine1: "助力等保",
    nextLine2: "安全测评",
    description: "提供特有的双引擎篡改恢复技术，让防篡改7*24小时全时覆盖，全时防御。",
    icon: "/images/ws/value-3.png",
  },
  {
    title: "助力网络安全等级保护测评",
    circleLine1: "助力等保",
    circleLine2: "安全测评",
    prevLine1: "双机热备",
    prevLine2: "运行可靠",
    nextLine1: "深度适配",
    nextLine2: "国产支持",
    description: "实现信息系统的防攻击、防篡改，帮助用户信息系统等级保护建设检测工作的顺利通过。",
    icon: "/images/ws/value-4.png",
  },
  {
    title: "深度适配、国产支持",
    circleLine1: "深度适配",
    circleLine2: "国产支持",
    prevLine1: "助力等保",
    prevLine2: "安全测评",
    nextLine1: "多重防护",
    nextLine2: "安全加固",
    description: "经4000+用户、上万个复杂IT环境验证，支持国家信创环保、主流操作系统、数据库、Web及应用服务器。",
    icon: "/images/ws/value-5.png",
  },
]

const AUTO_PLAY_DURATION = 5000

export function WSValueSection() {
  const [valueIndex, setValueIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [fadePhase, setFadePhase] = useState<"visible" | "fadeOut" | "fadeIn">("visible")
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null)
  const startTimeRef = useRef<number>(0)
  const isPausedRef = useRef(false)

  const goToIndex = useCallback((index: number) => {
    if (fadePhase !== "visible" || index === valueIndex) return
    setFadePhase("fadeOut")
    setProgress(0)
    setTimeout(() => {
      setValueIndex(index)
      setDisplayIndex(index)
      setFadePhase("fadeIn")
      setTimeout(() => {
        setFadePhase("visible")
      }, 250)
    }, 250)
  }, [fadePhase, valueIndex])

  const goToNext = useCallback(() => {
    setFadePhase("fadeOut")
    setProgress(0)
    setTimeout(() => {
      setValueIndex((prev) => {
        const next = (prev + 1) % valueItems.length
        setDisplayIndex(next)
        return next
      })
      setFadePhase("fadeIn")
      setTimeout(() => {
        setFadePhase("visible")
      }, 250)
    }, 250)
  }, [])

  const isAnimating = fadePhase !== "visible"
  const showContent = fadePhase === "visible" || fadePhase === "fadeIn"

  useEffect(() => {
    if (isAnimating) return

    startTimeRef.current = performance.now()
    isPausedRef.current = false

    const animate = (now: number) => {
      if (isPausedRef.current) return
      const elapsed = now - startTimeRef.current
      const pct = Math.min(elapsed / AUTO_PLAY_DURATION, 1)
      setProgress(pct)

      if (pct < 1) {
        progressRef.current = requestAnimationFrame(animate)
      } else {
        goToNext()
      }
    }

    progressRef.current = requestAnimationFrame(animate)

    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current)
    }
  }, [valueIndex, isAnimating, goToNext])

  const currentValue = valueItems[displayIndex]

  return (
    <section className="relative bg-[#F6F5F6]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-40">
        <img src="/images/value-section-bg.png" alt="" className="block w-full" />
      </div>
      {/* Floating particles */}
      <div className="pointer-events-none absolute right-[4%] top-[10%] h-2.5 w-2.5 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 8s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute right-[16%] top-[6%] h-[7px] w-[7px] rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 6s ease-in-out 1s infinite" }} />
      <div className="pointer-events-none absolute right-[8%] bottom-[18%] h-2 w-2 rounded-full bg-[#BF1920]/10" style={{ animation: "particle-float 10s ease-in-out 2s infinite" }} />
      <div className="pointer-events-none absolute left-[42%] top-[4%] h-3 w-3 rounded-full bg-[#BF1920]/10 blur-[1px]" style={{ animation: "particle-float 9s ease-in-out 0.5s infinite" }} />
      {/* Soft glow orbs */}
      <div className="pointer-events-none absolute right-[3%] top-[25%] h-[180px] w-[180px] rounded-full bg-[#BF1920]/[0.06] blur-[50px]" style={{ animation: "orb-drift 14s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute left-[40%] bottom-[10%] h-[220px] w-[220px] rounded-full bg-[#BF1920]/[0.05] blur-[60px]" style={{ animation: "orb-drift 18s ease-in-out 4s infinite" }} />

      {/* Desktop layout */}
      <div className="relative z-10 hidden w-full lg:block" style={{ aspectRatio: "1920 / 945" }}>
        <h2
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-bold leading-[100%] text-[#242222]"
          style={{ top: "7.83%", fontSize: "clamp(26px,2.08vw,40px)" }}
        >
          产品特点
        </h2>

        {/* Left side: fixed-group.png with circle labels */}
        <div className="absolute" style={{ left: "-2%", top: "9.5%", width: "42%", maxWidth: "810px" }}>
          <Image src="/images/fixed-group.png" alt="" width={979} height={861} className="h-auto w-full object-contain" />

          {/* Top circle label (previous item) - only icon */}
          <div className="absolute flex items-center justify-center overflow-hidden" style={{ left: "51.58%", top: "6.5%", width: "10.21%", height: "12%" }}>
            <Image src={valueItems[(displayIndex - 1 + valueItems.length) % valueItems.length].icon} alt="" width={50} height={50} className="object-contain" style={{ width: "clamp(35px,3vw,60px)", height: "clamp(35px,3vw,60px)", aspectRatio: "1", transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1)", opacity: showContent ? 1 : 0 }} />
          </div>

          {/* Small icon inside large circle */}
          <div
            className="absolute"
            style={{
              left: "73.95%", top: "38.21%",
              transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Image src={currentValue.icon} alt={currentValue.title} width={115} height={105} className="object-contain" style={{ width: "clamp(45px,4.5vw,90px)", height: "clamp(45px,4.5vw,90px)", aspectRatio: "1" }} />
          </div>

          {/* Main circle label (current item) */}
          <div className="absolute overflow-hidden" style={{ left: "71.30%", top: "51%", width: "17.16%", height: "14%" }}>
            <p
              className="text-center font-bold leading-[150%] text-[#BF1920]"
              style={{
                fontSize: "clamp(13px,1.1vw,22px)",
                transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: "0.05s",
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(100%)",
              }}
            >
              {currentValue.circleLine1}<br />{currentValue.circleLine2}
            </p>
          </div>

          {/* Bottom circle label (next item) - only icon */}
          <div className="absolute flex items-center justify-center overflow-hidden" style={{ left: "51.58%", top: "80.5%", width: "10.21%", height: "12%" }}>
            <Image src={valueItems[(displayIndex + 1) % valueItems.length].icon} alt="" width={50} height={50} className="object-contain" style={{ width: "clamp(35px,3vw,60px)", height: "clamp(35px,3vw,60px)", aspectRatio: "1", transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1)", opacity: showContent ? 1 : 0 }} />
          </div>
        </div>

        {/* Large icon */}
        <div className="absolute" style={{ left: "50.73%", top: "25.93%" }}>
          <Image src={currentValue.icon} alt={currentValue.title} width={169} height={155} className="object-contain" style={{
            width: "clamp(90px,8.8vw,169px)", height: "clamp(90px,8.8vw,169px)", aspectRatio: "1",
            transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
            opacity: showContent ? 1 : 0,
            transform: showContent ? "translateY(0)" : "translateY(10px)",
          }} />
        </div>

        {/* Dynamic Title */}
        <div className="absolute overflow-hidden" style={{ left: "50.73%", top: "44.13%", width: "40%", height: "8%" }}>
          <h3
            className="whitespace-nowrap font-medium leading-[200%] text-[#242222]"
            style={{
              fontSize: "clamp(18px,1.46vw,28px)",
              transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(100%)",
            }}
          >
            {currentValue.title}
          </h3>
        </div>

        {/* Red bar */}
        <div className="absolute bg-[#BF1920]" style={{ left: "50.83%", top: "51.53%", width: "clamp(45px,3.49vw,67px)", height: "5px" }} />

        {/* Dynamic Description */}
        <div className="absolute overflow-hidden" style={{ left: "50.73%", top: "57.14%", width: "37.34%", height: "22%" }}>
          <p
            className="leading-[200%] text-[#242222]/80"
            style={{
              fontSize: "clamp(14px,1.15vw,22px)",
              transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
              transitionDelay: "0.08s",
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(100%)",
            }}
          >
            {currentValue.description}
          </p>
        </div>

        {/* Progress bar indicators - Desktop */}
        <div
          className="absolute flex items-center"
          style={{ left: "50.73%", top: "81%", width: "37.34%", gap: "clamp(6px, 0.5vw, 10px)" }}
        >
          {valueItems.map((item, i) => (
            <button
              key={i}
              type="button"
              className="group/bar relative flex flex-1 flex-col items-start"
              style={{ gap: "clamp(6px, 0.5vw, 10px)" }}
              onClick={() => goToIndex(i)}
              aria-label={`切换到: ${item.title}`}
            >
              {/* Progress track */}
              <div
                className="relative w-full overflow-hidden rounded-full"
                style={{ height: "clamp(3px, 0.26vw, 5px)" }}
              >
                {/* Background */}
                <div className="absolute inset-0 rounded-full bg-[#BF1920]/10 transition-colors duration-300 group-hover/bar:bg-[#BF1920]/20" />
                {/* Fill */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#BF1920]"
                  style={{
                    width: i === valueIndex
                      ? `${progress * 100}%`
                      : i < valueIndex
                        ? "100%"
                        : "0%",
                    transition: i === valueIndex ? "none" : "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </div>
              {/* Label */}
              <span
                className="whitespace-nowrap transition-colors duration-300"
                style={{
                  fontSize: "clamp(11px, 0.73vw, 14px)",
                  color: i === valueIndex ? "#BF1920" : "rgba(36, 34, 34, 0.45)",
                  fontWeight: i === valueIndex ? 600 : 400,
                }}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="relative z-10 px-4 py-12 lg:hidden">
        <h2 className="text-center text-3xl font-bold leading-[100%] text-[#242222]">产品特点</h2>

        {/* Circle indicators */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full border border-[#BF1920]/20 bg-white/60">
            <span
              className="text-center text-[10px] leading-[1.3] text-[#723636]"
              style={{
                transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                opacity: showContent ? 0.7 : 0,
                transform: showContent ? "translateY(0)" : "translateY(100%)",
              }}
            >{currentValue.prevLine1}<br />{currentValue.prevLine2}</span>
          </div>
          <div
            className="flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-full border-2 border-[#BF1920]/30 bg-white"
            style={{ boxShadow: "0 2px 12px rgba(191,25,32,0.12)" }}
          >
            <span
              className="text-center text-[11px] font-bold leading-[1.3] text-[#BF1920]"
              style={{
                transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(100%)",
              }}
            >{currentValue.circleLine1}<br />{currentValue.circleLine2}</span>
          </div>
          <div className="flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full border border-[#BF1920]/20 bg-white/60">
            <span
              className="text-center text-[10px] leading-[1.3] text-[#723636]"
              style={{
                transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                opacity: showContent ? 0.7 : 0,
                transform: showContent ? "translateY(0)" : "translateY(100%)",
              }}
            >{currentValue.nextLine1}<br />{currentValue.nextLine2}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <Image src={currentValue.icon} alt={currentValue.title} width={130} height={120} className="h-[100px] w-[110px] object-contain"
            style={{
              transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1)",
              opacity: showContent ? 1 : 0,
            }}
          />
          <div className="overflow-hidden">
            <h3
              className="mt-4 text-center text-[22px] font-medium leading-[1.8] text-[#242222]"
              style={{
                transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(100%)",
              }}
            >
              {currentValue.title}
            </h3>
          </div>
          <div className="mt-3 h-[4px] w-[50px] bg-[#BF1920]" />
          <div className="overflow-hidden">
            <p
              className="mt-6 max-w-[600px] text-center text-[15px] leading-[200%] text-[#242222]/80"
              style={{
                transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: "0.06s",
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(100%)",
              }}
            >
              {currentValue.description}
            </p>
          </div>

          {/* Progress bar indicators - Mobile */}
          <div className="mt-8 flex w-full max-w-[400px] items-center gap-1.5">
            {valueItems.map((item, i) => (
              <button
                key={i}
                type="button"
                className="relative flex-1"
                style={{ height: "3px" }}
                onClick={() => goToIndex(i)}
                aria-label={`切换到: ${item.title}`}
              >
                <div className="absolute inset-0 rounded-full bg-[#BF1920]/10" />
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#BF1920]"
                  style={{
                    width: i === valueIndex
                      ? `${progress * 100}%`
                      : i < valueIndex
                        ? "100%"
                        : "0%",
                    transition: i === valueIndex ? "none" : "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </button>
            ))}
          </div>
          {/* Current label */}
          <p className="mt-3 text-sm font-medium text-[#BF1920]">
            {currentValue.title}
          </p>
          <p className="mt-1 text-xs text-[#242222]/40">
            {String(valueIndex + 1).padStart(2, "0")} / {String(valueItems.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  )
}
