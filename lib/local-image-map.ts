/**
 * 本地图片URL映射
 * 将所有外部URL转换为本地路径
 */

const IMAGE_MAP: Record<string, string> = {
  // 新闻图片
  "news/1.jpg": "/images/news/1.jpg",
  "news/2.jpg": "/images/news/2.jpg",
  "news/3.jpg": "/images/news/3.jpg",
  "news/4.jpg": "/images/news/4.jpg",
  "news/5.jpg": "/images/news/5.jpg",
  "news/6.jpg": "/images/news/6.jpg",
  "news/7.jpg": "/images/news/7.jpg",
  "news/8.jpg": "/images/news/8.jpg",
  "news/9.jpg": "/images/news/9.jpg",
  "news/10.jpg": "/images/news/10.jpg",
  "news/news-default.png": "/images/news/news-default.png",
  "news/news-alternate.png": "/images/news/news-alternate.png",
  "news/news-tech.png": "/images/news/news-tech.png",

  // 荣誉证书图片
  "honors/honor-01.jpeg": "/images/honors/honor-01.jpeg",
  "honors/honor-02.jpeg": "/images/honors/honor-02.jpeg",
  "honors/honor-03.jpeg": "/images/honors/honor-03.jpeg",
  "honors/honor-04.jpeg": "/images/honors/honor-04.jpeg",
  "honors/honor-05.jpeg": "/images/honors/honor-05.jpeg",
  "honors/honor-06.jpeg": "/images/honors/honor-06.jpeg",
  "honors/honor-07.jpg": "/images/honors/honor-07.jpg",
  "honors/honor-08.jpeg": "/images/honors/honor-08.jpeg",
  "honors/honor-09.jpeg": "/images/honors/honor-09.jpeg",
  "honors/honor-10.jpg": "/images/honors/honor-10.jpg",
  "honors/honor-11.jpg": "/images/honors/honor-11.jpg",
  "honors/honor-12.jpg": "/images/honors/honor-12.jpg",
  "honors/honor-13.jpg": "/images/honors/honor-13.jpg",
  "honors/honor-14.jpeg": "/images/honors/honor-14.jpeg",
  "honors/honor-15.jpeg": "/images/honors/honor-15.jpeg",
  "honors/honor-16.jpeg": "/images/honors/honor-16.jpeg",
  "honors/honor-17.jpeg": "/images/honors/honor-17.jpeg",
  "honors/honor-18.jpeg": "/images/honors/honor-18.jpeg",
  "honors/honor-19.jpeg": "/images/honors/honor-19.jpeg",
  "honors/honor-20.jpg": "/images/honors/honor-20.jpg",
  "honors/honor-21.jpg": "/images/honors/honor-21.jpg",
  "honors/honor-22.jpeg": "/images/honors/honor-22.jpeg",
  "honors/honor-23.jpeg": "/images/honors/honor-23.jpeg",
  "honors/honor-24.jpeg": "/images/honors/honor-24.jpeg",
  "honors/honor-25.jpg": "/images/honors/honor-25.jpg",
  "honors/honor-26.jpg": "/images/honors/honor-26.jpg",

  // 中间件图片
  "icons/middleware-value-1.png": "/images/icons/middleware-value-1.png",
  "icons/middleware-value-2.png": "/images/icons/middleware-value-2.png",
  "icons/middleware-value-3.png": "/images/icons/middleware-value-3.png",
  "icons/middleware-value-4.png": "/images/icons/middleware-value-4.png",
  "icons/middleware-value-5.png": "/images/icons/middleware-value-5.png",
  "icons/middleware-value-6.png": "/images/icons/middleware-value-6.png",

  // Hero横幅
  "banners/middleware-hero.png": "/images/banners/middleware-hero.png",
  "banners/ws-hero.png": "/images/banners/ws-hero.png",
  "banners/ws-overview.png": "/images/banners/ws-overview.png",
  "banners/ump-hero.png": "/images/banners/ump-hero.png",
  "banners/paas-hero.png": "/images/banners/paas-hero.png",
  "banners/news-hero.png": "/images/banners/news-hero.png",
  "banners/contact-form.png": "/images/banners/contact-form.png",

  // 案例研究图片
  "cases/ws-case-1.png": "/images/cases/ws-case-1.png",
  "cases/ws-case-2.png": "/images/cases/ws-case-2.png",
  "cases/ws-case-3.png": "/images/cases/ws-case-3.png",
  "cases/ump-case-1.png": "/images/cases/ump-case-1.png",
  "cases/ump-case-2.jpeg": "/images/cases/ump-case-2.jpeg",
  "cases/ump-case-3.jpeg": "/images/cases/ump-case-3.jpeg",

  // 主页图片
  "home/customers.jpg": "/images/home/customers.jpg",
  "home/honors.jpg": "/images/home/honors.jpg",
  "careers/banner.png": "/images/careers/banner.png",

  // 页脚二维码
  "footer/qrcode-wechat.png": "/images/footer/qrcode-wechat.png",
  "footer/qrcode-public.png": "/images/footer/qrcode-public.png",

  // 图标
  "icons/online-service.png": "/images/icons/online-service.png",

  // 架构图
  "diagrams/middleware-arch.png": "/images/diagrams/middleware-arch.png",
  "diagrams/ai-agent-arch.png": "/images/diagrams/ai-agent-arch.png",
};

/**
 * 获取本地图片路径
 * @param externalUrl 外部URL或key
 * @returns 本地图片路径
 */
export function getLocalImagePath(externalUrl: string): string {
  // 直接查找映射
  for (const [key, path] of Object.entries(IMAGE_MAP)) {
    if (externalUrl.includes(key) || externalUrl === key) {
      return path;
    }
  }
  
  // 如果是本地路径，直接返回
  if (externalUrl.startsWith("/images/")) {
    return externalUrl;
  }
  
  // 默认返回原URL（如果找不到映射）
  console.warn(`[Image Mapping] 未找到映射: ${externalUrl}`);
  return externalUrl;
}

/**
 * 快速映射某些常用外部URL
 */
export const EXTERNAL_TO_LOCAL: Record<string, string> = {
  // Vercel Blob Storage - News
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-36NoQP9iaTba0LOr2DsLCYU7SF8T0G.jpg": "/images/news/1.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-x8G1mh2OxXDdwEitQOHHoP2GavA2hP.jpg": "/images/news/2.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-18D7gfxEskJpMo4YWTGmkldXcoaOtl.jpg": "/images/news/3.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-jfX1cEjcNfA0NuxPdLFbqJFg0wBgJ4.jpg": "/images/news/4.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-69ExBIbxUUz6IZyIcRIa6b0hmmMWlS.jpg": "/images/news/5.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-i2KNP2AhZwpeqihLLdcUl6i510xEY7.jpg": "/images/news/6.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FkN0BtmQalmMM5PmXwzaqzaxPW3JA1.jpg": "/images/news/7.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9xHsjh1EaCnCfLcr3s4LUX9or50E2x.jpg": "/images/news/8.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-itxhffSXs26i8UICrXb7coMEifb2T7.jpg": "/images/news/9.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-hn1JmzJokXIYFj4IQXoT2zRBfRt9jS.jpg": "/images/news/10.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih4gNPZrMx0LW2UBTjEKPuBOc6lEMo.png": "/images/news/news-default.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1sIsYVKdzOdarIHwfE4YGulmcQP3IE.png": "/images/news/news-alternate.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIGnnm5SVyGx4OBAnBeFUPq3dsf0Rn.png": "/images/news/news-tech.png",

  // Vercel Blob Storage - Honors (一部分示例，需完整列表的话参考上面的映射)
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%A7%94%E5%91%98%E4%BC%9A%E6%8A%80%E6%9C%AF%E6%B4%BB%E5%8A%A8%E5%8D%95%E4%BD%8D.png-YOte9NjBhrswpqcBFJBIhLNG1qlcbe.jpeg": "/images/honors/honor-01.jpeg",

  // Middleware图标
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-4aie3eI8J1elINiym6u4aKCBT8p0od.png": "/images/icons/middleware-value-1.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-H9ZjrZZ5eOYL7xnX1Q5yfbM62iU0W9.png": "/images/icons/middleware-value-2.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-MC8drmhWyLwME9cUIKwrNcEAVk9fQg.png": "/images/icons/middleware-value-3.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-cWIB7g14XT5BOeq5Dv1uHfdfDr6x4w.png": "/images/icons/middleware-value-4.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-l6wOyXuZ6VOPLlfUXoVlP2s9rB4ZEE.png": "/images/icons/middleware-value-5.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ugG6R2Dgl0QXHu7J5GpeHV8pnd3NZ2.png": "/images/icons/middleware-value-6.png",

  // Hero横幅
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png": "/images/banners/middleware-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ws_baneer-tDR9iLthEjFOTiEg5TuukuKZDFLL0X.png": "/images/banners/ws-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260311133604_48_6-42arHy3qpvuB2PAppt7dZtEYBzrSwv.png": "/images/banners/ws-overview.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png": "/images/banners/ump-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%283%29-wwAYnIG9RzGLfJqFqXmJLT9YvzbK4A.png": "/images/banners/paas-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.png": "/images/banners/news-hero.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpRN1ck3SjU81tEMFe9TTmXF2u0ZU5.png": "/images/banners/contact-form.png",

  // Unsplash
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format": "/images/home/customers.jpg",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920": "/images/home/honors.jpg",
};

/**
 * 获取本地路径（从外部URL）
 * @param url 外部URL
 * @returns 本地路径或原URL
 */
export function mapExternalToLocal(url: string): string {
  return EXTERNAL_TO_LOCAL[url] || url;
}

export default IMAGE_MAP;
