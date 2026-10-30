import React from 'react';
import { Brain, Cpu, Database, Palette, Target, Code, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <span>About Me</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 normal-case font-normal">Student Profile & Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering a future shaped by Artificial Intelligence.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            I am Monisha B S, an AI & Machine Learning Engineering student deeply invested in understanding how intelligent algorithms and reliable software systems interact to solve complex challenges.
          </p>
        </div>

        {/* 4 Core Pillars of About Me */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: AI & ML Focus */}
          <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/25 flex items-center justify-center text-[#3B82F6]">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">AI & Machine Learning</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Passionate about algorithmic modeling, intelligent reasoning, and remote sensing intelligence.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex items-center gap-2">
              <span className="text-[#3B82F6] font-medium">Core Interest</span>
              <span>·</span>
              <span>Degree Track</span>
            </div>
          </div>

          {/* Card 2: Core Foundations */}
          <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/25 flex items-center justify-center text-[#06B6D4]">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Programming Foundations</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Actively learning and sharpening skills in Python and C for computational logic and memory discipline.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex items-center gap-2">
              <span className="text-[#06B6D4] font-medium">Languages</span>
              <span>·</span>
              <span>Python & C</span>
            </div>
          </div>

          {/* Card 3: Databases & Web */}
          <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 flex items-center justify-center text-[#8B5CF6]">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Databases & Web</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Developing practical schema design using MySQL, SQL queries, and responsive front-end web interfaces.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex items-center gap-2">
              <span className="text-[#8B5CF6] font-medium">Systems</span>
              <span>·</span>
              <span>SQL & Web</span>
            </div>
          </div>

          {/* Card 4: Creative Exploration */}
          <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 border border-[#10B981]/25 flex items-center justify-center text-[#10B981]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Design & Modern Tools</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Exploring graphic design ergonomics, visual communication, and the latest generation of AI-assisted tools.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex items-center gap-2">
              <span className="text-[#10B981] font-medium">Exploration</span>
              <span>·</span>
              <span>Design & Tech</span>
            </div>
          </div>

        </div>

        {/* Narrative Box with Authenticity Note */}
        <div className="mt-12 glass-card rounded-xl p-6 sm:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Target className="w-5 h-5 text-[#3B82F6]" />
                Primary Objective: Becoming a Skilled AI Engineer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As an AI & Machine Learning Engineering student, my focus is structured around building strong fundamentals: understanding algorithm complexity in C, writing scalable scripts and pipelines in Python, designing relational databases with MySQL, and building user interfaces on the web.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                By integrating core computer science theory with machine learning exploration and graphic design sensibility, I aim to craft AI solutions that are technically robust and user-friendly.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-lg bg-[#05070D]/90 border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981]">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Academic Information</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                This portfolio reflects solely authentic credentials, coursework, and personal projects. Placeholders are clearly marked for future resume and profile updates.
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
                <span>Profile: Monisha B S</span>
                <span className="text-[#3B82F6]">AI & ML Engineering</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
