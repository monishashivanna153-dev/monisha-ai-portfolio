import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070D] py-12 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-semibold text-slate-300">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span>{PORTFOLIO_DATA.profile.role}</span>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-slate-400">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/[0.04]"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Lower Line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-slate-600 text-[11px]">
          Personal engineering portfolio built with precision and care. Information strictly matches student curriculum and authorized projects.
        </div>
      </div>
    </footer>
  );
};
