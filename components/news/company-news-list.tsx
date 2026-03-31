'use client'

import { useState } from 'react'
import Link from 'next/link'

const allNews = [
  {
    id: 1,
    title: '万马奔腾启新程：中创股份交出高质量蛇年答卷',
    date: '02/13',
    month: '02',
    year: '2026',
    description: '回顾过去一年，中创股份坚定实，勤练本领，稳步前行，在高质量发展道路上迈出坚实步伐。',
    image: '/images/news/1.jpg'
  },
  {
    id: 2,
    title: '中创股份喜开通过CMM1-DEV V3.0 ML5级整评',
    date: '02/06',
    month: '02',
    year: '2026',
    description: '近日，中创股份顺利完成了CMM1-DEV V3.0 ML5级整评。实现高能级的研发管理体系。',
    image: '/images/news/2.jpg'
  },
  {
    id: 3,
    title: '融融全身数字化转型，中创股份出席2026第十五届双点IT用户大会',
    date: '01/14',
    month: '01',
    year: '2026',
    description: '近日，2026第十五届双点IT用户大会在山西吕梁重局举办。大会聚焦数据安全、标准化建议。',
    image: '/images/news/3.jpg'
  },
  {
    id: 4,
    title: '中创股份出席山东省网络安全与信息化技术交流活动',
    date: '01/13',
    month: '01',
    year: '2026',
    description: '近日，山东省信息化学会第五届理事会会议暨网络安全与信息化技术交流活动在济南成功举行。',
    image: '/images/news/4.jpg'
  },
  {
    id: 5,
    title: '重磅！信创数整一级单位名单出炉，中创股份获取一级认证',
    date: '12/25',
    month: '12',
    year: '2025',
    description: '近日，中国信息学会在北京发布信创数据技术服务能力评估报告，正式公布一级单位名单。',
    image: '/images/news/5.jpg'
  },
  {
    id: 6,
    title: '数智领航，截导前行 中创股份出席2025数智产业发展大会',
    date: '12/19',
    month: '12',
    year: '2025',
    description: '近日，以数智齐章 共创未来为主题2025年全省数智产业发展大会在济南隆重召开。',
    image: '/images/news/6.jpg'
  },
  {
    id: 7,
    title: '中创股份深度参编五项中间件团体标准，筑牢信创领域标准化基石',
    date: '12/17',
    month: '12',
    year: '2025',
    description: '中国互联网协会日正式发布6项团体标准。中创股份作为领先的中间件软件企业深度参与。',
    image: '/images/news/7.jpg'
  },
  {
    id: 8,
    title: '云融新生 智领未来——中创股份荣获AI云评估及创新应用实践认可',
    date: '12/16',
    month: '12',
    year: '2025',
    description: '近日，由中国通信标准协会主办、中国信息通信研究院承办的2025年云评估大会成功召开。',
    image: '/images/news/8.jpg'
  },
  {
    id: 9,
    title: '喜报！中创股份荣获国家级专精特新企业称号',
    date: '10/21',
    month: '10',
    year: '2025',
    description: '近日，工业和信息化部发布了国家级专精特新企业名单，山东中创股份荣登名单。',
    image: '/images/news/9.jpg'
  },
  {
    id: 10,
    title: '中创股份出席2025年第二十七届中国国际软件博览会',
    date: '10/16',
    month: '10',
    year: '2025',
    description: '今日，第27届中国国际软件博览会成功举办。本次会议以开源创新主场为主题。',
    image: '/images/news/10.jpg'
  },
  {
    id: 11,
    title: '济南市商埠软件与场企业资讯员见面会召开 中创股份赋能产业链安全',
    date: '09/28',
    month: '09',
    year: '2025',
    description: '9月26日，济南市人民政府新闻办公室举办了产业链上的好盛景企业家见面会。',
    image: '/images/news/news-default.png'
  },
  {
    id: 12,
    title: '中创股份荣选出席第三届中国上市公司产业发展论坛',
    date: '09/25',
    month: '09',
    year: '2025',
    description: '近日，第三届中国上市公司产业发展论坛在上海召开。活动以未来产业与国有战略为主题。',
    image: '/images/news/news-default.png'
  },
  {
    id: 13,
    title: '正式布局电信运营领域！中创股份新获中国移动应用服务器中间件采购项目',
    date: '11/03',
    month: '11',
    year: '2025',
    description: '近日，国内领先的基础软件中创股份与中国获得应用服务器中间件产品选择。',
    image: '/images/news/news-alternate.png'
  },
  {
    id: 14,
    title: '中创应用服务器：以AI重塑企业数字化竞争力',
    date: '10/24',
    month: '10',
    year: '2025',
    description: '当前，人工智能技术正以前所有的速度重塑各行业。从生产制造到金融服务，AI应用广泛。',
    image: '/images/news/news-alternate.png'
  },
  {
    id: 15,
    title: '实力彰显！中创股份荣登2025数字生态500强榜单',
    date: '10/24',
    month: '10',
    year: '2025',
    description: '近日，由BP商业评刊主办的2025数字生态大会圆满落幕。中创股份荣登榜单。',
    image: '/images/news/news-alternate.png'
  },
  {
    id: 16,
    title: '中软协2024中国软件创新发展大会成功召开',
    date: '10/23',
    month: '10',
    year: '2025',
    description: '今日，由中国软件行业协会主办的2025软件创新发展大会在苏州隆重召开。',
    image: '/images/news/news-alternate.png'
  },
  {
    id: 17,
    title: 'AI重塑软件 赋能产业未来 中创股份出席2025软件技术大会',
    date: '12/08',
    month: '12',
    year: '2025',
    description: '近日，2025软件技术大会在北京国家会议中心隆重举行。本次大会聚焦AI赋能。',
    image: '/images/news/news-tech.png'
  },
  {
    id: 18,
    title: '数智医疗，信创未来——中创股份荣选出席医疗信息解决方案研讨会',
    date: '11/19',
    month: '11',
    year: '2025',
    description: '近日，山东信息化学会淮坊市卫生健康委员会联合主办医疗信息解决方案研讨会。',
    image: '/images/news/news-tech.png'
  },
  {
    id: 19,
    title: '第二届教育信息技术应用创新大赛决赛举办',
    date: '11/13',
    month: '11',
    year: '2025',
    description: '由中国教育技术协会与中国教育技术协会主办的大赛决赛在浙江大学举行。',
    image: '/images/news/news-tech.png'
  },
  {
    id: 20,
    title: '数智医疗、信创未来——中创股份荣邀出席医疗信息创新解决方案研讨会',
    date: '11/11',
    month: '11',
    year: '2025',
    description: '近日，医疗信息创新解决方案研讨会日照站成功举办。本次会议由多家机构共同参与。',
    image: '/images/news/news-tech.png'
  }
]

export function CompanyNewsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(allNews.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentNews = allNews.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 0)
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 3xl:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* News List */}
        <div className="space-y-8 md:space-y-12 mb-8 md:mb-12">
          {currentNews.map((item) => (
            <article key={item.id} className="flex gap-6 md:gap-8 border-b border-border pb-8 md:pb-12">
              {/* Date Column */}
              <div className="flex-shrink-0 text-center">
                <div className="text-primary font-bold text-2xl md:text-3xl leading-none mb-2">
                  {item.month}
                </div>
                <div className="text-foreground text-sm md:text-base mb-2">-</div>
                <div className="text-foreground text-sm md:text-base mb-2">
                  {item.date.split('/')[1]}
                </div>
                <div className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded inline-block">
                  {item.year}
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Image Column */}
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-56 h-40 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm border border-border rounded disabled:opacity-50 hover:bg-muted transition-colors"
          >
            首页
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm border border-border rounded disabled:opacity-50 hover:bg-muted transition-colors"
          >
            上一页
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 text-sm rounded transition-colors ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'border border-border hover:bg-muted'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm border border-border rounded disabled:opacity-50 hover:bg-muted transition-colors"
          >
            下一页
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm border border-border rounded disabled:opacity-50 hover:bg-muted transition-colors"
          >
            尾页
          </button>
        </div>
      </div>
    </section>
  )
}
