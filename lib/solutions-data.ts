export interface SolutionDetail {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  overview: string
  overviewHighlight?: string
  highlights: { icon: string; title: string; desc: string }[]
  architecture: {
    title: string
    desc: string
    image: string
    images?: { title: string; image: string }[]
  }
  features: { title: string; desc: string }[]
  benefits: { label: string; value: string }[]
  values?: { title: string; desc: string }[]
  useCases: { title: string; desc: string }[]
  relatedProducts: ({ name: string; href: string } | { name: string; desc: string; href: string })[]
  platformNote?: string
}

export const solutions: SolutionDetail[] = [
  {
    slug: "ai-agent",
    title: "企业级全场景 AI 智能体管理平台解决方案",
    subtitle: "以任务为导向、以领域为核心的智能体中央调度平台",
    heroImage: "/images/solutions/solutions-banner.png",
    overview: "随着大语言模型（LLM）技术的爆发，企业对 AI 的需求已从简单的对话问答转向深度的业务协同。本解决方案旨在构建一套以任务为导向、以领域为核心的企业级智能体管理平台。本平台通过整合底层大模型能力、RAG（检索增强生成）知识库以及 AI 安全防护机制，向上对接互联网及内网用户，中台实现智能体的全生命周期管理（AgentMgt、UserMgt、RAGMgt），核心层通过任务与领域（Task 和 Domain）引擎实现业务逻辑的自动化编排，并通过强大的连接器（Connection）触达 ERP、数据库、WeChat 等各类生产系统。",
    highlights: [
      { icon: "deploy", title: "打通业务最后一公里", desc: "传统 LLM 往往是孤岛，本方案通过 Connection 层实现与现有 ERP、RDB、Email 等系统的深度集成，让 Agent 具备手的能力，从会说到会做。" },
      { icon: "monitor", title: "知识沉淀与共享", desc: "利用 RAG 机制将企业私有知识（如规章制度、技术文档）转化为 Agent 的即时背景知识，解决大模型幻觉问题。" },
      { icon: "govern", title: "多领域敏捷支撑", desc: "通过 Domain A/B/C 的划分，实现不同业务部门（HR、销售、IT）的隔离与协同，确保任务处理的专业性。" },
      { icon: "decouple", title: "全链路安全可控", desc: "底座内置 AI Security 模块，针对数据脱敏、内容审查、访问授权进行全方位监控，满足企业合规性需求。" }
    ],
    architecture: {
      title: "平台架构",
      desc: "采用分层设计，从用户交互层、AGENT Platform 中央管理、Task 和 Domain 分层引擎、Connection 连接器，到底层 LLM、RAG 和 AI Security 三大支撑能力，形成完整的智能体中央调度体系，支持智能体全生命周期管理。",
      image: "/images/diagrams/ai-agent-arch.png"
    },
    features: [
      { title: "多端响应式交互", desc: "AgentWebSite 支持跨设备访问，提供流畅的对话式交互体验。" },
      { title: "RAG 检索增强", desc: "支持多种格式文档上传与自动向量化，使 Agent 能够基于企业最新文档进行精准答复。" },
      { title: "可视化任务编排", desc: "支持对 Task 进行流转设计，定义 Agent 在遇到特定条件时的决策分支。" },
      { title: "异构系统桥接", desc: "WebSSH：允许 IT Support Agent 直接对服务器进行远程诊断。\nRDB Connection：实现 Agent 对数据库的自然语言查询 (Text-to-SQL)。" },
      { title: "安全防御体系", desc: "AI Security 模块对敏感词、隐私字段（如身份证、工资条）进行自动过滤。" },
      { title: "企业级权限管理", desc: "支持用户、角色、资源的细粒度权限控制，满足企业信息安全需求。" }
    ],
    benefits: [
      { label: "开发效率提升", value: "5-10倍" },
      { label: "业务响应时间", value: "-70%" },
      { label: "人工成本降低", value: "-60%" },
      { label: "系统可用性", value: "99.99%" }
    ],
    values: [
      { title: "降低开发门槛", desc: "业务人员可通过配置 AgentMgt 和 Task 模块快速上线智能体，无需深度编写 LLM 调用代码。" },
      { title: "提升响应效率", desc: "通过 ASKHR 和 IT Support Agent，实现 7x24 小时自动响应，显著降低人力资源与运维成本。" },
      { title: "决策数据化", desc: "通过连接 ERP 和 RDB，Agent 能够实时调取最新数据生成分析报告，辅助管理层决策。" },
      { title: "架构可扩展性", desc: "支持 Domain 的横向扩展。当企业业务增加时，只需新增 Domain 模块和对应的 Connection 即可快速集成。" }
    ],
    useCases: [
      { title: "智慧 HR 咨询 (ASKHR Agent)", desc: "员工询问：我的年假还剩几天？流程：用户请求 - AgentPlatform - ASKHR Agent - Connection (RDB) - ERP 系统。结果：Agent 自动查询考勤库并给出准确答复。" },
      { title: "智能 IT 运维 (IT Support Agent)", desc: "运维人员：某服务器 CPU 占用过高，请排查。流程：用户请求 - IT Support Agent - Connection (WebSSH) - 执行指令 - 观察结果。结果：Agent 反馈进程列表并建议重启相关服务。" },
      { title: "销售数据驱动 (Sales Agent)", desc: "销售主管：分析上季度华东区销售额下滑原因。流程：Sales Agent - RAG (读取季度报告) + Connection (RDB 查询销售明细) - 生成分析报告。结果：Agent 生成数据驱动的分析结论，支撑决策。" }
    ],
    relatedProducts: [
      { name: "大模型 (LLM)", desc: "支持私有化部署（如 Llama 3、DeepSeek）或调用云端 API。", href: "/products" },
      { name: "向量数据库 (Vector DB)", desc: "用于 RAGMgt，基于 Pgvector。", href: "/products" },
      { name: "开发工具", desc: "Lite XL/Zed/Neovim 用于开发 Domain 逻辑，Apache Airflow 用于 Task 调度。", href: "/products" },
      { name: "AI 安全组件", desc: "企业级网关与 AI 内容审查插件。", href: "/products" }
    ],
    platformNote: "本智能体平台架构不仅是一个简单的对话界面，更是一个集成企业全量数据与执行能力的中央调度器。通过 LLM + RAG + Connection 的有机结合，真正实现了 AI 赋能业务流程的全面转型。"
  },
  {
    slug: "disaster-recovery",
    title: "信创中间件双活容灾解决方案",
    subtitle: "基于准实时数据同步技术，提供专业的国产中间件高可用容灾服务",
    heroImage: "/images/solutions/solutions-banner.png",
    overview: "在数字化转型与信创改造的双重驱动下，核心业务系统对中间件的高可用性提出了更高要求。传统主备容灾模式存在切换中断、数据丢失、RTO/RPO难以保障等痛点，已无法满足金融、电信、能源等关键行业的连续性要求。中创信创中间件双活容灾解决方案，基于自主研发的数据同步工具软件，提供准实时数据同步能力，实现消息中间件、缓存中间件的本地或异地集群间数据热备份。方案支持数据双向同步，两侧集群均处于活跃可用状态，任意一侧均可独立承载业务读写，真正实现双活架构。",
    overviewHighlight: "提供热备能力，服务随时可用，业务应用容灾切换的工作量小、操作少、耗时短。",
    highlights: [
      { icon: "deploy", title: "双活保畅", desc: "区别于传统的冷备模式，本方案实现真正的双活架构。两侧集群均可同时提供读写服务，无需等待数据同步完成，无需临时启动服务。当故障发生时，业务流量可直接切换至健康集群，整个过程近乎无感知，RTO趋近于零，保障业务连续性。" },
      { icon: "monitor", title: "高性能", desc: "采用增量数据捕获与高效传输协议，同步效率达到业界领先水平。数据同步延迟低至毫秒级，确保两侧集群数据高度一致，满足高频交易、实时发布等对时效性要求高的业务场景。" },
      { icon: "govern", title: "高可用", desc: "中间件集群本身具备高可用能力，叠加数据同步工具的高可用设计，形成双重保障机制。工具自身也支持高可用集群部署，确保同步链路持续稳定运行，为业务连续性提供坚实支撑。" },
      { icon: "decouple", title: "易部署", desc: "数据同步工具采用轻量化设计，无需繁杂的参数调优与脚本编写。同步规则简洁清晰，大幅降低运维门槛，实现开箱即用的方案体验。" }
    ],
    architecture: {
      title: "容灾架构",
      desc: "采用主主容灾架构，两个数据中心运行相同的应用与数据，通过国产中间件提供的数据同步能力，实现无缝的故障转移。支持消息中间件(MQ)和关系型数据库(RDS)的双向实时同步。",
      image: "/images/diagrams/mq-disaster-recovery-arch.png",
      images: [
        { title: "MQ双活容灾架构", image: "/images/diagrams/mq-disaster-recovery-arch.png" },
        { title: "RDS双活容灾架构", image: "/images/diagrams/rds-disaster-recovery-arch.png" }
      ]
    },
    features: [
      { title: "双向同步", desc: "支持两个集群间的双向数据实时同步，两侧均可独立承载业务流量。通过全局唯一标识与环形检测算法，彻底解决双向同步场景下的数据循环问题，确保数据流向清晰可控。" },
      { title: "并发处理", desc: "采用多线程并行处理与批量传输机制，充分利用网络带宽与计算资源。支持按实例规模进行并发调优，轻松应对高吞吐业务场景下的同步压力。" },
      { title: "安全传输", desc: "全链路支持TLS/SSL加密传输，保障数据在跨域同步过程中的安全性，满足信创环境的安全合规要求。" },
      { title: "进度监控", desc: "提供完善的同步状态监控能力，采集同步延迟、吞吐量、堆积量等关键指标，运维人员可全面掌握同步链路健康状态。" }
    ],
    benefits: [
      { label: "故障转移时间", value: "趋近于零" },
      { label: "数据丢失", value: "零丢失" },
      { label: "系统可用性", value: "99.999%" },
      { label: "部署周期", value: "缩短50%" }
    ],
    useCases: [
      { title: "关键业务系统保障升级", desc: "适用于金融核心交易、能源调度控制、电信计费等对连续性要求极高的关键业务。通过构建双活架构，使系统可用性大幅提升，满足行业监管对业务连续性的严苛要求。" },
      { title: "中间件迁移上云", desc: "数据同步工具同样可用于集群迁移，为企业云化转型提供平滑迁移路径。通过双活同步实现本地数据中心与云平台的数据实时对齐，大幅降低迁移风险，保障业务平稳上云。" },
      { title: "国产化改造数据迁移", desc: "在信创替代过程中，实现国外中间件（如Kafka、Redis）向中创中间件的平滑过渡。支持异构数据源同步，保障改造期间业务不中断、数据零丢失。" }
    ],
    relatedProducts: [
      { name: "InforSuite HTMQ", href: "/middleware" },
      { name: "InforSuite HCMQ", href: "/middleware" },
      { name: "InforSuite Cloud MQ", href: "/middleware" },
      { name: "InforSuite RDS", href: "/middleware" }
    ]
  },
  {
    slug: "data-platform",
    title: "数据中台解决方案",
    subtitle: "构建企业统一的数据底座，实现数据资产化与智能决策",
    heroImage: "/images/solutions/solutions-banner.png",
    overview: "构建企业统一的数据底座，通过汇聚与治理多源数据形成高价值数据资产，依托一站式可视化分析平台洞悉业务全景，并深度融合人工智能服务，实现从数据洞察到智能决策与行动的闭环，赋能业务创新与降本增效。",
    highlights: [
      { icon: "deploy", title: "全域数据集成", desc: "提供高性能数据集成与实时数据流计算能力，实现全域数据的采、算一体，让数据畅通无阻。" },
      { icon: "monitor", title: "资产治理提效", desc: "以元数据为核心，统一主数据、标准与质量，强化数据安全，构建可信、可管的数据资产体系。" },
      { icon: "govern", title: "智能敏捷共享", desc: "建立数据资源共享机制，依托可视化分析与人工智能服务，降低用数门槛，驱动业务从经验决策迈向智能决策。" },
      { icon: "decouple", title: "数据应用", desc: "灵活支持各类数据应用与创新业务，加速业务价值实现。" }
    ],
    architecture: {
      title: "数据中台架构",
      desc: "采用分层设计，从用户层、享层（数据资源共享）、管层（数据治理）、存层（数据存储）到算层（数据计算），形成完整的数据价值链，支持数据的全生命周期管理。",
      image: "/images/solutions/data-platform-arch.png"
    },
    features: [
      { title: "构建统一数据模型", desc: "构建统一数据模型与全链路资产治理，通过质量闭环保障高可用，实现安全合规的数据共享。" },
      { title: "统一汇聚与简化运维", desc: "统一汇聚保障数据一致，工具替代编码简化运维，配置驱动实现敏捷响应。" },
      { title: "实时数据流分析", desc: "基于实时数据流构建多维度数据模型，为业务场景提供实时分析能力。" },
      { title: "可视化大屏开发", desc: "低代码可视化大屏开发，内置丰富组件与图表，支持拖拽式配置，助力项目高效交付。" },
      { title: "自助式数据分析", desc: "集中化自助式数据分析，助力业务洞察与智能决策。" },
      { title: "模型全生命周期管理", desc: "模型全生命周期管理，支持实时推理服务调用，为业务决策提供可靠模型支撑。" }
    ],
    benefits: [
      { label: "接入能力", value: "100+数据源" },
      { label: "兼容能力", value: "100% API标准" },
      { label: "性能提升", value: "15%速度提升" },
      { label: "治理能力", value: "自动脏数据识别" },
      { label: "开发效率", value: "缩短70%" },
      { label: "运维保障", value: "7*24监控告警" }
    ],
    useCases: [
      { title: "高速联网收费数字底座", desc: "构建高速联网收费的数字底座，实现收费数据的统一汇聚、治理和分析，支撑收费业务的智能化运营。" },
      { title: "金融行业大数据业务化转型", desc: "帮助金融机构构建大数据平台，实现客户、产品、交易等数据的统一治理，为精准营销和风控决策提供支撑。" },
      { title: "企业级数据仓库建设", desc: "打破数据孤岛，构建统一的企业级数据仓库，为全员数据应用奠定基础。" },
      { title: "电子政务数智化转型", desc: "支撑政务部门数字化转型，实现政务数据的安全汇聚和深度应用，提升政务服务能力。" }
    ],
    relatedProducts: [
      { name: "天枢数据治理平台", href: "/digital-platform/data-integration" },
      { name: "元穹数据集成平台", href: "/digital-platform/data-integration" },
      { name: "数据流处理平台", href: "/products" },
      { name: "数据可视化大屏软件", href: "/products" },
      { name: "元穹大数据智能分析平台", href: "/products" },
      { name: "元穹AI模型管理平台", href: "/products" },
      { name: "万象数字资产管理平台", href: "/products" }
    ]
  },
  {
    slug: "intelligent-ops",
    title: "智能运维解决方案",
    subtitle: "保障业务永续，让运维驱动增长",
    heroImage: "/images/solutions/solutions-banner.png",
    overview: "在数字化转型与信创改造的关键期，企业IT系统日益复杂，传统的救火式运维不仅成本高昂，更时刻威胁着业务的稳定与收入。我们的智能运维解决方案，致力于彻底改变这一现状。通过构建全景感知、数据驱动、主动智能的新一代运维体系，为您提供从底层基础设施、云平台到上层核心业务应用的一体化监控、智能分析与自动化处置能力。它能提前预警故障、分钟级定位根因，将计划外业务中断降低80%以上，直接守护您的收入生命线。同时，方案深度兼容信创生态，帮助团队从重复性劳动中解放，聚焦于高价值创新，推动运维从成本中心真正转变为业务增长的驱动引擎。",
    highlights: [
      { icon: "deploy", title: "保障业务连续，驱动业务增长", desc: "通过7x24小时全景监控与智能预警，变被动响应为主动干预，极大缩短平均故障修复时间（MTTR），为核心业务流畅运行保驾护航。" },
      { icon: "monitor", title: "提升运维效能，释放人力价值", desc: "利用智能分析压缩告警噪音、精准定位根因，并通过自动化脚本处理重复性任务，将运维人员从繁琐劳动中解放，专注于高价值决策与优化。" },
      { icon: "govern", title: "优化资源投资，实现精细管控", desc: "清晰的资源账本与性能容量分析，帮助识别资源瓶颈与浪费，为IT投资与扩容决策提供精准数据依据，降低成本。" },
      { icon: "decouple", title: "拥抱信创生态，平滑支撑迁移", desc: "深度兼容主流信创技术栈，为党政、金融、能源等关键行业的信息化改造与迁移工程，提供稳定、可靠、可视的智能运维保障底座。" }
    ],
    architecture: {
      title: "智能运维平台架构",
      desc: "中创智能运维平台采用分层设计，从数据采集层、智能分析层、应用管理层到展示可视化层，形成完整的运维体系，支持运维工作的全自动化闭环。",
      image: "/images/solutions/intelligent-ops-arch.png"
    },
    features: [
      { title: "全栈统一监控与数据融合", desc: "打破监控孤岛，实现对从底层基础设施到上层业务应用的端到端、一体化监控，为智能分析提供完整数据基础。" },
      { title: "智能告警与根因诊断", desc: "支持灵活的告警规则与丰富通知方式。通过告警压缩、关联分析与AI根因定位，快速收敛问题，直达故障本源。" },
      { title: "应用性能与用户体验管理", desc: "从用户访问视角出发，对关键业务应用进行全链路性能监控与健康度度量，精准定位应用代码、服务依赖或资源层瓶颈。" },
      { title: "动态拓扑与关联分析", desc: "自动发现并生成反映组件间依赖关系的应用与网络拓扑，结合实时性能数据，实现一张图式可视、可管的关联运维。" },
      { title: "自动化与智能化运维", desc: "支持自定义巡检策略与自动化健康检查。结合运维知识库，实现常见故障的自动化修复或提供处置建议，逐步构建运维自动驾驶能力。" },
      { title: "智能日志分析与安全审计", desc: "集中管理全量日志，利用智能检索、模式识别与关联分析，快速定位异常、回溯安全事件，并满足合规审计要求。" },
      { title: "运维数据可视化", desc: "提供高度可配置的全景可视化大屏与领导驾驶舱，直观展示整体运维态势、核心KPI与业务影响，让运维数据价值一目了然。" }
    ],
    benefits: [
      { label: "接入能力", value: "100+数据源" },
      { label: "兼容能力", value: "100% API标准" },
      { label: "性能表现", value: "15%速度提升" },
      { label: "治理能力", value: "自动脏数据识别" },
      { label: "开发效率", value: "缩短70%" },
      { label: "运维保障", value: "7*24监控告警" }
    ],
    useCases: [
      { title: "混合IT环境统一智能监控", desc: "对包含物理服务器、虚拟机、容器、云资源及信创环境的混合基础设施进行全栈监控与智能分析，实现复杂环境的统一纳管与风险预警。" },
      { title: "业务应用全链路保障", desc: "当核心业务系统出现性能问题时，通过从用户端到服务端的全链路监控与智能诊断，快速定位并解决影响业务流畅性的根本原因，保障应用体验与稳定运行。" },
      { title: "智能告警与自动化运维闭环", desc: "灵活配置告警规则并通过多方式推送告警通知，结合智能分析实现故障根源定位；支持自定义巡检策略，依托知识库完成部分故障自动化处置或提供处理建议，构建从问题发现到解决的一体化运维闭环。" },
      { title: "运维数据价值化与决策支撑", desc: "汇聚多维度运维数据，通过智能分析与可视化呈现，为系统优化、容量规划、资源投资及管理决策提供直观、可靠的数据看板。" }
    ],
    relatedProducts: [
      { name: "中创统一监管平台软件", href: "/products/ump" }
    ]
  },
  {
    slug: "middleware-management",
    title: "中间件统一管理平台解决方案",
    subtitle: "打破烟囱式格局，实现中间件的快速部署、规模化管理、深度运维分析及治理",
    heroImage: "/images/solutions/solutions-banner.png",
    overview: "数智效能底座旨在建设中间件服务及运管能力体系，打破原有烟囱式格局，规范中间件软件来源、种类以及版本，实现中间件的快速部署规模化管理、深度运维分析及中间件治理。推动上层业务与中间件解耦，解决中间件管理中的版本复杂不统一、自动化程度低、运维监控不完善、管理分散等问题，降低中间件管理成本，提升中间件运维效率。",
    highlights: [
      { icon: "deploy", title: "快速部署", desc: "支持中间件的一键式自动化部署，将部署时间从天级缩短至分钟级" },
      { icon: "monitor", title: "深度监控", desc: "全链路性能监控与智能告警，实时掌握中间件运行状态" },
      { icon: "govern", title: "统一治理", desc: "规范中间件版本、配置、安全策略，实现集中化管控" },
      { icon: "decouple", title: "业务解耦", desc: "推动上层业务与底层中间件解耦，提升系统灵活性" }
    ],
    architecture: {
      title: "平台架构",
      desc: "平台采用分层架构设计，包含接入层、服务层、管控层和数据层，通过统一的API网关提供服务接入，实现中间件生命周期的全面管理。",
      image: "/images/diagrams/ai-agent-arch.png"
    },
    features: [
      { title: "自动化部署", desc: "支持多种中间件的自动化安装、配置、升级和卸载，提供模板化部署能力" },
      { title: "性能监控", desc: "实时采集中间件运行指标，提供多维度可视化展示与智能告警" },
      { title: "配置管理", desc: "集中管理中间件配置，支持配置版本对比、回滚和审计" },
      { title: "故障诊断", desc: "提供智能化故障定位与根因分析，快速解决中间件运行问题" },
      { title: "安全管控", desc: "提供中间件安全基线检查、漏洞扫描和安全加固能力" },
      { title: "报表分析", desc: "提供多维度运维报表，包括资源利用率、健康度、安全态势等" }
    ],
    benefits: [
      { label: "部署效率提升", value: "90%" },
      { label: "运维成本降低", value: "40%" },
      { label: "故障发现时间", value: "<3min" },
      { label: "中间件统一纳管率", value: "100%" }
    ],
    useCases: [
      { title: "大型企业中间件集群统一运维管理", desc: "支持多种中间件产品的统一纳管，实现规模化部署、集中化监控和智能化运维，显著降低运维成本和管理复杂度。" },
      { title: "金融行业中间件标准化部署与监控", desc: "提供金融级的可靠性和安全性保障，支持合规性检查和审计追踪，保障金融机构的业务连续性。" },
      { title: "政务云平台中间件服务治理", desc: "实现中间件的统一治理和标准化管理，支持多租户隔离和资源限额控制，满足政务云的要求。" }
    ],
    relatedProducts: [
      { name: "InforSuite UMP", href: "/middleware/management" },
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" }
    ]
  },
  {
    slug: "xinchuang-middleware",
    title: "信创全栈自主可控中间件解决方案",
    subtitle: "构建完全自主可控的国产中间件技术体系",
    heroImage: "/images/solutions/solutions-banner.png",
    overview: "信创全栈自主可控中间件解决方案提供从应用服务器、消息中间件、数据缓存到服务总线的完整中间件产品体系，基于自主研发的核心技术，完全替代国外产品，满足国家信创战略要求。",
    highlights: [
      { icon: "deploy", title: "完全自主", desc: "100%自主研发，无第三方代码依赖" },
      { icon: "monitor", title: "产品完整", desc: "覆盖应用中间件全技术栈，产品体系完整" },
      { icon: "govern", title: "兼容替代", desc: "兼容国际标准，平滑替代国外产品" },
      { icon: "decouple", title: "生态支撑", desc: "支持国产芯片、操作系统、数据库等生态" }
    ],
    architecture: {
      title: "中间件技术体系",
      desc: "包含应用服务器、消息中间件、数据缓存、服务总线等完整产品线，形成自主可控的国产中间件生态体系。",
      image: "/images/diagrams/rds-disaster-recovery-arch.png"
    },
    features: [
      { title: "应用服务器", desc: "兼容Jakarta EE标准的企业级应用服务器" },
      { title: "消息中间件", desc: "支持高吞吐、低延迟的分布式消息中间件" },
      { title: "数据缓存", desc: "内存级的分布式数据缓存解决方案" },
      { title: "服务总线", desc: "企业服务总线，支持异构系统集成" },
      { title: "负载均衡", desc: "高性能四层和七层负载均衡" },
      { title: "统一管理", desc: "全栈中间件统一部署、管理和监控" }
    ],
    benefits: [
      { label: "研发成本", value: "降低40%" },
      { label: "迁移周期", value: "缩短30%" },
      { label: "许可证成本", value: "降低80%" },
      { label: "信创合规", value: "100%达标" }
    ],
    useCases: [
      { title: "国家关键信息基础设施保护", desc: "满足国家对关键基础设施的自主可控要求，构建安全可靠的国产中间件平台。" },
      { title: "金融机构信创改造", desc: "替代国外中间件产品，建设符合信创要求的自主可控金融IT基础设施。" },
      { title: "政府部门系统国产化", desc: "为政务系统提供自主可控的中间件支撑，满足政府信创建设的需要。" }
    ],
    relatedProducts: [
      { name: "InforSuite AS", href: "/middleware" },
      { name: "InforSuite MQ", href: "/middleware/messaging" },
      { name: "InforSuite Cache", href: "/middleware" },
      { name: "InforSuite ESB", href: "/middleware" }
    ]
  }
]
