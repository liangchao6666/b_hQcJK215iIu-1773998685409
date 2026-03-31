"use client"

export function ContactSection() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-sans text-4xl font-bold text-foreground">联系我们</h2>
      </div>

      {/* Phone Section */}
      <div className="bg-gradient-to-r from-[#BF1920]/10 to-[#BF1920]/5 rounded-lg p-8 border border-[#BF1920]/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-[#BF1920] rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
          </div>
          <div>
            <p className="font-sans text-sm text-foreground/60 mb-1">400全国服务热线</p>
            <p className="font-sans text-2xl font-bold text-foreground">400-618-6180</p>
          </div>
        </div>
      </div>

      {/* Offices Grid */}
      <div>
        <h3 className="font-sans text-2xl font-bold text-foreground mb-8">服务中心</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Jinan Headquarters */}
          <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-sans font-bold text-foreground mb-2">济南总部</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">山东省济南市历下区千佛山东路41-1号</p>
              </div>
            </div>
          </div>

          {/* Beijing */}
          <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-sans font-bold text-foreground mb-2">北京分公司</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">北京市海淀区中关村南大街6号中电信息大厦1201</p>
              </div>
            </div>
          </div>

          {/* Kunshan */}
          <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-sans font-bold text-foreground mb-2">昆山分公司</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">昆山市巴城镇学院路388号</p>
              </div>
            </div>
          </div>

          {/* Guangzhou */}
          <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-sans font-bold text-foreground mb-2">广州分公司</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">广州市天河区黄埔大道中336号御发商务中心6楼A061</p>
              </div>
            </div>
          </div>

          {/* Hunan */}
          <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-sans font-bold text-foreground mb-2">湖南分公司</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">长沙市开福区湘江中路52号凯乐国际9栋1507室</p>
              </div>
            </div>
          </div>

          {/* Shanghai */}
          <div className="border border-border rounded-lg p-6 hover:border-[#BF1920] hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-sans font-bold text-foreground mb-2">上海市支持服务中心</h4>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">上海市徐汇区华山路2018号汇银广场北楼2002</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
