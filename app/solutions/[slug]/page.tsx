import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { getNavItems } from "@/components/shared/nav-data"
import { solutions } from "@/lib/solutions-data"

// 静态导出时生成所有解决方案页面
export function generateStaticParams() {
  return solutions.map((s) => ({
    slug: s.slug,
  }))
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutions.find((s) => s.slug === slug)

  if (!solution) {
    notFound()
  }

  const navItems = getNavItems("/solutions")

  const iconMap: Record<string, React.ReactNode> = {
    deploy: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#BF1920]">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    monitor: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#BF1920]">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    govern: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#BF1920]">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    decouple: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#BF1920]">
        <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3H19C20.1046 3 21 3.89543 21 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 16V19C21 20.1046 20.1046 21 19 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  }

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Banner */}
      <section className="relative h-[320px] overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[500px]">
        <div className="absolute inset-x-0 top-0 z-30">
          <Header navItems={navItems} variant="overlay" />
        </div>
        <Image src={solution.heroImage} alt={solution.title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:pb-14">
            <h1 className="text-2xl font-bold text-black md:text-3xl lg:text-4xl 3xl:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-black/80 md:text-base 3xl:mt-4 3xl:text-lg">
              {solution.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-sm text-muted-foreground lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-4 3xl:text-base">
          <Link href="/" className="transition-colors hover:text-primary">
            首页
          </Link>
          <ChevronRight />
          <span className="transition-colors hover:text-primary">
            解决方案
          </span>
          <ChevronRight />
          <span className="text-foreground">{solution.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-10 lg:px-8 lg:py-14 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-20">

        {/* Overview */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>方案概述</SectionTitle>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base lg:text-[15px] lg:leading-[1.8] 3xl:mt-6 3xl:text-lg 3xl:leading-[1.85]">
            {solution.overview}
          </p>
          {solution.overviewHighlight && (
            <div className="mt-4 flex items-center gap-3 rounded-lg border-l-4 border-[#BF1920] bg-[#BF1920]/5 px-4 py-3 3xl:mt-6">
              <span className="text-sm font-semibold text-[#BF1920] md:text-base 3xl:text-lg">{solution.overviewHighlight}</span>
            </div>
          )}
        </section>

        {/* Highlights */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>核心价值</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 3xl:mt-8 3xl:gap-6">
            {solution.highlights.map((h, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 transition-all duration-300 hover:border-[#BF1920]/20 hover:shadow-lg lg:p-7 3xl:p-8"
              >
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#BF1920] transition-all duration-500 group-hover:w-full" />
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#BF1920]/10 3xl:h-14 3xl:w-14">
                    {iconMap[h.icon] || iconMap.deploy}
                  </div>
                  <h4 className="text-base font-bold text-foreground 3xl:text-lg">{h.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground 3xl:text-base">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>{solution.architecture.title}</SectionTitle>
          {solution.architecture.images && solution.architecture.images.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 3xl:mt-8 3xl:gap-8">
              {solution.architecture.images.map((arch, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl border border-border/40 bg-white">
                  <div className="border-b border-border/40 bg-muted/30 px-4 py-3">
                    <h4 className="text-sm font-semibold text-foreground md:text-base">{arch.title}</h4>
                  </div>
                  <div className="flex h-[280px] items-center justify-center p-4 md:h-[320px] lg:h-[300px] 3xl:h-[380px]">
                    <Image
                      src={arch.image}
                      alt={arch.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative mt-6 w-full overflow-hidden rounded-2xl 3xl:mt-8">
              <Image
                src={solution.architecture.image}
                alt={solution.architecture.title}
                width={1200}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          )}
        </section>

        {/* Features */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>功能特性</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 3xl:mt-8 3xl:gap-5">
            {solution.features.map((f, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-border/60 bg-muted/20 p-5 transition-all duration-300 hover:border-[#BF1920]/15 hover:bg-muted/40 lg:p-6 3xl:p-7"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#BF1920]" />
                  <h4 className="text-sm font-bold text-foreground md:text-base 3xl:text-lg">{f.title}</h4>
                </div>
                <p className="whitespace-pre-line pl-5 text-sm text-muted-foreground 3xl:text-base">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        {solution.values && solution.values.length > 0 && (
          <section className="mb-12 lg:mb-16 3xl:mb-20">
            <SectionTitle>方案价值</SectionTitle>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 3xl:mt-8 3xl:gap-5">
              {solution.values.map((v, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-border/60 bg-muted/20 p-5 transition-all duration-300 hover:border-[#BF1920]/15 hover:bg-muted/40 lg:p-6 3xl:p-7"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#BF1920]" />
                    <h4 className="text-sm font-bold text-foreground md:text-base 3xl:text-lg">{v.title}</h4>
                  </div>
                  <p className="pl-5 text-sm text-muted-foreground 3xl:text-base">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Use Cases */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>应用场景</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 3xl:mt-8 3xl:gap-4">
            {solution.useCases.map((uc, idx) => (
              <div key={idx} className="flex flex-col gap-3 rounded-xl border border-border/60 bg-muted/20 px-5 py-4 3xl:px-6 3xl:py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#BF1920]/10 text-sm font-bold text-[#BF1920] 3xl:h-9 3xl:w-9 3xl:text-base">
                    {idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-foreground md:text-base 3xl:text-lg">{uc.title}</h4>
                </div>
                <p className="whitespace-pre-wrap pl-11 text-sm text-muted-foreground 3xl:text-base">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>相关产品</SectionTitle>
          {typeof solution.relatedProducts[0] === 'object' && 'desc' in solution.relatedProducts[0] ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 3xl:mt-8 3xl:gap-5">
              {solution.relatedProducts.map((p, idx) => (
                <div key={idx} className="flex flex-col gap-2 rounded-xl border border-border/60 bg-muted/20 p-5 3xl:p-6">
                  <h4 className="text-sm font-bold text-foreground md:text-base 3xl:text-lg">{p.name}</h4>
                  {'desc' in p && <p className="text-sm text-muted-foreground 3xl:text-base">{p.desc}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 flex flex-wrap gap-3 3xl:mt-6 3xl:gap-4">
              {solution.relatedProducts.map((p, idx) => (
                <Link
                  key={idx}
                  href={p.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[#BF1920]/15 bg-[#BF1920]/5 px-5 py-2.5 text-sm font-medium text-[#BF1920] transition-all duration-300 hover:bg-[#BF1920]/10 hover:shadow-sm 3xl:px-6 3xl:py-3 3xl:text-base"
                >
                  {p.name}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Platform Note */}
        {'platformNote' in solution && solution.platformNote && (
          <section className="mb-12 rounded-2xl border border-border/40 bg-gradient-to-br from-[#BF1920]/5 to-transparent p-6 lg:mb-16 lg:p-8 3xl:mb-20 3xl:p-10">
            <p className="text-base text-foreground leading-relaxed md:text-lg 3xl:text-xl">{solution.platformNote}</p>
          </section>
        )}

        {/* Other Solutions */}
        <section>
          <SectionTitle>其他解决方案</SectionTitle>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 3xl:mt-8 3xl:gap-5">
            {solutions
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={s.heroImage} alt={s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h4 className="absolute bottom-3 left-4 right-4 text-sm font-bold text-white md:text-base 3xl:text-lg">
                      {s.title}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Back CTA */}
        <div className="mt-12 flex justify-center lg:mt-16 3xl:mt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-[#BF1920]/30 hover:text-[#BF1920] 3xl:px-8 3xl:py-3 3xl:text-base"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            返回首页
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-[#BF1920] 3xl:h-6" />
      <h2 className="text-lg font-bold text-foreground md:text-xl 3xl:text-2xl">{children}</h2>
    </div>
  )
}

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted-foreground/40">
      <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
