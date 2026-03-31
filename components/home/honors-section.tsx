import React, { memo } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const row1 = [
  { img: "/images/honors/honor-01.jpg", title: "信息技术应用创新工作委员会技术活动单位", num: "01" },
  { img: "/images/honors/honor-02.jpg", title: "2025年度未来产业之星上市公司", num: "02" },
  { img: "/images/honors/honor-03.jpg", title: "2025年度卓越贡献成员单位", num: "03" },
  { img: "/images/honors/honor-04.jpg", title: "2024-2025年度考核等级优秀", num: "04" },
  { img: "/images/honors/honor-05.jpg", title: "信创数智技术服务能力一级-数据服务能力", num: "05" },
  { img: "/images/honors/honor-06.jpg", title: "新型智慧城市优秀解决方案", num: "06" },
  { img: "/images/honors/honor-07.jpg", title: "山东省数据治理优秀产品", num: "07" },
  { img: "/images/honors/honor-08.jpg", title: "第六届济南市网络安全技术支撑单位", num: "08" },
  { img: "/images/honors/honor-09.jpg", title: "2025年度名牌企业", num: "09" },
  { img: "/images/honors/honor-10.jpg", title: "2024年创新软件产品", num: "10" },
  { img: "/images/honors/honor-11.jpg", title: "2024年创新典型解决方案", num: "11" },
  { img: "/images/honors/honor-12.jpg", title: "2024数字生态中间件领军企业", num: "12" },
  { img: "/images/honors/honor-13.jpg", title: "ITSS信息技术服务分会会员单位", num: "13" },
]

const row2 = [
  { img: "/images/honors/honor-14.jpg", title: "金鼎筑基奖", num: "14" },
  { img: "/images/honors/honor-15.jpg", title: "2025年度竞争力百强企业", num: "15" },
  { img: "/images/honors/honor-16.jpg", title: "信创工程实施能力一级证书", num: "16" },
  { img: "/images/honors/honor-17.jpg", title: "2025年AI Cloud创新应用实践", num: "17" },
  { img: "/images/honors/honor-18.jpg", title: "2024网络产品安全能力提升计划", num: "18" },
  { img: "/images/honors/honor-23.jpg", title: "中创智能体中间件", num: "23" },
]

// 使用 memo 优化卡片组件，使用原生 img 避免 Next.js Image 的多尺寸请求
const HonorCard = memo(function HonorCard({ honor }: { honor: (typeof row1)[0] }) {
  return (
    <div className="honor-card group/honor relative flex w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-background shadow-sm md:w-[320px] 3xl:w-[380px]">
      <div className="relative h-[160px] w-full overflow-hidden md:h-[175px] 3xl:h-[210px]">
        <img 
          src={honor.img || "/placeholder.svg"} 
          alt={honor.title} 
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex items-center gap-3 px-4 py-3.5 3xl:px-5 3xl:py-4">
        <div className="h-4 w-[3px] flex-shrink-0 rounded-full bg-primary" />
        <h4 className="text-sm font-medium text-foreground/80 3xl:text-base">{honor.title}</h4>
      </div>
    </div>
  )
})

// 使用 memo 包装，避免父组件重渲染导致子组件重新挂载
const HonorMarqueeRow = memo(function HonorMarqueeRow({ honors, rowIdx }: { honors: typeof row1, rowIdx: number }) {
  const isReverse = rowIdx === 1
  
  return (
    <div className="honor-marquee-wrapper relative overflow-x-hidden">
      <div 
        className={`flex gap-5 3xl:gap-6 ${isReverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {honors.map((honor, i) => (
          <HonorCard key={`${i}`} honor={honor} />
        ))}
      </div>
    </div>
  )
})

export function HonorsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-16 md:py-20 lg:py-[90px] 3xl:py-[110px]">
      {/* 简化背景装饰 - 移除多余的粒子动画 */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BF1920]/[0.03] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.4]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="honor-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.6" fill="#BF1920" opacity="0.08" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#honor-dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-12 text-center lg:mb-16 3xl:mb-20">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl 3xl:text-[40px]">公司荣誉</h2>
            <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-primary animate-line-sweep 3xl:w-16" />
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground md:mt-5 md:text-base 3xl:text-lg">深耕行业30载，以技术创新铸就卓越品质</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-10 flex flex-col gap-6 3xl:gap-8">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#F7F8FA] to-transparent md:w-32 lg:w-44" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#F7F8FA] to-transparent md:w-32 lg:w-44" />

        <ScrollReveal delay={100}>
          <HonorMarqueeRow honors={row1} rowIdx={0} />
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <HonorMarqueeRow honors={row2} rowIdx={1} />
        </ScrollReveal>
      </div>
    </section>
  )
}
