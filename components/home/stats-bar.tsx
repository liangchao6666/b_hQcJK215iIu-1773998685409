function TechGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-[0.06]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tech-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#BF1920" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>
    </div>
  )
}

function AnimatedCounter({ value, suffix = "", label }: { value: string; suffix?: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="animate-number-glow text-3xl font-bold text-primary tabular-nums md:text-4xl 3xl:text-5xl">
        {value}{suffix}
      </span>
      <span className="mt-1 text-xs text-muted-foreground md:text-sm 3xl:text-base">{label}</span>
    </div>
  )
}

export function StatsBar() {
  return (
    <div className="relative z-10 border-b border-border/40 bg-background py-8 md:py-10 3xl:py-12 hidden">
      <TechGrid />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <AnimatedCounter value="30" suffix="+" label="年技术积累" />
        <AnimatedCounter value="xxx" suffix="+" label="企业客户" />
        <AnimatedCounter value="xxx" suffix="+" label="行业解决方案" />
        <AnimatedCounter value="xxx" suffix="%" label="服务可用性" />
      </div>
    </div>
  )
}
