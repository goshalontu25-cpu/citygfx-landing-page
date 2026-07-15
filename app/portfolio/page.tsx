"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  PiPlayFill as Play,
  PiClockFill as Clock,
  PiCornersOutBold as Maximize2,
  PiArrowLeftBold as ArrowLeft,
  PiXBold as X
} from "react-icons/pi"
import * as motion from "framer-motion/client"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import { portfolioItems, filterCategories } from "@/components/portfolio"

export default function PortfolioPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pb-[68px] md:pb-0 bg-white">
        
        {/* Page Header */}
        <section className="pt-32 md:pt-40 pb-12 md:pb-20 bg-secondary">
          <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
            <Link href="/" className="inline-flex items-center text-text-soft hover:text-[#FF6B2B] font-medium transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-[36px] sm:text-[44px] md:text-[56px] font-extrabold text-text-dark leading-[1.1] mb-6">
                Our <span className="text-[#FF6B2B]">Work</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-text-soft font-medium leading-relaxed">
                Explore our curated collection of high-converting AI commercials, UGC content, and motion graphics. 
                Every video is engineered to stop the scroll and drive serious ROI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto max-w-[1280px] px-4 md:px-6">

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveVideo(item.videoId)}
                  className="group relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-border"
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
                      <h3 className="text-white text-[18px] font-bold mb-1.5 leading-tight pr-4">{item.title}</h3>
                      <div className="flex items-center gap-1.5 text-white/80">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[13px] font-medium">{item.duration}</span>
                      </div>
                    </div>
                    
                    {/* Maximize Icon */}
                    <div className="w-8 h-8 rounded bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12"
              onClick={() => setActiveVideo(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
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
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
