import { CasesHeroSection } from '@/components/cases/cases-hero'
import { CasesTabs } from '@/components/cases/cases-tabs'
import { Footer } from '@/components/shared/footer'

export const metadata = {
  title: '政府案例 | 中创中间件',
  description: '中创中间件在政务领域的成功案例，支撑政府部门实现数据共享和公文流转。',
}

export default function GovernmentCasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CasesHeroSection />
      <CasesTabs defaultCategory="government" />
      <Footer />
    </div>
  )
}
