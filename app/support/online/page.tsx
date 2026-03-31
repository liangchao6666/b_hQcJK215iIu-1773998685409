"use client"

import { OnlineServiceHeroSection } from "@/components/online-service/hero-section"
import { ContactForm } from "@/components/shared/contact-form"
import { getNavItems } from "@/components/shared/nav-data"
import { Footer } from "@/components/shared/footer"

export default function OnlineServicePage() {
  const navItems = getNavItems("/support/online")

  return (
    <div className="min-h-screen w-full bg-background">
      <OnlineServiceHeroSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
