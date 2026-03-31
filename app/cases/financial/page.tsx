import { CasesHeroSection } from '@/components/cases/cases-hero'
import { CasesTabs } from '@/components/cases/cases-tabs'
import { Footer } from '@/components/shared/footer'

export const metadata = {
  title: '金融案例 | 中创中间件',
  description: '中创中间件在金融领域的成功案例，助力多家银行实现核心系统国产化建设。',
}

export default function FinancialCasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CasesHeroSection />
      <CasesTabs defaultCategory="financial" />
      <Footer />
    </div>
  )
}
