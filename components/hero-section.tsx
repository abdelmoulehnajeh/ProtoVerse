"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

export default function HeroSection() {
  const { t } = useTranslation ? useTranslation() : { 
    t: { 
      heroTitle: "Connecting imagination", 
      heroTitleHighlight: "to creation", 
      heroSubtitle: "A global 3D printing network making prototyping fast and accessible.", 
      explorePlatform: "Explore Platform" 
    }
  };

  const scrollToSignup = () => {
    if (typeof document !== "undefined") {
      document.getElementById("beta-signup")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/m.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background/70" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl mx-auto md:text-7xl font-bold leading-tight">
            {t.heroTitle}{" "}
            <span className="gradient-text">{t.heroTitleHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">

            <Link href="/comingSoon">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t.explorePlatform}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
