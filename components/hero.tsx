"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { 
  PiPlayCircleFill, 
  PiPlayCircle,
  PiChatCircleTextFill as MessageCircle, 
  PiStarFill as Star, 
  PiVideoCameraFill as Video, 
  PiSmileyFill as Smile, 
  PiHeadphonesFill as Headphones, 
  PiTargetFill as Target, 
  PiUsersFill as Users, 
  PiChartBarFill as BarChart3, 
  PiCameraFill as Camera, 
  PiXBold as X,
  PiStarFourFill,
  PiSparkleFill,
  PiRocketLaunchFill as Rocket,
  PiPaperPlaneTiltFill,
  PiCaretRightBold
} from "react-icons/pi"
import * as motion from "framer-motion/client"
import { AnimatePresence, useInView, animate } from "framer-motion"
import { GlassCard } from "./ui/glass-card"

const AnimatedNumber = ({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.round(v).toString())
      })
      return controls.stop
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

const HeroVideoBox = ({ setIsVideoOpen }: { setIsVideoOpen: (v: boolean) => void }) => (
  <>
    {/* The Video Thumbnail Box */}
    <div 
      className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.1)] cursor-pointer group border border-border z-20 mx-auto"
      onClick={() => setIsVideoOpen(true)}
    >
      <Image 
        src="https://img.youtube.com/vi/FrGOTkp-doQ/maxresdefault.jpg" 
        alt="Video Thumbnail" 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full" />
          <PiPlayCircleFill className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 text-primary drop-shadow-2xl" />
        </div>
      </div>
    </div>

    {/* Floating Element: Top Right Stats */}
    <div className="absolute z-30 top-[5%] lg:top-[15%] right-[-10px] lg:right-[-5%] bg-white rounded-2xl shadow-xl p-3 lg:p-4 flex items-center gap-2 lg:gap-4 rotate-[5deg] hover:rotate-0 transition-transform duration-300 scale-75 lg:scale-100 origin-right">
      <div className="flex items-end gap-1 h-8">
        <div className="w-2 h-4 bg-orange-200 rounded-full" />
        <div className="w-2 h-6 bg-orange-400 rounded-full" />
        <div className="w-2 h-8 bg-[#FF6B2B] rounded-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-text-soft font-bold">Engagement</span>
        <span className="text-[16px] font-extrabold text-text-dark">+128%</span>
        <span className="text-[9px] text-text-soft">This Month</span>
      </div>
    </div>

    {/* Floating Element: Bottom Left Trust */}
    <div className="absolute z-30 bottom-[5%] lg:bottom-[15%] left-[-10px] lg:left-[-5%] bg-white rounded-2xl shadow-xl px-4 py-2 lg:px-5 lg:py-3 flex items-center gap-2 lg:gap-3 rotate-[-3deg] hover:rotate-0 transition-transform duration-300 scale-75 lg:scale-100 origin-left">
      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-orange-100 text-[#FF6B2B] flex items-center justify-center">
        <Users className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-text-soft font-bold">Client</span>
        <span className="text-[16px] font-extrabold text-text-dark">Growth</span>
        <span className="text-[9px] text-text-soft">Guaranteed</span>
      </div>
    </div>
  </>
)

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden bg-white" id="home">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-50/50 to-transparent rounded-full blur-[100px] -z-10" />
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
        className="absolute top-20 right-20 text-orange-400 opacity-20 -z-10"
      >
        <PiStarFourFill className="w-16 h-16" />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute bottom-40 left-10 text-orange-500 opacity-20 -z-10"
      >
        <PiSparkleFill className="w-20 h-20" />
      </motion.div>

      <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="flex flex-col items-center gap-10 lg:gap-14 text-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center w-full max-w-[1000px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center w-full"
            >
              <div className="inline-flex items-center justify-center gap-2 bg-[#FEF0E6] text-[#F05A1B] px-5 py-2 rounded-full text-[13px] sm:text-[15px] font-medium mb-6 sm:mb-8">
                <Rocket className="w-4 h-4 shrink-0" />
                <span>Top-Rated AI Video Ads & Commercial Studio</span>
              </div>

              <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black tracking-[-0.03em] leading-[1.05] text-[#111111] mb-6">
                <span className="block">থেমে যাক স্ক্রল</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF4500] bg-clip-text text-transparent">শুরু হোক </span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF4500] bg-clip-text text-transparent">সেল</span>
                    {/* Underline SVG */}
                    <svg className="absolute w-[110%] -bottom-[15%] left-[-5%] text-[#FF5A00] h-4 sm:h-6" viewBox="0 0 300 15" fill="none" preserveAspectRatio="none">
                      <path d="M2 13 C 50 2, 150 -2, 298 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </h1>
              
              <div className="mt-4 mb-6 text-[14px] sm:text-[16px] md:text-[18px] font-bold tracking-wide">
                <span className="text-gray-500">হাই-এন্ড কমার্শিয়াল, </span>
                <span className="text-[#FF5A00]">এখন সবার হাতের নাগালে।</span>
              </div>

              <p className="text-[15px] sm:text-[18px] md:text-[20px] text-gray-600 font-medium w-full max-w-[800px] px-4 mx-auto leading-[1.6]">
                এখন বড় প্রোডাকশন হাউস বা লাখ লাখ টাকার বাজেট ছাড়াই আপনার ব্র্যান্ডের জন্য তৈরি করা সম্ভব প্রফেশনাল OVC স্টাইলের AI কমার্শিয়াল, সঙ্গে অথেন্টিক UGC কনটেন্ট। আপনার ব্র্যান্ডের জন্য আমরা তৈরি করি এমন কনটেন্ট, যা স্ক্রল থামাবে এবং আনবে আরও বেশি সেলস।
              </p>
            </motion.div>

            {/* Centered Video Thumbnail */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-[800px] relative flex justify-center mt-8 lg:mt-12 mb-8 lg:mb-10 mx-auto"
            >
              <HeroVideoBox setIsVideoOpen={setIsVideoOpen} />
            </motion.div>

            {/* Buttons and Trust Row Container */}
            <div className="flex flex-col items-center w-full mt-2">
              
              {/* Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-row items-center justify-center gap-2 sm:gap-6 w-full max-w-[700px] px-2 sm:px-0"
              >
                <Link href="#pricing" className="w-full flex-1">
                  <button className="w-full flex items-center justify-center gap-1.5 sm:gap-3 h-14 sm:h-[80px] px-2 sm:px-12 text-[12px] sm:text-[18px] font-bold text-white rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FF7E2E] shadow-[0_12px_24px_-8px_rgba(255,106,0,0.6)] sm:shadow-[0_20px_40px_-10px_rgba(255,106,0,0.6)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-10px_rgba(255,106,0,0.7)] transition-all duration-300 group">
                    <PiPaperPlaneTiltFill className="w-4 h-4 sm:w-6 h-6" />
                    Start Your Project
                    <PiCaretRightBold className="w-3 h-3 sm:w-5 sm:h-5 ml-0.5 sm:ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="#portfolio" className="w-full flex-1">
                  <button className="w-full flex items-center justify-center gap-1.5 sm:gap-3 h-14 sm:h-[80px] px-2 sm:px-12 text-[12px] sm:text-[18px] font-bold text-[#111111] rounded-full bg-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] sm:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:bg-[#FAFAFA] hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-200 group">
                    <PiPlayCircle className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-105" />
                    Watch Our Work
                  </button>
                </Link>
              </motion.div>

              {/* Trust Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 items-center w-full max-w-[700px] mt-8 sm:mt-12 gap-0"
              >
                {/* Left 50% - Avatars */}
                <div className="flex justify-start pl-2 sm:pl-0 sm:justify-end sm:pr-8 relative">
                  <div className="flex -space-x-4 sm:-space-x-5">
                    {[
                      "https://res.cloudinary.com/dweciloal/image/upload/v1781728323/516560586_10131331804729044_953580499398814400_n_gmmqls.jpg",
                      "https://res.cloudinary.com/dweciloal/image/upload/v1781722188/LZhoIQjMJryaBBvg8bUY2KgznY4_sgv9hv.webp",
                      "https://res.cloudinary.com/dweciloal/image/upload/v1781722187/ZPvYyoVHWnhugLPz9PA7j7C6pQ_jofkw8.jpg",
                      "https://res.cloudinary.com/dweciloal/image/upload/v1784104425/WhatsApp_Image_2026-07-03_at_14.31.13_1_he6d4a.jpg"
                    ].map((src, i) => (
                      <div key={i} className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px] rounded-full border-[2px] sm:border-[3px] border-white overflow-hidden shadow-sm relative hover:scale-[1.03] transition-transform duration-300" style={{ zIndex: 10 - i }}>
                        <Image src={src} alt="Client" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Vertical Divider */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 sm:h-14 bg-gray-200"></div>
                </div>
                
                {/* Right 50% - Rating */}
                <div className="flex justify-center sm:justify-start sm:pl-8">
                  <div className="flex flex-col justify-center text-left">
                    <div className="flex items-center justify-start gap-0.5 sm:gap-1 mb-1 sm:mb-1.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 sm:w-[22px] sm:h-[22px] text-[#FF6A00] hover:drop-shadow-[0_0_4px_rgba(255,106,0,0.5)] transition-all duration-300" />
                      ))}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[13px] sm:text-[18px] font-extrabold text-[#1E1E1E]">
                        Trusted by 500+ Brands
                      </span>
                      <span className="text-[11px] sm:text-[15px] font-medium text-[#777777] mt-0.5">
                        Across the globe
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 w-full max-w-[1000px] mx-auto bg-white rounded-[32px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] relative p-8 sm:p-12"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-t-[3px] border-l-[3px] border-[#FF5A00] rounded-tl-[32px] opacity-80" />
          <div className="absolute bottom-0 right-0 w-8 sm:w-10 h-8 sm:h-10 border-b-[3px] border-r-[3px] border-[#FF5A00] rounded-br-[32px] opacity-80" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 lg:gap-y-0 relative">
            {/* Desktop Dividers */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[25%] w-[1px] h-2/3 bg-gray-100" />
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[50%] w-[1px] h-2/3 bg-gray-100" />
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[75%] w-[1px] h-2/3 bg-gray-100" />

            {/* Mobile Dividers */}
            <div className="lg:hidden absolute top-1/2 -translate-y-1/2 left-[50%] w-[1px] h-full bg-gray-100" />
            <div className="lg:hidden absolute top-[50%] -translate-y-1/2 left-[10%] right-[10%] h-[1px] bg-gray-100" />

            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-[#FEF0E6] flex items-center justify-center text-[#FF5A00] mb-4">
                <Video className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-[28px] sm:text-[32px] font-black text-[#FF5A00] leading-none mb-1.5"><AnimatedNumber value={600} suffix="+" /></div>
              <div className="text-[12px] sm:text-[14px] font-bold text-[#111111] mb-2 sm:mb-3">Commercials & UGC</div>
              <div className="w-4 h-[3px] bg-[#FF5A00] rounded-full" />
            </div>
            
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-[#FEF0E6] flex items-center justify-center text-[#FF5A00] mb-4">
                <Smile className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-[28px] sm:text-[32px] font-black text-[#FF5A00] leading-none mb-1.5"><AnimatedNumber value={98} suffix="%" /></div>
              <div className="text-[12px] sm:text-[14px] font-bold text-[#111111] mb-2 sm:mb-3">Client Satisfaction</div>
              <div className="w-4 h-[3px] bg-[#FF5A00] rounded-full" />
            </div>
            
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-[#FEF0E6] flex items-center justify-center text-[#FF5A00] mb-4">
                <Star className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-[28px] sm:text-[32px] font-black text-[#FF5A00] leading-none mb-1.5"><AnimatedNumber value={8} suffix="+" /></div>
              <div className="text-[12px] sm:text-[14px] font-bold text-[#111111] mb-2 sm:mb-3">Years of Experience</div>
              <div className="w-4 h-[3px] bg-[#FF5A00] rounded-full" />
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] bg-[#FEF0E6] flex items-center justify-center text-[#FF5A00] mb-4">
                <Headphones className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-[28px] sm:text-[32px] font-black text-[#FF5A00] leading-none mb-1.5"><AnimatedNumber value={24} suffix="/7" /></div>
              <div className="text-[12px] sm:text-[14px] font-bold text-[#111111] mb-2 sm:mb-3">Dedicated Support</div>
              <div className="w-4 h-[3px] bg-[#FF5A00] rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12"
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/FrGOTkp-doQ?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
