/* ── Success case data (shared between home page and detail page) ──── */
export const cases = [
  {
    slug: "central-enterprise-middleware-platform",
    title: "央企中间件统一管理平台",
    tag: "企业",
    desc: "为央企构建全栈式自主可控的中间件统一管理平台，实现中间件产品和服务的标准化管理",
    photo: "/images/case-central-enterprise.jpg",
    metrics: "企业级",
  },
  {
    slug: "police-data-governance",
    title: "某市公安局数据治理平台建设项目",
    tag: "政府",
    desc: "建设公安部门数据治理平台，实现海量公安数据的统一管理、质量控制和智能应用",
    photo: "/images/case-government-data.jpg",
    metrics: "数据治理",
  },
  {
    slug: "national-highway-toll-stations",
    title: "全国高速公路标准化收费站项目",
    tag: "交通",
    desc: "建设全国高速公路标准化收费站系统，实现跨地域统一管理和实时交易处理",
    photo: "/images/case-highway-toll.jpg",
    metrics: "全国覆盖",
  },
  {
    slug: "southern-grid-digital-system",
    title: "南方电网全栈式自主可控超大型数字化系统",
    tag: "能源",
    desc: "完成南方电网全栈式自主可控的超大型数字化系统建设，支撑电网业务高效运营",
    photo: "/images/case-energy-grid.jpg",
    metrics: "超大规模",
  },
  {
    slug: "national-investment-finance-system",
    title: "国投财务核心业务系统全栈国产化建设项目",
    tag: "金融",
    desc: "完成国投集团财务核心业务系统的全栈国产化建设，实现金融系统的安全可控",
    photo: "/images/case-finance-core.jpg",
    metrics: "核心系统",
  },
  {
    slug: "zhongchuang-bigdata-platform",
    title: "中创元穹大数据智能分析平台",
    tag: "企业",
    desc: "自主研发的大数据智能分析平台，为企业提供全链路数据处理和智能决策支持",
    photo: "/images/case-bigdata-platform.jpg",
    metrics: "自研产品",
  },
  {
    slug: "zhongchuang-data-integration-platform",
    title: "中创元穹数据集成平台",
    tag: "企业",
    desc: "自主研发的数据集成平台，支持异构数据源集成，实现企业数据统一管理",
    photo: "/images/case-data-integration.jpg",
    metrics: "自研产品",
  },
  {
    slug: "zhongchuang-ai-model-platform",
    title: "中创元穹AI模型管理平台典型案例",
    tag: "企业",
    desc: "自主研发的AI模型管理平台，为企业提供模型训练、部署和管理的全链路解决方案",
    photo: "/images/case-ai-model.jpg",
    metrics: "自研产品",
  },
]

export type CaseItem = (typeof cases)[number]
