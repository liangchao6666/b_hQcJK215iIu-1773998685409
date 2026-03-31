import type { Metadata } from "next"
import { Footer } from "@/components/shared/footer"
import { CareersContent } from "@/components/careers/careers-content"

export const metadata: Metadata = {
  title: "加入我们 - 人才招聘",
  description: "中创股份人才招聘，欢迎加入我们，共建数字中国",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <CareersContent />
      <Footer />
    </div>
  )
}
