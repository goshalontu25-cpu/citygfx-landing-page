import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Hero } from "@/components/hero"
import { TrustedBrands } from "@/components/trusted-brands"
import { Features } from "@/components/features"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pb-[68px] md:pb-0">
        <Hero />
        <TrustedBrands />
        <Features />
        <Portfolio />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
