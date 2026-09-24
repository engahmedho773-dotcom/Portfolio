import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-[#DDD6CB]/70 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="kicker">Credentials & Specialized Training</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            Professional Accreditations & Certifications
          </h2>
          <p className="text-[1.02rem] text-[#4A5B69] leading-relaxed">
            Formally certified credentials from global cloud providers and accredited Saudi national authorities in cloud computing, database administration, and artificial intelligence.
          </p>
        </div>

        {/* Certifications 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card-paper p-7 bg-[#FBF9F5] border border-[#DDD6CB] text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[0.72rem] font-bold uppercase tracking-wider text-[#B47B4F] bg-[#F4ECE4] px-2.5 py-1 rounded-md">
                    {cert.category}
                  </span>
                  <span className="text-xs font-semibold text-[#6B7785]">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#17365D] mb-1.5 leading-snug">
                  {cert.title_en}
                </h3>
                <div className="text-xs font-semibold text-[#2E7D72] mb-3">
                  {cert.title_ar}
                </div>

                <p className="text-xs text-[#4A5B69] leading-relaxed mb-4">
                  <strong className="text-[#17365D]">Issuing Entity:</strong> {cert.issuer_en}
                  {cert.program_en && ` (${cert.program_en})`}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDD6CB] flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#17365D]">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D72]" />
                  {cert.status_note}
                </span>

                {cert.valid_until && (
                  <span className="text-[0.7rem] text-[#6B7785]">
                    Valid through: {cert.valid_until}
                  </span>
                )}
                {cert.duration_hours && (
                  <span className="text-[0.7rem] text-[#6B7785]">
                    {cert.duration_hours} Accredited Hours
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Policy Notice */}
        <div className="p-4 rounded-xl bg-[#F3F0E9] border border-[#DDD6CB] text-left text-xs text-[#6B7785] flex items-center gap-3">
          <FileCheck className="w-4 h-4 text-[#17365D] shrink-0" />
          <span>
            <strong className="text-[#17365D]">Verification Protocol:</strong> Official documentation, accredited certificate transcripts, and supervisor evaluation forms are available directly upon formal request.
          </span>
        </div>

      </div>
    </section>
  );
};
