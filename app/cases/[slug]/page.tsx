import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { OtherCases } from "@/components/cases/other-cases"
import { getNavItems } from "@/components/shared/nav-data"
import { cases } from "@/lib/cases-data"

// 静态导出时生成所有案例页面
export function generateStaticParams() {
  return cases.map((c) => ({
    slug: c.slug,
  }))
}

/* ── Extended case detail data ─────────────────────────────── */
const caseDetails: Record<
  string,
  {
    background: string
    challenge: string[]
    solution: string[]
    results: { label: string; value: string }[]
    techStack: string[]
    contentSections: { title: string; text: string; image?: string }[]
  }
> = {
  "central-enterprise-middleware-platform": {
    background:
      "某电力企业中间件数量和版本日益增多，授权管理分散，异地灾备可控性差，传统人工运维效率低、风险高，因此亟需建设统一中间件管理平台，实现版本、授权、实例和灾备统一管控，提高运维效率和业务可靠性。",
    challenge: [
      "中间件版本众多且缺乏全局可视化，难以统一掌控与分析使用情况",
      "中间件授权信息分布分散，使用统计依赖人工，准确性难以保障",
      "中间件实例数量庞大，缺乏统一管控和配置基线管理手段",
      "中间件灾备切换可控性不足，效率低，缺乏集中管控机制",
    ],
    solution: [
      "统一版本管理：建立统一版本库，实时统计产品使用情况",
      "集中授权统计：集中管理授权信息，实现自动汇总与使用监控",
      "实例统一管控：实现中间件实例集中监控、配置基线与生命周期管理",
      "可控灾备切换：提供控制灾备切换界面与自动切换策略、高效的中间件高可用部署以及灾备切换功能，保障业务连续",
    ],
    results: [
      { label: "全局中间件实例", value: "2000+" },
      { label: "管理效率提升", value: "30%+" },
      { label: "人工工作量降低", value: "80%" },
      { label: "灾备切换效率提升", value: "2倍+" },
    ],
    techStack: ["InforSuite AS", "InforSuite LB"],
    contentSections: [
      {
        title: "项目架构",
        text: "平台采用微服务架构，通过虚拟机 Agent 与容器 Operator 分别实现虚拟机和容器环境下中间件的全生命周期管理；结合 Prometheus、Grafana 和 AlertManager 提供统一的监控与告警能力。",
        image: "/images/cases/central-architecture.png",
      },
      {
        title: "核心能力",
        text: "平台提供中间件全生命周期管理能力，包括产品统一管理、实例部署与启停、状态监控与巡检、配置基线管理、告警与策略执行，以及异地灾备保障，实现跨环境统一运维与业务连续性。",
        image: "/images/cases/central-capabilities.png",
      },
    ],
  },
  "telecom-big-data-platform": {
    background:
      "通信大数据行程卡是由工信部指导、三大运营商联合开发的公益性出行服务平台。在疫情防控期间，该平台需要承载全国超6亿用户的实时行程查询需求，日均查询量峰值超过10亿次。面对如此大规模的高并发请求，传统的中间件架构已无法满足业务需求，亟需一套高性能、高可靠的国产中间件技术体系来支撑平台的稳定运行。",
    challenge: [
      "日均查询量峰值超10亿次，需支持极致高并发场景",
      "多运营商数据实时汇聚，要求毫秒级响应延迟",
      "7x24小时不间断服务，系统可用性要求99.99%以上",
      "需在短时间内完成国产中间件的全面替换与部署",
    ],
    solution: [
      "采用中创InforSuite应用服务器集群部署方案，构建多活高可用架构",
      "引入中创消息中间件实现多源数据的异步解耦与实时汇聚",
      "部署中创分布式缓存中间件，提供亿级数据的毫秒级查询响应",
      "通过中创统一管理平台实现全链路监控与智能运维管理",
    ],
    results: [
      { label: "服务用户规模", value: "6亿+" },
      { label: "日均查询峰值", value: "10亿+" },
      { label: "平均响应时间", value: "<50ms" },
      { label: "系统可用性", value: "99.99%" },
    ],
    techStack: ["InforSuite AS", "InforSuite MQ", "InforSuite Cache", "InforSuite UMP"],
    contentSections: [
      {
        title: "项目架构",
        text: "整体采用分布式微服务架构，前端通过负载均衡接入，后端由应用服务器集群承载业务逻辑，消息中间件负责数据异步流转，分布式缓存层保障查询性能。各层组件均实现高可用冗余部署，确保单点故障不影响整体服务。",
        image: "/images/cases/architecture.jpg",
      },
      {
        title: "核心能力",
        text: "平台具备弹性伸缩、智能路由、熔断降级、灰度发布等核心能力。在流量洪峰期间，系统可自动扩展计算资源；当下游服务异常时，熔断机制自动切换至备用链路，保障核心查询服务不受影响。",
        image: "/images/cases/core-capability.jpg",
      },
    ],
  },
  "government-data-platform": {
    background:
      "某省级政务大数据服务平台旨在打通全省100多个政府部门的数据壁垒，构建统一的政务数据汇聚、治理与共享体系。平台需要支撑跨部门、跨层级、跨地域的数据融合与智能治理，为数字政府建设提供坚实的技术底座。",
    challenge: [
      "涉及100多个政府部门，数据格式与标准各异",
      "数据安全等级要求极高，需满足等保三级标准",
      "需实现省-市-县三级政务数据的实时同步与共享",
      "业务系统众多，集成复杂度高，运维难度大",
    ],
    solution: [
      "基于中创数据集成平台实现多源异构数据的标准化接入与治理",
      "采用中创InforSuite应用服务器提供高安全性的运行环境",
      "部署中创消息中间件构建省-市-县三级数据同步通道",
      "通过中创统一管理平台实现全省系统的集中监控与运维",
    ],
    results: [
      { label: "接入部门数", value: "100+" },
      { label: "数据共享接口", value: "2000+" },
      { label: "日均数据交换量", value: "5000万条" },
      { label: "数据可用性", value: "99.95%" },
    ],
    techStack: ["InforSuite AS", "InforSuite MQ", "InforSuite DI", "InforSuite UMP"],
    contentSections: [
      {
        title: "平台架构",
        text: "平台采用「一平台、多中心」的架构��计，以数据集成平台为核心，构建数据采集中心、数据治理中心、数据共享中心和数据分析中心，形成完整的政务数据生命周期管理能力。",
        image: "/images/cases/platform-architecture.jpg",
      },
      {
        title: "安全保障",
        text: "平台全面采用国产密码算法，实现数据传输加密、存储加密和访问控制，满足等保三级安全要求。同时通过细粒度的权限管理和操作审计，确保政务数据的安全可控。",
        image: "/images/cases/security.jpg",
      },
    ],
  },
  "core-middleware-replacement": {
    background:
      "某大型电信运营商在全���20多个省公司运营着CRM（客户关系管理）和BOSS（业务运营支撑）等核心业务系统，长期依赖国外中间件产品。为响应国家信创战略，需要在不影响业务连续性的前提下，完成核心系统中间件的全面国产化替换。",
    challenge: [
      "涉及20多个省公司，替换规模大、协调难度高",
      "CRM/BOSS为核心系统，不允许出现业务中断",
      "原有系统深度依赖国外中间件特性，迁移兼容性要求高",
      "替换后性能不能低于原有系统指标",
    ],
    solution: [
      "制定分省分批的渐进式替换策略，降低整体风��",
      "中创InforSuite AS实现��原有中间件的API级兼容，无需修改业务代码",
      "通过灰度发布机制，��步切换流量至国产中间件",
      "部署中创统一管理平台，实现替换过程的全程监控与性能对比",
    ],
    results: [
      { label: "替换省公司数", value: "20+" },
      { label: "承载服务数", value: "10万+" },
      { label: "业务中断时间", value: "0" },
      { label: "性能提升", value: "15%" },
    ],
    techStack: ["InforSuite AS", "InforSuite LB", "InforSuite UMP"],
    contentSections: [
      {
        title: "迁移策略",
        text: "采用「评估-适配-验证-切换」四步迁移法，先通过自动化工具评估现有应用对中间件特性���依赖情况，再进行针对性适配，经过全量压力测试验证后，通过流量灰度切换完成最���迁移。",
        image: "/images/cases/core-capability.jpg",
      },
      {
        title: "性能优化",
        text: "通过JVM���优、连接池优化、异步处理等技术手段，替换后的系统在相同硬件条件下，整体性能提升15%，TPS（每秒事务处理量）提升20%，充分证明了国产中间件的技术竞争力。",
        image: "/images/cases/architecture.jpg",
      },
    ],
  },
  "intelligent-monitoring-platform": {
    background:
      "某大型国有银行的核心交易系统日均处理千万级交易，传统的监控手段已无法满足实时性和智能化的要求。为保障金融交易的安全与稳定，需要建设一套全链路智能监控分析平台，��现从应用层到基础设施层的全方位监控预警与智能诊断。",
    challenge: [
      "千万级交易的实时监控，数据采集与处理压力巨大",
      "监控维度多、告警规则复杂，人工分析效率低",
      "故障定位需要跨系统全链路追踪能力",
      "需要与现有IT管理体系无缝集成",
    ],
    solution: [
      "基于中创统一管理平台构建全链路监控体系",
      "采用中创消息中间件实现海量监控数据的实时采集与流转",
      "引入智能分析引擎，实现异常检测与根因自动定位",
      "通过中创InforSuite AS集群部署，保障监控平台自身的高可用性",
    ],
    results: [
      { label: "日均监控交易", value: "千万级" },
      { label: "告警响应时间", value: "<10s" },
      { label: "故障定位效率", value: "提升80%" },
      { label: "误报率降低", value: "90%" },
    ],
    techStack: ["InforSuite UMP", "InforSuite MQ", "InforSuite AS", "InforSuite Cache"],
    contentSections: [
      {
        title: "监控架构",
        text: "平台采用「采集-传输-存储-分析-展示」五层架构，通过无侵入探针实现应用性能数据的自动采集，经消息中间件实时传输至分析引擎，结合时序数据库和知识图谱技术实现智能诊断与可视化展示。",
        image: "/images/diagrams/middleware-arch.png",
      },
      {
        title: "智能分析",
        text: "引入���器学习算法，对历史告警数据进行建模训练，实现异常模式的自动识别和根因的快速定位。系统可自动关联上下游调用链，将故障排查时间从小时级缩短至分钟级。",
        image: "/images/diagrams/ai-agent-arch.png",
      },
      {
        title: "智能分析",
        text: "引入机器学习算法，对历史告警数据进行建模训练，实现异常模式的自动识别和根因的快速定位。系统可自动关联上下游调用链，将故障排查时间从小时级缩短至分钟级。",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format",
      },
    ],
  },
  "xinchuang-middleware-deployment": {
    background:
      "随着国家信创战略的深入推进，金融行业成为信创落地的重点领域。中创中间件作为国内领先的中间件厂商，已在上百家金融机构完成信创全栈中间件的推广部署，涵盖国有大行、股份制银行、城商行、农商行等各类金融机构。",
    challenge: [
      "金融机构类型多样，需求差异化大",
      "核心业务系统对中间件的稳定性和性能要求极高",
      "需与多种国产芯片、操作系统、数据库适配",
      "大规模部署的标准化与自动化管理需求",
    ],
    solution: [
      "建立金融行业专属的中间件适配与认证体系",
      "针对不同规模金融机构提供差异化的部署方案",
      "与主流国产基础软硬件完成深度适配与互认证",
      "通过中创统一管理平台实现大规模集群的自动化运维",
    ],
    results: [
      { label: "覆盖金融机构", value: "100+" },
      { label: "适配芯片平台", value: "6大类" },
      { label: "互认证数量", value: "200+" },
      { label: "部署集群数", value: "1000+" },
    ],
    techStack: ["InforSuite AS", "InforSuite MQ", "InforSuite LB", "InforSuite Cache", "InforSuite UMP"],
    contentSections: [
      {
        title: "适配体系",
        text: "构建了覆盖鲲鹏、飞腾、龙芯、海光、兆芯、申威等六大国产芯片平台的全面适配体系。与麒麟、统信等国产操作系统，以及达梦、人大金仓等国产数据库完成深度适配，确保全栈国产化环境下的稳定运行。",
        image: "/images/cases/security.jpg",
      },
      {
        title: "部署方案",
        text: "针对不同规模的金融机构，提供从单机版到集群版、从物理部署到容器化部署的多种选择。通过标准化的部署工具和自动化脚本，将中间件部署时间从天级缩短至小时级。",
        image: "/images/cases/security.jpg",
      },
    ],
  },
  "intelligent-ops-platform": {
    background:
      "某大型能源集团在全国运营着数百套业务系统，中间件运维主要依赖人工巡检和被动响应，运维效率低、成本高。为实现降���增效，需要建设一套智能化的中间件运维管理平台，实现从被动运维到主动运维��转变。",
    challenge: [
      "系统分布广泛，跨多个数据中心和地域",
      "中间件类型多样，版本众多，管理复杂",
      "运维人员技能水平参差不齐，故障响应慢",
      "缺乏统一的运维数据沉淀和分析能力",
    ],
    solution: [
      "部署中创统一管理平台实现全国范围的集中监控与管理",
      "建立自动化巡检和健康检查机制，变��动为主动",
      "引入���能告警策略，实现告警压缩与分级处理",
      "构建运维知识库，辅助运维人员快速定位和解决问题",
    ],
    results: [
      { label: "运维成��降低", value: "40%" },
      { label: "故障发现时间", value: "<3min" },
      { label: "管理系统数", value: "数百套" },
      { label: "��动化巡检覆盖", value: "100%" },
    ],
    techStack: ["InforSuite UMP", "InforSuite AS", "InforSuite MQ"],
    contentSections: [
      {
        title: "���维架构",
        text: "平台采用「总部-区域」两级架构，总部平台负责全局监控、策略管理和数据分析，区域节点负责本地数据采集和指令执行。两级之间通过消息中间件实现数据的可靠传输与同步。",
        image: "/images/diagrams/middleware-arch.png",
      },
      {
        title: "智能运维",
        text: "通过历史运维数据的深度挖掘，建立故障预测模型和容量规划模型。系统可自动识别潜在风险并提前告警，同时根据资源使用趋势给出扩容建议，实现真正的预测性运维。",
        image: "/images/diagrams/ai-agent-arch.png",
      },
    ],
  },
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseItem = cases.find((c) => c.slug === slug)
  const detail = caseDetails[slug]

  if (!caseItem) {
    notFound()
  }

  const navItems = getNavItems("")

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Banner with Header overlay */}
      <section className="relative h-[320px] overflow-hidden md:h-[400px] lg:h-[440px] 3xl:h-[520px]">
        <div className="absolute inset-x-0 top-0 z-30">
          <Header navItems={navItems} variant="overlay" />
        </div>
        <Image
          src="/images/case-detail-banner.png"
          alt={caseItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:pb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block rounded-full bg-[#BF1920] px-4 py-1 text-xs font-medium text-white 3xl:px-5 3xl:py-1.5 3xl:text-sm">
                {caseItem.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs text-black/80 backdrop-blur-sm 3xl:px-4 3xl:py-1.5 3xl:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#BF1920]" />
                {caseItem.metrics}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-black md:text-3xl lg:text-4xl 3xl:text-5xl">
              {caseItem.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-black/70 md:text-base 3xl:mt-4 3xl:text-lg">
              {caseItem.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-sm text-muted-foreground lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-4 3xl:text-base">
          <Link href="/" className="transition-colors hover:text-primary">
            首页
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted-foreground/40">
            <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link href="/#cases" className="transition-colors hover:text-primary">
            成功案例
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted-foreground/40">
            <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-foreground">{caseItem.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-10 lg:px-8 lg:py-14 2xl:max-w-[1100px] 3xl:max-w-[1400px] 3xl:py-20">
        {detail ? (
          <>
            {/* Project Background */}
            <section className="mb-12 lg:mb-16 3xl:mb-20">
              <SectionTitle>项目背景</SectionTitle>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base lg:text-[15px] lg:leading-[1.8] 3xl:mt-6 3xl:text-lg 3xl:leading-[1.85]">
                {detail.background}
              </p>
            </section>

        {/* Challenge & Solution - two columns */}
        <section className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-2 lg:gap-8 3xl:mb-20 3xl:gap-10">
          {/* Challenge */}
          <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 lg:p-8 3xl:p-10">
            <div className="mb-5 flex items-center gap-3 3xl:mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BF1920]/10 3xl:h-12 3xl:w-12">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#BF1920] 3xl:h-6 3xl:w-6">
                  <path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground 3xl:text-xl">项目挑战</h3>
            </div>
            <ul className="flex flex-col gap-3 3xl:gap-4">
              {detail.challenge.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground lg:text-[15px] 3xl:text-base">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#BF1920]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 lg:p-8 3xl:p-10">
            <div className="mb-5 flex items-center gap-3 3xl:mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BF1920]/10 3xl:h-12 3xl:w-12">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#BF1920] 3xl:h-6 3xl:w-6">
                  <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground 3xl:text-xl">解决方案</h3>
            </div>
            <ul className="flex flex-col gap-3 3xl:gap-4">
              {detail.solution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground lg:text-[15px] 3xl:text-base">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#BF1920]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results metrics */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>项目成果</SectionTitle>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 3xl:mt-8 3xl:gap-8">
            {detail.results.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-5 text-center transition-all duration-300 hover:border-[#BF1920]/20 hover:shadow-lg lg:p-6 3xl:p-8"
              >
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#BF1920] transition-all duration-500 group-hover:w-full" />
                <p className="text-2xl font-bold text-[#BF1920] md:text-3xl 3xl:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs text-muted-foreground md:text-sm 3xl:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Content sections with images */}
        {detail.contentSections.map((section, idx) => (
          <section key={idx} className="mb-12 lg:mb-16 3xl:mb-20">
            <SectionTitle>{section.title}</SectionTitle>
            <div className={`mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 3xl:mt-8 3xl:gap-12 ${idx === 0 ? "lg:flex-row" : idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {section.image && (
                <div className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-muted/50 lg:h-[280px] lg:w-[45%] 3xl:h-[320px]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-[15px] lg:leading-[1.8] 3xl:text-lg 3xl:leading-[1.85]">
                  {section.text}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Tech Stack */}
        <section className="mb-12 lg:mb-16 3xl:mb-20">
          <SectionTitle>技术栈</SectionTitle>
          <div className="mt-5 flex flex-wrap gap-3 3xl:mt-6 3xl:gap-4">
            {detail.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full border border-[#BF1920]/15 bg-[#BF1920]/5 px-4 py-2 text-sm font-medium text-[#BF1920] 3xl:px-5 3xl:py-2.5 3xl:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

          </>
        ) : (
          <section className="mb-12 lg:mb-16 3xl:mb-20">
            <SectionTitle>项目介绍</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base lg:text-[15px] lg:leading-[1.8] 3xl:mt-6 3xl:text-lg 3xl:leading-[1.85]">
              {caseItem.desc}
            </p>
            <div className="mt-8 rounded-2xl border border-border/60 bg-muted/20 p-6 lg:p-8 3xl:p-10">
              <div className="flex items-center gap-3 mb-4 3xl:mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BF1920]/10 3xl:h-12 3xl:w-12">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#BF1920] 3xl:h-6 3xl:w-6">
                    <path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground 3xl:text-xl">项目特点</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#BF1920]" />
                  <p className="text-sm text-muted-foreground lg:text-[15px] 3xl:text-base">行业：{caseItem.tag}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#BF1920]" />
                  <p className="text-sm text-muted-foreground lg:text-[15px] 3xl:text-base">规模：{caseItem.metrics}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Cases */}
        <OtherCases cases={cases} currentSlug={slug} />
      </main>

      <Footer />
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-6 w-1 rounded-full bg-[#BF1920] 3xl:h-7" />
      <h2 className="text-xl font-bold text-foreground md:text-2xl 3xl:text-[28px]">{children}</h2>
    </div>
  )
}
