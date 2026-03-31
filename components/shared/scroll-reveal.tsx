"use client"

import { memo, useEffect, useRef, useState, type ReactNode } from "react"

// 使用 memo 包装，确保 children 不会因为父组件的状态变化而重新渲染
export const ScrollReveal = memo(function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right"
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasTriggered = useRef(false)

  useEffect(() => {
    // 如果已经触发过，不再重复设置
    if (hasTriggered.current) return
    
    let delayTimer: ReturnType<typeof setTimeout> | null = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true
          delayTimer = setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    )
    if (ref.current) observer.observe(ref.current)
    const fallbackTimer = setTimeout(() => {
      if (!hasTriggered.current) {
        hasTriggered.current = true
        setIsVisible(true)
      }
    }, 1500 + delay)
    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
      if (delayTimer) clearTimeout(delayTimer)
    }
  }, [delay])

  const transformClass = isVisible 
    ? "translate-y-0 translate-x-0 opacity-100"
    : direction === "left" 
      ? "-translate-x-20 opacity-0"
      : direction === "right" 
        ? "translate-x-20 opacity-0"
        : "translate-y-8 opacity-0"

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out ${transformClass} ${className}`}
    >
      {children}
    </div>
  )
})
