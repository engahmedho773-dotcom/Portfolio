import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Linkedin, FileText, ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenDashboard: () => void;
  onOpenExcel: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDashboard, onOpenExcel }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#17365D] text-white pt-16 pb-12 border-t border-[#0F243E]">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Col 1: Professional Bio & Monogram */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-[#17365D] flex items-center justify-center font-serif text-base font-bold shadow-sm border border-[#B47B4F]">
                AQ
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-white">
                {PORTFOLIO_DATA.profile.name_en}
              </span>
            </div>
            <p className="text-xs text-[#DDD6CB]/80 leading-relaxed font-normal">
              Computer Science graduate from Bisha University and Alibaba Cloud Certified Engineer specializing in resilient systems, cloud infrastructure, and database engineering.
            </p>
            <div className="text-[0.72rem] text-[#DDD6CB]/60">
              {PORTFOLIO_DATA.profile.location_en} · {PORTFOLIO_DATA.education.institution_en}
            </div>
          </div>

          {/* Col 2: Direct Contact Channels */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#B47B4F]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex items-center gap-2 text-[#DDD6CB] hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B47B4F]" />
                  <span>{PORTFOLIO_DATA.profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#DDD6CB] hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#2E7D72]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#DDD6CB]/60" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Request%20CV%20-%20Abdulmohsen%20AlQarni`}
                  className="inline-flex items-center gap-2 text-[#DDD6CB] hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B47B4F]" />
                  <span>Request Full Curriculum Vitae</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Sections */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#B47B4F]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#DDD6CB]">
              <li><a href="#about" className="hover:text-white transition-colors">Professional Background</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">SPSC Enterprise IT</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Systems</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Evidence Matrix</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Accreditations</a></li>
            </ul>
          </div>

          {/* Col 4: Systems & Live Evaluation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#B47B4F]">
              Interactive Systems
            </h4>
            <div className="space-y-3">
              <button
                onClick={onOpenDashboard}
                className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs cursor-pointer block"
              >
                <div className="font-bold text-white flex items-center justify-between">
                  <span>EduNexus Dashboard</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2E7D72]" />
                </div>
                <div className="text-[0.68rem] text-[#DDD6CB]/70 mt-1">
                  Interactive state-machine telemetry & benchmark comparison
                </div>
              </button>

              <button
                onClick={onOpenExcel}
                className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs cursor-pointer block"
              >
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Excel Automation Engine</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B47B4F]" />
                </div>
                <div className="text-[0.68rem] text-[#DDD6CB]/70 mt-1">
                  Inspect 18-section procedural Python script & multi-sheet structure
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDD6CB]/60 gap-4">
          <div className="text-left">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name_en}. All rights reserved. Built with pride in Saudi Arabia.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
