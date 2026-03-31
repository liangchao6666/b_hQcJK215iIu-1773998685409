/**
 * Image URL mapping for local deployment
 * Maps external URLs to local paths for offline/intranet environments
 */

interface ImageUrlMapping {
  [key: string]: string;
}

export const imageUrlMap: ImageUrlMapping = {
  // Home page - banner
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format":
    "/images/home/customers.jpg",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920":
    "/images/home/honors.jpg",

  // Footer QR codes
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode-2DUnWMBfNJhVmKGN6YqnvC8K5Wbp8B.png":
    "/images/footer/qrcode-wechat.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode2-pqA5Ln8hJvK2mN9oP3rS4tUvWx.png":
    "/images/footer/qrcode-public.png",

  // Online service icon
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-9UdxG92GVQ7UZ44cfJw5DbpK3kU5VT.png":
    "/images/icons/online-service.png",

  // Solution diagrams
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png":
    "/images/diagrams/middleware-arch.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png":
    "/images/diagrams/ai-agent-arch.png",

  // Career page banner
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%286%29-XkEWWQ1R1ZVnSsnrH13QZ3KZJpP4xX.png":
    "/images/careers/banner.png",
};

/**
 * Get the appropriate image URL - local or remote
 * @param url - The external image URL
 * @param useLocal - Whether to use local images (default: true for production)
 * @returns The local path or original URL
 */
export function getImageUrl(
  url: string,
  useLocal: boolean = process.env.NODE_ENV === "production"
): string {
  if (useLocal && imageUrlMap[url]) {
    return imageUrlMap[url];
  }
  return url;
}
