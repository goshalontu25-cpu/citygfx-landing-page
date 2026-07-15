"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  PiPhoneFill as Phone, 
  PiEnvelopeFill as Mail, 
  PiMapPinFill as MapPin, 
  PiHeartFill as Heart 
} from "react-icons/pi"

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-40 pb-28 md:pb-8 mt-0 rounded-t-[40px] px-4 md:px-6 relative z-10">
      <div className="container mx-auto max-w-[1280px]">
        
        {/* Top Section - 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-4 gap-y-10 lg:gap-8 mb-12">
          
          {/* Column 1 - Brand Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left pr-0 lg:pr-4">
            <Link href="/" className="mb-8 inline-block w-[180px]">
              <Image 
                src="https://res.cloudinary.com/dweciloal/image/upload/v1783445533/CG_Web_logo_u7wcsv.png" 
                alt="CityGfx" 
                width={180} 
                height={50} 
                className="w-auto h-auto object-contain brightness-0 invert" 
                priority
              />
            </Link>
            <p className="text-[14px] text-gray-400 font-medium leading-relaxed mb-8 max-w-[280px]">
              We don't just create videos; we build scalable engines for brand growth.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 w-full">
              {[
                { 
                  customIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
                  link: "https://www.facebook.com/citygfxbd" 
                },
                { 
                  customIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>, 
                  link: "https://www.youtube.com/@citygfx.official" 
                },
                { 
                  customIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, 
                  link: "https://www.instagram.com/city_gfx" 
                },
                { 
                  customIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, 
                  link: "https://www.linkedin.com/company/104469172/" 
                }
              ].map((social, idx) => (
                <Link key={idx} href={social.link} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF6B2B] hover:text-white transition-colors duration-300">
                  {social.customIcon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[16px] font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-4 items-center md:items-start">
              {[
                "Creative Strategy",
                "AI Commercial Production",
                "UGC Production",
                "Performance Creative",
                "Video Editing",
                "Motion Design"
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-[14px] text-gray-400 font-medium hover:text-[#FF6B2B] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[16px] font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 items-center md:items-start">
              {[
                "About Us",
                "Our Work",
                "Careers",
                "Blog",
                "Contact"
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-[14px] text-gray-400 font-medium hover:text-[#FF6B2B] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[16px] font-bold mb-6">Support</h4>
            <ul className="flex flex-col gap-4 items-center md:items-start">
              {[
                "Help Center",
                "FAQ",
                "Privacy Policy",
                "Terms of Service",
                "Refund Policy"
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-[14px] text-gray-400 font-medium hover:text-[#FF6B2B] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[16px] font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-5 items-center md:items-start">
              <li>
                <a href="tel:+8801617563535" className="flex items-center md:items-start justify-center md:justify-start gap-2 md:gap-3 group">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B2B] transition-colors mt-0.5 shrink-0" />
                  <span className="text-[14px] text-gray-400 font-medium group-hover:text-[#FF6B2B] transition-colors">
                    +880 1617-563535
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@citygfx.com" className="flex items-center md:items-start justify-center md:justify-start gap-2 md:gap-3 group">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B2B] transition-colors mt-0.5 shrink-0" />
                  <span className="text-[14px] text-gray-400 font-medium group-hover:text-[#FF6B2B] transition-colors">
                    hello@citygfx.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start justify-center md:justify-start gap-2 md:gap-3 group">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B2B] transition-colors mt-0.5 shrink-0" />
                  <span className="text-[14px] text-gray-400 font-medium group-hover:text-[#FF6B2B] transition-colors leading-relaxed">
                    House 12, Road 5, Dhanmondi<br/>
                    Dhaka 1205, Bangladesh
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-400 font-medium">
            &copy; 2026 CityGfx. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[13px] text-gray-400 font-medium">
            <Heart className="w-4 h-4 text-[#FF6B2B] fill-[#FF6B2B]" />
            Made with passion in Dhaka
          </div>
        </div>

      </div>
    </footer>
  )
}
