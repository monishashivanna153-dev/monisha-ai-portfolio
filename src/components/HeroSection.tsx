import React, { useState } from 'react';
import { ArrowRight, Github, Mail, Terminal, Sparkles, Code2, Database, Cpu, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string>('about');

  const terminalOutputs: Record<string, { cmd: string; lines: string[] }> = {
    about: {
      cmd: 'cat profile.json',
      lines: [
        `{`,
        `  "name": "${PORTFOLIO_DATA.profile.name}",`,
        `  "role": "${PORTFOLIO_DATA.profile.role}",`,
        `  "interests": ["Artificial Intelligence", "Machine Learning"],`,
        `  "focus": ["Python", "C", "SQL", "Web Development"],`,
        `  "exploring": ["AI Tools", "Graphic Design", "Modern Tech"],`,
        `  "target": "Become a skilled AI Engineer"`,
        `}`
      ]
    },
    skills: {
      cmd: 'query --skills --all',
      lines: [
        `PROGRAMMING:  Python, C`,
        `DATABASE:     MySQL, SQL`,
        `WEB DEV:      HTML, CSS, JavaScript`,
        `TOOLS:        Git, GitHub, VS Code`,
        `STATUS:       Continuous foundational learning & building`
      ]
    },
    projects: {
      cmd: 'ls -la ./projects',
      lines: [
        `drwx--  01. IPL Ticket Booking System  [Python, C, MySQL, Web]`,
        `drwx--  02. Library Management System  [Python, SQL, MySQL]`,
        `drwx--  03. SatQuery AI                [Python, AI/ML, Geospatial]`,
        `INFO: Click "Explore Projects" below for full architectural models`
      ]
    },
    goal: {
      cmd: 'cat career_goal.md',
      lines: [
        `# Career Goal: Become a Skilled AI Engineer`,
        `Building end-to-end capabilities across algorithmic thinking,`,
        `machine learning theory, and resilient database architectures.`
      ]
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background radial gradient highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[450px] h-[450px] bg-[#06B6D4]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-[#8B5CF6]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#3B82F6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>{PORTFOLIO_DATA.profile.role}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 normal-case font-normal">Artificial Intelligence & Software Systems</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#93C5FD]">{PORTFOLIO_DATA.profile.name}</span>.
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 block mt-2">
                Aspiring AI Engineer crafting software with intelligence.
              </span>
            </h1>

            {/* Subtitle / Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              AI & Machine Learning Engineering student building foundational depth in{' '}
              <span className="text-slate-200 font-medium">Python</span>,{' '}
              <span className="text-slate-200 font-medium">C</span>,{' '}
              <span className="text-slate-200 font-medium">SQL</span>, and{' '}
              <span className="text-slate-200 font-medium">Web Development</span>. 
              Exploring cutting-edge AI tools and graphic design with the dedication to become a skilled AI Engineer.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#4d8eff] hover:to-[#3b7cf7] rounded-lg shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3B82F6]/40 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Quick Unboxed Links & Placeholders */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <a 
                href={`mailto:${PORTFOLIO_DATA.profile.email}`} 
                className="hover:text-[#3B82F6] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>

              <span className="text-slate-700">/</span>

              <span className="text-slate-500 italic">
                {PORTFOLIO_DATA.profile.placeholders.linkedin}
              </span>

              <span className="text-slate-700">/</span>

              <span className="text-slate-500 italic">
                {PORTFOLIO_DATA.profile.placeholders.resume}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="bg-[#0B0F19] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">monisha@student-workstation:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>bash</span>
                </div>
              </div>

              {/* Terminal Quick Command Tabs */}
              <div className="bg-[#0e1424] px-3 py-2 border-b border-white/[0.06] flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
                <span className="text-slate-500 text-[11px] mr-1 hidden sm:inline">Commands:</span>
                {[
                  { key: 'about', label: 'profile.json' },
                  { key: 'skills', label: 'skills' },
                  { key: 'projects', label: 'projects' },
                  { key: 'goal', label: 'career_goal' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveCommand(item.key)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                      activeCommand === item.key
                        ? 'bg-[#3B82F6]/20 text-[#93C5FD] border border-[#3B82F6]/40'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed bg-[#070A12] min-h-[290px] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[#06B6D4] font-semibold">$</span>
                    <span className="text-white font-medium">{terminalOutputs[activeCommand].cmd}</span>
                  </div>

                  <div className="space-y-1 pl-3 border-l border-white/10 text-slate-300 font-mono-code text-[12px]">
                    {terminalOutputs[activeCommand].lines.map((line, idx) => (
                      <div key={idx} className="whitespace-pre-wrap break-all">
                        {line.startsWith('#') ? (
                          <span className="text-[#3B82F6] font-semibold">{line}</span>
                        ) : line.includes(':') ? (
                          <span>
                            <span className="text-[#06B6D4]">{line.split(':')[0]}:</span>
                            <span className="text-slate-300">{line.slice(line.indexOf(':') + 1)}</span>
                          </span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal Prompt Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-[#10B981]">●</span>
                    <span>Ready for AI Engineering opportunities</span>
                  </div>
                  <span className="text-slate-600 font-mono">UTF-8</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill Bar */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 text-[11px]">Primary Focus</div>
                <div className="text-white font-medium mt-0.5">AI & ML</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 text-[11px]">Core Languages</div>
                <div className="text-white font-medium mt-0.5">Python & C</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 text-[11px]">Database</div>
                <div className="text-white font-medium mt-0.5">MySQL & SQL</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
