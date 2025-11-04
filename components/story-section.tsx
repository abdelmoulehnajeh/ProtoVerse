"use client"

import { useState } from 'react'

export default function StorySection() {
  const [activeTab, setActiveTab] = useState(0)

  const pillars = [
    {
      title: "The Spark",
      subtitle: "The Beginning of an Idea",
      description:
        "Every great journey starts with curiosity. For ProtoVerse, it began with a simple observation: the prototyping world was disconnected. Designers had ideas, engineers had tools, and makers had machines — but there was no bridge between them.",
      icon: "✨",
      color: "from-[#ca6ab1]",
    },
    {
      title: "The Struggle",
      subtitle: "The Path We Take",
      description:
        "High prices from monopolistic services, limited access to fablabs, payment safety concerns, and no way to track prototype quality. These challenges revealed a clear need for a platform that connects innovators with trusted local makers.",
      icon: "🛤️",
      color: "from-[#b64198]",
    },
    {
      title: "The Vision",
      subtitle: "Building a Connected Future",
      description:
        "We imagine a world where prototyping is transparent, intelligent, and accessible for everyone. ProtoVerse aims to connect global creators through one shared platform and enable a decentralized 3D printing network.",
      icon: "🌟",
      color: "from-[#893172]",
    },
    {
      title: "The Journey",
      subtitle: "Our Continuous Evolution",
      description:
        "ProtoVerse is still evolving, and that's the beauty of our journey. We grow with our users, partners, and community. Each feedback helps us refine our tools and imagine what's next.",
      icon: "🚀",
      color: "from-[#5f3475]",
    },
  ]

  const fullStory = `ProtoVerse was born from a simple challenge; finding a nearby, affordable 3D printing service. Traditional providers dominated the market with high prices and limited competition, while local fablabs were often unavailable or inaccessible.

We realized there was a gap between people who needed 3D printing and those who already owned printers. Many hobbyists had capable machines but lacked a secure, trusted way to offer their services. At the same time, creators struggled to find reliable, local options to bring their ideas to life.

As we explored this challenge, we discovered a deeper opportunity. What if every 3D printer could become part of a connected network; a decentralized printing ecosystem where anyone could send a print job to the nearest available printer, track its progress, and receive their prototype quickly and safely?

That vision evolved into ProtoVerse: a platform designed to connect creators, engineers, and makers with 3D printers around them. By enabling secure payments, verified profiles, and transparent reviews, ProtoVerse empowers a global community of innovators to collaborate with confidence.

Our mission is simple yet ambitious: to turn every 3D printer into a gateway for creation. Whether it’s a hobbyist’s machine or a professional-grade setup, ProtoVerse transforms idle printers into active contributors to innovation.

We’re building more than a platform, we’re building a universe of creation, where ideas flow freely, prototypes are born faster, and technology brings people closer to what they imagine.

Empowering creators, engineers, and makers to bring ideas to life, anywhere, anytime.`

  const storyParagraphs = fullStory.split('\n\n')

  return (
    <section id="story" className="py-20 px-6 bg-gradient-to-b from-[#081849] via-[#1a2a5f] to-[#081849] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ca6ab1] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#893172] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#b64198] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ca6ab1] via-[#b64198] to-[#893172] mb-6 leading-tight">
            Our Story
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a simple idea to a movement that's reshaping how makers and creators connect with 3D printing services
          </p>
        </div>

        {/* Interactive Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                activeTab === index 
                  ? 'bg-gradient-to-br from-[#b64198]/20 to-[#893172]/10 border-2 border-[#ca6ab1] scale-105 shadow-2xl shadow-[#ca6ab1]/30' 
                  : 'bg-white/5 border border-white/10 hover:border-[#b64198]/50 hover:scale-102'
              }`}
            >
              <div className="p-8">
                <div className={`text-5xl mb-4 transform transition duration-500 ${activeTab === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className={`bg-gradient-to-r ${pillar.color} to-[#ca6ab1] bg-clip-text text-transparent text-sm font-semibold mb-4`}>
                  {pillar.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              
              {/* Active indicator */}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ca6ab1] via-[#b64198] to-[#893172]"></div>
              )}
            </div>
          ))}
        </div>

        {/* The Full Story - Modern Layout */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-[#ca6ab1] to-[#893172] rounded-full"></div>
            <h3 className="text-4xl font-bold text-white">The Complete Story</h3>
          </div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            {storyParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#ca6ab1]/10 to-transparent p-6 rounded-xl border border-[#ca6ab1]/30">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-xl font-bold text-white mb-2">The Problem</h4>
              <p className="text-gray-400 text-sm">Expensive services, lack of trust, and limited access to quality 3D printing</p>
            </div>
            <div className="bg-gradient-to-br from-[#b64198]/10 to-transparent p-6 rounded-xl border border-[#b64198]/30">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="text-xl font-bold text-white mb-2">The Solution</h4>
              <p className="text-gray-400 text-sm">A decentralized network connecting creators with nearby trusted printers</p>
            </div>
            <div className="bg-gradient-to-br from-[#893172]/10 to-transparent p-6 rounded-xl border border-[#893172]/30">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="text-xl font-bold text-white mb-2">The Impact</h4>
              <p className="text-gray-400 text-sm">3D printing - accessible, transparent, and community-driven</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
