"use client"

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-[#081849] mb-6">Who We Are</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#b64198] via-[#ca6ab1] to-[#893172] mx-auto rounded-full"></div>
          <p className="text-xl text-[#797177] font-bold mt-8 max-w-2xl mx-auto">
            Building the bridge between makers and innovators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-[#081849] mb-6 leading-tight">
              Innovation should be{" "}
              <span className="bg-gradient-to-r from-[#b64198] to-[#ca6ab1] bg-clip-text text-transparent">
                accessible, collaborative, and human-centered
              </span>
            </h3>
            <div className="space-y-4">
              <p className="text-lg  leading-relaxed">
                ProtoVerse is a digital platform that connects people looking for 3D printing services with nearby
                makers, makerspaces, fablabs, and local 3D printing services.
              </p>
              <p className=" text-lg  leading-relaxed">
                Whether you're a startup prototyping your next big idea, a business seeking affordable printing, or a
                creator bringing concepts to life, ProtoVerse is your bridge.
              </p>
              <p className=" text-lg   leading-relaxed">
                We're building a network of dreamers, makers, and builders who believe every great idea deserves a
                chance to become reality.
              </p>
            </div>
          </div>

          <div className="relative group inline-block">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-[#b64198] to-[#ca6ab1] rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative rounded-lg overflow-hidden border border-[#b64198]/40 hover:border-[#b64198]/60 transition">
              <Image
                src="/iynawh.jpeg"
                alt="3D Printing Ecosystem"
                width={800}
                height={600}
                className="block transition-transform duration-500 group-hover:scale-102"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-br from-[#b64198]/8 to-[#893172]/5 rounded-3xl p-12 border border-[#1f3a5f]/50 hover:border-[#b64198]/30 transition duration-500">
          {[
            {
              icon: "🔒",
              title: "Trust & Transparency",
              desc: "Find verified local 3D printers with ratings, reviews, and secure payment methods",
            },
            {
              icon: "⚡",
              title: "Speed & Affordability",
              desc: "Skip expensive monopolies. Connect directly with local makers and save time on shipping",
            },
            {
              icon: "🌐",
              title: "Community Driven",
              desc: "Rent your printer, grow your skills, and be part of a decentralized innovation network",
            },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">{item.icon}</div>
              <h4 className="text-[#081849] font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-l leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
