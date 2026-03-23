"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, MapPin, BookOpen, Target, Heart, Linkedin } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about" className="py-24 px-[8%] transition-colors overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* SISI KIRI: FOTO PROFIL */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 border-2 border-[#c5a059] translate-x-4 translate-y-4 rounded-2xl -z-10" />
            <div className="w-full h-full overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 border border-[var(--card-border)]">
              <img 
                src="/profile.jpg" 
                alt="Mario Bernardino" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* SISI KANAN: DETAIL TEKS */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
                About <span className="text-[#c5a059]">Me</span>
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                I am an Informatics graduate from Telkom University with a strong passion for Data Science and Machine Learning. 
                Currently focused on developing creative solutions through elegant code and advanced data analysis.
              </p>
            </div>

            {/* GRID INFO PRIBADI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <InfoItem icon={<User size={20} />} label="Full Name" value="Mario Bernardino Surexi" />
              <InfoItem icon={<GraduationCap size={20} />} label="Education" value="S1 Informatics, Telkom University" />
              <InfoItem icon={<MapPin size={20} />} label="Location" value="Sikka, Flores, NTT" />
              <InfoItem icon={<BookOpen size={20} />} label="Specialization" value="Data Science & ML" />
            </div>

            {/* FOCUS & INTEREST SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--card-border)]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#c5a059] font-bold uppercase tracking-widest text-xs">
                  <Target size={16} />
                  <span>Main Focus</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Data Analysis, Predictive Modeling, and Deep Learning Applications.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#c5a059] font-bold uppercase tracking-widest text-xs">
                  <Heart size={16} />
                  <span>Interests</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Automation Macros, Web Scraping, and UFC/Martial Arts Analysis.
                </p>
              </div>
            </div>

            {/* BUTTON HIRE ME */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/rexibernardino" // Ganti dengan link LinkedIn Anda
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#b48a3d] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-[#c5a059]/30 active:scale-95"
              >
                <Linkedin size={20} />
                Hire Me Now
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-[#c5a059]">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="font-semibold text-[var(--foreground)]">{value}</p>
      </div>
    </div>
  );
}