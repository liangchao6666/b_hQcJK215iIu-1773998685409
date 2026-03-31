"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { MapPin, Users, GraduationCap, ChevronDown, ChevronUp, Mail } from "lucide-react"
import { Header } from "@/components/shared/header"
import { getNavItems } from "@/components/shared/nav-data"

type Job = {
  id: string
  title: string
  location: string
  headcount: string
  education: string
  category: string
  duties: { heading: string; items: string[] }[]
  requirements: { heading: string; items: string[] }[]
}

// 社招岗位
const socialJobs: Job[] = [
  {
    id: "senior-middleware-dev",
    title: "一、中间件资深研发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "社招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "架构设计与核心攻坚：负责中间件产品的需求分析、架构演进与核心模块开发，主导技术方案制定，产出高质量设计文档与技术规范，攻克高并发、高可用场景下的技术难题；",
          "性能与稳定性提升：持续优化基础服务的性能与可靠性，提升系统SLA。主导线上故障的快速定位与根因分析，保障系统长期稳定运行；",
          "技术前瞻与创新：洞察行业前沿技术（如云原生、AI），主导系统架构重构与技术选型，推动技术创新在中间件领域的落地应用；",
          "全生命周期管理：深度参与产品从技术选型、架构设计、开发测试到部署运维的全过程，确保产品高质量交付；",
          "团队赋能与建设：指导初中级工程师成长，制定并推广技术规范与最佳实践，积极参与团队技术氛围营造和能力体系建设。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机或相关专业，5年以上后端或中间件开发经验；",
          "编程功底：精通Java/C++中至少一种语言，深入理解语言底层原理、内存模型及主流开源框架的实现机制；",
          "分布式与中间件：精通分布式系统理论，对负载均衡、缓存、消息队列、服务网格等核心技术有深刻理解和丰富的实战经验；",
          "性能调优专家：具备卓越的异常排查与性能优化能力，熟悉JVM原理与调优，能熟练运用各种工具进行系统性诊断；",
          "操作系统与网络：熟悉Linux操作系统内核及网络协议栈，精通Shell/Python等脚本编程；",
          "云原生实践：深入理解Spring Cloud微服务架构，精通ZooKeeper、Nacos等服务治理组件；熟悉Kubernetes、Docker，有实际云原生改造或开发经验；",
          "AI赋能研发（必备）：具备AI辅助开发能力，能高效利用AI工具进行代码生成、智能审查、故障辅助排查及技术文档撰写，提升研发效能；",
          "具备卓越的逻辑思维能力、复杂问题分析与拆解能力；",
          "具备优秀的技术文档撰写能力和跨团队沟通协作能力。",
          "加分项：有将大模型等AI技术应用于中间件智能运维、诊断调优的落地经验；有开源社区深度贡献、团队技术管理或指导经验者优先。",
        ],
      },
    ],
  },
  {
    id: "senior-data-search-dev",
    title: "二、资深开发工程师（数据搜索类）",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "社招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "负责核心业务系统的设计、开发与维护，保障系统的稳定性与可扩展性；",
          "根据业务需求完成系统分析、接口设计及代码实现；",
          "主导系统性能优化与数据库结构调优，确保高并发场景下的运行效率；",
          "参与技术方案评审与代码质量管理，推动团队工程化与规范化建设；",
          "解决复杂的系统问题和技术难题，提升整体开发效率与产品质量；",
          "关注前沿技术，探索AI技术在数据搜索领域的应用。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机相关专业，5年及以上Java开发经验；",
          "精通Java编程语言，深入理解面向对象设计思想与常见设计模式，具备扎实的并发编程、网络编程基础；",
          "具备扎实的分布式系统设计与性能调优经验，熟悉SpringCloud/Dubbo等微服务框架，了解Redis、Kafka等中间件协同使用技巧；",
          "精通数据库原理及SQL优化，熟练使用MySQL/Oracle等关系型数据库，了解NoSQL数据库特性，具备缓存、消息队列等中间件综合使用经验；",
          "具备AI辅助开发能力，能运用大模型进行需求分析、代码生成、故障排查，有AI落地实践经验者优先；",
          "具有良好的编码习惯与工程化思维，能独立承担系统模块设计与实现，有开源项目贡献或技术社区活跃者优先；",
          "具备良好的沟通能力、团队协作意识与问题分析能力，能承受项目攻坚压力，具备技术方案落地推进能力。",
        ],
      },
    ],
  },
  {
    id: "mid-level-dev",
    title: "三、中级研发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "社招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "功能开发与交付：参与中间件产品的需求分析和功能开发，独立完成高质量模块代码编写、单元测试及上线部署；",
          "问题排查与优化：参与系统性能分析和常见问题排查，协助解决开发测试及线上运行过程中的技术难题；",
          "文档建设与知识分享：负责相关技术文档的编写和维护，学习研究主流中间件技术，积极参与团队内部技术分享。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机相关专业，3-5年后端开发经验；",
          "扎实的编程基础：熟练掌握Java或C++，对数据结构、算法设计、操作系统和计算机网络等基础学科有扎实理解；",
          "Linux与容器化：熟悉Linux操作系统及常用命令，能编写Shell脚本；了解Docker、Kubernetes等容器化技术；",
          "中间件基础：熟悉常用中间件的一种或多种，了解其基本原理、配置和常见应用场景；",
          "分布式基础：理解分布式系统基本概念，熟悉多线程编程和网络编程，具备基本的性能优化意识与问题排查思路；",
          "AI驱动开发（必备）：熟练使用AI辅助编程工具，能高效利用AI进行代码生成、代码审查、Bug排查及技术文档撰写，显著提升日常开发效率；",
          "工程素养：具备良好的编码习惯，遵循代码规范，有代码整洁意识，能独立负责模块级开发任务；",
          "综合素质：具备优秀的自驱力、学习能力和沟通协作能力，能快速拥抱新技术并应用于实践。",
          "加分项：有中间件研发经验或参与过开源项目者优先。",
        ],
      },
    ],
  },
  {
    id: "frontend-dev",
    title: "四、前端开发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "社招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "参与公司通用业务组件库的设计、开发与日常维护，抽象高频业务场景，提供高质量、易扩展的组件资产。",
          "架构支撑与重构：深入理解B端项目架构，参与大型前端项目的重构或组件库升级改造。",
          "跨团队协作与交付：与产品经理、UI设计师和后端工程师紧密协作，参与前端技术方案设计，高质量完成产品需求的开发、测试和交付闭环。",
          "关注前端前沿技术，探索AI辅助开发在前端基建及日常工作中的落地场景。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "计算机相关专业，3年以上前端开发经验，深入理解并熟练使用Vue及生态，熟练掌握TypeScript，有大型前端项目实战经验。",
          "具备深度定制开发Vue组件库的经验，熟悉Element等主流UI框架，对组件的设计模式、API规范等有深入理解。",
          "具备大型前端项目重构或技术栈迁移的经验，能够独立分析和解决复杂的技术问题，熟练掌握Webpack、Vite等构建工具及底层原理，具备工程化思维。",
          "具备优秀的逻辑思维能力和业务拆解能力，对代码质量有极高的追求，沟通表达顺畅，能够推动跨团队协作。",
          "对AI辅助编码有实际落地经验，能够借助AI放大提升自身能力与价值。",
        ],
      },
    ],
  },
  {
    id: "product-manager",
    title: "五、产品经理（中间件方向）",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "社招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "产品规划与管理：负责中间件或云原生运维产品的规划、设计与全生命周期管理，制定清晰的产品路线图并驱动落地；",
          "市场洞察与定义：深入分析市场需求、竞争格局与行业技术趋势，结合用户调研，定义产品核心功能和差异化价值；",
          "技术与商业协同：与研发、架构团队紧密协作，确保技术实现与性能、稳定性目标对齐；面向不同用户群体，参与设计产品定价、商业化策略与生态合作；",
          "GTM与推广：输出高质量产品文档，协同市场、销售和解决方案团队，完成产品上市推广、客户赋能与标杆案例打造；",
          "前沿探索：持续跟踪中间件及AI领域前沿技术动态，探索智能运维、智能诊断等的创新解决方案。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机相关专业，3年以上B2B或技术平台类产品经理经验；",
          "技术理解力：深入理解高并发、高可用分布式系统架构，熟悉缓存、消息队列、服务治理等核心中间件的功能及其典型业务场景；",
          "AI敏感度：熟悉AI技术在基础设施软件领域的应用趋势，了解大模型、智能体等技术在运维、研发提效、根因诊断等场景的落地逻辑者优先；",
          "数据驱动决策：具备较强的数据分析能力，能通过用户行为数据、系统性能指标和市场数据洞察问题，驱动产品迭代优化；",
          "沟通与推动：具备优秀的跨团队沟通和协作能力，能与技术团队高效对话，推动产品从设计到落地的全流程闭环。",
          "加分项：有开源社区运作经验、参与过知名开源项目贡献者优先；具备开发经验及技术背景者优先；逻辑清晰，对技术有热情且具备商业化思维，英语读写能力优秀，可作为工作语言。",
        ],
      },
    ],
  },
  {
    id: "senior-qa",
    title: "六、高级测试工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "社招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "全流程质量保障：负责公司核心业务线（或复杂模块）的全流程质量保障工作，包括参与需求评审、技术方案评审，独立设计测试方案、编写测试用例、执行测试并跟进缺陷生命周期。",
          "自动化测试体系建设：主导所负责系统的接口自动化或UI自动化测试框架的建设与维护，提升回归测试效率。",
          "AI赋能测试提效：探索并应用AI技术（如大语言模型）辅助测试活动，包括但不限于：利用AI生成测试数据和测试用例、基于AI进行UI遍历测试或智能Monkey测试、利用AI辅助缺陷分类和根因分析。",
          "性能与稳定性测试：针对核心接口或业务场景进行性能测试（压力/负载/稳定性），分析系统瓶颈并协助开发人员进行性能调优。",
          "过程改进与风险把控：识别研发流程中的质量风险，推动流程优化和CI/CD（持续集成/持续部署）流水线的完善，提升交付质量。",
          "团队赋能：指导初中级测试工程师，推广AI在测试领域的应用实践。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机/人工智能相关专业，5年以上测试经验。",
          "熟悉软件测试理论、流程及方法，具备独立负责中大型项目测试的经验。",
          "技术栈要求：代码能力（至少熟练掌握一门编程语言：Java/Python/Go，能独立编写测试工具或维护自动化脚本）、数据库（精通SQL，熟练使用至少一种数据库：MySQL/Redis/PostgreSQL）、工具使用（熟练使用Linux命令，熟悉Jenkins、Git、Docker等持续集成/容器化工具）。",
          "AI应用能力：熟悉Prompt Engineering（提示词工程），能够通过大模型（如ChatGPT、Claude、文心一言等）高效生成测试用例、测试数据或测试代码；了解AI辅助测试工具（如TestSprite、Mabl、Applitools等）的使用。",
          "具备优秀的逻辑思维能力和问题定位能力，能从测试角度提出对产品的改进建议。",
          "强烈的责任心，具有owner意识，能够承受一定的工作压力。对新技术敏感，乐于探索AI在质量保障领域的应用场景。",
          "加分项：有大型分布式系统、高并发项目测试经验者优先；有性能测试（JMeter/Locust）实战经验者优先；有AI产品（如LLM应用、AIGC平台、智能推荐系统）测试经验者优先；熟悉机器学习基础概念，有使用Python进行数据分析或模型评估经验者优先；有利用AI生成代码（GitHub Copilot、Cursor等）提升测试开发效率的实践经验者优先。",
        ],
      },
    ],
  },
  {
    id: "qa-engineer",
    title: "七、测试工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "社招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "制定测试计划，组织编写测试用例及方案等；",
          "参与策划、需求、设计、测试、手册等相关评审；",
          "执行测试用例，分析测试结果，编写测试小结、测试报告；",
          "对测试进度进行跟踪，识别测试风险并主动汇报；",
          "负责测试经验积累，测试优秀文档、案例的收集，维护测试资产库并定期组织培训分享；",
          "负责与各利益相关方沟通，保障项目测试进展及质量；",
          "负责产品测试团队成员管理；",
          "负责组织产品测试各阶段评审及验收；",
          "进行缺陷跟踪和管理，确保测试覆盖全面；",
          "持续改进测试方法和工具，提升团队整体测试能力。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机、软件相关专业，3年以上测试经验；",
          "熟悉Linux系统，精通一种或多种语言（如Python、Shell等），有工具、平台开发经验者优先；",
          "具备自动化测试经验优先；",
          "熟练掌握软件测试理论、方法和流程，包括黑盒测试、白盒测试、灰盒测试等，具备较强的逻辑思维能力；",
          "熟悉常用的测试工具和框架如Jmeter、Loadrunner等；",
          "具备良好的团队合作精神，善于协调沟通，具备较高的问题推动解决能力；",
          "有学习欲望，具有自我持续提升的内驱力。",
        ],
      },
    ],
  },
]

// 校招岗位
const campusJobs: Job[] = [
  {
    id: "campus-java-dev",
    title: "一、Java开发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "校招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "参与中间件产品研发，完成相应模块软件的设计、开发、编程任务；",
          "协助优化中间件分布式系统性能，排查问题并保障系统高可用；",
          "运用AI辅助开发工具提升效率，参与工程化工具、脚本开发；",
          "进行程序单元、功能的测试，查出软件存在的缺陷并保证其质量；",
          "完成项目相关文档和质量记录。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机及相关专业；",
          "掌握Java，理解面向对象、设计模式，熟悉SpringBoot等开发框架；",
          "掌握MySQL、Redis，具备数据结构、算法及操作系统核心知识；",
          "对技术有好奇心，持续关注熟悉前沿技术，会用AI辅助开发工具者优先；",
          "有良好的逻辑思维能力、较强的分析和解决问题能力。",
        ],
      },
    ],
  },
  {
    id: "campus-c-dev",
    title: "二、C开发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "校招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "参与中间件产品研发，完成相应模块软件的设计、开发、编程任务；",
          "协助优化中间件分布式系统性能，排查问题并保障系统高可用；",
          "运用AI辅助开发工具提升效率，参与工程化工具、脚本开发；",
          "进行程序单元、功能的测试，查出软件存在的缺陷并保证其质量；",
          "完成项目相关文档和质量记录。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机及相关专业；",
          "掌握C、Vue等相关技术；具备系统级编程思维，精通数据结构与经典算法；",
          "对于面向对象和设计模式有比较清晰的认识；",
          "对技术有好奇心，持续关注熟悉前沿技术，会用AI辅助开发工具者优先；",
          "有良好的逻辑思维能力、较强的分析和解决问题能力。",
        ],
      },
    ],
  },
  {
    id: "campus-qa",
    title: "三、测试工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "校招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "结合软件设计需求，设计测试用例与方案；",
          "参与公司测试工作，将测试与前沿Agent技术融合，提升测试效率；",
          "探索AI在测试中的应用，实现用例生成、缺陷分类等智能化提效；",
          "优化测试框架，根据要求编写测试脚本、开发测试工具。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机及相关专业；",
          "熟练掌握Python/Java其中一门，能独立编写测试工具或脚本；",
          "掌握软件测试基础理论，精通SQL，熟悉Linux常用命令，有良好的问题定位与协作能力；",
          "了解中间件基础，会用AI工具做测试提效、有自动化测试经验者优先。",
        ],
      },
    ],
  },
  {
    id: "campus-ops",
    title: "四、运维工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "校招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "负责机房日常巡检及管理，维护公司系统正常运行；",
          "参与网络管理及网络安全技术防护工作，及时排除突发故障；",
          "维护VMware虚拟化及linux虚拟化平台的运行及管理；",
          "探索AI运维落地，关注AI提效，实现故障智能诊断等；",
          "熟悉日常办公设备及办公软件操作，支持重要部门的办公自动化支持。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机相关专业；",
          "熟悉Linux系统操作，具备操作系统安装部署能力；",
          "了解IBM、DELL、曙光、华为等服务器的安装及调试，对于常见故障能及时排除；",
          "有国产化服务器、操作系统、数据库的使用及运维经验；",
          "具备快速学习前沿AI技术能力，将其高效应用于日常工作；",
          "具有网络系统、信息安全等相关证书者优先。",
        ],
      },
    ],
  },
  {
    id: "campus-ai",
    title: "五、AI算法工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "硕士及以上",
    category: "校招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "深度挖掘与梳理项目AI技术应用需求，设计并优化适配业务场景的AI算法；",
          "结合具体业务场景，设计并落地AI模型，制定科学的模型训练策略与优化方案；",
          "构建完善的模型性能评估体系与调优方案，系统验证模型效果，精准定位技术瓶颈并推动模型的持续迭代升级；",
          "协同团队完成AI技术方案设计，保障研发流程规范与高效推进；",
          "持续跟踪与深入研究AI领域前沿技术，探索技术在业务中的落地可行性，推动团队技术栈迭代与核心竞争力提升。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "硕士及以上学历，计算机、人工智能等相关专业，神经网络、强化学习方向优先；",
          "熟悉掌握Python，精通PyTorch/TensorFlow至少一种主流深度学习框架；",
          "具备扎实的机器学习理论基础，具备良好的业务需求理解能力；",
          "熟悉主流AI Agent的使用，持续研究AI领域前沿技术；",
          "具备良好的逻辑思维能力，有较强的问题分析和解决能力。",
        ],
      },
    ],
  },
  {
    id: "campus-frontend",
    title: "六、前端开发工程师",
    location: "北京、武汉、成都、哈尔滨等",
    headcount: "招聘人数不限",
    education: "本科及以上",
    category: "校招",
    duties: [
      {
        heading: "岗位职责",
        items: [
          "负责PC端、app、小程序等前端相关开发，确保界面体验；",
          "参与通用组件、类库与前端工具函数建设，编写开发文档；",
          "关注前端AI提效，优化前端性能，提升页面响应速度、加载效率及系统安全性；",
          "与后端、产品、测试等角色高效协作，确保功能联调与项目交付；",
          "参与前端构建流程、CI/CD流水线优化，提升部署效率；",
          "协助产品设计团队优化用户体验，持续跟踪反馈并迭代改进。",
        ],
      },
    ],
    requirements: [
      {
        heading: "任职要求",
        items: [
          "本科及以上学历，计算机相关专业；",
          "熟悉HTML、CSS、JS等常用前端技术栈，熟练使用ElementUI组件；",
          "对技术有好奇心，持续关注熟悉前沿技术，会用AI辅助开发工具者优先；",
          "有良好的逻辑思维能力、较强的分析和解决问题能力。",
        ],
      },
    ],
  },
]

const jobs: Job[] = [...socialJobs, ...campusJobs]

type JobCardProps = {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background transition-all duration-300">
      <button
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-3">
            <span className={`h-2 w-2 flex-shrink-0 rounded-full ${open ? "bg-primary" : "bg-border"} transition-colors duration-300`} />
            <h3 className="text-base font-semibold text-foreground lg:text-lg">{job.title}</h3>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3 pt-0.5">
          <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? "border-primary/30 bg-primary/5 text-primary" : "border-border bg-background text-muted-foreground"}`}>
            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </div>
      </button>

      <div className={`transition-all duration-300 ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <div className="border-t border-border/50 px-6 pb-6 pt-5">
          <div className="grid gap-6 lg:grid-cols-2">
            {job.duties.map((section, i) => (
              <div key={i}>
                <h4 className="mb-3 text-sm font-semibold text-foreground">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {job.requirements.map((section, i) => (
              <div key={i}>
                <h4 className="mb-3 text-sm font-semibold text-foreground">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-border/40 pt-5">
            <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
              <Mail size={16} />
              投递简历：wu_wting@inforbus.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CareersContent() {
  const navItems = useMemo(() => getNavItems("/about/careers"), [])

  return (
    <main>
      {/* Hero Banner - 按照应用服务器页面样式修改 */}
      <div className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[420px] 3xl:h-[554px]">
        {/* Banner image */}
        <img
          src="/images/careers/banner.png"
          alt="加入我们"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <Header navItems={navItems} variant="overlay" isDarkBg={false} />

        {/* Main title and subtitle text content */}
        {/* 按照 middleware 页面的排版布局：左边 21.7% 的 padding */}
        <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: '21.7%' }}>
          {/* Title: 采用 middleware 的字体样式 */}
          <h1
            className="font-sans font-bold text-[#332C2B]"
            style={{ fontSize: 'clamp(14px, 2vw, 28px)', lineHeight: '1.3' }}
          >
            加入中创
          </h1>

          {/* Red accent line - 同 middleware 页面 */}
          <div
            className="bg-[#BF1920]"
            style={{ width: 'clamp(40px, 4vw, 60px)', height: '3px', marginTop: 'clamp(8px, 1.2vw, 18px)' }}
          />

          {/* Subtitle 1 */}
          <p
            className="font-sans font-normal text-[#332C2B]"
            style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: '1.5', opacity: 0.8, marginTop: 'clamp(6px, 0.8vw, 12px)' }}
          >
            一起推动中国软件基础设施的自主创新
          </p>

          {/* Subtitle 2 */}
          <p
            className="font-sans font-normal text-[#332C2B]"
            style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: '1.5', opacity: 0.8, marginTop: 'clamp(4px, 0.6vw, 8px)' }}
          >
            让技术更好地服务于数字中国建设
          </p>
        </div>

        {/* Action buttons - 采用 middleware 页面的按钮样式 */}
        <div className="absolute bottom-10 z-20 flex flex-row items-center gap-3 lg:bottom-14 3xl:bottom-20 3xl:gap-4" style={{ left: '21.7%' }}>
          <Link
            href="#jobs"
            className="group inline-flex items-center justify-center rounded bg-[#BF1920] px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#a8151b] hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 md:text-base 3xl:px-8 3xl:py-3 3xl:text-lg"
          >
            查看职位
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 1L7 7.5L1 14" stroke="white" strokeWidth="2" />
            </svg>
          </Link>
          <Link
            href="mailto:wu_wting@inforbus.com"
            className="group inline-flex items-center justify-center rounded border-2 border-[#BF1920] bg-transparent px-6 py-2.5 text-sm font-medium text-[#BF1920] shadow-lg transition-all duration-300 hover:bg-[#BF1920] hover:text-white hover:shadow-xl hover:shadow-[#BF1920]/30 active:scale-95 md:text-base 3xl:px-8 3xl:py-3 3xl:text-lg"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2 transition-colors duration-300">
              <path d="M3 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V11C15 11.5304 14.7893 12.0391 14.4142 12.4142C14.0391 12.7893 13.5304 13 13 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M15 5L8 9L1 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            投递简历
          </Link>
        </div>
      </div>

      {/* Why us */}
      <section id="jobs" className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {[
              { icon: "🏢", title: "信创行业领军", desc: "国内中间件领域头部企业，深耕20余年" },
              { icon: "🚀", title: "技术驱动成长", desc: "持续技术创新，鼓励每位员工挑战自我" },
              { icon: "🤝", title: "协作共赢文化", desc: "开放包容的团队氛围，共享成长与荣誉" },
              { icon: "🎯", title: "广阔发展空间", desc: "完善晋升通道，助力职业发展无上限" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-5 3xl:p-6">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="text-sm font-semibold text-foreground 3xl:text-base">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground 3xl:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-20">
        <div className="mb-8 flex flex-col gap-4 3xl:mb-10">
          <h2 className="text-xl font-bold text-foreground lg:text-2xl 3xl:text-3xl">在招职位</h2>
        </div>

        {/* 社招岗位 */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground lg:text-xl">社招岗位</h3>
          <div className="flex flex-col gap-3 3xl:gap-4">
            {socialJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* 校招岗位 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground lg:text-xl">校招岗位</h3>
          <div className="flex flex-col gap-3 3xl:gap-4">
            {campusJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact banner */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-primary/15 bg-background p-8 text-center shadow-sm lg:flex-row lg:justify-between lg:text-left 3xl:p-10">
            <div>
              <h3 className="text-lg font-bold text-foreground lg:text-xl 3xl:text-2xl">没有找到合适的岗位？</h3>
              <p className="mt-1.5 text-sm text-muted-foreground 3xl:text-base">
                欢迎发送简历至我们的招聘邮箱，我们会在有合适岗位时第一时间联系您。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
