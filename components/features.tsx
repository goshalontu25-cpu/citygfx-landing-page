"use client"

import * as React from "react"
import { 
  PiTargetFill as Target, 
  PiFilmStripFill as Clapperboard, 
  PiMonitorPlayFill as MonitorPlay, 
  PiTrendUpFill as TrendingUp, 
  PiCaretRightBold as ChevronRight 
} from "react-icons/pi"
import * as motion from "framer-motion/client"

const features = [
  {
    num: "01",
    title: "AI Commercials",
    description: "We leverage cutting-edge AI workflows to produce cinematic commercials in a fraction of the time, without compromising on premium quality.",
    icon: Target,
    colorClass: "text-[#FF6B2B]",
    bgClass: "bg-orange-50",
    buttonClass: "bg-[#FF6B2B] shadow-[#FF6B2B]/30",
    lineClass: "bg-gradient-to-r from-[#FF6B2B]/20 to-[#FF6B2B]/5"
  },
  {
    num: "02",
    title: "UGC Production",
    description: "Real creators. Genuine emotions. We script and direct UGC content that feels organic and drives massive ROI on paid social.",
    icon: Clapperboard,
    colorClass: "text-[#7C3AED]",
    bgClass: "bg-purple-50",
    buttonClass: "bg-[#7C3AED] shadow-[#7C3AED]/30",
    lineClass: "bg-gradient-to-r from-[#7C3AED]/20 to-[#7C3AED]/5"
  },
  {
    num: "03",
    title: "Creative Strategy",
    description: "We don't just point a camera. We engineer scripts, hooks, and offers based on proven psychological triggers and performance data.",
    icon: MonitorPlay,
    colorClass: "text-[#10B981]",
    bgClass: "bg-green-50",
    buttonClass: "bg-[#10B981] shadow-[#10B981]/30",
    lineClass: "bg-gradient-to-r from-[#10B981]/20 to-[#10B981]/5"
  },
  {
    num: "04",
    title: "Editing & Post-Production",
    description: "Fast. Clean. Premium. Every single frame is optimized to hold attention and guide the viewer towards conversion.",
    icon: TrendingUp,
    colorClass: "text-[#3B82F6]",
    bgClass: "bg-blue-50",
    buttonClass: "bg-[#3B82F6] shadow-[#3B82F6]/30",
    lineClass: "bg-gradient-to-r from-[#3B82F6]/20 to-[#3B82F6]/5"
  }
]

export function Features() {
  return (
    <section className="pt-8 md:pt-12 pb-8 md:pb-12 bg-secondary" id="services">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10 md:mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B2B] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase mb-6">
            <Target className="w-3.5 h-3.5" />
            WHAT WE DO
          </div>
          
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-text-dark leading-[1.2] mb-4 text-center md:text-left">
            Creative That <span className="text-[#FF6B2B]">Converts</span>
          </h2>
          
          <p className="text-[15px] text-text-soft font-medium max-w-[600px] mb-8 leading-relaxed">
            In today's feed, a pretty video isn't enough. Your creatives must be engineered to stop the scroll, build unbreakable trust, and drive immediate sales.
          </p>
          
          <div className="flex gap-2">
            <div className="w-8 h-1 bg-[#FF6B2B] rounded-full" />
            <div className="w-2 h-1 bg-[#FF6B2B] rounded-full opacity-30" />
            <div className="w-2 h-1 bg-[#FF6B2B] rounded-full opacity-30" />
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white rounded-2xl p-9 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border border-border flex flex-col h-full overflow-hidden ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Background Number */}
              <div className="absolute top-4 right-6 text-[80px] font-black text-gray-50/80 -z-0 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                {feature.num}
              </div>

              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 rounded-full ${feature.bgClass} ${feature.colorClass} flex items-center justify-center mb-8`}>
                <div className="absolute inset-0 rounded-full border border-current opacity-20 transform scale-125" />
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-[20px] font-bold text-text-dark mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-text-soft font-medium leading-relaxed mb-10 flex-1">
                  {feature.description}
                </p>

                {/* Bottom Action Area */}
                <div className="mt-auto flex items-center gap-4">
                  <button className={`w-8 h-8 rounded-full ${feature.buttonClass} text-white flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:translate-x-1 shrink-0`}>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className={`flex-1 h-px ${feature.lineClass}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
