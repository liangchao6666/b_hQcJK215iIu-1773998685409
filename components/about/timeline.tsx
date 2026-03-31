'use client'

import { useState } from 'react'

const timelineData = [
  { year: 2002, events: ['2002年成立中创软件商用中间件有限公司'] },
  { year: 2003, events: ['J2EE应用服务器InforWeb获国家火炬计划项目'] },
  { year: 2004, events: ['与北京大学在构件化领域展开合作'] },
  { year: 2007, events: ['作为中国发起人中唯一的企业单位，参与发起成立八方(OW2)开源软件国际联盟'] },
  { year: 2008, events: ['中创中间件公司入围中央政府采购项目，成为入选产品最多的国产中间件厂商'] },
  { year: 2009, events: ['荣获\"献礼新中国成立60周年\"评选之\"最具影响力企业奖\"、\"最佳技术创新奖\"、\"最佳外包服务奖\"和\"中间件信赖产品奖\"四项大奖'] },
  { year: 2010, events: ['中创中间件公司作为牵头单位，承担了国家\"核高基\"科技重大专项核心技术研究与产品研发课题'] },
  { year: 2011, events: ['核高基国产中间件参考实现及产品发布会在京召开'] },
  { year: 2012, events: ['中创Loong智慧平台入选年度创新软件产品'] },
  { year: 2013, events: ['中创中间件InforGuard产品通过2012年度3C工厂监督检查'] },
  { year: 2014, events: ['中创中间件通过CMMI ML5级评审'] },
  { year: 2015, events: ['助力金税三期工程，中创中间件将在全国部署'] },
  { year: 2016, events: ['中创中间件亮相\"十二五\"科技创新成就展'] },
  { year: 2017, events: ['中创中间件InforGuard UMP荣获\"2017中国十大创新软件产品\"'] },
  { year: 2018, events: ['中创中间件成功入围中直产品协议供货采购项目'] },
  { year: 2019, events: ['中创中间件荣获2019年度电子信息行业卓越企业'] },
  { year: 2020, events: ['中创PaaS平台软件获得\"2020十佳创新软件产品\"称号'] },
  { year: 2021, events: ['中创中间件正式成为Jakarta EE工作组企业级成员'] },
  { year: 2022, events: ['中创中间件入围山东省软件行业协会和软件行业产教联盟联合发布的\"2022年度山东省软件和信息技术服务业综合竞争力百强\"名单'] },
  { year: 2023, events: ['人民日报点赞全链路关键技术应用研究成果——中创中间件助力建成首个央企全栈式自主可控超大型数字化系统'] },
  { year: 2024, events: ['中流击水 创领未来！中创股份（688695.SH）在上交所科创板成功上市'] },
  { year: 2025, events: ['中创股份荣获国家级专精特新\"小巨人\"企业称号'] },
  { year: 2026, events: ['敬请期待！！'] },
]

const VISIBLE = 7

export function TimelineComponent() {
  const [selectedYear, setSelectedYear] = useState(22) // 2025 is index 22
  const [windowStart, setWindowStart] = useState(Math.max(0, 22 - Math.floor(VISIBLE / 2)))

  const currentData = timelineData[selectedYear]
  const allYears = timelineData.map(item => item.year)
  const visibleYears = allYears.slice(windowStart, windowStart + VISIBLE)

  const handlePrev = () => {
    if (selectedYear > 0) {
      const newYear = selectedYear - 1
      setSelectedYear(newYear)
      // Keep in window by adjusting window if needed
      if (newYear < windowStart) setWindowStart(Math.max(0, newYear - Math.floor(VISIBLE / 2)))
    }
  }

  const handleNext = () => {
    if (selectedYear < allYears.length - 1) {
      const newYear = selectedYear + 1
      setSelectedYear(newYear)
      // Keep in window by adjusting window if needed
      if (newYear >= windowStart + VISIBLE) setWindowStart(newYear - Math.floor(VISIBLE / 2))
    }
  }

  const handleYearClick = (index: number) => {
    setSelectedYear(index)
    if (index < windowStart) setWindowStart(index)
    else if (index >= windowStart + VISIBLE) setWindowStart(index - VISIBLE + 1)
  }

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/timeline-bg.jpg)' }}>
      {/* White overlay with 70% opacity */}
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-0 lg:py-0 relative z-10">

        {/* Main Content Area */}
        <div className="flex items-center justify-center gap-16 min-h-64 mb-8">
          {/* Left Side - Large Year */}
          <div className="text-center flex-1">
            <div className="text-8xl font-bold text-foreground/80">{currentData.year}年</div>
          </div>

          {/* Right Side - Events List */}
          <div className="flex-1 space-y-5">
            {currentData.events.map((event, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#BF1920] mt-1.5 flex-shrink-0"></div>
                <p className="font-sans text-base text-foreground/80 leading-relaxed">{event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Track */}
        <div className="px-4 pb-0">
          <div className="flex items-center gap-6 pt-10">
            <button
              onClick={handlePrev}
              disabled={windowStart === 0}
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#BF1920] hover:bg-[#BF1920]/10 disabled:opacity-30 disabled:border-gray-300 transition-colors"
              aria-label="Previous year"
            >
              <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Timeline */}
            <div className="flex-1 relative py-4">
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300 transform -translate-y-1/2"></div>

              {/* Year nodes */}
              <div className="flex justify-between">
                {visibleYears.map((year, i) => {
                  const index = windowStart + i
                  return (
                    <button
                      key={year}
                      onClick={() => handleYearClick(index)}
                      className="flex flex-col items-center group relative"
                    >
                      {/* Halo + dot - positioned on the line */}
                      <div
                        className={`relative flex items-center justify-center rounded-full transition-all duration-200 z-10 ${
                          index === selectedYear
                            ? 'w-9 h-9 bg-[#BF1920]/15'
                            : 'w-6 h-6 bg-gray-100 group-hover:bg-[#BF1920]/10'
                        }`}
                      >
                        <div
                          className={`rounded-full transition-all duration-200 ${
                            index === selectedYear
                              ? 'w-3.5 h-3.5 bg-[#BF1920]'
                              : 'w-2 h-2 bg-gray-400 group-hover:bg-[#BF1920]'
                          }`}
                        />
                      </div>
                      
                      {/* Vertical stem going down from dot */}
                      <div
                        className={`w-px transition-all duration-200 ${
                          index === selectedYear
                            ? 'h-6 bg-[#BF1920]'
                            : 'h-4 bg-gray-300 group-hover:bg-[#BF1920]/50 group-hover:h-5'
                        }`}
                      />
                      
                      {/* Year label */}
                      <span
                        className={`font-sans whitespace-nowrap transition-all duration-200 mt-2 ${
                          index === selectedYear
                            ? 'text-[#BF1920] font-bold text-sm'
                            : 'text-gray-400 text-xs group-hover:text-[#BF1920]'
                        }`}
                      >
                        {year}年
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={selectedYear >= allYears.length - 1}
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#BF1920] hover:bg-[#BF1920]/10 disabled:opacity-30 disabled:border-gray-300 transition-colors"
              aria-label="Next year"
            >
              <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

