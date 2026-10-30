import React, { useState } from 'react';
import { BookOpen, Sparkles, Binary, Code, Database, Globe, Palette, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, LearningTopic } from '../data/portfolioData';

export const CurrentlyLearningSection: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(PORTFOLIO_DATA.currentlyLearning[0].id);

  const activeTopic = PORTFOLIO_DATA.currentlyLearning.find(t => t.id === activeTopicId) || PORTFOLIO_DATA.currentlyLearning[0];

  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'dsa':
        return <Binary className="w-4 h-4 text-[#3B82F6]" />;
      case 'python-advanced':
        return <Code className="w-4 h-4 text-[#06B6D4]" />;
      case 'ai-ml':
        return <Sparkles className="w-4 h-4 text-[#8B5CF6]" />;
      case 'dbms':
        return <Database className="w-4 h-4 text-[#10B981]" />;
      case 'web-dev':
        return <Globe className="w-4 h-4 text-[#F59E0B]" />;
      case 'graphic-design':
        return <Palette className="w-4 h-4 text-[#EC4899]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="learning" className="py-24 relative border-t border-white/[0.06] bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <span>Continuous Growth</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 normal-case font-normal">Active Curriculum & Skill Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Currently learning and deepening expertise.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A structured roadmap covering fundamental computer science, core programming, machine learning, data engineering, and design.
          </p>
        </div>

        {/* Master-Detail Interactive Learning Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Topic Navigation List */}
          <div className="lg:col-span-5 space-y-2.5">
            {PORTFOLIO_DATA.currentlyLearning.map((topic, idx) => {
              const isSelected = topic.id === activeTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0F172A] border-[#3B82F6]/50 shadow-lg shadow-[#3B82F6]/10'
                      : 'bg-[#0B0F19]/60 border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono tabular-nums text-slate-500">
                      0{idx + 1}
                    </span>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      {getTopicIcon(topic.id)}
                    </div>
                    <div>
                      <div className={`text-sm font-semibold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300'
                      }`}>
                        {topic.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[210px] sm:max-w-xs">
                        {topic.focusArea}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border transition-colors ${
                    isSelected 
                      ? 'text-[#93C5FD] border-[#3B82F6]/40 bg-[#3B82F6]/10' 
                      : 'text-slate-500 border-white/[0.06]'
                  }`}>
                    {topic.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Topic Spotlight Pane */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10 space-y-6">
              
              {/* Header */}
              <div className="pb-4 border-b border-white/[0.08] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#06B6D4] uppercase tracking-wider">
                    <span>Active Domain</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400 normal-case">{activeTopic.focusArea}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeTopic.title}</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                  {getTopicIcon(activeTopic.id)}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Study Overview
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeTopic.description}
                </p>
              </div>

              {/* Core Concepts Explored */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Concepts Explored
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeTopic.coreConcepts.map((concept, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-[#070A12] border border-white/[0.08] flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical AI Application */}
              <div className="p-4 rounded-xl bg-[#3B82F6]/5 border border-[#3B82F6]/20 space-y-1">
                <div className="text-xs font-semibold text-[#93C5FD] uppercase tracking-wider">
                  Practical Engineering Objective
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeTopic.practicalApplication}
                </p>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Domain Focus: {activeTopic.title}</span>
                <span className="text-[#3B82F6]">Continuous Improvement</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
