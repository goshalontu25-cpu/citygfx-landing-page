"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { 
  PiQuestionFill as HelpCircle, 
  PiHeadphonesFill as Headphones, 
  PiChatCircleTextFill as MessageSquare, 
  PiPlusBold as Plus, 
  PiMinusBold as Minus, 
  PiLightbulbFill as Lightbulb 
} from "react-icons/pi"
import * as motion from "framer-motion/client"
import { AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"

const faqs = [
  {
    question: "How do you make the videos? Do I need to shoot anything?",
    answer: "Not necessarily. We handle everything end-to-end using AI models, licensed stock footage, and professional motion graphics. If you have product footage or UGC, we can seamlessly integrate it into the commercial."
  },
  {
    question: "Who is this service for?",
    answer: (
      <div className="flex flex-col gap-3">
        <p>This service is perfectly designed for:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li><strong>CEOs, Founders & Public Figures</strong> who want a structured, premium social media presence without managing it themselves.</li>
          <li><strong>Startups & SMEs</strong> that have a limited monthly marketing budget but still expect high-quality execution and consistent results.</li>
          <li><strong>Restaurants, E-commerce & Tech Companies</strong> that need strong social media marketing but don't have access to reliable, high-quality execution.</li>
        </ul>
      </div>
    )
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery for single projects is typically 48-72 hours. For our Monthly Retainer clients, we guarantee priority delivery and rapid turnaround on all creative assets."
  },
  {
    question: "Do I get full commercial rights?",
    answer: "Yes, all final deliverables are fully licensed and ready for commercial use across all paid media platforms."
  }
]

function FaqItem({ faq, isOpen, onClick }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div 
      className={`border rounded-xl transition-all duration-300 overflow-hidden ${
        isOpen 
          ? "border-[#FF6B2B] bg-orange-50 shadow-sm" 
          : "border-border bg-white hover:border-[#FF6B2B]/30"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <span className={`text-[18px] font-bold ${isOpen ? 'text-text-dark' : 'text-text-mid'}`}>
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-text-dark'}`}
        >
          <svg width="14" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="currentColor"/>
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-2 text-[16px] text-text-soft font-medium leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-12 md:py-16 bg-secondary relative overflow-hidden" id="faq">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10 md:mb-8 md:mb-10"
        >
          <div className="inline-flex items-center bg-orange-50 text-[#FF6B2B] px-5 py-2 rounded-full text-[13px] font-bold tracking-wide mb-6">
            FAQ
          </div>
          
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-text-dark leading-[1.2] mb-4 text-center px-4">
            Got Questions? <span className="text-[#FF6B2B]">We've Got Answers.</span>
          </h2>
          
          <p className="text-[16px] text-text-soft font-medium max-w-[600px] mb-10 mx-auto text-center">
            Everything you need to know about partnering with CityGfx for your next campaign.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Left Column - FAQs & Banner */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index} 
                  faq={faq} 
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Bottom Support Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-orange-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Headphones className="w-6 h-6 text-[#FF6B2B]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-text-dark mb-1">আরও কিছু জানতে চান?</h4>
                  <p className="text-[13px] font-medium text-text-soft">আমাদের সাপোর্ট টিম সবসময় আপনার জন্য প্রস্তুত।</p>
                </div>
              </div>
              <Link href="https://wa.me/8801617563535" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#FF6B2B] text-white hover:bg-[#E85E22] rounded-full h-11 px-6 shadow-md shadow-[#FF6B2B]/20 shrink-0">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  আমাদের সাথে কথা বলুন
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual 3D Replica */}
          <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Background Glow */}
              <div className="absolute w-[400px] h-[400px] bg-orange-50/80 rounded-full blur-3xl -z-10" />
              
              {/* Dotted Pattern */}
              <div className="absolute right-0 top-10 w-32 h-32 opacity-30" style={{ backgroundImage: 'radial-gradient(#FF6B2B 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
              <div className="absolute left-0 bottom-10 w-24 h-24 opacity-30" style={{ backgroundImage: 'radial-gradient(#FF6B2B 2px, transparent 2px)', backgroundSize: '20px 20px' }} />

              {/* Main Question Mark Bubble */}
              <div className="relative z-20 w-[240px] h-[220px] bg-gradient-to-br from-[#FF8A50] to-[#FF5722] rounded-[40px] rounded-br-[10px] shadow-2xl shadow-[#FF6B2B]/40 flex items-center justify-center border-t border-l border-white/20 transform rotate-[-2deg]">
                 {/* Internal glow for 3D effect */}
                 <div className="absolute inset-0 rounded-[40px] rounded-br-[10px] bg-gradient-to-tr from-black/5 to-white/20 pointer-events-none" />
                 {/* Question mark */}
                 <span className="text-[120px] font-black text-white drop-shadow-lg leading-none transform -translate-y-2">?</span>
                 
                 {/* Tail of the bubble */}
                 <div className="absolute -bottom-6 right-8 w-12 h-12 bg-[#FF5722] rounded-br-lg transform skew-x-[30deg] rotate-[15deg] -z-10" />
              </div>

              {/* White Chat Bubble (3 dots) */}
              <div className="absolute z-30 top-[50%] right-[-10%] w-[120px] h-[100px] bg-white rounded-[24px] rounded-bl-[8px] shadow-xl shadow-black/5 flex items-center justify-center transform rotate-[5deg]">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#FF6B2B]" />
                   <div className="w-3 h-3 rounded-full bg-[#FF6B2B]/60" />
                   <div className="w-3 h-3 rounded-full bg-[#FF6B2B]/30" />
                 </div>
                 {/* Tail */}
                 <div className="absolute -bottom-3 left-6 w-6 h-6 bg-white rounded-bl-sm transform skew-x-[-20deg] rotate-[-10deg] -z-10" />
              </div>

              {/* Lightbulb Icon Card */}
              <div className="absolute z-30 bottom-[15%] left-[-5%] w-[100px] h-[100px] bg-white rounded-[24px] shadow-xl shadow-black/5 flex items-center justify-center transform rotate-[-8deg] border border-orange-50">
                 <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B2B]">
                   <Lightbulb className="w-6 h-6" />
                 </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
