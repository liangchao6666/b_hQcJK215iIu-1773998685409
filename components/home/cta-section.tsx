import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function CTASection() {
  return (
    <section className="relative h-[220px] overflow-hidden md:h-[240px] 3xl:h-[280px]" style={{ backgroundImage: 'url(/images/cta-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground md:text-[28px] 3xl:text-[36px]">立即免费体验，解锁企业级中间件核心能力</h2>
          <a href="#" className="group mt-6 inline-flex w-fit items-center justify-center rounded bg-primary px-4 py-1.5 text-sm font-normal text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-95 md:mt-8 md:text-base 3xl:px-5 3xl:py-2 3xl:text-lg">
            <span className="relative z-10 flex items-center">
              免费试用
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none" className="ml-3 transition-transform duration-300 group-hover:translate-x-1"><path d="M1 1L7 7.5L1 14" stroke="white" strokeWidth="2" /></svg>
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
