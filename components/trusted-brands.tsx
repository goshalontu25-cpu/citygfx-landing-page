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
  "https://res.cloudinary.com/dweciloal/image/upload/v1784119906/cl13_st04wj.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1784127062/cl14_l5kssg.png"
]

export function TrustedBrands() {
  return (
    <section className="pt-8 md:pt-16 pb-12 md:pb-20 border-b border-border bg-white overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 bg-[#FEF0E6] text-[#F05A1B] px-5 py-2 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          TRUSTED PARTNERS
        </div>

        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black text-[#111111] leading-tight mb-4 px-4">
            Brands That Want <span className="text-[#FF5A00]">Results</span>
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-600 font-medium max-w-[600px] mb-12">
          Join 500+ forward-thinking brands who trust our creatives to scale their campaigns.
        </p>

        {/* Logo Box (Animated Scrolling) */}
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-[32px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] border border-gray-100 p-2 sm:p-4 relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none rounded-l-[32px]" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-[32px]" />
          
          <div className="flex w-max">
            <motion.div 
              className="flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {[...logos, ...logos].map((src, idx) => (
                <div key={idx} className="w-[120px] sm:w-[160px] md:w-[200px] shrink-0 h-24 sm:h-32 flex items-center justify-center p-4 hover:bg-gray-50/50 transition-colors border-r border-gray-100">
                  <div className="relative w-full h-full opacity-80 hover:opacity-100 transition-opacity">
                    <Image 
                      src={src} 
                      alt={`Brand Logo ${idx + 1}`} 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 768px) 120px, 200px"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>



      </motion.div>
    </section>
  )
}
