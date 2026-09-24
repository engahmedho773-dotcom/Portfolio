import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cloud, Layers, Database, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-[#DDD6CB]/70 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="kicker">Professional Background & Competencies</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            Bridging Cloud Systems Architecture with Resilient Software Engineering
          </h2>
          <p className="text-[1.02rem] text-[#4A5B69] leading-relaxed">
            {PORTFOLIO_DATA.profile.bio_summary_en}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          
          {/* Pillar 1 */}
          <div className="card-paper p-8 text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8EFED] text-[#2E7D72] flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#17365D] mb-3">
                Cloud Architecture & Solutions
              </h3>
              <p className="text-sm text-[#4A5B69] leading-relaxed mb-6">
                Certified by Alibaba Cloud and Tuwaiq Academy. Experienced in configuring compute instances (ECS), virtual private networks (VPC), server load balancers, and resilient cloud storage.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-[#DDD6CB] text-xs font-semibold text-[#17365D]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D72]" />
                ECS, VPC, & Security Group Config
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D72]" />
                Cloud Hosting & Linux Server Setup
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="card-paper p-8 text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] text-[#B47B4F] flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#17365D] mb-3">
                Full-Stack Systems Engineering
              </h3>
              <p className="text-sm text-[#4A5B69] leading-relaxed mb-6">
                Built enterprise web interfaces and backend services during 6 months at the Saudi Patient Safety Center using ASP.NET Core MVC, Python/Flask REST APIs, HTML5, CSS3, and JavaScript.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-[#DDD6CB] text-xs font-semibold text-[#17365D]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B47B4F]" />
                ASP.NET Core MVC & Python Flask
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B47B4F]" />
                RESTful API Integration & Testing
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="card-paper p-8 text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D9EAF7] text-[#17365D] flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#17365D] mb-3">
                Database Engineering & Automation
              </h3>
              <p className="text-sm text-[#4A5B69] leading-relaxed mb-6">
                Certified in Oracle Database SQL (60 accredited hours via TVTC). Skilled in relational database schema design, complex query drafting, optimization, and automated Python OpenPyXL reporting.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-[#DDD6CB] text-xs font-semibold text-[#17365D]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#17365D]" />
                Oracle SQL & Relational Modeling
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#17365D]" />
                Automated OpenPyXL / Pandas Ledgers
              </li>
            </ul>
          </div>

        </div>

        {/* Education & Location Banner */}
        <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#DDD6CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-[#DDD6CB] flex items-center justify-center text-[#17365D] font-serif font-bold text-sm shrink-0">
              BU
            </div>
            <div>
              <div className="font-bold text-[#17365D] text-sm">
                {PORTFOLIO_DATA.education.degree_en}
              </div>
              <div className="text-xs text-[#6B7785]">
                {PORTFOLIO_DATA.education.institution_en} · {PORTFOLIO_DATA.education.college_en} ({PORTFOLIO_DATA.education.period})
              </div>
            </div>
          </div>
          <div className="text-xs font-semibold text-[#4A5B69] bg-white px-3.5 py-1.5 rounded-lg border border-[#DDD6CB] shrink-0">
            Location: {PORTFOLIO_DATA.profile.location_en}
          </div>
        </div>

      </div>
    </section>
  );
};
