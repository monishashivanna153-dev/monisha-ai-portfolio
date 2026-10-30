import React, { useState } from 'react';
import { Mail, Github, Send, Copy, Check, ExternalLink, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Inquiry / Opportunity for Monisha B S');
  const [message, setMessage] = useState('');
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleApplyTemplate = (type: string) => {
    if (type === 'internship') {
      setSubject('Internship Opportunity / AI & ML Engineering Role');
      setMessage(
        `Hello Monisha,\n\nI reviewed your portfolio showcasing your work in AI & ML, Python, C, and MySQL. We would love to discuss an internship / junior engineering opportunity with you.\n\nBest regards,\n[Your Name]`
      );
    } else if (type === 'collaboration') {
      setSubject('Academic / Technical Collaboration Project');
      setMessage(
        `Hi Monisha,\n\nI came across your projects (including SatQuery AI and Library Management System) and would like to explore collaborating on an AI / software project.\n\nBest,\n[Your Name]`
      );
    } else {
      setSubject('Connecting regarding AI Engineering');
      setMessage(
        `Hi Monisha,\n\nI came across your portfolio and wanted to connect and discuss your journey in AI & Machine Learning.\n\nBest,\n[Your Name]`
      );
    }
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFormFeedback('Please fill in your name and message to proceed.');
      return;
    }

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormFeedback('Mail client launched with your message draft.');
  };

  const handleCopyFullMessage = () => {
    const textToCopy = `To: ${PORTFOLIO_DATA.profile.email}\nSubject: ${subject}\nFrom: ${name} (${senderEmail})\n\n${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <span>Contact & Connect</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 normal-case font-normal">Direct Channels & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's connect and build together.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Open to engineering internships, academic research discussions, open-source collaboration, and AI project inquiries.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary GitHub Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded border border-[#10B981]/20">
                  Active Profile
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">GitHub Repository</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Explore code repositories, commits, and project source files.
                </p>
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-[#93C5FD] hover:text-white transition-colors"
                >
                  <span>github.com/monishashivanna153-dev</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#3B82F6]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">Direct Email</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Send inquiries directly to Monisha's verified email address.
                </p>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="mt-3 inline-block text-xs font-mono text-[#93C5FD] hover:underline"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>
            </div>

            {/* Clearly Marked Placeholders Box */}
            <div className="p-5 rounded-2xl bg-[#0B0F19]/80 border border-dashed border-white/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
                <span>Custom Profile Placeholders</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                As per guidelines, no unprovided contact accounts are invented. When available, add links here:
              </p>

              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-400 flex items-center justify-between">
                  <span>LinkedIn:</span>
                  <span className="text-slate-500 italic text-[11px] truncate max-w-[200px]">
                    {PORTFOLIO_DATA.profile.placeholders.linkedin}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-400 flex items-center justify-between">
                  <span>Resume PDF:</span>
                  <span className="text-slate-500 italic text-[11px] truncate max-w-[200px]">
                    {PORTFOLIO_DATA.profile.placeholders.resume}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              
              <div className="pb-4 border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
                    Compose Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Draft a message to launch in your email client or copy to clipboard.
                  </p>
                </div>

                <div className="text-xs font-mono text-slate-500 hidden sm:block">
                  to: {PORTFOLIO_DATA.profile.email}
                </div>
              </div>

              {/* Quick Template Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Quick Message Templates:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleApplyTemplate('internship')}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 transition-colors"
                  >
                    Internship Opportunity
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyTemplate('collaboration')}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 transition-colors"
                  >
                    Project Collaboration
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyTemplate('general')}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 transition-colors"
                  >
                    General Inquiry
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSendMail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070A12] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070A12] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070A12] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note or question here..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070A12] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                  />
                </div>

                {formFeedback && (
                  <div className="p-3 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/25 text-xs text-[#93C5FD]">
                    {formFeedback}
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#4b8eff] hover:to-[#3572f0] rounded-lg transition-all shadow-md shadow-[#3B82F6]/30 flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Mail Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFullMessage}
                    className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">Message Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
