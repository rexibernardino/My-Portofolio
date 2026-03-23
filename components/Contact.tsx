"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rexibernardino", 
      icon: <Linkedin size={28} />,
      label: "Professional Profile",
      color: "hover:text-[#0077B5]"
    },
    {
      name: "GitHub",
      url: "https://github.com/rexibernardino", 
      icon: <Github size={28} />,
      label: "Technical Projects",
      color: "hover:text-[#2dba4e]"
    }
  ];

  return (
    <section id="contact" className="py-24 px-[8%] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Get in <span className="text-[#c5a059]">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            I'm always open to discussing data science projects, machine learning opportunities, or professional networking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-1 rounded-2xl"
            >
              {/* Glowing Effect */}
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />

              <div className="relative bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`text-[#c5a059] ${link.color} transition-colors duration-300`}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[#c5a059] transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{link.label}</p>
                </div>
                <div className="absolute top-4 right-4 text-slate-300 dark:text-slate-700 group-hover:text-[#c5a059] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-[var(--card-border)] text-sm text-slate-400"
        >
          <p>© 2026 Mario Bernardino. Built with Passion & Data.</p>
        </motion.div>
      </div>
    </section>
  );
}