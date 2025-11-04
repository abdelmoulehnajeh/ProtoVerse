"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isInStorySection, setIsInStorySection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // consider multiple sections where we want the "light"/primary logo
      const sectionIds = ['story', 'about', 'beta']
      let anyInView = false

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Check if this section is passing under the navbar (approx)
          const isInView = rect.top <= 100 && rect.bottom >= 100
          if (isInView) {
            anyInView = true
            break
          }
        }
      }

      setIsInStorySection(anyInView)
    }

    // Check on mount
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${isInStorySection
          ? 'bg-gradient-to-b from-white/95 to-white/80 border-[#b64198]/20 shadow-lg'
          : 'bg-transparent border-transparent'
        }`}
    >
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center">
            <a href="/" className="mb-0 inline-block transition-all duration-300">
              <img
                src={isInStorySection ? "/primary_logo_horizontal_no_bg.png" : "/secondary_logo_horizontal_no_bg.png"}
                alt="ProtoVerse Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              className={`transition-all duration-500 text-lg font-medium ${isInStorySection
                  ? 'text-[#081849] hover:text-[#b64198]'
                  : 'text-[#ecdfd2] hover:text-[#ca6ab1]'
                }`}
            >
              Who We Are

            </a>
            <a
              href="#story"
              className={`transition-all duration-500 text-lg font-medium ${isInStorySection
                  ? 'text-[#081849] hover:text-[#b64198]'
                  : 'text-[#ecdfd2] hover:text-[#ca6ab1]'
                }`}
            >
              Our Story
            </a>

          </div>
        </div>

        <a href="#beta">
          <Button
            className={`bg-gradient-to-r from-[#b64198] to-[#ca6ab1] rounded-full px-8 py-2.5 text-sm font-semibold shadow-lg transition-all duration-500 ${isInStorySection
                ? 'text-white shadow-[#b64198]/40 hover:shadow-[#b64198]/60 hover:from-[#a83a88] hover:to-[#b85aa1]'
                : 'text-[#ecdfd2] shadow-[#b64198]/40 hover:shadow-[#b64198]/60 hover:from-[#a83a88] hover:to-[#b85aa1]'
              }`}
          >
            join for Beta test
          </Button>
        </a>
      </div>
    </nav>
  )
}
