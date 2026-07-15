"use client"

import * as React from "react"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { ovcPackages, talkingAdPackages, addons as addonsData } from "@/components/pricing"
import { PiCheckBold as Check, PiArrowLeftBold as ArrowLeft, PiWhatsappLogoFill as WhatsappLogo } from "react-icons/pi"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const pkgId = searchParams.get("pkg") || "silver"
  const pkgType = searchParams.get("type") || "ovc"
  
  const [selectedAddons, setSelectedAddons] = useState<number[]>([])
  
  const packageList = pkgType === "ovc" ? ovcPackages : talkingAdPackages
  const selectedPackage = packageList.find(p => p.id === pkgId) || packageList[0]
  
  const basePrice = parseInt(selectedPackage.price.replace(/,/g, "")) || 0
  
  const addAddonPrice = (desc: string) => {
    const bengaliDigits = {'০':0,'১':1,'২':2,'৩':3,'৪':4,'৫':5,'৬':6,'৭':7,'৮':8,'৯':9}
    let result = ''
    for (let i = 0; i < desc.length; i++) {
      if (bengaliDigits[desc[i] as keyof typeof bengaliDigits] !== undefined) {
        result += bengaliDigits[desc[i] as keyof typeof bengaliDigits]
      }
    }
    return parseInt(result) || 0
  }
  
  const totalAddonsPrice = selectedAddons.reduce((sum, idx) => {
    return sum + addAddonPrice(addonsData[idx].desc)
  }, 0)
  
  const totalPrice = basePrice + totalAddonsPrice
  
  const toggleAddon = (idx: number) => {
    if (selectedAddons.includes(idx)) {
      setSelectedAddons(selectedAddons.filter(i => i !== idx))
    } else {
      setSelectedAddons([...selectedAddons, idx])
    }
  }
  
  const handleProceed = () => {
    let message = `Hi CityGfx, I would like to order the *${selectedPackage.title}* package (Type: ${pkgType.toUpperCase()}).\n`
    message += `Base Price: ৳${selectedPackage.price}\n\n`
    if (selectedAddons.length > 0) {
      message += `*Selected Add-ons:*\n`
      selectedAddons.forEach(idx => {
        message += `- ${addonsData[idx].title} (${addonsData[idx].desc})\n`
      })
      message += `\n`
    }
    message += `*Total Estimated Price: ৳${totalPrice.toLocaleString()}*\n\n`
    message += `Please let me know the next steps.`
    
    const url = `https://wa.me/8801617563535?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#FCFAF8] min-h-screen">
      <div className="container mx-auto max-w-[1100px] px-4 md:px-6">
        
        <Link href="/#pricing" className="inline-flex items-center gap-2 text-text-soft hover:text-[#FF6A00] font-bold text-[14px] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Pricing
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-[32px] sm:text-[40px] font-black text-text-dark mb-4">Customize Your Package</h1>
          <p className="text-text-soft text-[16px] max-w-[600px] mx-auto">Review your selected package and add extra features to supercharge your videos.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Addons */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-[20px] font-bold text-text-dark flex items-center gap-2">
              <span className="bg-orange-100 text-[#FF6B2B] w-8 h-8 rounded-full flex items-center justify-center text-[14px] shrink-0">1</span>
              Select Add-ons (Optional)
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addonsData.map((addon, idx) => {
                const isSelected = selectedAddons.includes(idx)
                return (
                  <GlassCard 
                    key={idx} 
                    className={`p-5 cursor-pointer border-2 transition-all duration-300 relative overflow-hidden ${isSelected ? 'border-[#FF6A00] shadow-[0_8px_24px_rgba(255,106,0,0.15)] bg-orange-50/30' : 'border-transparent hover:border-gray-200 shadow-sm bg-white'}`}
                    onClick={() => toggleAddon(idx)}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-[#FF6A00] text-white p-1 rounded-full">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isSelected ? 'bg-[#FF6A00] text-white' : 'bg-orange-50 text-[#FF6B2B]'}`}>
                      <addon.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-[14px] font-bold text-text-dark mb-1">{addon.title}</h4>
                    <p className="text-[13px] font-bold text-[#FF6B2B]">{addon.desc}</p>
                  </GlassCard>
                )
              })}
            </div>
          </div>
          
          {/* Right Column: Order Summary */}
          <div>
            <div className="sticky top-24">
              <h2 className="text-[20px] font-bold text-text-dark flex items-center gap-2 mb-6">
                <span className="bg-orange-100 text-[#FF6B2B] w-8 h-8 rounded-full flex items-center justify-center text-[14px] shrink-0">2</span>
                Order Summary
              </h2>
              
              <GlassCard className="p-6 md:p-8 border border-border shadow-md bg-white">
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="text-[12px] font-bold text-text-soft uppercase tracking-wider mb-3">Selected Package</div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${selectedPackage.iconBg} ${selectedPackage.iconColor}`}>
                      <selectedPackage.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-text-dark leading-tight mb-1">{selectedPackage.title}</h3>
                      <div className="text-[16px] font-extrabold text-[#FF6A00]">৳ {selectedPackage.price}</div>
                    </div>
                  </div>
                </div>
                
                {selectedAddons.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-gray-100 space-y-3">
                    <div className="text-[12px] font-bold text-text-soft uppercase tracking-wider mb-2">Add-ons</div>
                    {selectedAddons.map(idx => (
                      <div key={idx} className="flex justify-between items-start gap-4 text-[14px]">
                        <span className="text-text-mid font-medium">{addonsData[idx].title}</span>
                        <span className="font-bold text-text-dark text-right shrink-0">৳ {addAddonPrice(addonsData[idx].desc).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-end mb-8">
                  <span className="text-[16px] font-bold text-text-dark">Total Price</span>
                  <span className="text-[28px] font-black text-[#FF6A00] leading-none">৳ {totalPrice.toLocaleString()}</span>
                </div>
                
                <Button 
                  onClick={handleProceed}
                  className="w-full h-14 text-[16px] font-bold rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300 gap-2"
                >
                  <WhatsappLogo className="w-6 h-6" />
                  Proceed to WhatsApp
                </Button>
                <p className="text-center text-[12px] text-text-soft font-medium mt-4">
                  No payment required yet. You'll complete your order via WhatsApp.
                </p>
              </GlassCard>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pb-[68px] md:pb-0">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#FCFAF8] pt-24 text-text-soft font-medium">Loading checkout details...</div>}>
          <CheckoutContent />
        </Suspense>
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}
