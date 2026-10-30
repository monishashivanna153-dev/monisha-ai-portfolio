import React from 'react';
import { Target, Compass, Sparkles, Binary, Database, Cpu, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CareerGoalSection: React.FC = () => {
  return (
    <section id="career-goal" className="py-24 relative border-t border-white/[0.06] bg-[#070B14]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B82F6]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <span>Career Ambition</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 normal-case font-normal">North Star & Professional Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Career Goal: Become a Skilled AI Engineer
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Every line of code in Python and C, every normalized SQL table, and every machine learning experiment is aimed at a singular long-term objective: mastering the science and engineering of artificial intelligence.
          </p>
        </div>

        {/* Big Vision Banner */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-3 py-1 rounded-md border border-[#06B6D4]/20">
                <Target className="w-3.5 h-3.5" />
                <span>PRIMARY CAREER TARGET</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Engineering AI systems that are reliable, mathematically grounded, and impactful.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Modern artificial intelligence requires more than invoking high-level libraries; it demands a solid grasp of underlying memory and compute efficiency, rigorous data structures, clean relational databases, and disciplined software architecture.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href="#contact"
                className="px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#4b8eff] hover:to-[#3572f0] rounded-xl shadow-lg shadow-[#3B82F6]/25 transition-all duration-200 flex items-center gap-2"
              >
                <span>Connect with Monisha</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500 mt-2">
                Open to discussions & mentorship
              </span>
            </div>

          </div>

          {/* 3 Strategic Pillars Grid */}
          <div className="mt-10 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-xl bg-[#05070D]/70 border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#3B82F6]">
                <Binary className="w-4 h-4" />
                <span>Pillar 1: Computational Foundations</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rigorous algorithmic analysis in C and Python, mastering data structures, time complexity, and low-level resource management.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#05070D]/70 border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#06B6D4]">
                <Cpu className="w-4 h-4" />
                <span>Pillar 2: AI & ML Methodology</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Exploring mathematical concepts behind machine learning, training dynamics, loss functions, and spatial computer vision (SatQuery AI).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#05070D]/70 border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5CF6]">
                <Database className="w-4 h-4" />
                <span>Pillar 3: End-to-End System Delivery</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designing normalized MySQL databases and modern web interfaces to turn intelligent models into accessible user software.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
