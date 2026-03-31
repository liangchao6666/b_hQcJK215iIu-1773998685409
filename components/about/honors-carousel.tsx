'use client'

import { useState, useEffect } from 'react'

const honors = [
  { id: 1, image: '/images/honors/honor-01.jpg', title: '信息技术应用创新工作委员会技术活动单位' },
  { id: 2, image: '/images/honors/honor-02.jpg', title: '2025年度未来产业之星上市公司' },
  { id: 3, image: '/images/honors/honor-03.jpg', title: '2025年度卓越贡献成员单位' },
  { id: 4, image: '/images/honors/honor-04.jpg', title: '2024-2025年度考核等级优秀' },
  { id: 5, image: '/images/honors/honor-05.jpg', title: '信创数智技术服务能力一级-数据服务能力' },
  { id: 6, image: '/images/honors/honor-06.jpg', title: '新型智慧城市优秀解决方案' },
  { id: 7, image: '/images/honors/honor-07.jpg', title: '山东省数据治理优秀产品' },
  { id: 8, image: '/images/honors/honor-08.jpg', title: '第六届济南市网络安全技术支撑单位' },
  { id: 9, image: '/images/honors/honor-09.jpg', title: '2025年度名牌企业' },
  { id: 10, image: '/images/honors/honor-10.jpg', title: '2024年创新软件产品' },
  { id: 11, image: '/images/honors/honor-11.jpg', title: '2024年创新典型解决方案' },
  { id: 12, image: '/images/honors/honor-12.jpg', title: '2024数字生态中间件领军企业' },
  { id: 13, image: '/images/honors/honor-13.jpg', title: 'ITSS信息技术服务分会会员单位' },
  { id: 14, image: '/images/honors/honor-14.jpg', title: '金鼎筑基奖' },
  { id: 15, image: '/images/honors/honor-15.jpg', title: '2025年度竞争力百强企业' },
  { id: 16, image: '/images/honors/honor-16.jpg', title: '信创工程实施能力一级证书' },
  { id: 17, image: '/images/honors/honor-17.jpg', title: '2025年AI Cloud创新应用实践' },
  { id: 18, image: '/images/honors/honor-18.jpg', title: '2024网络产品安全能力提升计划' },
  { id: 19, image: '/images/honors/honor-23.jpg', title: '中创智能体中间件' },
]

export function HonorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % honors.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay])

  // Get 5 visible cards for fan layout
  const getVisibleHonors = () => {
    const result = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + honors.length) % honors.length
      result.push({ ...honors[index], position: i })
    }
    return result
  }

  const visibleHonors = getVisibleHonors()

  // Card styles based on position
  const getCardStyle = (position: number) => {
    const baseStyle = "absolute transition-all duration-500 ease-out cursor-pointer"
    
    switch (position) {
      case -2: // Far left
        return {
          className: `${baseStyle} w-48 md:w-64 lg:w-80`,
          style: {
            transform: 'translateX(-180%) rotate(-12deg) scale(0.75)',
            opacity: 0.4,
            zIndex: 1,
          }
        }
      case -1: // Left
        return {
          className: `${baseStyle} w-56 md:w-72 lg:w-96`,
          style: {
            transform: 'translateX(-100%) rotate(-6deg) scale(0.9)',
            opacity: 0.7,
            zIndex: 2,
          }
        }
      case 0: // Center
        return {
          className: `${baseStyle} w-72 md:w-96 lg:w-128`,
          style: {
            transform: 'translateX(-50%) rotate(0deg) scale(1)',
            opacity: 1,
            zIndex: 3,
          }
        }
      case 1: // Right
        return {
          className: `${baseStyle} w-56 md:w-72 lg:w-96`,
          style: {
            transform: 'translateX(0%) rotate(6deg) scale(0.9)',
            opacity: 0.7,
            zIndex: 2,
          }
        }
      case 2: // Far right
        return {
          className: `${baseStyle} w-48 md:w-64 lg:w-80`,
          style: {
            transform: 'translateX(80%) rotate(12deg) scale(0.75)',
            opacity: 0.4,
            zIndex: 1,
          }
        }
      default:
        return { className: baseStyle, style: {} }
    }
  }

  return (
    <div className="space-y-8">
      {/* Carousel Section */}
      <div 
        className="relative h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden rounded-lg"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {visibleHonors.map((honor) => {
            const cardStyle = getCardStyle(honor.position)
            return (
              <div
                key={`${honor.id}-${honor.position}`}
                className={cardStyle.className}
                style={{
                  ...cardStyle.style,
                  left: '50%',
                }}
                onClick={() => {
                  if (honor.position !== 0) {
                    setCurrentIndex(honors.findIndex(h => h.id === honor.id))
                  }
                }}
              >
                <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white">
                  <img
                    src={honor.image}
                    alt={honor.title}
                    className="w-full h-auto aspect-[16/9] object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + honors.length) % honors.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg z-10 transition-colors"
          aria-label="Previous honor"
        >
          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % honors.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg z-10 transition-colors"
          aria-label="Next honor"
        >
          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Current Honor Title */}
      <div className="text-center">
        <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground">
          {honors[currentIndex].title}
        </h3>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {honors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to honor ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
