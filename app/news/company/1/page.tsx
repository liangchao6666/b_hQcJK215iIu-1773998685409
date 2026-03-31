import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import Link from "next/link"

export const metadata = {
  title: "万马奔腾启新程：中创股份交出高质量蛇年答卷 - 中创股份",
  description: "2026年开篇，中创股份满怀感恩和壮志，以技术突破、生态构建、市场拓展、荣誉认可等方面展现了过去一年的成果。",
}

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header activePath="/news/company" />
      <main className="flex-1">
        <article className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <Link
                href="/news/company"
                className="inline-flex items-center text-primary font-medium mb-6 hover:gap-1 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                  <path d="M13 8H3M6 5L3 8L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                返回列表
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                万马奔腾启新程：中创股份交出高质量蛇年答卷
              </h1>
              <div className="flex items-center gap-4 text-foreground/70">
                <time dateTime="2026-02-13">2026年2月13日</time>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">开篇导语</h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  祥蛇辞岁留福韵，骏马迎春踏新程
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  回望过去一年，中创股份步履坚实，脚踏实地，稳步前行，在高质量发展道路上迈出坚实步伐；
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  值此新春佳节来临之际，我们满怀感恩，更怀壮志：
                </p>
                <ul className="list-none pl-0 mb-4 space-y-2">
                  <li className="text-base md:text-lg leading-relaxed">愿以骏马之姿，驰骋创新之野；</li>
                  <li className="text-base md:text-lg leading-relaxed">以中间件之力，共筑强国之基。</li>
                </ul>
                <p className="text-base md:text-lg leading-relaxed">
                  恭祝各界同仁龙马精神，万事顺遂！新的一年，让我们继续携手，奔腾向前！
                </p>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">一、技术突破：千里之驹，智慧前行</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  以技术为驹，以创新为翼；技攀新高，方致远行
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  过去一年，中创中间件全面拥抱AI浪潮，加速产品智能化升级，推动AI技术深度融合与落地：
                </p>
                <div className="bg-muted p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">中间件+AI：构建智能化、协同化、超敏捷多智能体中间件运维管控体系</h3>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
                    <li>中间件集约化AI运管</li>
                    <li>故障风险AI智能诊断预判</li>
                    <li>云原生故障闭环管控</li>
                  </ul>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">中间件for AI：打造中创智能体中间件平台</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    解决企业智能体应用最后一公里问题，夯实基础场景，深化专业领域，模板化快速智能部署，大幅压缩智能体开发上线周期。
                  </p>
                </div>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">二、生态构建：八骏图景，共享共赢</h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  生态繁荣，非一日之功；协同共进，方行稳致远
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  过去一年，中创股份以开放姿态深化产业链协作，全年完成近千个应用系统的兼容适配，全面覆盖主流国产芯片、操作系统、数据库及中间件生态。
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  公司积极搭建合作桥梁，成功举办核心合作伙伴生态大会，并参与30余场行业峰会，与产业链伙伴共商发展、共促落地；一幅多方协同、兼容并蓄的八骏图景，正在信创生态中徐徐展开。
                </p>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">三、市场拓展：马到成功，全面落地</h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  蹄疾步稳拓疆域，信创落地见真章
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  中创股份已实现对党政、军工、金融、能源、电力、电信、交通、医疗等八大重点行业的信创服务全覆盖，规模化应用持续深化。
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  成功中标并交付中国移动、中国电建、国家电力投资集团、中车等多家大型中央企业及国有骨干企业的信创替代项目，充分验证了产品在高并发、高可靠、高安全核心业务场景下的实战能力与国产化支撑力。
                </p>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">四、荣誉认可：马踏飞燕，载誉而归</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  轻蹄所至，皆为肯定；飞燕掠影，尽是荣光
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  一年来，中创股份凭借扎实的技术实力与产业贡献，屡获国家级、行业级权威资质与荣誉，持续巩固国产中间件领军地位：
                </p>
                <ul className="list-disc list-inside space-y-3 text-base md:text-lg mb-6">
                  <li>国家级专精特新"小巨人"企业称号</li>
                  <li>信创工程实施能力一级、数据服务能力一级认证</li>
                  <li>山东省数据和信息技术应用创新协会"2024-2025年度优秀单位"</li>
                  <li>2025年软件和信息技术服务名牌企业</li>
                  <li>中国软件行业协会2025年创新软件产品</li>
                  <li>2025年度企业数智化突出贡献单位</li>
                </ul>
                <p className="text-base md:text-lg leading-relaxed">
                  来自重点行业客户、国家级行业协会的多封感谢信，既是信任的回响，更是对产品可靠性与服务专业性的最好见证。
                </p>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">五、驱动前行：万马奔腾，助力行业发展</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  一马当先，方能万马奔腾；主动作为，方能引领行业发展
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  中创股份深度参与多项中间件相关的国家及行业标准制定，并牵头编制《2025信创引领：自主安全可靠中间件白皮书》，为行业提供权威技术路径与实践指南：
                </p>
                <ul className="list-disc list-inside space-y-2 text-base md:text-lg mb-6">
                  <li>GB/T 26232-2025《信息技术 中间件 应用服务器中间件技术要求》</li>
                  <li>GB/T 28168-2025《信息技术 中间件 消息中间件技术要求》</li>
                  <li>T/ISC 0086-2025《安全可信中间件能力要求 第1部分 总体要求》</li>
                  <li>T/ISC 0087-2025《安全可信中间件能力要求 第2部分 消息中间件》</li>
                  <li>T/ISC 0088-2025《安全可信中间件能力要求 第3部分 分布式数据缓存中间件》</li>
                  <li>T/ISC 0089-2025《安全可信中间件能力要求 第4部分 应用服务器中间件》</li>
                  <li>T/ISC 0090-2025《安全可信中间件能力要求 第5部分 负载均衡中间件》</li>
                </ul>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  积极投身信创人才生态建设，联合高校及行业协会伙伴举办信息技术应用创新大赛，激发青年开发者创新活力；
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  开展客户培训与认证体系建设，全年为超500名技术人员提供中间件运维与开发认证培训，助力信创人才梯队建设。
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">展望</h2>
                <p className="text-base md:text-lg leading-relaxed font-semibold text-primary">
                  骏马奔腾启新程，砥砺奋进正当时
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-4">
                  2026马年，中创股份将继续加大"码"力，深化AI与中间件融合创新，加速全栈信创解决方案在更多关键领域落地，携手生态伙伴，共筑安全、高效、智能的数字中国底座！
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
