import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  X,
  Languages,
  Sliders,
  Cpu,
  Layers,
  BarChart2,
  TrendingUp,
  CheckCircle2,
  Clock,
  Search,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Server
} from 'lucide-react';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type StageType = 'plan' | 'build' | 'evaluate';

export const InteractiveDashboardModal: React.FC<DashboardModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activeStage, setActiveStage] = useState<StageType>('evaluate');

  // Interactive Simulator State for Stage 1 (Ranking formula)
  const [kwWeight, setKwWeight] = useState<number>(40);
  const [srcWeight, setSrcWeight] = useState<number>(35);
  const [freshWeight, setFreshWeight] = useState<number>(15);
  const [typeWeight, setTypeWeight] = useState<number>(10);

  // Pagination & filter for benchmark queries
  const [filterDiscipline, setFilterDiscipline] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 5;

  const isRtl = lang === 'ar';

  // Sample 15 verified queries from the 50-query dataset
  const sampleQueries = [
    { id: "Q01", query: "attention mechanisms in deep learning", discipline: "Computer Science", p5: 0.92, citations: 1420, latency_ms: 1420, source: "arXiv" },
    { id: "Q02", query: "calculus free textbook open educational resources", discipline: "Mathematics", p5: 0.88, citations: 310, latency_ms: 1350, source: "OpenStax" },
    { id: "Q03", query: "transformer neural networks natural language processing", discipline: "Computer Science", p5: 0.94, citations: 2150, latency_ms: 1680, source: "Semantic Scholar" },
    { id: "Q04", query: "quantum biology photosynthetic energy transfer", discipline: "Physics", p5: 0.86, citations: 180, latency_ms: 1910, source: "CrossRef" },
    { id: "Q05", query: "organic chemistry reaction mechanisms lecture notes", discipline: "Life Sciences", p5: 0.84, citations: 95, latency_ms: 1510, source: "MIT OCW" },
    { id: "Q06", query: "AI ethics fairness in algorithmic decision systems", discipline: "Computer Science", p5: 0.89, citations: 430, latency_ms: 1740, source: "arXiv" },
    { id: "Q07", query: "CRISPR gene editing therapeutic mechanisms", discipline: "Life Sciences", p5: 0.85, citations: 980, latency_ms: 1820, source: "Semantic Scholar" },
    { id: "Q08", query: "solid state physics crystal lattice diffraction", discipline: "Physics", p5: 0.90, citations: 340, latency_ms: 1610, source: "arXiv" },
    { id: "Q09", query: "reinforcement learning autonomous robotics control", discipline: "Computer Science", p5: 0.91, citations: 1210, latency_ms: 1790, source: "CrossRef" },
    { id: "Q10", query: "differential equations boundary value problems notes", discipline: "Mathematics", p5: 0.87, citations: 260, latency_ms: 1440, source: "MIT OCW" },
    { id: "Q11", query: "high energy astrophysics gamma ray burst emissions", discipline: "Physics", p5: 0.88, citations: 410, latency_ms: 1850, source: "arXiv" },
    { id: "Q12", query: "microbiome human gut immune system interactions", discipline: "Life Sciences", p5: 0.83, citations: 670, latency_ms: 1890, source: "Semantic Scholar" },
    { id: "Q13", query: "distributed database consensus algorithms raft paxos", discipline: "Computer Science", p5: 0.93, citations: 1580, latency_ms: 1690, source: "CrossRef" },
    { id: "Q14", query: "general relativity gravitational lensing cosmology", discipline: "Physics", p5: 0.89, citations: 820, latency_ms: 1780, source: "arXiv" },
    { id: "Q15", query: "cellular signaling pathway kinase activation", discipline: "Life Sciences", p5: 0.82, citations: 390, latency_ms: 1730, source: "OpenStax" }
  ];

  const filteredQueries = sampleQueries.filter(q => {
    const matchDisc = filterDiscipline === 'all' || q.discipline === filterDiscipline;
    const matchQuery = q.query.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDisc && matchQuery;
  });

  const totalPages = Math.ceil(filteredQueries.length / rowsPerPage);
  const currentQueries = filteredQueries.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Calculated simulated score for simulator demo
  const sampleRawMatch = 90;
  const sampleAuthority = 85;
  const sampleFreshness = 80;
  const sampleType = 95;
  const simulatedScore = Math.round(
    (sampleRawMatch * kwWeight +
      sampleAuthority * srcWeight +
      sampleFreshness * freshWeight +
      sampleType * typeWeight) / 100
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F243E]/80 backdrop-blur-md overflow-hidden animate-in fade-in duration-200">
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
        className="w-full max-w-6xl h-[92vh] bg-[#FBF9F5] rounded-2xl shadow-2xl border border-[#DDD6CB] flex flex-col overflow-hidden text-left"
      >
        
        {/* Top Header Bar */}
        <div className="bg-[#17365D] text-white px-6 py-4 flex items-center justify-between border-b-4 border-[#B47B4F] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2E7D72] flex items-center justify-center font-serif font-bold text-base shadow-xs text-white">
              EN
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                {isRtl
                  ? 'لوحة تقييم إيدونيكس — تحليل أداء المحرك الأكاديمي'
                  : 'EduNexus Analytics & Systems Evaluation Suite'}
              </h2>
              <p className="text-xs text-[#DDD6CB]/80">
                {isRtl
                  ? 'قياس الأداء والموثوقية وسرعة الاستجابة · جامعة بيشة'
                  : 'Empirical Performance, Accuracy & Usability Benchmarking · Bisha University'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer border border-white/20"
              title="Toggle Language / تبديل اللغة"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{isRtl ? 'English' : 'العربية'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Stage Pill Switcher */}
        <div className="bg-[#F3F0E9] px-6 py-3 border-b border-[#DDD6CB] flex items-center justify-between flex-wrap gap-3 shrink-0">
          <div className="inline-flex bg-white p-1 rounded-xl border border-[#DDD6CB] shadow-xs">
            <button
              onClick={() => setActiveStage('plan')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeStage === 'plan'
                  ? 'bg-[#17365D] text-white shadow-xs'
                  : 'text-[#4A5B69] hover:text-[#17365D]'
              }`}
            >
              {isRtl ? '1. مرحلة التخطيط والوزن النسبي' : '1. Stage I: Plan & Weights'}
            </button>

            <button
              onClick={() => setActiveStage('build')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeStage === 'build'
                  ? 'bg-[#17365D] text-white shadow-xs'
                  : 'text-[#4A5B69] hover:text-[#17365D]'
              }`}
            >
              {isRtl ? '2. مرحلة البناء وسرعة الاستجابة' : '2. Stage II: Build & Latency'}
            </button>

            <button
              onClick={() => setActiveStage('evaluate')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeStage === 'evaluate'
                  ? 'bg-[#2E7D72] text-white shadow-xs'
                  : 'text-[#4A5B69] hover:text-[#2E7D72]'
              }`}
            >
              {isRtl ? '3. مرحلة التقييم ومؤشرات الأداء' : '3. Stage III: Evaluate & KPIs'}
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#6B7785]">
            <span>
              {isRtl ? 'الاستعلامات المقيمة:' : 'Evaluated Queries:'} <strong className="text-[#17365D]">50</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {isRtl ? 'الدقة المتوسطة:' : 'Mean Accuracy:'} <strong className="text-[#2E7D72]">87.0%</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {isRtl ? 'متوسط الاستجابة:' : 'Avg Latency:'} <strong className="text-[#17365D]">1.65s</strong>
            </span>
          </div>
        </div>

        {/* Dynamic Stage Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* STAGE 1: PLAN */}
          {activeStage === 'plan' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Top Summary Banner */}
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <h3 className="font-serif text-lg font-bold text-[#17365D] mb-2">
                  {isRtl ? 'الأهداف البحثية والمخطط الزمني للمشروع' : 'Research Objectives & 16-Week Capstone Timeline'}
                </h3>
                <p className="text-xs text-[#4A5B69] leading-relaxed mb-4">
                  {isRtl
                    ? 'تم تنفيذ المشروع على مدار 16 أسبوعاً مقسمة إلى أربع مراحل رئيسية: التصميم، والتطوير، والفحص، والتوثيق والاعتماد.'
                    : 'The project was engineered systematically across 16 academic weeks spanning 4 structured phases: Conceptual Design, System Development, Rigorous Testing & Tuning, and Final Submission.'}
                </p>

                {/* 4 Phases Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-[0.7rem] font-bold text-[#B47B4F] uppercase">Phase I (Weeks 1–3)</div>
                    <div className="text-xs font-bold text-[#17365D] mt-1">{isRtl ? 'التصميم والمتطلبات' : 'Design & Architecture'}</div>
                    <div className="text-[0.68rem] text-[#6B7785] mt-0.5">Wireframes, Stack Selection</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-[0.7rem] font-bold text-[#2E7D72] uppercase">Phase II (Weeks 4–10)</div>
                    <div className="text-xs font-bold text-[#17365D] mt-1">{isRtl ? 'التطوير البرمجي' : 'Core Development'}</div>
                    <div className="text-[0.68rem] text-[#6B7785] mt-0.5">Flask API, Fetchers, Ranking Logic</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-[0.7rem] font-bold text-[#17365D] uppercase">Phase III (Weeks 11–13)</div>
                    <div className="text-xs font-bold text-[#17365D] mt-1">{isRtl ? 'الفحص والتحسين' : 'Testing & Optimization'}</div>
                    <div className="text-[0.68rem] text-[#6B7785] mt-0.5">20 Students Usability, Bug Fixing</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-[0.7rem] font-bold text-[#4A5B69] uppercase">Phase IV (Weeks 14–16)</div>
                    <div className="text-xs font-bold text-[#17365D] mt-1">{isRtl ? 'التوثيق والمناقشة' : 'Documentation'}</div>
                    <div className="text-[0.68rem] text-[#6B7785] mt-0.5">Report, User Manual, Defense</div>
                  </div>
                </div>
              </div>

              {/* Interactive Ranking Formula Simulator */}
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DDD6CB]">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#17365D] flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#B47B4F]" />
                      <span>{isRtl ? 'محاكي معادلة ترتيب النتائج التفاعلي' : 'Interactive Relevance Ranking Simulator'}</span>
                    </h3>
                    <p className="text-xs text-[#6B7785] mt-0.5">
                      {isRtl
                        ? 'جرّب تعديل أوزان المعادلة الحسابية وشاهد التأثير المباشر على نقاط النتيجة الأكاديمية'
                        : 'Adjust formula weights to simulate how EduNexus ranks credible sources over generic content'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.7rem] font-bold text-[#6B7785] uppercase">{isRtl ? 'النتيجة المحسوبة' : 'Calculated Score'}</div>
                    <div className="font-serif text-2xl font-bold text-[#2E7D72]">{simulatedScore} / 100</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Slider 1: Keyword Match */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-[#17365D]">
                      <span>{isRtl ? 'مطابقة الكلمات المفتاحية' : 'Keyword Match'}</span>
                      <span>{kwWeight}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      value={kwWeight}
                      onChange={(e) => setKwWeight(Number(e.target.value))}
                      className="w-full accent-[#17365D] cursor-pointer"
                    />
                    <div className="text-[0.68rem] text-[#6B7785]">{isRtl ? 'الوزن المعتمد: 40%' : 'Thesis Weight: 40%'}</div>
                  </div>

                  {/* Slider 2: Source Credibility */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-[#17365D]">
                      <span>{isRtl ? 'موثوقية المصدر الأكاديمي' : 'Source Authority'}</span>
                      <span>{srcWeight}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      value={srcWeight}
                      onChange={(e) => setSrcWeight(Number(e.target.value))}
                      className="w-full accent-[#2E7D72] cursor-pointer"
                    />
                    <div className="text-[0.68rem] text-[#6B7785]">{isRtl ? 'الوزن المعتمد: 35%' : 'Thesis Weight: 35%'}</div>
                  </div>

                  {/* Slider 3: Freshness */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-[#17365D]">
                      <span>{isRtl ? 'حداثة وتاريخ المحتوى' : 'Date Freshness'}</span>
                      <span>{freshWeight}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={freshWeight}
                      onChange={(e) => setFreshWeight(Number(e.target.value))}
                      className="w-full accent-[#B47B4F] cursor-pointer"
                    />
                    <div className="text-[0.68rem] text-[#6B7785]">{isRtl ? 'الوزن المعتمد: 15%' : 'Thesis Weight: 15%'}</div>
                  </div>

                  {/* Slider 4: Resource Type */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-[#17365D]">
                      <span>{isRtl ? 'نوع المورد الأكاديمي' : 'Content Type'}</span>
                      <span>{typeWeight}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      value={typeWeight}
                      onChange={(e) => setTypeWeight(Number(e.target.value))}
                      className="w-full accent-[#244A6B] cursor-pointer"
                    />
                    <div className="text-[0.68rem] text-[#6B7785]">{isRtl ? 'الوزن المعتمد: 10%' : 'Thesis Weight: 10%'}</div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A5B69] gap-3">
                  <div>
                    <strong className="text-[#17365D]">{isRtl ? 'صيغة المعادلة المحسّنة:' : 'Refined Mathematical Model:'}</strong>{' '}
                    <code>Score = ({kwWeight}% × KW) + ({srcWeight}% × Source) + ({freshWeight}% × Date) + ({typeWeight}% × Type)</code>
                  </div>
                  <button
                    onClick={() => { setKwWeight(40); setSrcWeight(35); setFreshWeight(15); setTypeWeight(10); }}
                    className="text-xs font-bold text-[#2E7D72] hover:underline cursor-pointer shrink-0"
                  >
                    {isRtl ? 'إعادة التعيين للأوزان المعتمدة' : 'Reset to Thesis Standard'}
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* STAGE 2: BUILD */}
          {activeStage === 'build' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Component Latency Breakdown Table & Waterfall */}
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DDD6CB]">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#17365D] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#2E7D72]" />
                      <span>{isRtl ? 'تحليل سرعة استجابة المكونات والواجهات' : 'Multi-Source Component Latency Breakdown'}</span>
                    </h3>
                    <p className="text-xs text-[#6B7785]">
                      {isRtl ? 'بيانات الأداء المسجلة في الفصل الرابع (جدول 4.3)' : 'Empirical benchmark logs from thesis Chapter 4 (Table 4.3)'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#17365D] bg-[#F3F0E9] px-3 py-1 rounded-md">
                      {isRtl ? 'الإجمالي: 1,842 ملّي ثانية' : 'Total Avg: 1,842ms'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {PORTFOLIO_DATA.telemetry.component_latency.map((item) => {
                    const percentage = Math.round((item.ms / 1842) * 100);
                    return (
                      <div key={item.component} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold text-[#17365D]">
                          <span>{isRtl ? item.component_ar : item.component}</span>
                          <span className="font-mono">{item.ms}ms ({percentage}%)</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-[#ECE7DF] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#17365D] transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[0.68rem] text-[#6B7785]">
                          <span>Min: {item.min_ms}ms</span>
                          <span>Max: {item.max_ms}ms</span>
                          <span>Std Dev: ±{item.std_ms}ms</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Concurrent Load Scaling Table */}
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <h3 className="font-serif text-lg font-bold text-[#17365D] mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#17365D]" />
                  <span>{isRtl ? 'اختبار الإجهاد وتدرج استهلاك الموارد' : 'Concurrent User Load Stress Testing'}</span>
                </h3>
                <p className="text-xs text-[#4A5B69] mb-4">
                  {isRtl
                    ? 'يظهر النظام قدرة استيعاب خطية حتى 15-20 مستخدماً متزامناً على عتاد سحابي محدود (2 vCPU, 4GB RAM).'
                    : 'System demonstrates linear resource scaling up to 20 concurrent queries on cloud prototype tier (2 vCPUs, 4GB RAM).'}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#17365D] text-white">
                        <th className="p-3 font-bold">{isRtl ? 'المستخدمون المتزامنون' : 'Concurrent Users'}</th>
                        <th className="p-3 font-bold">{isRtl ? 'الذاكرة RAM' : 'Memory (MB)'}</th>
                        <th className="p-3 font-bold">{isRtl ? 'استهلاك المعالج' : 'CPU Load (%)'}</th>
                        <th className="p-3 font-bold">{isRtl ? 'متوسط الاستجابة' : 'Avg Response Time'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DDD6CB]">
                      {PORTFOLIO_DATA.telemetry.load_scaling.map((row) => (
                        <tr key={row.users} className="hover:bg-[#FBF9F5] transition-colors">
                          <td className="p-3 font-bold text-[#17365D]">{row.users} {isRtl ? 'مستخدم' : 'Users'}</td>
                          <td className="p-3 font-mono">{row.memory_mb} MB</td>
                          <td className="p-3 font-mono">{row.cpu_pct}%</td>
                          <td className="p-3 font-mono font-bold text-[#2E7D72]">{row.latency_ms} ms</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* STAGE 3: EVALUATE */}
          {activeStage === 'evaluate' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Target vs Achieved KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card-paper p-5 bg-white border border-[#DDD6CB]">
                  <div className="text-xs font-bold text-[#6B7785] uppercase">{isRtl ? 'دقة البحث' : 'Relevance Accuracy'}</div>
                  <div className="font-serif text-3xl font-bold text-[#2E7D72] mt-1">87.0%</div>
                  <div className="text-xs text-[#17365D] mt-1 font-semibold">{isRtl ? 'المستهدف: ≥ 80%' : 'Target: ≥ 80%'}</div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">{isRtl ? 'دراسة لـ 20 طالباً' : 'Validated by 20 students'}</div>
                </div>

                <div className="card-paper p-5 bg-white border border-[#DDD6CB]">
                  <div className="text-xs font-bold text-[#6B7785] uppercase">{isRtl ? 'زمن الاستجابة' : 'Response Latency'}</div>
                  <div className="font-serif text-3xl font-bold text-[#17365D] mt-1">1.65s</div>
                  <div className="text-xs text-[#17365D] mt-1 font-semibold">{isRtl ? 'المستهدف: ≤ 2.0 ثانية' : 'Target: ≤ 2.0s'}</div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">{isRtl ? 'متوسط القياس الآلي' : 'Automated timing trials'}</div>
                </div>

                <div className="card-paper p-5 bg-white border border-[#DDD6CB]">
                  <div className="text-xs font-bold text-[#6B7785] uppercase">{isRtl ? 'مقياس سهولة الاستخدام' : 'SUS Usability Score'}</div>
                  <div className="font-serif text-3xl font-bold text-[#2E7D72] mt-1">81.5</div>
                  <div className="text-xs text-[#17365D] mt-1 font-semibold">{isRtl ? 'المستهدف: ≥ 70 (جيد)' : 'Target: ≥ 70 (Good)'}</div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">{isRtl ? 'تصنيف ممتاز' : 'Rated Excellent'}</div>
                </div>

                <div className="card-paper p-5 bg-white border border-[#DDD6CB]">
                  <div className="text-xs font-bold text-[#6B7785] uppercase">{isRtl ? 'اختصار وقت البحث' : 'Task Time Reduction'}</div>
                  <div className="font-serif text-3xl font-bold text-[#B47B4F] mt-1">40%</div>
                  <div className="text-xs text-[#17365D] mt-1 font-semibold">{isRtl ? 'مقارنة بمحرك قوقل' : 'Compared vs Google'}</div>
                  <div className="text-[0.68rem] text-[#6B7785] mt-0.5">{isRtl ? '95% ثقة بالمخرجات' : '95% student trust rate'}</div>
                </div>
              </div>

              {/* Expert Evaluation Matrix */}
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DDD6CB]">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#17365D]">
                      {isRtl ? 'تقييم المحكمين والخبراء التخصصي' : 'Blind Domain Expert Evaluation (3 Experts)'}
                    </h3>
                    <p className="text-xs text-[#6B7785]">
                      {isRtl ? 'مستخلص من الفصل الرابع (جدول 4.4)' : 'Grounded in thesis Table 4.4 across CS, Physics, and Life Sciences'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {PORTFOLIO_DATA.telemetry.expert_eval.map(exp => (
                    <div key={exp.discipline} className="p-4 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                      <h4 className="font-bold text-sm text-[#17365D] mb-3">
                        {isRtl ? exp.discipline_ar : exp.discipline}
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-[#6B7785]">{isRtl ? 'الدقة Precision:' : 'Precision:'}</span>
                          <span className="font-mono font-bold text-[#2E7D72]">{exp.precision}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6B7785]">{isRtl ? 'الاسترجاع Recall:' : 'Recall:'}</span>
                          <span className="font-mono font-bold text-[#17365D]">{exp.recall}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6B7785]">{isRtl ? 'الحداثة Novelty:' : 'Novelty:'}</span>
                          <span className="font-mono font-bold text-[#B47B4F]">{exp.novelty}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 50-Query Benchmark Telemetry Table with Pagination */}
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#DDD6CB]">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#17365D] flex items-center gap-2">
                      <Search className="w-4 h-4 text-[#2E7D72]" />
                      <span>{isRtl ? 'سجل قياس استعلامات البحث الأكاديمي' : 'Search Query Telemetry Ledger'}</span>
                    </h3>
                    <p className="text-xs text-[#6B7785]">
                      {isRtl ? 'عينة من 50 استعلاماً تم فحصها عملياً في المشروع' : 'Sample of 50 distinct academic queries evaluated across sources'}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Search */}
                    <input
                      type="text"
                      placeholder={isRtl ? 'بحث في الاستعلامات...' : 'Search queries...'}
                      value={searchQuery}
                      onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                      className="px-3 py-1.5 text-xs bg-[#FBF9F5] border border-[#DDD6CB] rounded-lg focus:outline-none focus:border-[#17365D]"
                    />

                    {/* Discipline filter */}
                    <select
                      value={filterDiscipline}
                      onChange={(e) => { setFilterDiscipline(e.target.value); setCurrentPage(1); }}
                      className="px-3 py-1.5 text-xs bg-[#FBF9F5] border border-[#DDD6CB] rounded-lg focus:outline-none focus:border-[#17365D]"
                    >
                      <option value="all">{isRtl ? 'كافة التخصصات' : 'All Disciplines'}</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Physics">Physics</option>
                      <option value="Life Sciences">Life Sciences</option>
                      <option value="Mathematics">Mathematics</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#17365D] text-white">
                        <th className="p-3 font-bold">ID</th>
                        <th className="p-3 font-bold">{isRtl ? 'استعلام البحث' : 'Query Topic'}</th>
                        <th className="p-3 font-bold">{isRtl ? 'التخصص' : 'Discipline'}</th>
                        <th className="p-3 font-bold">{isRtl ? 'المصدر' : 'Source'}</th>
                        <th className="p-3 font-bold">Precision@5</th>
                        <th className="p-3 font-bold">{isRtl ? 'الاستشهادات' : 'Citations'}</th>
                        <th className="p-3 font-bold">{isRtl ? 'زمن الاستجابة' : 'Latency'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DDD6CB]">
                      {currentQueries.map((q) => (
                        <tr key={q.id} className="hover:bg-[#FBF9F5] transition-colors">
                          <td className="p-3 font-mono font-bold text-[#17365D]">{q.id}</td>
                          <td className="p-3 font-medium text-[#243746]">{q.query}</td>
                          <td className="p-3">
                            <span className="text-[0.72rem] font-bold text-[#4A5B69] bg-[#F3F0E9] px-2 py-0.5 rounded">
                              {q.discipline}
                            </span>
                          </td>
                          <td className="p-3 text-[#2E7D72] font-semibold">{q.source}</td>
                          <td className="p-3 font-mono font-bold text-[#2E7D72]">{q.p5}</td>
                          <td className="p-3 font-mono">{q.citations}</td>
                          <td className="p-3 font-mono text-[#17365D] font-bold">{q.latency_ms}ms</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#DDD6CB] text-xs text-[#6B7785]">
                  <span>
                    {isRtl
                      ? `عرض ${currentQueries.length} من إجمالي ${filteredQueries.length}`
                      : `Showing ${currentQueries.length} of ${filteredQueries.length} queries`}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-1 rounded bg-[#F3F0E9] disabled:opacity-40 hover:bg-[#E8EFED] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-[#17365D]">
                      {currentPage} / {totalPages || 1}
                    </span>
                    <button
                      onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                      disabled={currentPage === totalPages || totalPages === 0}
                      className="p-1 rounded bg-[#F3F0E9] disabled:opacity-40 hover:bg-[#E8EFED] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F3F0E9] px-6 py-3.5 border-t border-[#DDD6CB] flex items-center justify-between text-xs text-[#6B7785] shrink-0">
          <div>
            {isRtl
              ? 'مشروع تخرج جامعة بيشة — عبدالمحسن علي القرني وكافة أعضاء الفريق'
              : 'Bisha University Capstone Evaluation Suite — Abdulmohsen Ali AlQarni & Capstone Cohort'}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-bold text-white bg-[#17365D] hover:bg-[#0F243E] rounded-lg transition-colors cursor-pointer"
          >
            {isRtl ? 'إغلاق اللوحة' : 'Close Dashboard'}
          </button>
        </div>

      </div>
    </div>
  );
};
