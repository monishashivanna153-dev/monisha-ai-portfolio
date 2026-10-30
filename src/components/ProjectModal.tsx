import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#0B0F19] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-5 bg-[#0f1422] border-b border-white/[0.08] flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#3B82F6] uppercase tracking-wider">
              <span>{project.category}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 normal-case">Engineering Specification</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Tech Stack Bar (Unboxed text with separators) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs">
            <span className="text-slate-400 font-medium uppercase tracking-wider">Tech Stack:</span>
            {project.techStack.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-[#93C5FD] font-mono bg-[#3B82F6]/10 px-2.5 py-1 rounded border border-[#3B82F6]/25">
                  {tech}
                </span>
                {idx < project.techStack.length - 1 && <span className="text-slate-700">/</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Overview & Problem Statement */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-semibold text-[#06B6D4] uppercase tracking-wider">
                Problem Addressed
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* System Architecture Flow */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Layers className="w-4 h-4 text-[#3B82F6]" />
              <span>System Execution & Architecture Flow</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.diagramSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#070A12] border border-white/[0.08] space-y-1"
                >
                  <div className="text-xs font-bold text-[#3B82F6] font-mono">
                    {step.step}
                  </div>
                  <div className="text-xs text-slate-300">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Implemented Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Architecture Details & Features
            </h4>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B0F19] border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs text-slate-400">
            Author: <span className="text-white font-medium">Monisha B S</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#4b8eff] hover:to-[#3572f0] rounded-lg transition-all flex items-center gap-1.5 shadow-sm shadow-[#3B82F6]/30"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
