"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  PiPhoneFill as Phone, 
  PiChatCircleTextFill as MessageSquare, 
  PiCaretRightBold as ChevronRight, 
  PiPaperPlaneTiltFill as Send, 
  PiUsersFill as Users 
} from "react-icons/pi"
import * as motion from "framer-motion/client"
import { Button } from "./ui/button"

export function CTA() {
  return (
    <section className="pt-8 md:pt-12 pb-0 bg-transparent relative z-20 -mb-24" id="cta">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
        
        <div className="relative bg-[#FFF6F0] rounded-[40px] overflow-hidden border border-orange-100/50 shadow-sm">
          
          {/* Background decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/40 to-transparent rounded-full blur-[80px] -z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FF6B2B 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
          
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-20 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold text-text-dark leading-[1.15] md:leading-[1.1] mb-6 max-w-3xl">
                Ready to Create Ads People Actually <span className="text-[#FF6B2B] italic">Watch?</span>
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-text-soft font-medium leading-relaxed max-w-[600px] mb-10">
                Your next winning campaign starts right here. Let's build scroll-stopping creatives that your audience actually wants to watch.
              </p>

              <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full">
                <Link href="https://wa.me/8801617563535" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                  <Button className="w-full sm:w-auto h-12 sm:h-14 px-3 sm:px-8 rounded-full bg-primary text-white hover:bg-primary-mid hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,106,42,0.3)] transition-all duration-300 text-[12px] sm:text-[16px] group border border-transparent whitespace-nowrap">
                    <Phone className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    Start Your Project
                  </Button>
                </Link>
                <Link href="https://wa.me/8801617563535" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-3 sm:px-8 rounded-full bg-white border-border text-text-dark hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 text-[12px] sm:text-[16px] whitespace-nowrap">
                    <MessageSquare className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    Book a Discovery Call
                  </Button>
                </Link>
              </div>

              {/* Trust Avatars */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://res.cloudinary.com/dweciloal/image/upload/v1781728323/516560586_10131331804729044_953580499398814400_n_gmmqls.jpg",
                    "https://res.cloudinary.com/dweciloal/image/upload/v1781722188/LZhoIQjMJryaBBvg8bUY2KgznY4_sgv9hv.webp",
                    "https://res.cloudinary.com/dweciloal/image/upload/v1781722187/ZPvYyoVHWnhugLPz9PA7j7C6pQ_jofkw8.jpg",
                    "https://res.cloudinary.com/dweciloal/image/upload/v1784104425/WhatsApp_Image_2026-07-03_at_14.31.13_1_he6d4a.jpg"
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#FFF6F0] overflow-hidden relative shadow-sm">
                      <Image src={src} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[14px] font-semibold text-text-soft">
                  <span className="text-[#FF6B2B] font-extrabold mr-1">500+</span> 
                  Brands Trust Us
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
