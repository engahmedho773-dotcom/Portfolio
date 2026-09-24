import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Shield } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-[#DDD6CB]/70 bg-[#FBF9F5]">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="kicker">Evidence-Calibrated Competency Matrix</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            Technical Stack & Verified Evidence Level
          </h2>
          <p className="text-[1.02rem] text-[#4A5B69] leading-relaxed">
            Every technical skill is grounded in documented engineering milestones: production enterprise internship, accredited industry certification, or university capstone implementation.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PORTFOLIO_DATA.skills.map((cat) => (
            <div
              key={cat.category_en}
              className="card-paper p-8 bg-white border border-[#DDD6CB] text-left"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DDD6CB]">
                <h3 className="font-serif text-xl font-bold text-[#17365D]">
                  {cat.category_en}
                </h3>
                <span className="text-xs font-semibold text-[#6B7785]">
                  {cat.category_ar}
                </span>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-[#FBF9F5] border border-[#ECE7DF] gap-2"
                  >
                    <span className="font-bold text-sm text-[#17365D]">
                      {skill.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2E7D72] bg-white px-2.5 py-1 rounded border border-[#DDD6CB]/80 shrink-0">
                      <Shield className="w-3 h-3 text-[#2E7D72]" />
                      {skill.evidence}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
