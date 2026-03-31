import { memo } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

// 恢复完整客户数据
const customerRows = [
  [
    { name: "国家开发银行", logo: "/images/customers/guojia-kaifa-bank.png" },
    { name: "平安科技", logo: "/images/customers/pingan-tech.webp" },
    { name: "国家开发投资集团有限公司", logo: "/images/customers/guojia-touzi.png" },
    { name: "东风汽车集团有限公司", logo: "/images/customers/dongfeng-auto.png" },
    { name: "永诚保险", logo: "/images/customers/yongcheng-insurance.png" },
    { name: "山东能源集团", logo: "/images/customers/shandong-energy.png" },
    { name: "山东黄金集团", logo: "/images/customers/shandong-gold.jpg" },
    { name: "工商银行", logo: "/images/customers/icbc.png" },
    { name: "招商银行", logo: "/images/customers/merchants-group.png" },
    { name: "招商局集团有限公司", logo: "/images/customers/merchants-group.png" },
  ],
  [
    { name: "浪潮", logo: "/images/customers/langchao.png" },
    { name: "湖南银行", logo: "/images/customers/hunan-bank.png" },
    { name: "国投财务有限公司", logo: "/images/customers/guotou-finance.png" },
    { name: "广州农商行", logo: "/images/customers/guangzhou-rural-bank.png" },
    { name: "广发银行", logo: "/images/customers/guangfa-bank.png" },
    { name: "兴业银行", logo: "/images/customers/xingye-bank.png" },
    { name: "中国兵器工业集团有限公司", logo: "/images/customers/china-ordnance.jpg" },
    { name: "齐鲁银行", logo: "/images/customers/qilu-bank.png" },
    { name: "国家电投", logo: "/images/customers/spic.png" },
    { name: "中国信息通信科技集团有限公司", logo: "/images/customers/china-ict.png" },
    { name: "中国电气装备集团有限公司", logo: "/images/customers/china-electric-equip.png" },
    { name: "中国铝业集团有限公司", logo: "/images/customers/chinalco.png" },
    { name: "中国葛洲坝集团有限公司", logo: "/images/customers/gezhouba.png" },
    { name: "中国航空油料集团有限公司", logo: "/images/customers/cnaf.png" },
    { name: "中泰证券", logo: "/images/customers/zhongtai-securities.png" },
    { name: "中国人民银行", logo: "/images/customers/pboc.webp" },
    { name: "中国农业银行", logo: "/images/customers/abc.png" },
    { name: "中国民生银行", logo: "/images/customers/minsheng-bank.png" },
    { name: "中国银行", logo: "/images/customers/boc.png" },
    { name: "中国中车集团有限公司", logo: "/images/customers/crrc.png" },
    { name: "中国电建", logo: "/images/customers/powercn.jpg" },
    { name: "中国太平保险", logo: "/images/customers/china-taiping.png" },
    { name: "中国五矿集团有限公司", logo: "/images/customers/minmetals.png" },
  ],
]

// 使用 memo 避免不必要的重渲染，使用原生 img 避免 Next.js Image 的多尺寸请求
const LogoCard = memo(function LogoCard({ customer }: { customer: { name: string; logo: string } }) {
  return (
    <div
      className="customer-logo-card flex h-[80px] w-[200px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-background px-6 md:h-[100px] md:w-[240px] lg:h-[110px] lg:w-[260px] 3xl:h-[130px] 3xl:w-[300px]"
      title={customer.name}
    >
      {customer.logo ? (
        <img
          src={customer.logo}
          alt={customer.name}
          loading="lazy"
          decoding="async"
          className="h-auto max-h-full w-auto max-w-full object-contain"
        />
      ) : (
        <span className="select-none text-sm font-medium text-muted-foreground">
          {customer.name}
        </span>
      )}
    </div>
  )
})

// 使用 memo 包装，避免父组件重渲染导致子组件重新挂载
const MarqueeRow = memo(function MarqueeRow({ row, rowIdx }: { row: typeof customerRows[0], rowIdx: number }) {
  const isReverse = rowIdx === 1
  
  return (
    <div className="customer-marquee-wrapper relative overflow-hidden">
      <div 
        className={`flex gap-5 md:gap-6 3xl:gap-8 ${isReverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {row.map((customer, i) => (
          <LogoCard key={`${i}`} customer={customer} />
        ))}
      </div>
    </div>
  )
})

export function CustomersSection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">
      {/* 简化背景装饰 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#BF1920]/[0.015] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-10 text-center lg:mb-14 3xl:mb-16">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-[32px] 3xl:text-[40px]">
              我们的客户
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-primary 3xl:w-16" />
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:mt-4 md:text-base 3xl:text-lg">
              深耕行业多年，赢得众多头部客户信赖
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-10 flex flex-col gap-5 md:gap-6 3xl:gap-8">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-background to-transparent md:w-28 lg:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-background to-transparent md:w-28 lg:w-40" />

        {customerRows.map((row, rowIdx) => (
          <ScrollReveal key={rowIdx} delay={100 + rowIdx * 80}>
            <MarqueeRow row={row} rowIdx={rowIdx} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
