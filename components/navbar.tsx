"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import ThemeToggle from "@/components/ThemeToggle"
import { useTranslation } from "@/hooks/useTranslation"

export default function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/50 shadow-lg"
          : "bg-background/80 backdrop-blur-sm border-border/30"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
<a href="/" className="flex items-center gap-2 group">
  {/* Logo clair */}
  <img
    src="/primary_logo_horizontal_no_bg.png"
    alt="ProtoVerse Light Logo"
    className="block dark:hidden h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />

  {/* Logo sombre */}
  <img
    src="/secondary_logo_horizontal_no_bg.png"
    alt="ProtoVerse Dark Logo"
    className="hidden dark:block h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />
</a>

          </div>

          {/* Menu principal */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t.about || "About us "}
            </a>
  <a
  href="#story"
  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
>
  {t.ourStoryTitle || "Our"}{" "}
  <span >
    {t.ourStoryTitleHighlight || "Story"}
  </span>
</a>

          </nav>

          {/* Section droite : langue, thème et bouton */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="#beta">
              <Button
                className=" px-6 py-2 text-xs font-semibold bg-gradient-to-r from-primary to-blue-500 hover:from-primary/20 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t.joinBeta || "Join Beta"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}