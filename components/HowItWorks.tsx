"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Search, Printer, Package, ListPlus, Settings, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/sectionHeader";
import { useTranslation } from "@/hooks/useTranslation";

export default function HowItWorks() {
  const { t } = useTranslation();

  const userSteps = [
    { icon: Upload, title: t.step1User, description: t.step1UserDesc },
    { icon: Search, title: t.step2User, description: t.step2UserDesc },
    { icon: Printer, title: t.step3User, description: t.step3UserDesc },
    { icon: Package, title: "Receive", description: "Pick up locally or have it shipped directly to your location." },
  ];

  const partnerSteps = [
    { icon: ListPlus, title: t.step1Partner, description: t.step1PartnerDesc },
    { icon: Settings, title: "Set Terms", description: "Provide details about the materials and delivery methods you offer as part of your services." },
    { icon: Printer, title: t.step2Partner, description: t.step2PartnerDesc },
    { icon: TrendingUp, title: t.step3Partner, description: t.step3PartnerDesc },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title={t.howItWorksTitle}
          highlight={t.howItWorksTitleHighlight}
          subtitle={t.howItWorksSubtitle}
        />

        <Tabs defaultValue="users" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="users" className="text-base">{t.forUsers}</TabsTrigger>
            <TabsTrigger value="partners" className="text-base">{t.forPartners}</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {userSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center glow-cyan">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-primary">Step {index + 1}</span>
                        </div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="partners" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {partnerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center glow-purple">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-secondary">Step {index + 1}</span>
                        </div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
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
