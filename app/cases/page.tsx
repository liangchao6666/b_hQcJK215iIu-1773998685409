import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cases } from "@/lib/cases-data"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { CasesHeroSection } from "@/components/cases/cases-hero"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "成功案例 | 中创股份",
  description: "查看中创股份的成功案例，了解我们在企业数智化转型中的解决方案",
}

export default function CasesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CasesHeroSection />
      <main className="flex-1">
        {/* Cases Grid */}
        <section className="py-14 md:py-20 lg:py-[80px] 3xl:py-[100px]">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 3xl:gap-6">
              {cases.map((caseItem, index) => (
                <ScrollReveal key={caseItem.slug} delay={index * 80}>
                  <Link 
                    href={`/cases/${caseItem.slug}`}
                    className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-foreground/[0.06]"
                  >
                    {/* Fixed-height photo area */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                      <Image
                        src={caseItem.photo}
                        alt={caseItem.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Default gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                      {/* Tag badge */}
                      <div className="absolute left-4 top-4 z-10 3xl:left-5 3xl:top-5">
                        <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 shadow-sm backdrop-blur-sm 3xl:px-4 3xl:py-1.5 3xl:text-xs">
                          {caseItem.tag}
                        </span>
                      </div>

                      {/* Metric badge */}
                      <div className="absolute bottom-4 right-4 z-10 transition-opacity duration-500 group-hover:opacity-0 3xl:bottom-5 3xl:right-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm 3xl:px-4 3xl:py-1.5 3xl:text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#BF1920]" />
                          {caseItem.metrics}
                        </span>
                      </div>
                    </div>

                    {/* Bottom content area */}
                    <div className="relative px-5 py-4 3xl:px-6 3xl:py-5">
                      {/* Red accent line on hover */}
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#BF1920] transition-all duration-500 group-hover:w-full" />

                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold text-foreground transition-colors duration-300 group-hover:text-[#BF1920] md:text-sm 3xl:text-base">
                          {caseItem.title}
                        </h3>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="flex-shrink-0 text-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#BF1920]"
                        >
                          <path
                            d="M4 10H16M16 10L11 5M16 10L11 15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
