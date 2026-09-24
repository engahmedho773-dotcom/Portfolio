import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BarChart3, FileSpreadsheet, ArrowUpRight, Cpu, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenDashboard: () => void;
  onOpenExcel: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenDashboard,
  onOpenExcel
}) => {
  const p1 = PORTFOLIO_DATA.projects[0];
  const p2 = PORTFOLIO_DATA.projects[1];
  const p3 = PORTFOLIO_DATA.projects[2];

  return (
    <section id="projects" className="py-20 border-b border-[#DDD6CB]/70 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="kicker">Core Systems & Case Studies</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            Featured Engineering Projects & Empirical Evaluations
          </h2>
          <p className="text-[1.02rem] text-[#4A5B69] leading-relaxed">
            Rigorous full-stack implementations demonstrating intelligent search federation, performance evaluation pipelines, and headless spreadsheet automation.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Project 01: Flagship Case Study */}
          <div className="card-paper p-8 sm:p-12 text-left bg-[#FBF9F5] border border-[#DDD6CB]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold text-[#B47B4F] tracking-wider uppercase">
                {p1.tag}
              </span>
              <span className="text-xs font-semibold text-[#4A5B69] bg-white px-3 py-1 rounded-md border border-[#DDD6CB]">
                Bisha University Capstone Project
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17365D] mb-3 leading-snug">
              {p1.title_en}
            </h3>

            {/* Team Attribution Box */}
            <div className="p-3.5 rounded-xl bg-[#E8EFED] border border-[#C5DDD7] text-xs text-[#243746] font-medium mb-6">
              <span className="font-bold text-[#2E7D72]">Team Collaboration:</span> {p1.attribution_en}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-7 space-y-4 text-sm text-[#4A5B69] leading-relaxed">
                <p>
                  <strong className="text-[#17365D]">Problem:</strong> {p1.problem_en}
                </p>
                <p>
                  <strong className="text-[#17365D]">Solution:</strong> {p1.solution_en}
                </p>
                <p className="text-xs text-[#6B7785] bg-white p-3.5 rounded-lg border border-[#ECE7DF]">
                  <strong className="text-[#17365D]">Ranking Algorithm:</strong> {p1.ranking_formula_en}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                {p1.key_metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#ECE7DF] shadow-xs">
                    <div className="font-serif text-2xl font-bold text-[#17365D]">
                      {m.value}
                    </div>
                    <div className="text-xs font-bold text-[#17365D] mt-1">
                      {m.label_en}
                    </div>
                    <div className="text-[0.68rem] text-[#6B7785] mt-0.5">
                      {m.sub_en}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DDD6CB]">
              <div className="flex flex-wrap items-center gap-2">
                {p1.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.75rem] font-semibold text-[#17365D] bg-white px-2.5 py-1 rounded-md border border-[#DDD6CB]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenDashboard}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#2E7D72] hover:bg-[#25665D] rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Launch Live Telemetry</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project 02: EduNexus Evaluation Dashboard */}
          <div className="card-paper p-8 sm:p-10 text-left bg-white border border-[#DDD6CB]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[#2E7D72] tracking-wider uppercase">
                {p2.tag}
              </span>
              <span className="text-xs font-semibold text-[#6B7785]">
                Systems Benchmarking
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#17365D] mb-3">
              {p2.title_en}
            </h3>

            <p className="text-sm text-[#4A5B69] leading-relaxed mb-6 max-w-3xl">
              {p2.solution_en} Evaluated against Google Scholar, Semantic Scholar, and arXiv across 50 real-world queries with live telemetry recording latency breakdown and user satisfaction.
            </p>

            {/* 4 Metric Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
              {p2.key_metrics.map((m, idx) => (
                <div key={idx} className="bg-[#FBF9F5] p-4 rounded-xl border border-[#ECE7DF]">
                  <div className="font-serif text-2xl font-bold text-[#17365D]">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-[#17365D] mt-1">
                    {m.label_en}
                  </div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">
                    {m.sub_en}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DDD6CB]">
              <div className="flex flex-wrap items-center gap-2">
                {p2.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.75rem] font-semibold text-[#4A5B69] bg-[#FBF9F5] px-2.5 py-1 rounded-md border border-[#ECE7DF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={onOpenDashboard}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#17365D] bg-[#F3F0E9] hover:bg-[#E8EFED] border border-[#DDD6CB] rounded-lg transition-all cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5 text-[#2E7D72]" />
                <span>Open Dashboard Suite</span>
              </button>
            </div>
          </div>

          {/* Project 03: Automated Benchmark Ledger & Excel Engine */}
          <div className="card-paper p-8 sm:p-10 text-left bg-white border border-[#DDD6CB]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[#B47B4F] tracking-wider uppercase">
                {p3.tag}
              </span>
              <span className="text-xs font-semibold text-[#6B7785]">
                Python Data Engineering
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#17365D] mb-3">
              {p3.title_en}
            </h3>

            <p className="text-sm text-[#4A5B69] leading-relaxed mb-6 max-w-3xl">
              {p3.solution_en} Generates self-calculating multi-sheet Excel reports with automated lookup formulas, monthly distribution matrices, conditional formatting, and chart references without requiring local spreadsheet software.
            </p>

            {/* 4 Metric Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
              {p3.key_metrics.map((m, idx) => (
                <div key={idx} className="bg-[#FBF9F5] p-4 rounded-xl border border-[#ECE7DF]">
                  <div className="font-serif text-2xl font-bold text-[#B47B4F]">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-[#17365D] mt-1">
                    {m.label_en}
                  </div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">
                    {m.sub_en}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DDD6CB]">
              <div className="flex flex-wrap items-center gap-2">
                {p3.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.75rem] font-semibold text-[#4A5B69] bg-[#FBF9F5] px-2.5 py-1 rounded-md border border-[#ECE7DF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenExcel}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#17365D] bg-[#F3F0E9] hover:bg-[#E8EFED] border border-[#DDD6CB] rounded-lg transition-all cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#B47B4F]" />
                  <span>Inspect Excel Script & Schema</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
