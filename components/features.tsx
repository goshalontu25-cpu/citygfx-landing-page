"use client"

import * as React from "react"
import { 
  PiTargetFill as Target, 
  PiFilmStripFill as Clapperboard, 
  PiMonitorPlayFill as MonitorPlay, 
  PiTrendUpFill as TrendingUp, 
  PiArrowRight as ArrowRight 
} from "react-icons/pi"
import * as motion from "framer-motion/client"

const features = [
  {
    num: "01",
    title: "AI Commercials",
    description: "Cinematic, high-converting AI commercials crafted with cutting-edge technology and premium quality.",
    icon: Target,
    themeColor: "#FF6A00",
    bgLight: "#FFF4ED"
  },
  {
    num: "02",
    title: "UGC Production",
    description: "Real creators. Real emotions. Authentic UGC that feels organic and drives massive ROI on paid social.",
    icon: Clapperboard,
    themeColor: "#7C3AED",
    bgLight: "#F5F3FF"
  },
  {
    num: "03",
    title: "Creative Strategy",
    description: "Data-driven concepts, hooks, and offers built on proven psychological triggers and performance insights.",
    icon: MonitorPlay,
    themeColor: "#10B981",
    bgLight: "#ECFDF5"
  },
  {
    num: "04",
    title: "Editing & Post-Production",
    description: "Fast. Clean. Premium. Every frame optimized to hold attention and maximize conversions.",
    icon: TrendingUp,
    themeColor: "#3B82F6",
    bgLight: "#EFF6FF"
  }
]

export function Features() {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-[#FCFAF8]" id="services">
      <div className="container mx-auto max-w-[1000px] px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FEF0E6] text-[#F05A1B] px-5 py-2 rounded-full text-[13px] font-bold tracking-[0.15em] uppercase mb-6">
            <Target className="w-4 h-4" />
            WHAT WE DO
          </div>
          
          <h2 className="text-[36px] sm:text-[44px] md:text-[56px] font-black text-[#111111] leading-[1.1] mb-6">
            Creative That <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF4500] bg-clip-text text-transparent">Converts</span>
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-gray-600 font-medium max-w-[700px] leading-relaxed">
            In today's feed, a pretty video isn't enough. Your creatives must be engineered to stop the scroll, build unbreakable trust, and drive immediate sales.
          </p>
        </motion.div>

        {/* Feature Cards List */}
        <div className="flex flex-col gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 overflow-hidden cursor-pointer hover:-translate-y-1"
            >
              {/* Left Color Strip */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[4px] sm:w-[6px] rounded-l-[24px] sm:rounded-l-[32px] transition-opacity duration-300 opacity-80 group-hover:opacity-100" 
                style={{ backgroundColor: feature.themeColor }} 
              />
              
              {/* Icon Container */}
              <div 
                className="shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: feature.bgLight, color: feature.themeColor }}
              >
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col">
                {/* Number & Line */}
                <div className="flex items-center gap-4 mb-2 sm:mb-3">
                  <span className="text-[16px] sm:text-[18px] font-bold" style={{ color: feature.themeColor }}>
                    {feature.num}
                  </span>
                  <div className="h-[2px] w-8 sm:w-10 rounded-full opacity-30" style={{ backgroundColor: feature.themeColor }} />
                </div>
                
                <h3 className="text-[22px] sm:text-[28px] font-bold text-[#111111] mb-2 sm:mb-3 group-hover:text-[#FF6A00] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-[15px] sm:text-[16px] text-gray-500 font-medium leading-relaxed max-w-[500px]">
                  {feature.description}
                </p>
              </div>

              {/* Right Arrow Button */}
              <div 
                className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 mt-4 sm:mt-0"
                style={{ backgroundColor: feature.bgLight, color: feature.themeColor }}
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

