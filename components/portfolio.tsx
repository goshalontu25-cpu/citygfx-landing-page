"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  PiPlayFill as Play, 
  PiMegaphoneFill as Megaphone, 
  PiQuestionFill as HelpCircle, 
  PiCubeFill as Box, 
  PiGraduationCapFill as GraduationCap, 
  PiHeartFill as Heart, 
  PiCornersOutBold as Maximize2, 
  PiClockFill as Clock, 
  PiSquaresFourFill as Grid2X2,
  PiXBold as X
} from "react-icons/pi"
import * as motion from "framer-motion/client"
import { AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"

export const filterCategories = [
  { id: "all", label: "All", icon: null },
  { id: "promotional", label: "Promotional", icon: Megaphone },
  { id: "explainer", label: "Explainer", icon: HelpCircle },
  { id: "motion-graphics", label: "Motion Graphics", icon: Box },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "social-media", label: "Social Media", icon: Heart },
]

export const portfolioItems = [
  {
    id: 1,
    title: "ZUQO Verona | CityGfx",
    categoryId: "promotional",
    categoryLabel: "PROMOTIONAL",
    duration: "45 Sec",
    badgeColor: "bg-[#7C3AED]",
    playColor: "text-[#7C3AED]",
    image: "https://img.youtube.com/vi/qEYEsTH_VxU/maxresdefault.jpg",
    videoId: "qEYEsTH_VxU"
  },
  {
    id: 2,
    title: "RIDE ON Pro Ride Carbon Cleaner | CityGfx",
    categoryId: "explainer",
    categoryLabel: "EXPLAINER",
    duration: "1:12 Min",
    badgeColor: "bg-[#3B82F6]",
    playColor: "text-[#3B82F6]",
    image: "https://img.youtube.com/vi/SLF-qk8D-QM/maxresdefault.jpg",
    videoId: "SLF-qk8D-QM"
  },
  {
    id: 3,
    title: "Babuland Eid Campaign | AI Ad by CityGfx",
    categoryId: "social-media",
    categoryLabel: "SOCIAL MEDIA",
    duration: "30 Sec",
    badgeColor: "bg-[#EC4899]",
    playColor: "text-[#EC4899]",
    image: "https://img.youtube.com/vi/4qsg1fCt4pE/maxresdefault.jpg",
    videoId: "4qsg1fCt4pE"
  },

  {
    id: 5,
    title: "Own a Modern Car Garage in Dhaka! | Zantrik AI Ad by CityGfx",
    categoryId: "education",
    categoryLabel: "EDUCATION",
    duration: "1:08 Min",
    badgeColor: "bg-[#10B981]",
    playColor: "text-[#10B981]",
    image: "https://img.youtube.com/vi/4BdIND7tixA/maxresdefault.jpg",
    videoId: "4BdIND7tixA"
  },
  {
    id: 6,
    title: "Naturals By Rakhi - Premium Hair Oil | AI Video Commercial by CityGfx",
    categoryId: "social-media",
    categoryLabel: "SOCIAL MEDIA",
    duration: "25 Sec",
    badgeColor: "bg-[#EC4899]",
    playColor: "text-[#EC4899]",
    image: "https://img.youtube.com/vi/Di4xrEBxFow/maxresdefault.jpg",
    videoId: "Di4xrEBxFow"
  },
  {
    id: 7,
    title: "The Perfect Eid Gift 🎁 | A Heartwarming AI Commercial for Qpick",
    categoryId: "promotional",
    categoryLabel: "PROMOTIONAL",
    duration: "55 Sec",
    badgeColor: "bg-[#7C3AED]",
    playColor: "text-[#7C3AED]",
    image: "https://img.youtube.com/vi/gWcyHMtQS-0/maxresdefault.jpg",
    videoId: "gWcyHMtQS-0"
  },
  {
    id: 8,
    title: "ACI Water Pump - Eid Special AI Commercial | By CityGfx",
    categoryId: "explainer",
    categoryLabel: "EXPLAINER",
    duration: "1:45 Min",
    badgeColor: "bg-[#3B82F6]",
    playColor: "text-[#3B82F6]",
    image: "https://img.youtube.com/vi/7heyvnuMCQ8/maxresdefault.jpg",
    videoId: "7heyvnuMCQ8"
  },
  {
    id: 9,
    title: "Save Water This Holiday | ACI Water Pump AI Commercial by CityGfx",
    categoryId: "motion-graphics",
    categoryLabel: "MOTION GRAPHICS",
    duration: "2:10 Min",
    badgeColor: "bg-[#F97316]",
    playColor: "text-[#F97316]",
    image: "https://img.youtube.com/vi/t-08atw9xxo/maxresdefault.jpg",
    videoId: "t-08atw9xxo"
  }
]

export function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-secondary" id="portfolio">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B2B] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase mb-6">
            <Play className="w-3.5 h-3.5" />
            Our Portfolio
          </div>
          
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-text-dark leading-[1.2] mb-4 text-center">
            Work Speaks Louder.
          </h2>
          
          <p className="text-[16px] text-text-soft font-medium max-w-[600px] mb-8">
            A curated selection of winning creatives that delivered record-breaking ROI for our clients.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
              onClick={() => setActiveVideo(item.videoId)}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                  <Play className={`w-6 h-6 fill-current ${item.playColor} ml-1`} />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[18px] font-bold mb-1.5">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-white/80">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[13px] font-medium">{item.duration}</span>
                  </div>
                </div>
                
                {/* Maximize Icon */}
                <div className="w-8 h-8 rounded bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <Link href="/portfolio">
            <Button variant="outline" className="h-12 px-8 rounded-full border-[#FF6B2B] text-[#FF6B2B] hover:bg-[#FF6B2B]/5 font-semibold">
              <Grid2X2 className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </Link>
        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={() => setActiveVideo(null)}
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
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
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
