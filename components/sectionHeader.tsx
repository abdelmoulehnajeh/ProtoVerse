"use client"; // Important pour les hooks et l'animation

import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  highlight,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animation de la barre de progression
          let currentProgress = 0;
          const interval = setInterval(() => {
            currentProgress += 2;
            if (currentProgress >= 100) {
              clearInterval(interval);
              setProgress(100);
            } else {
              setProgress(currentProgress);
            }
          }, 20);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={headerRef}
      className={`max-w-3xl mx-auto text-center mb-16 space-y-6 ${className}`}
    >
      <h2
        className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {subtitle && (
        <p
          className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Barre de progression animée */}
      <div
        className={`relative h-1 bg-border rounded-full overflow-hidden transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      >
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000 ease-out glow-cyan"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
