export function HonorsSection() {
  const honors = [
    "中国电子信息行业卓越企业",
    "CMMI DEV 5级认证",
    "信创工委会卓越贡献成员单位",
    "中国十大创新软件企业",
    "推动中间件软件杰出贡献奖",
    "山东省科学技术进步二等奖",
    "ISO9001质量体系认证",
    "信创可靠企业核心软件品牌",
    "国际Jakarta EE工作组企业级会员单位"
  ]

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-foreground lg:text-4xl">公司荣誉</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {honors.map((honor, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-muted p-6 transition-all duration-300 hover:border-primary hover:shadow-md lg:p-8"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium text-foreground">{honor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
