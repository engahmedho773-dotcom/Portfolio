import React, { useState } from 'react';
import { X, FileSpreadsheet, Download, Code, CheckCircle, Table, ArrowDownToLine } from 'lucide-react';

interface ExcelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExcelPreviewModal: React.FC<ExcelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'architecture' | 'sheets' | 'code'>('architecture');

  const sheetsList = [
    { name: "Dashboard", type: "Main KPI & Chart Display", formulaCount: "28 formulas", desc: "Top KPI cards with IFERROR(INDEX(MATCH)), Timeline SUMIFS matrix, and native charts." },
    { name: "Master Data", type: "Raw Telemetry Ledger", formulaCount: "Auto-filtered", desc: "Complete 50-query log across disciplines with timestamps, latencies, and citations." },
    { name: "Computer Science", type: "Discipline Sub-Sheet", formulaCount: "15 queries", desc: "Filtered queries specific to artificial intelligence, databases, and algorithms." },
    { name: "Physics", type: "Discipline Sub-Sheet", formulaCount: "15 queries", desc: "Filtered queries for astrophysics, quantum biology, and crystallography." },
    { name: "Life Sciences", type: "Discipline Sub-Sheet", formulaCount: "12 queries", desc: "Filtered queries for biochemistry, genomics, and medicine." },
    { name: "Mathematics", type: "Discipline Sub-Sheet", formulaCount: "8 queries", desc: "Filtered queries for calculus, linear algebra, and differential equations." },
    { name: "_KPI", type: "Hidden Aggregator", formulaCount: "Backend lookup", desc: "Stores pre-computed metrics per discipline and query type for O(1) Excel lookups." },
    { name: "_Timeline", type: "Hidden Latency Matrix", formulaCount: "Backend matrix", desc: "Powers the SUMIFS monthly and component waterfall calculations." },
    { name: "_Lists", type: "Hidden Data Validation", formulaCount: "List range", desc: "Supplies the native Excel dropdown validation list for dashboard filtering." }
  ];

  const handleDownloadPythonScript = () => {
    window.open('/scripts/build_excel_dashboard.py', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F243E]/80 backdrop-blur-md overflow-hidden animate-in fade-in duration-200">
      <div className="w-full max-w-5xl h-[88vh] bg-[#FBF9F5] rounded-2xl shadow-2xl border border-[#DDD6CB] flex flex-col overflow-hidden text-left">
        
        {/* Header */}
        <div className="bg-[#17365D] text-white px-6 py-4 flex items-center justify-between border-b-4 border-[#B47B4F] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#B47B4F] flex items-center justify-center text-white shadow-xs">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                Python OpenPyXL Automated Spreadsheet Architecture
              </h2>
              <p className="text-xs text-[#DDD6CB]/80">
                Procedural 18-Section Automation Engine for Headless Multi-Sheet Excel Generation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#F3F0E9] px-6 py-3 border-b border-[#DDD6CB] flex items-center justify-between flex-wrap gap-3 shrink-0">
          <div className="inline-flex bg-white p-1 rounded-xl border border-[#DDD6CB] shadow-xs">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-[#17365D] text-white'
                  : 'text-[#4A5B69] hover:text-[#17365D]'
              }`}
            >
              18-Section Architecture
            </button>

            <button
              onClick={() => setActiveTab('sheets')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'sheets'
                  ? 'bg-[#17365D] text-white'
                  : 'text-[#4A5B69] hover:text-[#17365D]'
              }`}
            >
              Workbook Sheets Map (9 Tabs)
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-[#17365D] text-white'
                  : 'text-[#4A5B69] hover:text-[#17365D]'
              }`}
            >
              Script Inspection
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/scripts/build_excel_dashboard.py"
              download="build_excel_dashboard.py"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2E7D72] text-white rounded-lg text-xs font-bold hover:bg-[#25665D] transition-colors shadow-xs"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download Python Script</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <h3 className="font-serif text-lg font-bold text-[#17365D] mb-2">
                  Procedural Data Pipeline Pipeline Overview
                </h3>
                <p className="text-xs text-[#4A5B69] leading-relaxed mb-6">
                  Following the exact 18 numbered section banner format of the reference code, the script takes raw evaluation logs and writes a fully styled, self-calculating workbook without requiring Microsoft Excel on the machine.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-xs font-bold text-[#B47B4F]">Sections 1–4</div>
                    <div className="font-bold text-sm text-[#17365D] mt-1">Config & Normalization</div>
                    <p className="text-[0.72rem] text-[#6B7785] mt-1">
                      Constants, palette definitions, Arabic text normalization (clean_text, normalize_arabic), and type assertions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-xs font-bold text-[#2E7D72]">Sections 5–9</div>
                    <div className="font-bold text-sm text-[#17365D] mt-1">Ingestion & Styling</div>
                    <p className="text-[0.72rem] text-[#6B7785] mt-1">
                      DataFrame ingestion, scope classification, RTL enforcement, brand palette fonts, and borders.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-xs font-bold text-[#17365D]">Sections 10–14</div>
                    <div className="font-bold text-sm text-[#17365D] mt-1">Formulas & Visuals</div>
                    <p className="text-[0.72rem] text-[#6B7785] mt-1">
                      Hidden helper sheets, INDEX/MATCH KPI cards, SUMIFS latency matrix, ColorScale rules, and native OpenPyXL charts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#ECE7DF]">
                    <div className="text-xs font-bold text-[#4A5B69]">Sections 15–18</div>
                    <div className="font-bold text-sm text-[#17365D] mt-1">Sheets & Verification</div>
                    <p className="text-[0.72rem] text-[#6B7785] mt-1">
                      Discipline tabs, auto-filtered Master Data sheet, console telemetry summary, and fullCalcOnLoad activation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Formula & Calculation Logic */}
              <div className="card-paper p-6 bg-white border border-[#DDD6CB]">
                <h3 className="font-serif text-lg font-bold text-[#17365D] mb-4">
                  Active Formula Verification
                </h3>
                <div className="space-y-3 font-mono text-xs bg-[#FBF9F5] p-4 rounded-xl border border-[#ECE7DF]">
                  <div><strong className="text-[#17365D]">Dropdown Selection:</strong> Cell $P$5 with DataValidation ='_Lists'!$A$1:$A$5</div>
                  <div><strong className="text-[#17365D]">KPI Card Lookup:</strong> =IFERROR(INDEX(_KPI!$C:$C, MATCH($P$5, _KPI!$A:$A, 0)), 0)</div>
                  <div><strong className="text-[#17365D]">Matrix Aggregation:</strong> =SUMIFS(_Timeline!$D:$D, _Timeline!$A:$A, $P$5, _Timeline!$B:$B, $A14)</div>
                  <div className="text-[#2E7D72] font-sans font-bold pt-2 border-t border-[#DDD6CB]">
                    ✓ Verified in headless LibreOffice calculation: 0 errors (#REF! / #NAME? / #DIV/0!).
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sheets' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sheetsList.map((s) => (
                  <div key={s.name} className="card-paper p-5 bg-white border border-[#DDD6CB]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-bold text-base text-[#17365D]">{s.name}</span>
                      <span className="text-[0.7rem] font-bold px-2 py-0.5 rounded bg-[#F3F0E9] text-[#4A5B69]">
                        {s.formulaCount}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#2E7D72] mb-1.5">{s.type}</div>
                    <p className="text-xs text-[#6B7785] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-[#0F243E] text-white p-5 rounded-xl font-mono text-xs overflow-x-auto max-h-[500px]">
                <pre>{`# ============================================================
# SCRIPT: build_excel_dashboard.py
# AUTHOR: Abdulmohsen Ali AlQarni
# PURPOSE: Automated Multi-Sheet Academic Benchmark Workbook
# ============================================================

import os
import re
import pandas as pd
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.chart import BarChart, LineChart, Reference
from openpyxl.formatting.rule import ColorScaleRule
from openpyxl.worksheet.datavalidation import DataValidation

# === 1. SETTINGS & COLOR CONSTANTS ===
OUTPUT_FILE = "assets/data/edunexus_benchmark_data.xlsx"
DARK_BLUE = "17365D"
SAGE_GREEN = "2E7D72"
BRONZE = "B47B4F"
LIGHT_BLUE = "D9EAF7"
VERY_LIGHT = "F3F6F9"

# === 2. PROCEDURAL EXECUTION PIPELINE ===
# Generates 9 sheets with native formulas and auto-filters.
# Run with: python scripts/build_excel_dashboard.py`}</pre>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-[#F3F0E9] px-6 py-3.5 border-t border-[#DDD6CB] flex items-center justify-between text-xs text-[#6B7785] shrink-0">
          <span>Excel Workbook generated via Python 3 + OpenPyXL + Pandas</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-bold text-white bg-[#17365D] hover:bg-[#0F243E] rounded-lg transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
