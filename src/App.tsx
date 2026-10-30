/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CurrentlyLearningSection } from './components/CurrentlyLearningSection';
import { CareerGoalSection } from './components/CareerGoalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070D] text-[#dfe2f1] selection:bg-[#3B82F6]/30 selection:text-white flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Home */}
        <HeroSection />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Technical Skills */}
        <SkillsSection />

        {/* 4. Projects */}
        <ProjectsSection />

        {/* 5. Currently Learning */}
        <CurrentlyLearningSection />

        {/* 6. Career Goal */}
        <CareerGoalSection />

        {/* 7. Contact / Connect */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
