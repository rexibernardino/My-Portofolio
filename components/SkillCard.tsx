"use client";

import { Cpu, Star, StarHalf } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect"; 

export function SkillCard({ title, category, rating, label }: { title: string, category: string, rating: number, label: string }) {
  
  // Fungsi untuk merender bintang berdasarkan angka 1-5
  const renderStars = (num: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= num) {
        stars.push(<Star key={i} size={16} className="fill-[#c5a059] text-[#c5a059]" />);
      } else if (i - 0.5 === num) {
        stars.push(<StarHalf key={i} size={16} className="fill-[#c5a059] text-[#c5a059]" />);
      } else {
        stars.push(<Star key={i} size={16} className="text-slate-300 dark:text-slate-600" />);
      }
    }
    return stars;
  };

  return (
    <div className="relative h-full rounded-2xl p-1 group">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      
      <div className="relative h-full bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c5a059]">
              {label}
            </span>
            {/* <Cpu size={18} className="text-slate-400" /> */}
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
            {title}
          </h3>
        </div>

        <div className="mt-6">
          <div className="flex gap-1 mb-2">
            {renderStars(rating)}
          </div>
          <span className="text-xs text-slate-400 uppercase font-medium tracking-wider">{category}</span>
        </div>
      </div>
    </div>
  );
}