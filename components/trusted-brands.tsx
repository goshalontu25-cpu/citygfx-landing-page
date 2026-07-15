"use client"

import * as React from "react"
import { PiShieldCheckFill as ShieldCheck } from "react-icons/pi"
import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100815/cl3_pvwvy5.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/cl2_w1w1t8.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/cl7_yuhj4n.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/Cl1_cvuweu.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/cl4_ln8px2.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/cl5_sxdnio.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/cl6_tddabg.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/cl8_xryl5w.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100814/cl9_ffwi57.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100813/cl10_yc2fq7.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100813/cl12_ccwank.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784100813/cl11_bsmktb.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784119907/cl13_1_zzrgu8.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784119906/cl13_st04wj.png"
]

const LogoSet = () => (
  <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0">
    {logos.map((src, idx) => (
      <div key={idx} className="relative w-32 h-14 md:w-40 md:h-16 transition-transform hover:scale-105 duration-300">
        <Image 
          src={src} 
          alt={`Brand Logo ${idx + 1}`} 
          fill 
          className="object-contain"
          sizes="(max-width: 768px) 128px, 160px"
        />
      </div>
    ))}
  </div>
)

export function TrustedBrands() {
  return (
    <section className="pt-6 md:pt-10 pb-10 md:pb-16 border-b border-border bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B2B] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          TRUSTED PARTNERS
        </div>

        <h2 className="text-[24px] sm:text-[28px] md:text-[40px] font-extrabold text-text-dark leading-tight mb-4 text-center px-4">
            Brands That Want <span className="text-[#FF6B2B]">Results</span>
        </h2>
        <p className="text-[16px] text-text-soft font-medium text-center max-w-[600px]">
          Join 500+ forward-thinking brands who trust our creatives to scale their campaigns.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient masks for seamless edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max transition-colors duration-500">
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            <LogoSet />
            <LogoSet />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
