import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { Footer } from './components/Footer';
import { InteractiveDashboardModal } from './components/InteractiveDashboardModal';
import { ExcelPreviewModal } from './components/ExcelPreviewModal';

export default function App() {
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);
  const [isExcelOpen, setIsExcelOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check hash for direct modal activation
    if (window.location.hash === '#dashboard') {
      setIsDashboardOpen(true);
    } else if (window.location.hash === '#excel') {
      setIsExcelOpen(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#dashboard') {
        setIsDashboardOpen(true);
      } else if (window.location.hash === '#excel') {
        setIsExcelOpen(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F0E9] text-[#243746] selection:bg-[#17365D] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenExcel={() => setIsExcelOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenDashboard={() => setIsDashboardOpen(true)} />
        <About />
        <ExperienceSection />
        <ProjectsSection
          onOpenDashboard={() => setIsDashboardOpen(true)}
          onOpenExcel={() => setIsExcelOpen(true)}
        />
        <SkillsSection />
        <CertificationsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenExcel={() => setIsExcelOpen(true)}
      />

      {/* Interactive Modals */}
      <InteractiveDashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />

      <ExcelPreviewModal
        isOpen={isExcelOpen}
        onClose={() => setIsExcelOpen(false)}
      />
    </div>
  );
}
