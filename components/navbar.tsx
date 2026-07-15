"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  PiPhoneCallFill as PhoneCall, 
  PiListBold as Menu, 
  PiXBold as X 
} from "react-icons/pi"
import { Button } from "./ui/button"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
    { id: "cta", label: "Contact" }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.08)] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="https://www.citygfx.agency" className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dweciloal/image/upload/v1783445533/CG_Web_logo_u7wcsv.png"
            alt="CityGfx Logo"
            width={240}
            height={80}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.id === "home" ? "https://www.citygfx.agency" : `#${item.id}`}
              className="text-[14px] font-medium text-text-mid hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="block">
          <Link href="https://wa.me/8801617563535" target="_blank" rel="noopener noreferrer">
            <Button className="h-9 px-3 text-[12px] md:h-10 md:px-4 md:text-[14px]">
              <PhoneCall className="w-3 h-3 mr-1 md:w-4 md:h-4 md:mr-2" />
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
