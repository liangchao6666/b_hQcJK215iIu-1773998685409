/* ── Data Integration Platform case data ──── */
export const dataIntegrationCases = [
  {
    slug: "maritime-bureau-data-integration",
    title: "多省海事局信息系统数据集成",
    tag: "海事",
    desc: "对分散在各业务系统的海事信息资源进行聚合整合，通过统一的数据接口方式实现协议转换、数据转换和数据聚合，将各海事信息在数据层面进行统一存储和分层管理",
    photo: "/images/cases/di-case-maritime.jpg",
    metrics: "多省覆盖",
  },
  {
    slug: "pharmaceutical-data-warehouse",
    title: "某医药数据仓库建设项目",
    tag: "医疗",
    desc: "为医药企业信息系统建设统一的数据仓库，将分散在各个数据源中的数据进行统一存储管理，提高数据的一致性和可访问性，支撑数据分析和业务决策",
    photo: "/images/cases/di-case-pharmaceutical.jpg",
    metrics: "数据仓库",
  },
  {
    slug: "provincial-market-supervision",
    title: "某省市场监督管理局数据集成",
    tag: "党政",
    desc: "为市场监督管理部门的数据处理和业务分析提供支持，通过数据集成平台统一化管理市场分析数据，为市场监督管理的个性化应用和业务决策提供数据基础",
    photo: "/images/cases/di-case-government.jpg",
    metrics: "省级应用",
  },
]

export type DataIntegrationCaseItem = (typeof dataIntegrationCases)[number]
