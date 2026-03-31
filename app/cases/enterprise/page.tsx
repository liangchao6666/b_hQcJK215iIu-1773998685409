import { CasesHeroSection } from '@/components/cases/cases-hero'
import { CasesTabs } from '@/components/cases/cases-tabs'
import { Footer } from '@/components/shared/footer'

export const metadata = {
  title: '企业案例 | 中创中间件',
  description: '中创中间件在企业领域的成功案例，为央企、地产、电信等大型企业提供全栈式自主可控解决方案。',
}

export default function EnterpriseCasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CasesHeroSection />
      <CasesTabs defaultCategory="enterprise" />
      <Footer />
    </div>
  )
}
