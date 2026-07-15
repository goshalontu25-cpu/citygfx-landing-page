"use client"

import * as React from "react"
import Link from "next/link"
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
    { id: "home", label: "Home", icon: HomeIcon, href: "https://www.citygfx.agency" },
    { id: "services", label: "Services", icon: ServicesIcon, href: "#services" },
    { id: "portfolio", label: "Portfolio", icon: PortfolioIcon, href: "#portfolio" },
    { id: "cta", label: "Contact", icon: ContactIcon, href: "#cta" },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-border z-50 px-2 pb-[env(safe-area-inset-bottom)]">
      <nav className="flex items-center justify-around h-[68px]">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className="flex flex-col items-center justify-center w-full h-full space-y-1 relative"
          >
            <item.icon 
              className={`w-6 h-6 transition-colors duration-200 ${
                activeTab === item.id ? "text-primary" : "text-text-soft"
              }`} 
            />
            <span 
              className={`text-[10px] font-bold transition-colors duration-200 ${
                activeTab === item.id ? "text-primary" : "text-text-soft"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
