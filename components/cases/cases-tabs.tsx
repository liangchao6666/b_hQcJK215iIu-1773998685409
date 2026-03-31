'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { cases } from '@/lib/cases-data'

interface CasesTabsProps {
  defaultCategory?: 'all' | 'financial' | 'government' | 'enterprise'
}

const tabs = [
  { id: 'all', label: '全部案例' },
  { id: 'financial', label: '金融案例' },
  { id: 'government', label: '政府案例' },
  { id: 'enterprise', label: '企业案例' },
]

const caseCategories: Record<string, string[]> = {
  'financial': ['national-investment-finance-system'],
  'government': ['police-data-governance'],
  'enterprise': ['central-enterprise-middleware-platform', 'southern-grid-digital-system', 'zhongchuang-bigdata-platform', 'zhongchuang-data-integration-platform', 'zhongchuang-ai-model-platform', 'national-highway-toll-stations'],
}

export function CasesTabs({ defaultCategory = 'all' }: CasesTabsProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<string>(defaultCategory)

  useEffect(() => {
    // 检查当前路径是否指向特定分类
    if (pathname.includes('/financial')) setActiveTab('financial')
    else if (pathname.includes('/government')) setActiveTab('government')
    else if (pathname.includes('/enterprise')) setActiveTab('enterprise')
    else setActiveTab('all')
  }, [pathname])

  // 根据选中的tab过滤案例
  const filteredCases = activeTab === 'all' 
    ? cases 
    : cases.filter(c => caseCategories[activeTab as keyof typeof caseCategories]?.includes(c.slug))

  return (
    <div className="w-full">
      {/* Tabs Navigation - Capsule Style */}
      <div className="w-full -mt-20 relative z-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center items-center py-8">
            <div className="flex items-center gap-2 opacity-60 hidden md:flex">
              <div className="w-8 h-px bg-foreground/30"></div>
            </div>
            
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-6 font-sans font-semibold text-sm transition-all duration-300 whitespace-nowrap rounded-full border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#BF1920] border-[#BF1920] text-white'
                    : 'border-gray-400 text-gray-500 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
            
            <div className="flex items-center gap-2 opacity-60 hidden md:flex">
              <div className="w-8 h-px bg-foreground/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content - Cases Grid */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="animate-fadeIn">
            {/* Description */}
            <div className="text-center mb-12 lg:mb-16">
              <p className="font-sans text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
                {activeTab === 'all' && '中创中间件已服务100+家大型企业用户，覆盖金融、政务、央企等多个关键领域，为客户提供稳定可靠的基础软件解决方案。'}
                {activeTab === 'financial' && '在金融领域，中创中间件助力多家银行实现核心系统的国产化建设，保障交易安全和系统稳定。'}
                {activeTab === 'government' && '在政务领域，中创中间件支撑政府部门实现数据共享、公文流转等关键业务，推进数字政务建设。'}
                {activeTab === 'enterprise' && '在企业领域，中创中间件为央企、地产、电信等大型企业提供全栈式自主可控解决方案。'}
              </p>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCases.map((caseItem) => (
                <Link
                  key={caseItem.slug}
                  href={`/cases/${caseItem.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={caseItem.photo}
                      alt={caseItem.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute left-3 top-3 inline-block rounded-full bg-white/90 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur-sm 3xl:text-xs">
                      {caseItem.tag}
                    </span>
                  </div>
                  <div className="p-6 lg:p-5 3xl:p-6">
                    <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-[#BF1920] mb-2 line-clamp-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {caseItem.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[#BF1920] text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      查看详情
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">该分类暂无案例</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
