import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Database, Cpu, Ticket, BookOpen, Satellite } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ipl-ticket-booking':
        return <Ticket className="w-5 h-5 text-[#3B82F6]" />;
      case 'library-management':
        return <BookOpen className="w-5 h-5 text-[#06B6D4]" />;
      case 'satquery-ai':
        return <Satellite className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06] bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
              <span>Selected Works</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 normal-case font-normal">Personal Projects & Technical Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects built with engineering discipline.
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Real application prototypes demonstrating concurrency handling, relational database integrity, and exploratory AI/ML pipelines.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors py-2 px-4 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#3B82F6]/40 shrink-0"
          >
            <Github className="w-4 h-4 text-slate-400" />
            <span>Browse GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-card rounded-2xl p-7 border border-white/[0.08] hover:border-[#3B82F6]/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Top Row: Unboxed editorial kicker & icon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#3B82F6] uppercase tracking-wider">
                    <span>0{idx + 1}</span>
                    <span className="text-slate-600">·</span>
                    <span>{proj.category}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {getProjectIcon(proj.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#06B6D4] font-medium mt-1">
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Unboxed Tech Stack */}
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300 font-mono">
                    {proj.techStack.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#93C5FD]">{tech}</span>
                        {tIdx < proj.techStack.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-semibold text-[#3B82F6] hover:text-[#93C5FD] transition-colors flex items-center gap-1.5 group-hover:translate-x-0.5 duration-200"
                >
                  <span>View Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
                  title="View repository on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-dive Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
