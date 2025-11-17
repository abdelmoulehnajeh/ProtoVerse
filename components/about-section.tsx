"use client";

import { Globe, Zap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/sectionHeader";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutSection() {
  const { t } = useTranslation();
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([false, false, false]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Zap,
      title: t.globalNetwork,
      description: t.globalNetworkDesc,
      gradient: "from-red-500 to-orange-500",
      stats: [
        { value: "68%", label: "Partners struggling to find reliable clients" },
        { value: "61%", label: "Low visibility" },
        { value: "55%", label: "Pricing uncertainty" },
        { value: "75%", label: "Difficult access" }
      ]
    },
    {
      icon: Globe,
      title: t.instantAccess,
      description: t.instantAccessDesc,
      gradient: "from-cyan-400 to-blue-500",
      stats: [
        { value: "5", label: "Continents", type: "number" },
        { value: "76.8%", label: "Fabrication engaged", type: "percent" },
        { value: "72.2%", label: "Provider interest", type: "percent" }
      ]
    },
    {
      icon: Sparkles,
      title: t.smartPlatform,
      description: t.smartPlatformDesc,
      gradient: "from-pink-500 to-purple-500",
      benefits: [
        "Connect designers & makers",
        "Increase visibility",
        "Build trust",
        "Simplify prototyping"
      ]
    }
  ];

  // IntersectionObserver pour animation des cards
  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setCardsVisible((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150);
          }
        },
        { threshold: 0.1 }
      );
      if (card) observer.observe(card);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* SectionHeader */}
        <SectionHeader
          title={t.aboutTitle}
          highlight={t.aboutTitleHighlight}
          subtitle={t.aboutSubtitle}
        />

        {/* Cards Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all duration-500 group overflow-hidden hover:scale-105 hover:-translate-y-2 ${
                  cardsVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature.description}</p>

                  {/* Stats */}
                  {feature.stats && (
                    <div className="space-y-3 mt-4">
                      {feature.stats.map((stat, idx) => {
                        const isPercent = typeof stat.value === "string" && stat.value.includes("%");
                        const valueNum = isPercent ? parseFloat(stat.value) : stat.value;
                        return (
                          <div key={idx}>
                            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              <span>{stat.label}</span>
                              <span>{stat.value}</span>
                            </div>
                            {isPercent && (
                              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className="h-2 bg-gradient-to-r from-blue-400 to-cyan-500 transition-all"
                                  style={{ width: `${valueNum}%` }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Benefits */}
                  {feature.benefits && (
                    <ul className="mt-4 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
