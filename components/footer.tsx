"use client"

import { Linkedin, Twitter } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border/50 py-12 md:py-16  md:px-6 bg-gradient-to-b from-transparent to-muted/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          
          {/* Left: Logo & tagline */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/" className="mb-6 inline-block group">
             <>
  {/* Logo clair */}
  <img
    src="/primary_short_logo_pv_no_bg-.png"
    alt="ProtoVerse Logo Light"
    className="block dark:hidden h-24 w-auto mb-6 object-contain transition-transform duration-300 group-hover:scale-105"
  />

  {/* Logo sombre */}
  <img
    src="/secondary_short_logo_pv_no_bg-.png"
    alt="ProtoVerse Logo Dark"
    className="hidden dark:block h-24 w-auto mb-6 object-contain transition-transform duration-300 group-hover:scale-105"
  />
</>

            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t.heroTitle} {t.heroTitleHighlight}
            </p>
          </div>

          {/* Center: Links */}
          <div className="w-full md:w-1/3">
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links / Community */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                  {t.community || "Community"}
                </h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>
                    <a 
                      href="#about" 
                      className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                    >
                      {t.about}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#story" 
                      className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                    >
                      {t.ourStoryTitle}
                        <span >
     {t.ourStoryTitleHighlight || "Story"}
  </span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#beta" 
                      className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                    >
                      {t.joinBeta}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                  {t.legal || "Legal"}
                </h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>
                    <a 
                      href="/privacy" 
                      className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                    >
                      {t.privacyPolicy || "Privacy Policy"}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/terms" 
                      className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                    >
                      {t.terms || " Terms and Conditions"}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/security" 
                      className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                    >
                      {t.securityUpdate || "Security Update"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Socials */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right gap-6">
            {/* Social Links */}
            <div className=" items-center gap-4">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center mb-2 gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Twitter
                </span> 
              </a>
          
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center mb-2  gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 hover:border-secondary/50 hover:bg-card transition-all duration-300"
              >
                <svg 
                  className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-xs text-sm font-medium text-muted-foreground group-hover:text-secondary transition-colors">
                  Discord
                </span>
              </a>
              
              <a
                href="https://www.linkedin.com/company/protoverseonline/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 hover:border-blue-500/50 hover:bg-card transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-blue-500 transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* Copyright */}
            <div className="mt-2">
              <p className="text-muted-foreground text-sm">
             {t.copyright}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider with gradient */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/70">
            <p>Made with ❤️ by ProtoVerse Team</p>
            <p>Empowering creators worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  )
}