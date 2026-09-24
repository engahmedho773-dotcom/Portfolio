import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Building2, Calendar, Code, Database, HeadphonesIcon, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const exp = PORTFOLIO_DATA.experience[0];

  const unitIcons = [
    <Code className="w-5 h-5 text-[#2E7D72]" key="code" />,
    <Database className="w-5 h-5 text-[#17365D]" key="db" />,
    <HeadphonesIcon className="w-5 h-5 text-[#B47B4F]" key="support" />
  ];

  return (
    <section id="experience" className="py-20 border-b border-[#DDD6CB]/70 bg-[#FBF9F5]">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="kicker">Enterprise Professional Experience</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            Hands-on Systems Development at the Saudi Patient Safety Center
          </h2>
          <p className="text-[1.02rem] text-[#4A5B69] leading-relaxed">
            Six months of immersive, full-time engineering across application full-stack development, enterprise SQL database operations, and service desk technical infrastructure.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="card-paper p-8 sm:p-10 bg-white border border-[#DDD6CB] mb-8 text-left">
          
          {/* Main Role Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#DDD6CB] gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8EFED] text-[#17365D] flex items-center justify-center font-serif font-bold text-lg shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#17365D]">
                  {exp.company_en}
                </h3>
                <div className="text-sm font-semibold text-[#2E7D72] mt-0.5">
                  {exp.department_en} · <span className="text-[#6B7785]">{exp.role_en}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#4A5B69] bg-[#F3F0E9] px-4 py-2 rounded-lg border border-[#DDD6CB] shrink-0">
              <Calendar className="w-3.5 h-3.5 text-[#B47B4F]" />
              <span>{exp.period} ({exp.duration_en})</span>
            </div>
          </div>

          {/* 3 Department Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exp.units.map((unit, idx) => (
              <div
                key={unit.unit_en}
                className="p-6 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-white border border-[#DDD6CB]">
                      {unitIcons[idx]}
                    </div>
                    <span className="text-[0.85rem] font-bold text-[#17365D] leading-tight">
                      {unit.unit_en}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-[#4A5B69] leading-relaxed">
                    {unit.achievements_en.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E7D72] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DDD6CB]/70 text-[0.7rem] font-bold text-[#6B7785] uppercase tracking-wider">
                  {idx === 0 && "Tech: HTML5 · CSS3 · JS · Bootstrap · ASP.NET Core MVC"}
                  {idx === 1 && "Tech: Relational SQL · Schema Updates · Query Optimization"}
                  {idx === 2 && "Ops: Tier-1 Incident Lifecycle · Escalation Workflows"}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
