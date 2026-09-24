# Abdulmohsen Ali AlQarni — Data & Cloud Engineering Portfolio

A production-grade, empirical data & cloud engineering portfolio and interactive systems evaluation suite for **Abdulmohsen Ali AlQarni** (عبدالمحسن علي القرني), built strictly following the **Razan Altowairqi** architectural and visual design system.

---

## 🚀 Live Preview & Architecture

- **Web Portfolio & Evaluation Console**: Hosted directly on Vite dev server / GitHub Pages.
- **Interactive Dashboard**: Bilingual (EN / AR) 3-stage evaluation state machine (Plan → Build → Evaluate) with real-time heuristic ranking simulation, component latency waterfalls, and 50-query benchmark ledger.
- **Spreadsheet Automation Engine**: Procedural 18-section Python script (`scripts/build_excel_dashboard.py`) generating self-calculating multi-sheet Excel reports with automated lookups and native charts.
- **Privacy & Verification Compliance**: 100% compliant with privacy guardrails (zero leaks of Saudi National ID or personal phone numbers, audited via `scripts/verify_parity.py`).

---

## 📂 Project Structure

```text
├── index.html                      ← HTML5 Entry Point with Playfair Display & Manrope Fonts
├── metadata.json                   ← App metadata with server-side capabilities
├── data/
│   └── portfolio_data.json         ← Canonical single source of truth for all metrics
├── scripts/
│   ├── build_excel_dashboard.py    ← 18-Section OpenPyXL automated workbook generator
│   └── verify_parity.py            ← Automated privacy and metric parity auditor
├── public/
│   └── scripts/
│       └── build_excel_dashboard.py← Downloadable Python automation script
└── src/
    ├── App.tsx                     ← Root application controller with hash-modal routing
    ├── index.css                   ← Design system tokens (Navy, Sage, Bronze, Paper, Ivory)
    ├── data/
    │   └── portfolioData.ts        ← Typed TypeScript canonical data layer
    └── components/
        ├── Navbar.tsx              ← Top Bar Contract (Monogram AQ + Nav + Actions)
        ├── Hero.tsx                ← Hero section with verified 4-tile benchmark bento
        ├── About.tsx               ← Professional summary, value pillars & Bisha University
        ├── ExperienceSection.tsx   ← SPSC 6-month enterprise full-stack internship (3 units)
        ├── ProjectsSection.tsx     ← 3 featured case studies (EduNexus, Evaluation, Excel)
        ├── SkillsSection.tsx       ← Evidence-calibrated competency matrix
        ├── CertificationsSection.tsx← Alibaba Cloud, Oracle SQL, and SDAIA accreditations
        ├── Footer.tsx              ← 4-column footer with mailto and LinkedIn contact
        ├── InteractiveDashboardModal.tsx ← Bilingual 3-stage evaluation telemetry console
        └── ExcelPreviewModal.tsx   ← Automated workbook inspector & script exporter
```

---

## 📊 Grounded Metric Parity

All metrics are verified from primary source documents:
- **Search Relevance Accuracy**: **87.0%** (exceeds 80% baseline target).
- **Average Query Latency**: **1.65s** (sub-2.0s benchmark target).
- **System Usability Score (SUS)**: **81.5** ("Excellent" usability across 20 university students).
- **Task Time Reduction**: **40%** faster research completion vs. Google.
- **Enterprise Internship**: **6 Months** full-time at the Saudi Patient Safety Center (SPSC).
- **Certifications**: Alibaba Cloud Computing Engineer, Oracle Database SQL Specialist (60 hrs), SDAIA SAMAI AI Fundamentals & Advanced AI.

---

## 🔒 Privacy & Verification Audit

Run the automated parity and privacy audit:
```bash
python3 scripts/verify_parity.py
```

Output:
```text
[PARITY & PRIVACY AUDIT] Scanning repository files...
Scanned 22 code and asset files.
✓ Zero leaks of National ID or personal phone numbers detected.
✓ ALL PARITY & PRIVACY AUDITS PASSED CLEANLY.
```

---

## 📦 Deployment to GitHub Pages

1. Initialize repository and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release for Abdulmohsen Ali AlQarni"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In GitHub repository settings, navigate to **Pages** and select the `main` branch root folder.
