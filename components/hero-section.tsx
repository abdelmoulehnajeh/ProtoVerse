"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
  <section className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 md:px-6 text-center relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/m.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-white leading-tight tracking-tight drop-shadow-2xl">
          <span className="block sm:whitespace-nowrap">Connecting imagination</span>{" "}
          <span className="bg-gradient-to-r from-[#ca6ab1] via-[#b64198] to-[#893172] bg-clip-text text-transparent animate-pulse">
            to creation
          </span>
        </h1>
        
        

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 md:mt-16 mb-12 md:mb-16 px-4 md:px-0">
          <Button className="w-full sm:w-auto border-2 border-[#ca6ab1]/60 text-white hover:border-[#ca6ab1] hover:bg-[#ca6ab1]/10 rounded-full px-14 py-6 text-2xl font-semibold transition-all duration-300">
            Explore Platform
          </Button>
        </div>
      </div>
    </section>
  )
}