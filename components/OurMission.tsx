"use client";

import { Target, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/sectionHeader";
import { useTranslation } from "@/hooks/useTranslation";

export default function OurMission() {
  const { t } = useTranslation();

  const missions = [
    {
      icon: Target,
      title: t.mission1Title || "Democratize Manufacturing",
      description: t.mission1Desc || "Make 3D printing accessible to everyone, everywhere, breaking down barriers to innovation.",
      gradient: "from-neon-cyan to-blue-500",
    },
    {
      icon: Users,
      title: t.mission2Title || "Empower Communities",
      description: t.mission2Desc || "Connect makers, engineers, and businesses in a global network of collaboration.",
      gradient: "from-secondary to-purple-500",
    },
    {
      icon: Sparkles,
      title: t.mission3Title || "Accelerate Innovation",
      description: t.mission3Desc || "Enable rapid prototyping and iteration, turning ideas into reality faster than ever.",
      gradient: "from-pink-500 to-secondary",
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeader
          title={t.ourMissionTitle || "Our"}
          highlight={t.ourMissionHighlight || "Mission"}
          subtitle={t.ourMissionSubtitle || "We're on a mission to revolutionize how the world accesses 3D printing technology"}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mission.gradient} p-3 glow-cyan`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
