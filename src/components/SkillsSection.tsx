import React, { useState } from 'react';
import { Code2, Database, Layout, Wrench, Check, Terminal, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type CategoryFilter = 'All' | 'Programming' | 'Database' | 'Web Development' | 'Tools';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = ['All', 'Programming', 'Database', 'Web Development', 'Tools'];

  const filteredSkills = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(cat => cat.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#06B6D4]" />;
      case 'Web Development':
        return <Layout className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-[#10B981]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06] bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
              <span>Technical Skills</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 normal-case font-normal">Core Competencies & Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Tools and technologies I build with.
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Proficiencies across core programming, relational database systems, web standards, and developer version control.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Single-line controls) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0B0F19] border border-white/[0.08] rounded-lg overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Group Grid */}
        <div className="space-y-10">
          {filteredSkills.map((group) => (
            <div key={group.category} className="space-y-4">
              
              {/* Category Subheader */}
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                    <p className="text-xs text-slate-400">{group.description}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 hidden sm:block">
                  {group.items.length} {group.items.length === 1 ? 'skill' : 'skills'}
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card rounded-xl p-5 border border-white/[0.07] hover:border-[#3B82F6]/35 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header: Unboxed metadata */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-lg font-bold text-white group-hover:text-[#93C5FD] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-2 py-0.5 rounded border border-[#06B6D4]/20">
                          {skill.level}
                        </span>
                      </div>

                      {/* Practical Use Cases */}
                      <div className="mt-3 space-y-1.5">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                          Application Areas
                        </span>
                        <ul className="space-y-1">
                          {skill.useCases.map((useCase, idx) => (
                            <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-[#3B82F6] font-bold mt-0.5">·</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Status Divider */}
                    <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                      <span>Hands-on coursework & projects</span>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
