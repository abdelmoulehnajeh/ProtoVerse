"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StorySection from "@/components/story-section"
import BetaSection from "@/components/beta-section"
import Footer from "@/components/footer" 
import HowItWorksSection from "@/components/HowItWorks"
import OurMissionSection from "@/components/OurMission"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0a1128] via-[#0f172a] to-[#081849]"></div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b64198]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#893172]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#5f3475]/5 rounded-full blur-3xl"></div>
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurMissionSection />
      <HowItWorksSection />
      <StorySection />
      <BetaSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
