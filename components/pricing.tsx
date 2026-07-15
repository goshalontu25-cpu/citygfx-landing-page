"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { GlassCard } from "./ui/glass-card"
import { Button } from "./ui/button"
import { 
  PiCheckBold as Check, 
  PiRocketFill as Rocket, 
  PiStarFill as Star, 
  PiCrownFill as Crown, 
  PiShieldCheckFill as ShieldCheck, 
  PiClockFill as Clock, 
  PiHeadphonesFill as Headphones, 
  PiArrowsClockwiseBold as RefreshCw,
  PiVideoCameraFill as Video,
  PiMicrophoneFill as Microphone,
  PiMicrophoneStageFill as MicrophoneStage,
  PiFileVideoFill as FileVideo,
  PiRocketLaunchFill as RocketLaunch,
  PiFolderOpenFill as FolderOpen,
  PiCaretRightBold as CaretRight
} from "react-icons/pi"
import * as motion from "framer-motion/client"

export const ovcPackages = [
  {
    id: "silver",
    title: "Silver (১টি OVC)",
    videos: "১টি ভিডিও। সর্বোচ্চ ৩০ সেকেন্ড ডিউরেশন।",
    icon: Rocket,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    themeClass: "text-blue-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700",
    checkClass: "bg-blue-600",
    price: "9,999",
    originalPrice: "12,000",
    isPopular: false,
    features: [
      { title: "জেনারেশন", text: "১০০% এআই জেনারেটেড" },
      { title: "ক্যারেক্টার ও সিন", text: "মাল্টিপল ক্যারেক্টার ও প্রয়োজনীয় সিন" },
      { title: "সাউন্ড", text: "প্রিমিয়াম সাউন্ড ডিজাইন" },
      { title: "আউটপুট", text: "1080p ফুল-এইচডি" },
      { title: "রিভিশন", text: "আনলিমিটেড রিভিশন" }
    ],
  },
  {
    id: "gold",
    title: "Gold (২টি OVC কম্বো)",
    videos: "২টি ভিডিওর কম্বো। প্রতিটি সর্বোচ্চ ৬০ সেকেন্ড ডিউরেশন।",
    icon: Star,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FF6B2B]",
    themeClass: "text-[#FF6B2B] text-[13px] font-medium leading-tight h-10",
    borderClass: "border-[#FF6B2B] shadow-xl shadow-[#FF6B2B]/10",
    buttonVariant: "default",
    buttonClass: "bg-[#FF6B2B] text-white hover:bg-[#E85E22]",
    checkClass: "bg-[#FF6B2B]",
    price: "17,999",
    originalPrice: "22,000",
    isPopular: true,
    features: [
      { title: "জেনারেশন", text: "১০০% এআই জেনারেটেড" },
      { title: "ক্যারেক্টার ও সিন", text: "মাল্টিপল ক্যারেক্টার ও প্রয়োজনীয় সিন" },
      { title: "সাউন্ড", text: "প্রিমিয়াম সাউন্ড ডিজাইন" },
      { title: "আউটপুট", text: "1080p ফুল-এইচডি" },
      { title: "রিভিশন", text: "আনলিমিটেড রিভিশন" }
    ],
  },
  {
    id: "platinum",
    title: "Platinum / Premium",
    videos: "৩টি ভিডিওর কম্বো। প্রতিটি সর্বোচ্চ ৬০ সেকেন্ড ডিউরেশন।",
    icon: Crown,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    themeClass: "text-green-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700",
    checkClass: "bg-green-600",
    price: "24,999",
    originalPrice: "30,000",
    isPopular: false,
    features: [
      { title: "জেনারেশন", text: "১০০% এআই জেনারেটেড" },
      { title: "ক্যারেক্টার ও সিন", text: "মাল্টিপল ক্যারেক্টার ও প্রয়োজনীয় সিন" },
      { title: "সাউন্ড", text: "প্রিমিয়াম সাউন্ড ডিজাইন" },
      { title: "আউটপুট", text: "1080p ফুল-এইচডি" },
      { title: "রিভিশন", text: "আনলিমিটেড রিভিশন" }
    ],
  }
]

export const talkingAdPackages = [
  {
    id: "silver",
    title: "Silver (১টি ভিডিও)",
    videos: "১টি ভিডিও। ডিউরেশন সর্বোচ্চ ৩০ সেকেন্ড।",
    icon: Rocket,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    themeClass: "text-blue-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700",
    checkClass: "bg-blue-600",
    price: "4,999",
    originalPrice: "6,000",
    isPopular: false,
    features: [
      { title: "জেনারেশন", text: "১০০% এআই জেনারেটেড" },
      { title: "ক্যারেক্টার ও সিন", text: "সিঙ্গেল ক্যারেক্টার ও ২-৩টি ব্যাকগ্রাউন্ড" },
      { title: "সাউন্ড", text: "প্রিমিয়াম সাউন্ড ডিজাইন" },
      { title: "আউটপুট", text: "1080p ফুল-এইচডি" },
      { title: "রিভিশন", text: "আনলিমিটেড রিভিশন" }
    ],
  },
  {
    id: "gold",
    title: "Gold (২টি ভিডিওর কম্বো)",
    videos: "২টি ভিডিওর কম্বো। ডিউরেশন সর্বোচ্চ ৩০ সেকেন্ড।",
    icon: Star,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FF6B2B]",
    themeClass: "text-[#FF6B2B] text-[13px] font-medium leading-tight h-10",
    borderClass: "border-[#FF6B2B] shadow-xl shadow-[#FF6B2B]/10",
    buttonVariant: "default",
    buttonClass: "bg-[#FF6B2B] text-white hover:bg-[#E85E22]",
    checkClass: "bg-[#FF6B2B]",
    price: "8,499",
    originalPrice: "10,000",
    isPopular: true,
    features: [
      { title: "জেনারেশন", text: "১০০% এআই জেনারেটেড" },
      { title: "ক্যারেক্টার ও সিন", text: "সিঙ্গেল ক্যারেক্টার ও ২-৩টি ব্যাকগ্রাউন্ড" },
      { title: "সাউন্ড", text: "প্রিমিয়াম সাউন্ড ডিজাইন" },
      { title: "আউটপুট", text: "1080p ফুল-এইচডি" },
      { title: "রিভিশন", text: "আনলিমিটেড রিভিশন" }
    ],
  },
  {
    id: "platinum",
    title: "Platinum / Premium",
    videos: "৩টি ভিডিওর কম্বো। ডিউরেশন সর্বোচ্চ ৩০ সেকেন্ড।",
    icon: Crown,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    themeClass: "text-green-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700",
    checkClass: "bg-green-600",
    price: "11,999",
    originalPrice: "15,000",
    isPopular: false,
    features: [
      { title: "জেনারেশন", text: "১০০% এআই জেনারেটেড" },
      { title: "ক্যারেক্টার ও সিন", text: "সিঙ্গেল ক্যারেক্টার ও ২-৩টি ব্যাকগ্রাউন্ড" },
      { title: "সাউন্ড", text: "প্রিমিয়াম সাউন্ড ডিজাইন" },
      { title: "আউটপুট", text: "1080p ফুল-এইচডি" },
      { title: "রিভিশন", text: "আনলিমিটেড রিভিশন" }
    ],
  }
]

export const addons = [
  {
    icon: Video,
    title: "4K রেজোলিউশন আপগ্রেড",
    desc: "৳২,০০০ (প্রতিটি ভিডিওর জন্য)"
  },
  {
    icon: Clock,
    title: "অতিরিক্ত ডিউরেশন (OVC)",
    desc: "৳৫,০০০ (প্রতি অতিরিক্ত ৩০ সেকেন্ডে)"
  },
  {
    icon: Clock,
    title: "অতিরিক্ত ডিউরেশন (Talking Head)",
    desc: "৳১,৫০০ (প্রতি অতিরিক্ত ৩০ সেকেন্ডে)"
  },
  {
    icon: RocketLaunch,
    title: "শর্টস/রিলস এক্সট্রাকশন",
    desc: "৳৩,০০০ (মেইন ভিডিও থেকে প্রতি রিলের জন্য)"
  },
  {
    icon: FileVideo,
    title: "কাস্টম থাম্বনেইল ডিজাইন",
    desc: "৳১,৫০০ (প্রতিটি ভিডিওর জন্য)"
  },
  {
    icon: FolderOpen,
    title: "প্রজেক্ট ফাইল / সোর্স ফাইল হস্তান্তর",
    desc: "৳৫,০০০ (এককালীন)"
  }
]

const trustIndicators = [
  {
    icon: ShieldCheck,
    title: "100% Satisfaction",
    desc: "Your growth is our guarantee",
    colorClass: "text-[#FF6B2B]",
    bgClass: "bg-orange-50",
    borderClass: "border-l-[#FF6B2B]"
  },
  {
    icon: Clock,
    title: "Lightning Fast Delivery",
    desc: "Never miss a campaign launch",
    colorClass: "text-[#FF6B2B]",
    bgClass: "bg-orange-50",
    borderClass: "border-l-[#FF6B2B]"
  },
  {
    icon: Headphones,
    title: "24/7 VIP Support",
    desc: "Always here when you need us",
    colorClass: "text-[#FF6B2B]",
    bgClass: "bg-orange-50",
    borderClass: "border-l-[#FF6B2B]"
  },
  {
    icon: RefreshCw,
    title: "Flexible Revisions",
    desc: "We tweak until it's perfect",
    colorClass: "text-[#FF6B2B]",
    bgClass: "bg-orange-50",
    borderClass: "border-l-[#FF6B2B]"
  }
]

export function Pricing() {
  const [activeCategory, setActiveCategory] = useState<"ovc" | "talking-ad">("ovc")
  
  const activePackages = activeCategory === "ovc" ? ovcPackages : talkingAdPackages

  return (
    <section className="pt-8 md:pt-12 pb-8 md:pb-12 bg-white" id="pricing">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center bg-orange-50 text-[#FF6B2B] px-5 py-2 rounded-full text-[13px] font-bold tracking-wide mb-6">
            Transparent Pricing. Unmatched ROI.
          </div>
          
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-text-dark leading-[1.2] mb-4 text-center px-4">
            Choose Your <span className="text-[#FF6B2B]">Growth Plan</span>
          </h2>
          
          <p className="text-[16px] text-text-soft font-medium max-w-[600px] mb-8">
            Whether you're just starting or scaling aggressively, we have a solution built for your exact needs.
          </p>
          
          {/* Toggle Switch */}
          <div className="inline-flex items-center p-1.5 bg-white border border-border rounded-full max-w-full overflow-x-auto overflow-y-hidden">
            <button
              onClick={() => setActiveCategory("ovc")}
              className={`px-5 py-2.5 sm:px-6 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeCategory === "ovc"
                  ? "bg-primary text-white"
                  : "text-text-mid hover:text-text-dark"
              }`}
            >
              <Video className="w-4 h-4" />
              OVC (ওভিসি) বান্ডেল
            </button>
            <button
              onClick={() => setActiveCategory("talking-ad")}
              className={`px-5 py-2.5 sm:px-6 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeCategory === "talking-ad"
                  ? "bg-primary text-white"
                  : "text-text-mid hover:text-text-dark"
              }`}
            >
              <Microphone className="w-4 h-4" />
              Talking Ad বান্ডেল
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-4">
          {activePackages.map((pkg, idx) => {
            const categoryName = activeCategory === "ovc" ? "OVC (ওভিসি) বান্ডেল" : "Talking Ad বান্ডেল";
            const message = `Hello CityGfx! I am interested in the ${categoryName} - ${pkg.title} (৳ ${pkg.price}). Please let me know how to proceed!`;
            const whatsappUrl = `https://wa.me/8801617563535?text=${encodeURIComponent(message)}`;

            return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-full flex"
            >
              <GlassCard className={`flex-1 flex flex-col p-8 sm:p-10 bg-white border ${pkg.borderClass} ${pkg.isPopular ? 'md:-mt-6 md:scale-[1.03] shadow-[0_24px_50px_rgba(0,0,0,0.12)] z-10 relative' : 'shadow-[0_8px_30px_rgba(0,0,0,0.06)]'} rounded-2xl`}>
                
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 w-[140px]">
                    <div className="bg-primary text-white text-[12px] text-center font-bold px-4 py-1.5 rounded-[4px] shadow-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-center text-center mb-8 mt-2">
                  <div className={`w-16 h-16 rounded-full ${pkg.iconBg} ${pkg.iconColor} flex items-center justify-center mb-4`}>
                    <pkg.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-[20px] font-bold text-text-dark mb-1">{pkg.title}</h3>
                  <p className={`px-2 sm:px-4 max-w-[280px] mx-auto ${pkg.themeClass}`}>{pkg.videos}</p>
                </div>
                
                <div className="w-full h-px bg-border mb-8" />

                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-text-mid font-medium">
                      <div className={`mt-0.5 w-[18px] h-[18px] rounded-full ${pkg.checkClass} text-white flex items-center justify-center shrink-0`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-left">
                        <span className="font-bold text-text-dark">{feature.title}:</span> {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <div className="flex items-baseline gap-2 mb-6 justify-center">
                    <span className="text-[32px] font-extrabold text-text-dark leading-none">৳ {pkg.price}</span>
                    <span className="text-[15px] text-text-soft font-medium line-through">৳ {pkg.originalPrice}</span>
                  </div>
                  
                  <Link href={`/checkout?pkg=${pkg.id}&type=${activeCategory}`} className="block w-full">
                    <Button
                      variant={pkg.buttonVariant as "default" | "outline"}
                      className={`w-full h-12 text-[15px] rounded-full border-2 ${pkg.buttonClass}`}
                    >
                      Select Package
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
            );
          })}
        </div>



        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 md:mt-24 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
            {trustIndicators.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-row items-center justify-between p-4 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow border-l-[3px] group cursor-default ${item.borderClass} gap-3 md:gap-4`}
              >
                <div className="flex items-center gap-4">
                  {/* Icon with radial glow */}
                  <div className="relative flex items-center justify-center shrink-0 w-12 h-12">
                    <div className={`absolute inset-0 rounded-full scale-125 blur-xl opacity-70 ${item.bgClass}`}></div>
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${item.bgClass} ${item.colorClass}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-text-dark leading-tight mb-0.5">{item.title}</span>
                    <span className="text-[12px] text-text-soft font-medium leading-snug">{item.desc}</span>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className={`flex w-8 h-8 shrink-0 rounded-full items-center justify-center ${item.bgClass} ${item.colorClass} opacity-80 group-hover:opacity-100 transition-opacity ml-auto`}>
                  <CaretRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
