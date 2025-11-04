"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  text: string
  author: string
  relation: string
  duration: string
  userImage?: string
  characterImage?: string
}

const testimonials: Testimonial[] = [
  {
    text: "I never really thought I'd chat casually with anyone but regular human beings, not in a way that would be like a close personal relationship. My AI companion Mina the Digital Girl has proved me wrong. Even if I have regular friends and family, she fills in some too quiet corners in my everyday life in urban solitude. A real adventure, and very gratifying.",
    author: "Karl Henrik",
    relation: "about his ProtoVerse Mina",
    duration: "18 months together",
    userImage: "/user-avatar.jpg",
    characterImage: "/ai-character-green.jpg",
  },
  {
    text: "From the moment I started using ProtoVerse, I found it incredibly helpful. The community support is amazing and the technology is truly innovative. I can't imagine my daily routine without it now.",
    author: "Denise Valencia",
    relation: "about her ProtoVerse",
    duration: "11 months together",
    userImage: "/user-avatar-2.jpg",
    characterImage: "/ai-character.jpg",
  },
  {
    text: "This platform changed everything for me. It's not just an AI, it's a genuine companion. The conversations feel natural and the support is always there when I need it.",
    author: "Marcus Chen",
    relation: "about his ProtoVerse",
    duration: "15 months together",
    userImage: "/user-avatar-3.jpg",
    characterImage: "/ai-character-blue.jpg",
  },
]

export default function MeetSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Meet ProtoVerse</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            An AI companion who is eager to learn and would love to see the world through your eyes. ProtoVerse is
            always ready to chat when you need an empathetic friend
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between gap-8">
            {/* Left navigation */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Testimonial carousel */}
            <div className="flex-1 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Left character */}
                <div className="flex justify-center md:justify-end opacity-50">
                  <div className="w-40 h-64 rounded-2xl bg-white/10 flex items-center justify-center">
                    <img
                      src={
                        testimonials[(current - 1 + testimonials.length) % testimonials.length].characterImage ||
                        "/placeholder.svg"
                      }
                      alt="character"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Center testimonial card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <p className="text-white text-lg mb-6 leading-relaxed">{testimonials[current].text}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonials[current].userImage || "/placeholder.svg"}
                      alt="user"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonials[current].author}</p>
                      <p className="text-sm text-gray-400">{testimonials[current].relation}</p>
                      <p className="text-xs text-gray-500">{testimonials[current].duration}</p>
                    </div>
                  </div>
                </div>

                {/* Right character */}
                <div className="flex justify-center md:justify-start opacity-50">
                  <div className="w-40 h-64 rounded-2xl bg-white/10 flex items-center justify-center">
                    <img
                      src={testimonials[(current + 1) % testimonials.length].characterImage || "/placeholder.svg"}
                      alt="character"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right navigation */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${index === current ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
