"use client";

import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import JoinBeta from "@/components/beta-section"; // ton composant exact JoinBeta

export default function ComingSoonWithFormToggle() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleJoinBetaClick = () => {
    setShowForm(prev => !prev);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 relative overflow-hidden flex flex-col items-center p-4">
      
      {/* Back to Home Button */}
      <div className="w-full max-w-5xl mb-12 flex justify-start">
        <a href="/">
          <Button
            variant="ghost"
            className="group text-cyan-100/80 hover:text-cyan-50 hover:bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-lg shadow-cyan-500/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </a>
      </div>

      {/* Title */}
      <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-200 via-cyan-50 to-blue-200 bg-clip-text text-transparent tracking-tight">
        Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="text-center text-cyan-100/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        We're crafting an exceptional digital experience. Prepare for innovation that redefines excellence.
      </p>

      {/* 3 dots */}
      <div className="flex justify-center gap-3 mb-12">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-bounce shadow-lg shadow-cyan-400/50"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>

      {/* Join Beta Button */}
      <div className="flex justify-center mb-12">
        <Button
          onClick={handleJoinBetaClick}
          variant="ghost"
          className="group w-40 h-16 text-sm text-cyan-100/80 hover:text-cyan-50 hover:bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 relative flex flex-col items-center"
        >
          Join Beta Test
          <span className=" text-xs animate-bounce">↓</span>
        </Button>
      </div>

      {/* Formulaire JoinBeta caché/visible */}
      <div
        ref={formRef}
        className={`w-full max-w-5xl transition-all duration-700 ease-in-out overflow-hidden ${
          showForm ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-white">
          <JoinBeta />
        </div>
      </div>
    </div>
  );
}
