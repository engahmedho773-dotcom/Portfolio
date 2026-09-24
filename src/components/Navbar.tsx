import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BarChart3, Mail, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDashboard: () => void;
  onOpenExcel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDashboard, onOpenExcel }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F3F0E9]/90 backdrop-blur-md border-b border-[#DDD6CB]/80 transition-all">
      <div className="max-w-[1180px] mx-auto px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single Brand Element Wordmark with Monogram */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full bg-[#17365D] text-white flex items-center justify-center font-serif text-base font-bold shadow-sm group-hover:bg-[#0F243E] transition-colors border border-[#B47B4F]/40">
            AQ
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg font-bold tracking-tight text-[#17365D] group-hover:text-[#0F243E] transition-colors">
              {PORTFOLIO_DATA.profile.name_en}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#4A5B69]">
          <a href="#about" className="hover:text-[#17365D] transition-colors">About</a>
          <a href="#experience" className="hover:text-[#17365D] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#17365D] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#17365D] transition-colors">Skills</a>
          <a href="#certifications" className="hover:text-[#17365D] transition-colors">Certifications</a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenExcel}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#17365D] bg-white border border-[#DDD6CB] rounded-lg hover:bg-[#FBF9F5] transition-all shadow-xs cursor-pointer"
            title="Inspect Python Excel Engine"
          >
            <span>Excel Script</span>
          </button>

          <button
            onClick={onOpenDashboard}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#2E7D72] hover:bg-[#25665D] rounded-lg transition-all shadow-sm cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Interactive Dashboard</span>
          </button>

          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Request%20CV%20-%20Abdulmohsen%20AlQarni`}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#17365D] hover:bg-[#0F243E] rounded-lg transition-all shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request CV</span>
          </a>
        </div>
      </div>
    </header>
  );
};
