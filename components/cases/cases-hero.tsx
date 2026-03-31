import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

export function CasesHeroSection() {
  const navItems = getNavItems("/cases")

  return (
    <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
      {/* Background image */}
      <img
        src="/images/cases-hero-banner.png"
        alt="案例中心"
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
          典型案例
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
          覆盖金融、政务、央企等多个关键领域
        </p>

        {/* Subtitle 2 */}
        <p
          className="font-sans font-normal text-[#332C2B]"
          style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: '1.5', opacity: 0.8, marginTop: 'clamp(4px, 0.6vw, 8px)' }}
        >
          100+家大型企业用户选择中创中间件
        </p>
      </div>
    </div>
  )
}
