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
    <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden bg-[#FCFAF8]" id="home">
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
              <div className="inline-flex items-center justify-center gap-2 bg-[#FEF0E6] text-[#F05A1B] px-5 py-2 rounded-full text-[13px] sm:text-[15px] font-medium mb-6 sm:mb-8 shadow-sm">
                <Rocket className="w-4 h-4 shrink-0" />
                <span>Top-Rated AI Video Ads & Commercial Studio</span>
              </div>

              <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black tracking-[-0.03em] leading-[1.05] text-[#111111] mb-6">
                <span className="block">Stop the Scroll.</span>
                <span className="block bg-gradient-to-r from-[#FF8A00] to-[#FF4500] bg-clip-text text-transparent relative inline-block">
                  Start the Sales.
                  {/* Underline SVG */}
                  <svg className="absolute w-[105%] -bottom-[8%] left-[-2%] text-[#FF5A00] h-4 sm:h-6" viewBox="0 0 300 15" fill="none" preserveAspectRatio="none">
                    <path d="M2 13 C 50 2, 150 -2, 298 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              <div className="mt-4 mb-6 text-[12px] sm:text-[14px] md:text-[16px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
                <span className="text-gray-500">Next-gen video ads that </span>
                <span className="text-[#FF5A00]">convert.</span>
              </div>

              <p className="text-[15px] sm:text-[18px] md:text-[20px] text-gray-600 font-medium w-full max-w-[800px] px-4 mx-auto leading-[1.6]">
                We craft hyper-realistic AI commercials and authentic UGC content that doesn't just look stunning—it converts.
                Built for Meta, TikTok, and Shopify, our creatives are engineered to make your brand stand out and scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 w-full px-4 sm:px-0"
            >
              <Link href="https://wa.me/8801617563535" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 h-14 sm:h-16 px-8 sm:px-10 text-[16px] sm:text-[18px] font-bold text-white rounded-full bg-gradient-to-r from-[#FF6F00] to-[#F34600] shadow-[0_20px_40px_-10px_rgba(243,70,0,0.5)] hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(243,70,0,0.7)] transition-all">
                  <PiPaperPlaneTiltFill className="w-5 h-5 sm:w-6 sm:h-6" />
                  Start Your Project
                  <PiCaretRightBold className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                </button>
              </Link>
              <Link href="#portfolio" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 h-14 sm:h-16 px-8 sm:px-10 text-[16px] sm:text-[18px] font-bold text-[#111111] rounded-full bg-white shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] hover:scale-105 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.15)] transition-all border border-gray-100">
                  <PiPlayCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                  Watch Our Work
                </button>
              </Link>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center justify-center gap-4 sm:gap-6 mt-12 w-full"
            >
              <div className="flex -space-x-4">
                {[
                  "https://res.cloudinary.com/dweciloal/image/upload/v1781728323/516560586_10131331804729044_953580499398814400_n_gmmqls.jpg",
                  "https://res.cloudinary.com/dweciloal/image/upload/v1781722188/LZhoIQjMJryaBBvg8bUY2KgznY4_sgv9hv.webp",
                  "https://res.cloudinary.com/dweciloal/image/upload/v1781722187/ZPvYyoVHWnhugLPz9PA7j7C6pQ_jofkw8.jpg",
                  "https://res.cloudinary.com/dweciloal/image/upload/v1784104425/WhatsApp_Image_2026-07-03_at_14.31.13_1_he6d4a.jpg"
                ].map((src, i) => (
                  <div key={i} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#FCFAF8] overflow-hidden shadow-md relative z-[4] hover:z-10 transition-transform hover:scale-110">
                    <Image src={src} alt="Client" fill className="object-cover" />
                  </div>
                ))}
              </div>
              
              <div className="w-[1px] h-12 bg-gray-300 hidden sm:block"></div>

              <div className="flex flex-col justify-center text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5A00]" />
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] sm:text-[16px] font-bold text-[#111111]">
                    Trusted by 500+ Brands
                  </span>
                  <span className="text-[12px] sm:text-[14px] font-medium text-gray-500">
                    Across the globe
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Centered Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-[800px] relative flex justify-center mt-6 lg:mt-10 mx-auto"
          >
            <HeroVideoBox setIsVideoOpen={setIsVideoOpen} />
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 w-full bg-white rounded-3xl border border-border px-4 py-8 md:px-8 md:py-6 shadow-sm grid grid-cols-2 md:flex md:flex-row items-stretch md:items-center justify-between md:gap-4 md:divide-x divide-border"
        >
          <div className="flex flex-col items-center justify-center w-full md:w-1/4 gap-2 md:gap-3 border-b border-r border-border pb-6 pr-2 md:border-none md:pb-0 md:pr-0">
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B2B]">
              <Video className="w-6 h-6" />
            </div>
            <div className="text-center">
              <div className="text-[24px] md:text-[28px] font-extrabold text-[#FF6B2B] leading-none mb-1"><AnimatedNumber value={600} suffix="+" /></div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold text-text-soft whitespace-nowrap">Commercials & UGC</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center w-full md:w-1/4 gap-2 md:gap-3 border-b border-border pb-6 pl-2 md:border-none md:pb-0 md:pl-0">
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B2B]">
              <Smile className="w-6 h-6" />
            </div>
            <div className="text-center">
              <div className="text-[24px] md:text-[28px] font-extrabold text-[#FF6B2B] leading-none mb-1"><AnimatedNumber value={98} suffix="%" /></div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold text-text-soft whitespace-nowrap">Client Satisfaction</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center w-full md:w-1/4 gap-2 md:gap-3 border-r border-border pt-6 pr-2 md:border-none md:pt-0 md:pr-0">
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B2B]">
              <Star className="w-6 h-6" />
            </div>
            <div className="text-center">
              <div className="text-[24px] md:text-[28px] font-extrabold text-[#FF6B2B] leading-none mb-1"><AnimatedNumber value={8} suffix="+" /></div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold text-text-soft whitespace-nowrap">Years of Experience</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full md:w-1/4 gap-2 md:gap-3 pt-6 pl-2 md:border-none md:pt-0 md:pl-0">
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B2B]">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="text-center">
              <div className="text-[24px] md:text-[28px] font-extrabold text-[#FF6B2B] leading-none mb-1"><AnimatedNumber value={24} suffix="/7" /></div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px] font-semibold text-text-soft whitespace-nowrap">Dedicated Support</div>
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
