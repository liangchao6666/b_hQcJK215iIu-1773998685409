export function CompanyIntroSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-full px-4 lg:px-8" style={{ maxWidth: "1300px" }}>
        {/* Main Introduction */}
        <div className="mb-12 lg:mb-16">
          <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">公司介绍</h2>
          <div className="space-y-4 text-base leading-relaxed text-foreground/80 lg:text-lg">
            <p>
              山东中创软件商用中间件股份有限公司（以下简称"中创中间件"）成立于2002年，是国内领先的基础软件产品与服务提供商，是国家"核高基"科技重大专项支持单位，是国家级专精特新“小巨人”企业，拥有CMMI DEV 5 级资质和 ISO9001 质量体系认证证书，为国际Jakarta EE 工作组企业级会员单位。公司产品曾获得工信部颁布的"国防科学技术进步二等奖"、山东省人民政府颁布的"山东省科学技术进步二等奖"、中国软件行业协会颁布的中国"自主可靠企业核心软件品牌"、"年度创新软件产品"、 "十佳创新软件产品"等多个奖项。
            </p>
            <p>
              中创中间件作为信创领域基础软件的主力军，在中间件行业深耕二十年，致力于推动中间件的技术创新与产品化、产业化，树立了值得信赖的品牌声誉。多款产品列入政府采购目录，被信息技术应用创新工作委员会评为"信息技术应用创新工作委员会卓越贡献成员单位"。系列产品遵循国际及国内中间件主流技术标准，拥有体系化的中间件核心技术，具有自主知识产权，中间件研发水平在国内处于领先水平，并全面适配当前大数据、物联网、云计算等前沿技术，核心产品具备规模化替代国外主流中间件厂商产品的能力，在政府机构、事业单位、军工单位及国有企业等重点行业及领域推广应用，并积累了一批重点行业龙头客户，形成典型场景案例。
            </p>
          </div>
        </div>

        {/* Key Application Areas */}
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "金融领域",
              description: "与国产操作系统、数据库适配多年，在GS银行、ZS银行大型商业银行及国家政策性银行成功应用，实现基础中间件全栈式规模替代"
            },
            {
              title: "税务领域",
              description: "中创工作流中间件在与IBM和Oracle 公司同类产品竞争中胜出，作为国家金税三期工程基础软件平台的重要组成部分，支撑着全国税务四大平台所有业务系统流程业务部署运行"
            },
            {
              title: "交通领域",
              description: "为国家取消省界收费站及武汉城市自由流车联网系统 7年多的稳定可靠运行提供中间件支撑"
            },
            {
              title: "安全产品",
              description: "公司安全产品服务包括全国人大、全国政协30余个部委级网站，覆盖全国31个省、市、自治区"
            },
            {
              title: "能源领域",
              description: "深度参与某电力大型央企数字化转型，实现从单一中间件产品替代到基础中间件全栈式替代的跨越，应用场景从综合办公系统延伸至电力调度等生产运营核心领域，成功打造央企国产化替代标杆"
            },
            {
              title: "智能制造领域",
              description: "公司与中国某制造业百强，探索智能制造转型，使其从'少品种、大批量'转型到'个性化、少批量'，支撑'在途库存'，为企业带来了直接的竞争优势，是工业互联网的典型应用案例"
            }
          ].map((area, index) => (
            <div key={index} className="rounded-lg bg-muted p-6 lg:p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground">{area.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70 lg:text-base">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-12 rounded-lg bg-primary/5 p-6 lg:mt-16 lg:p-10">
          <p className="text-base leading-relaxed text-foreground/80 lg:text-lg">
            基于中创中间件公司市场品牌影响力及自主创新的贡献，中创中间件多次被评"中国十大创新软件企业"，"国家重点新产品"、"中国十大创新产品"等，作为基础软件中间件代表厂商连续入选第二、三届全国军民融合发展高技术成果展，并接受了党和国家领导人检阅。
          </p>
        </div>
      </div>
    </section>
  )
}
