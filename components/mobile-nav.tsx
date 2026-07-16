"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { 
  PiHouseFill as HomeIcon, 
  PiTargetFill as ServicesIcon, 
  PiPlayCircleFill as PortfolioIcon, 
  PiPhoneCallFill as ContactIcon 
} from "react-icons/pi"

export function MobileNav() {
  const [activeTab, setActiveTab] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "cta"]
      let current = "home"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            current = section
          }
        }
      }
      setActiveTab(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon, href: "/" },
    { id: "services", label: "Services", icon: ServicesIcon, href: "#services" },
    { id: "portfolio", label: "Portfolio", icon: PortfolioIcon, href: "#portfolio" },
    { id: "cta", label: "Contact", icon: ContactIcon, href: "#cta" },
  ]

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 bg-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] border border-gray-100 rounded-[32px] z-50 px-2 pb-[env(safe-area-inset-bottom)]">
      <nav className="flex items-center justify-around h-[72px]">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className="flex flex-col items-center justify-center w-full h-full relative"
          >
            <item.icon 
              className={`w-[22px] h-[22px] transition-colors duration-200 ${
                activeTab === item.id ? "text-[#FF5A00]" : "text-gray-500"
              }`} 
            />
            <span 
              className={`text-[10px] font-bold transition-colors duration-200 mt-1.5 ${
                activeTab === item.id ? "text-[#FF5A00]" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
            {activeTab === item.id && (
              <motion.div layoutId="mobileNavIndicator" className="absolute bottom-2 w-4 h-[3px] bg-[#FF5A00] rounded-full" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}
