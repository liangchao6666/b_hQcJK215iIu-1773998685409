export function TimelineSection() {
  const timeline = [
    { year: "2002年", event: "成立中创软件商用中间件有限公司" },
    { year: "2003年", event: "J2EE应用服务器InforWeb获国家火炬计划项目" },
    { year: "2004年", event: "与北京大学在构件化领域展开合作" },
    { year: "2007年", event: "作为中国发起人中唯一的企业单位，参与发起成立八方(OW2)开源软件国际联盟" },
    { year: "2008年", event: "中创中间件公司入围中央政府采购项目，成为入选产品最多的国产中间件厂商" },
    { year: "2009年", event: "荣获\"献礼新中国成立60周年\"评选之\"最具影响力企业奖\"等四项大奖" },
    { year: "2010年", event: "承担了国家\"核高基\"科技重大专项核心技术研究与产品研发课题" },
    { year: "2011年", event: "核高基国产中间件参考实现及产品发布会在京召开" },
    { year: "2012年", event: "中创Loong智慧平台入选年度创新软件产品" },
    { year: "2014年", event: "中创中间件通过CMMI ML5级评审" },
    { year: "2015年", event: "助力金税三期工程，中创中间件将在全国部署" },
    { year: "2016年", event: "中创中间件亮相\"十二五\"科技创新成就展" },
    { year: "2017年", event: "中创中间件InforGuard UMP荣获\"2017中国十大创新软件产品\"" },
    { year: "2018年", event: "中创中间件成功入围中直产品协议供货采购项目" },
    { year: "2019年", event: "中创中间件荣获2019年度电子信息行业卓越企业" },
    { year: "2020年", event: "中创PaaS平台软件获得\"2020十佳创新软件产品\"称号" },
    { year: "2021年", event: "中创中间件正式成为Jakarta EE工作组企业级成员" },
    { year: "2022年", event: "入围\"2022年度山东省软件和信息技术服务业综合竞争力百强\"名单" },
    { year: "2023年", event: "人民日报点赞全链路关键技术应用研究成果——中创中间件助力建成首个央企全栈式自主可控超大型数字化系统" },
    { year: "2024年", event: "中创股份（688695.SH）在上交所科创板成功上市" },
    { year: "2025年", event: "中创股份荣获国家级专精特新\"小巨人\"企业称号" }
  ]

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-foreground lg:text-4xl">发展历程</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20 md:left-1/2 md:w-0 md:border-l-2 md:border-l-primary" />
          
          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20 md:w-full md:pl-0">
                {/* Timeline dot */}
                <div className="absolute -left-4 top-0 h-4 w-4 rounded-full bg-white ring-4 ring-primary md:left-1/2 md:-ml-2" />
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-0 md:pr-8 md:text-right" : "md:ml-1/2 md:pl-8"}`}>
                  <div className="rounded-lg bg-muted p-4 lg:p-6">
                    <p className="text-sm font-semibold text-primary lg:text-base">{item.year}</p>
                    <p className="mt-2 text-sm text-foreground/80 lg:text-base">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
