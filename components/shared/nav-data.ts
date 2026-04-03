export interface NavItem {
  name: string
  href: string
  active?: boolean
  children?: NavItem[]
  isMega?: boolean
  disabled?: boolean
}

export function getNavItems(activePath?: string): NavItem[] {
  return [
    {
      name: "首页",
      href: "/",
      active: activePath === "/",
      children: [],
      isMega: false,
    },
    {
      name: "产品中心",
      href: "",
      active: activePath === "/products" || activePath?.startsWith("/middleware") || activePath?.startsWith("/digital-platform") || activePath?.startsWith("/paas") || activePath?.startsWith("/iot") || activePath?.startsWith("/security"),
      children: [
        {
          name: "基础中间件",
          href: "/middleware",
          children: [
            { name: "应用服务器", href: "/middleware", children: [] },
            { name: "负载均衡软件", href: "/load-balancer", children: [] },
            { name: "分布式数据缓存中间件", href: "/data-cache", children: [] },
            {
              name: "消息中间件",
              href: "/message-middleware",
              children: [
                { name: "中创消息中间件软件", href: "/message-middleware", children: [] },
                { name: "中创高性能消息中间件软件", href: "/message-middleware", children: [] },
                { name: "中创云原生消息中间件软件", href: "/message-middleware", children: [] },
                { name: "中创高吞吐消息队列软件", href: "/message-middleware", children: [] },
              ]
            },
            { name: "工作流中间件", href: "/workflow-middleware", children: [] },
            { name: "企业服务总线", href: "/esb", children: [] },
            { name: "中间件统一管理平台", href: "/middleware-manager", children: [] },
          ],
        },
        {
          name: "数智化平台", 
          href: "/digital-platform", 
          children: [
            { name: "数据集成平台", href: "/digital-platform/data-integration", children: [] },
            { name: "大数据分析平台", href: "/big-data", children: [] },
            { name: "业务信息和电子文件交换系统", href: "/file-exchange", children: [] },
            { name: "数据治理平台", href: "/data-governance", children: [] },
            { name: "AI模型管理平台", href: "/ai-model", children: [] },
            { name: "DTP数据传输中心", href: "/dtp", children: [] },
          ],
        },
        {
          name: "PaaS云平台", 
          href: "/paas", 
          children: [
            { name: "PaaS平台", href: "/paas/platform", children: [] },
            { name: "iPaaS应用集成服务平台", href: "/paas/ipaas", children: [], disabled: true },
            { name: "业务流程PaaS平台", href: "/paas/bpm", children: [], disabled: true },
          ],
        },
        {
          name: "物联网平台", 
          href: "/iot", 
          children: [
            { name: "统一监管平台", href: "/iot/supervision", children: [] },
            { name: "物联网监控平台", href: "/iot/monitoring", children: [], disabled: true },
            { name: "高速公路智慧管控平台", href: "/iot/highway", children: [], disabled: true },
          ],
        },
        {
          name: "应用安全产品", 
          href: "/security", 
          children: [
            { name: "防篡改软件", href: "/security/anti-tamper", children: [] },
            { name: "web应用防火墙", href: "/security/waf", children: [], disabled: true },
            { name: "业务文件安全传输平台", href: "/security/file-transfer", children: [], disabled: true },
          ],
        },
      ],
      isMega: true,
    },
    {
      name: "解决方案",
      href: "",
      active: activePath === "/solutions" || activePath?.startsWith("/solutions"),
      children: [
        { name: "AI 智能体管理平台解决方案", href: "/solutions/ai-agent" },
        { name: "信创中间件双活容灾解决方案", href: "/solutions/disaster-recovery" },
        { name: "数据中台解决方案", href: "/solutions/data-platform" },
        { name: "智能运维解决方案", href: "/solutions/intelligent-ops" },
        { name: "信创全栈自主可控中间件解决方案", href: "/solutions/xinchuang-middleware", disabled: true },
      ],
      isMega: false,
    },
    {
      name: "典型案例",
      href: "/cases",
      active: activePath === "/cases" || activePath?.startsWith("/cases"),
      children: [],
      isMega: false,
    },
    {
      name: "服务与支持",
      href: "",
      active: activePath === "/support" || activePath?.startsWith("/support"),
      children: [
        { name: "在线服务", href: "/support/online" },
        { name: "认证证书", href: "/support/certification", disabled: true },
        { name: "产品升级", href: "/support/upgrade", disabled: true },
        { name: "FAQ", href: "/support/faq", disabled: true },
        { name: "Kubernetes服务", href: "/support/kubernetes", disabled: true },
      ],
      isMega: false,
    },
    {
      name: "关于我们",
      href: "",
      active: activePath === "/about" || activePath === "/news/company" || activePath?.startsWith("/about"),
      children: [
        { name: "公司介绍", href: "/about/introduction" },
        { name: "公司荣誉", href: "/about/honors" },
        { name: "发展历程", href: "/about/history" },
        { name: "投资者关系", href: "/about/investor" },
        { name: "新闻资讯", href: "/news/company" },
        { name: "加入我们", href: "/about/careers" },
      ],
      isMega: false,
    },
  ]
}
