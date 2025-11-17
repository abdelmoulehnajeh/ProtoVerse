"use client";

import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Rocket } from "lucide-react";
import SectionHeader from "@/components/sectionHeader";
import { useTranslation } from "@/hooks/useTranslation";

export default function StorySection() {
  const { t } = useTranslation();

  const stories = [
    {
      icon: Lightbulb,
      title: t.theProblem,
      description: t.theProblemDesc,
      gradient: "from-neon-cyan to-blue-500",
      iconBg: "bg-neon-cyan/10",
      iconColor: "text-neon-cyan",
      accentGlow: "shadow-neon-cyan/20",
    },
    {
      icon: Users,
      title: t.theSolution,
      description: t.theSolutionDesc,
      gradient: "from-secondary to-purple-500",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      accentGlow: "shadow-secondary/20",
    },
    {
      icon: Rocket,
      title: t.ourVision,
      description: t.ourVisionDesc,
      gradient: "from-pink-500 to-secondary",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-500",
      accentGlow: "shadow-pink-500/20",
    },
  ];

  return (
    <section
      id="story"
      className="py-24 px-6 flex justify-center items-center flex-col relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl w-full relative">
        {/* Section Header */}
        <SectionHeader
          title={t.ourStoryTitle}
          highlight={t.ourStoryTitleHighlight}
          subtitle={t.ourStorySubtitle}
          className="mb-16 text-center"
        />

        {/* Complete Story - Modern Card */}
        <div className="mb-20 max-w-4xl mx-auto">
          <Card className="p-10 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 shadow-2xl relative group overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-center">
                {t.completeStoryTitle}
              </h3>
              
              <div className="space-y-5 text-muted-foreground/90 leading-relaxed text-lg">
                {t.completeStoryContent.map((paragraph: string, index: number) => (
                  <p 
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Story Cards - Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <Card
                key={index}
                className={`group relative p-8 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-border/80 hover:shadow-2xl ${story.accentGlow} hover:-translate-y-2 transition-all duration-300 animate-fade-in overflow-hidden`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative flex flex-col items-center gap-6 text-center">
                  {/* Icon Container */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl ${story.iconBg} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${story.iconColor}`} strokeWidth={2} />
                      
                      {/* Subtle pulse effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-20 animate-pulse`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-foreground/90 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {story.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${story.gradient} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>
              </Card>
            );
          })}
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
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}