"use client"

export default function Footer() {
  return (
    <footer className="border-t border-[#1f3a5f]/30 py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-transparent to-[#081849]/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Logo & tagline (keep previous position) */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/" className="mb-3 inline-block">
              <img src="/short_logo_pv_no_bg-.png" alt="ProtoVerse Logo" className="h-24 w-auto object-contain" />
            </a>
            <p className="text-[#081849] text-sm leading-relaxed">Connecting imagination to creation</p>
          </div>

          {/* Center: Links */}
          <div className="w-full md:w-1/3">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-[#081849] mb-3">Community</h4>
                <ul className="space-y-2 text-[#081849] text-sm">
                  <li>
                    <a href="#about" className="hover:text-[#b64198] transition">
                      Who We Are
                    </a>
                  </li>
                  <li>
                    <a href="#story" className="hover:text-[#b64198] transition">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#beta" className="hover:text-[#b64198] transition">
                      join for beta test
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-bold text-[#081849] mb-3">Legal</h4>
                <ul className="space-y-2 text-[#081849] text-sm">
                  <li>
                    <a href="/privacy" className="hover:text-[#b64198] transition">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-[#b64198] transition">
                      Terms of Service
                    </a>
                  </li>
                     <li>
                    <a href="/security" className="hover:text-[#b64198] transition">
                      security update
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Socials & copyright */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right gap-4 md:self-end md:mt-6">
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#b64198] hover:text-[#b64198] transition font-medium text-sm">
                Twitter
              </a>
              <a href="#" className="text-[#b64198] hover:text-[#b64198] transition font-medium text-sm">
                Discord
              </a>
              <a href="https://www.linkedin.com/company/protoverseonline/" className="text-[#b64198] hover:text-[#b64198] transition font-medium text-sm">
                LinkedIn
              </a>
            </div>
            <p className="text-[#b64198] text-sm">© 2026 ProtoVerse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
