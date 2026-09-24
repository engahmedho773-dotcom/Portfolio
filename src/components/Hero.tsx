import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BarChart3, ArrowRight, Linkedin, ShieldCheck, Database, Cloud } from 'lucide-react';

interface HeroProps {
  onOpenDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDashboard }) => {
  return (
    <section className="pt-16 pb-20 border-b border-[#DDD6CB]/70">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (60% width): Headline, Lede, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="kicker">
              Saudi IT & Cloud Computing Professional
            </span>

            <h1 className="font-serif text-[2.4rem] sm:text-[3rem] lg:text-[3.35rem] font-bold text-[#17365D] leading-[1.18] tracking-tight mb-6 text-balance">
              Architecting Resilient Cloud Infrastructure & Intelligent Software Systems.
            </h1>

            <p className="text-[1.05rem] sm:text-[1.12rem] text-[#4A5B69] leading-relaxed mb-8 max-w-2xl font-normal">
              Computer Science graduate from Bisha University and <strong className="font-bold text-[#17365D]">Alibaba Cloud Certified Engineer</strong>. 
              Proven hands-on enterprise development in full-stack ASP.NET Core MVC and Oracle SQL databases at the <strong className="font-bold text-[#17365D]">Saudi Patient Safety Center (SPSC)</strong>, combined with federated search pipeline engineering.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#17365D] hover:bg-[#0F243E] rounded-[10px] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenDashboard}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-[#2E7D72] hover:bg-[#25665D] rounded-[10px] transition-all shadow-sm cursor-pointer"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Launch Evaluation Dashboard</span>
              </button>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-bold text-[#17365D] bg-white border border-[#DDD6CB] hover:bg-[#FBF9F5] rounded-[10px] transition-all shadow-xs"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Quick trust tags */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-[#6B7785]">
              <span className="flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-[#B47B4F]" />
                Alibaba Cloud Certified
              </span>
              <span aria-hidden="true" className="text-[#DDD6CB]">·</span>
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#2E7D72]" />
                Oracle SQL Specialist (TVTC)
              </span>
              <span aria-hidden="true" className="text-[#DDD6CB]">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#17365D]" />
                SDAIA AI Certified
              </span>
            </div>
          </div>

          {/* Right Column (40% width): Key Verified Metrics Bento Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="card-paper p-7 bg-[#FBF9F5] border border-[#DDD6CB]">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DDD6CB]">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#17365D]">
                    Core Engineering Baseline
                  </h3>
                  <p className="text-xs text-[#6B7785] mt-0.5">
                    Empirical benchmarks from capstone & enterprise training
                  </p>
                </div>
                <span className="text-[0.72rem] font-bold text-[#2E7D72] bg-[#E8EFED] px-2.5 py-1 rounded-full">
                  Verified Data
                </span>
              </div>

              {/* 4 Metric Tiles */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-xl border border-[#ECE7DF] shadow-xs">
                  <div className="font-serif text-2xl font-bold text-[#17365D] tracking-tight">
                    87.0%
                  </div>
                  <div className="text-[0.75rem] font-bold text-[#17365D] mt-1">
                    Search Accuracy
                  </div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">
                    Exceeds 80% benchmark target
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ECE7DF] shadow-xs">
                  <div className="font-serif text-2xl font-bold text-[#2E7D72] tracking-tight">
                    1.65s
                  </div>
                  <div className="text-[0.75rem] font-bold text-[#17365D] mt-1">
                    Avg Query Speed
                  </div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">
                    Sub-2.0s target across sources
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ECE7DF] shadow-xs">
                  <div className="font-serif text-2xl font-bold text-[#B47B4F] tracking-tight">
                    06 Mos
                  </div>
                  <div className="text-[0.75rem] font-bold text-[#17365D] mt-1">
                    SPSC Enterprise IT
                  </div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">
                    Full-Stack, SQL, Service Desk
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ECE7DF] shadow-xs">
                  <div className="font-serif text-2xl font-bold text-[#17365D] tracking-tight">
                    04
                  </div>
                  <div className="text-[0.75rem] font-bold text-[#17365D] mt-1">
                    Tech Certifications
                  </div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">
                    Alibaba, Oracle & SDAIA
                  </div>
                </div>
              </div>

              {/* Lede quote box */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-[#ECE7DF] text-xs text-[#4A5B69] leading-relaxed">
                <span className="font-bold text-[#17365D]">Saudi Vision 2030 Alignment:</span> Dedicated to deploying secure, locally-optimized digital solutions and cloud infrastructures that enhance institutional productivity and knowledge access.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
