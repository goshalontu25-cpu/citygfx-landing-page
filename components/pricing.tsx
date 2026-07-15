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
  PiFolderOpenFill as FolderOpen
} from "react-icons/pi"
import * as motion from "framer-motion/client"

const ovcPackages = [
  {
    id: "starter",
    title: "Starter Pack",
    videos: "৩টি ভিডিও। নতুন ক্যাম্পেইন ও টেস্ট রানের জন্য পারফেক্ট।",
    icon: Rocket,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    themeClass: "text-blue-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700",
    checkClass: "bg-blue-600",
    price: "4,990",
    originalPrice: "6,000",
    isPopular: false,
    features: [
      { title: "স্ক্রিপ্ট", text: "সাধারণ বডি স্ক্রিপ্ট" },
      { title: "ভয়েস", text: "স্ট্যান্ডার্ড এআই ভয়েস" },
      { title: "এডিটিং", text: "সাধারণ কাট ও ট্রানজিশন" },
      { title: "মিউজিক", text: "রয়্যালটি-ফ্রি মিউজিক" },
      { title: "রিভিশন", text: "১ বার" }
    ],
  },
  {
    id: "standard",
    title: "Standard Pack",
    videos: "৭টি ভিডিও। ⭐ Best Value. সবচেয়ে জনপ্রিয় প্যাকেজ।",
    icon: Star,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FF6B2B]",
    themeClass: "text-[#FF6B2B] text-[13px] font-medium leading-tight h-10",
    borderClass: "border-[#FF6B2B] shadow-xl shadow-[#FF6B2B]/10",
    buttonVariant: "default",
    buttonClass: "bg-[#FF6B2B] text-white hover:bg-[#E85E22]",
    checkClass: "bg-[#FF6B2B]",
    price: "11,990",
    originalPrice: "14,000",
    isPopular: true,
    features: [
      { title: "স্ক্রিপ্ট", text: "এঙ্গেজিং হুক + কনভার্শন-ফোকাসড" },
      { title: "ভয়েস", text: "রিয়েলিস্টিক এআই ভয়েস" },
      { title: "এডিটিং", text: "ডাইনামিক এডিটিং + মোশন ইফেক্ট" },
      { title: "মিউজিক", text: "ট্রেন্ডিং মিউজিক + সাউন্ড ডিজাইন" },
      { title: "রিভিশন", text: "৩ বার" }
    ],
  },
  {
    id: "scale",
    title: "Scale Pack",
    videos: "১৫টি ভিডিও। এগ্রেসিভ স্কেলিং ও বড় ক্যাম্পেইনের জন্য বেস্ট।",
    icon: Crown,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    themeClass: "text-green-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700",
    checkClass: "bg-green-600",
    price: "24,990",
    originalPrice: "30,000",
    isPopular: false,
    features: [
      { title: "স্ক্রিপ্ট", text: "ইন-ডেপথ রিসার্চড সেলস স্ক্রিপ্ট" },
      { title: "ভয়েস", text: "প্রিমিয়াম রিয়েলিস্টিক এআই ভয়েস" },
      { title: "এডিটিং", text: "প্রফেশনাল মোশন গ্রাফিক্স ও কালার গ্রেডিং" },
      { title: "মিউজিক", text: "কাস্টম সাউন্ড ডিজাইন ও এফেক্টস" },
      { title: "রিভিশন", text: "আনলিমিটেড" }
    ],
  }
]

const talkingAdPackages = [
  {
    id: "starter",
    title: "Starter Pack",
    videos: "৩টি ভিডিও। নতুন ক্যাম্পেইন ও টেস্ট রানের জন্য পারফেক্ট।",
    icon: Rocket,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    themeClass: "text-blue-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700",
    checkClass: "bg-blue-600",
    price: "5,990",
    originalPrice: "7,500",
    isPopular: false,
    features: [
      { title: "স্ক্রিপ্ট", text: "ক্লায়েন্টের স্ক্রিপ্ট পলিশিং" },
      { title: "ভয়েস", text: "স্ট্যান্ডার্ড এআই ভয়েস" },
      { title: "ক্যাপশন", text: "সাধারণ সাবটাইটেল" },
      { title: "ভিজ্যুয়াল", text: "বেসিক কালার কারেকশন" },
      { title: "রিভিশন", text: "১ বার" }
    ],
  },
  {
    id: "standard",
    title: "Standard Pack",
    videos: "৭টি ভিডিও। ⭐ Best Value. সবচেয়ে জনপ্রিয় প্যাকেজ।",
    icon: Star,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FF6B2B]",
    themeClass: "text-[#FF6B2B] text-[13px] font-medium leading-tight h-10",
    borderClass: "border-[#FF6B2B] shadow-xl shadow-[#FF6B2B]/10",
    buttonVariant: "default",
    buttonClass: "bg-[#FF6B2B] text-white hover:bg-[#E85E22]",
    checkClass: "bg-[#FF6B2B]",
    price: "12,990",
    originalPrice: "16,000",
    isPopular: true,
    features: [
      { title: "স্ক্রিপ্ট", text: "কিলার হুক আইডিয়া + ফুল স্ক্রিপ্ট" },
      { title: "ভয়েস", text: "রিয়েলিস্টিক এআই ভয়েস" },
      { title: "ক্যাপশন", text: "ডাইনামিক পপ-আপ ক্যাপশন ও হাইলাইট" },
      { title: "ভিজ্যুয়াল", text: "রিলেভেন্ট বি-রোল ও পপ-আপ সাউন্ড" },
      { title: "রিভিশন", text: "৩ বার" }
    ],
  },
  {
    id: "scale",
    title: "Scale Pack",
    videos: "১৫টি ভিডিও। এগ্রেসিভ স্কেলিং ও বড় ক্যাম্পেইনের জন্য বেস্ট।",
    icon: Crown,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    themeClass: "text-green-600 text-[13px] font-medium leading-tight h-10",
    borderClass: "border-border",
    buttonVariant: "outline",
    buttonClass: "border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700",
    checkClass: "bg-green-600",
    price: "26,990",
    originalPrice: "32,000",
    isPopular: false,
    features: [
      { title: "স্ক্রিপ্ট", text: "মাল্টিপল A/B টেস্টিং স্ক্রিপ্ট (কাস্টম হুক)" },
      { title: "ভয়েস", text: "প্রিমিয়াম রিয়েলিস্টিক এআই ভয়েস" },
      { title: "ক্যাপশন", text: "কাস্টম 3D/অ্যানিমেটেড ক্যাপশন" },
      { title: "ভিজ্যুয়াল", text: "প্রিমিয়াম বি-রোল, জুম-কাট ও ভিজ্যুয়াল হুক" },
      { title: "রিভিশন", text: "আনলিমিটেড" }
    ],
  }
]

const addons = [
  {
    icon: MicrophoneStage,
    title: "প্রফেশনাল হিউম্যান ভয়েস ওভার",
    desc: "এআই ভয়েসের বদলে প্রফেশনাল ভয়েস আর্টিস্টের অরিজিনাল ভয়েস। (প্রতি ভিডিওর জন্য এক্সট্রা চার্জ যুক্ত হবে)"
  },
  {
    icon: FileVideo,
    title: "অ্যাডিশনাল/এক্সট্রা ভিডিও",
    desc: "প্যাকেজ লিমিট শেষ হওয়ার পর এক্সট্রা ভিডিও লাগলে, সিঙ্গেল ভিডিও হিসেবে অ্যাড করতে পারবেন।"
  },
  {
    icon: RocketLaunch,
    title: "ফাস্ট ডেলিভারি (Fast Track)",
    desc: "সাধারণ ডেলিভারি সময়ের আগে (২৪-৪৮ ঘণ্টা) ইমার্জেন্সি ভিডিও ডেলিভারি। (এক্সট্রা ফি প্রযোজ্য)"
  },
  {
    icon: FolderOpen,
    title: "র-ফাইল (Source File)",
    desc: "ফিউচারে এডিট করার জন্য প্রিমিয়ার প্রো বা আফটার ইফেক্টসের প্রজেক্ট ফাইল। (ওয়ান-টাইম এক্সট্রা ফি)"
  }
]

const trustIndicators = [
  {
    icon: ShieldCheck,
    title: "100% Satisfaction",
    desc: "Your growth is our guarantee",
    colorClass: "text-[#FF6B2B]",
    bgClass: "bg-orange-50"
  },
  {
    icon: Clock,
    title: "Lightning Fast Delivery",
    desc: "Never miss a campaign launch",
    colorClass: "text-[#FF6B2B]",
    bgClass: "bg-orange-50"
  },
  {
    icon: Headphones,
    title: "24/7 VIP Support",
    desc: "Always here when you need us",
    colorClass: "text-green-500",
    bgClass: "bg-green-50"
  },
  {
    icon: RefreshCw,
    title: "Flexible Revisions",
    desc: "We tweak until it's perfect",
    colorClass: "text-blue-500",
    bgClass: "bg-blue-50"
  }
]

export function Pricing() {
  const [activeCategory, setActiveCategory] = useState<"ovc" | "talking-ad">("ovc")
  
  const activePackages = activeCategory === "ovc" ? ovcPackages : talkingAdPackages

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-white" id="pricing">
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
          <div className="inline-flex items-center p-1.5 bg-white border border-border rounded-full shadow-sm max-w-full overflow-x-auto overflow-y-hidden">
            <button
              onClick={() => setActiveCategory("ovc")}
              className={`px-5 py-2.5 sm:px-6 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeCategory === "ovc"
                  ? "bg-primary text-white shadow-sm"
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
                  ? "bg-primary text-white shadow-sm"
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
                  
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
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

        {/* Add-ons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 md:mt-24"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B2B] px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase mb-4">
              Add-ons
            </div>
            <h3 className="text-[24px] sm:text-[32px] font-bold text-text-dark mb-4">
              ➕ এক্সট্রা অ্যাড-অন অপশন
            </h3>
            <p className="text-text-soft text-[15px] sm:text-[16px] max-w-[700px] mx-auto px-4">
              চেকআউট পেজ বা প্যাকেজের সাথে আপনার প্রয়োজনমতো এই অপশনগুলো এক্সট্রা বাজেটে যুক্ত করে নিতে পারবেন:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, idx) => (
              <GlassCard key={idx} className="p-6 bg-white border border-border shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:border-[#FF6B2B]/30 hover:shadow-lg transition-all group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-orange-50 text-[#FF6B2B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <addon.icon className="w-7 h-7" />
                </div>
                <h4 className="text-[15px] font-bold text-text-dark mb-3">{addon.title}</h4>
                <p className="text-[13px] text-text-soft leading-relaxed font-medium">
                  {addon.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 md:mt-20 w-full bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border"
        >
          {trustIndicators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full md:w-1/4 md:justify-center pt-4 md:pt-0 first:pt-0 md:px-4">
              <div className={`w-12 h-12 shrink-0 rounded-full ${item.bgClass} flex items-center justify-center ${item.colorClass}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-text-dark leading-tight mb-1">{item.title}</span>
                <span className="text-[11px] font-medium text-text-soft leading-snug">{item.desc}</span>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
