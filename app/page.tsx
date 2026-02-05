'use client'

import { useState } from 'react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { ProjectsSection } from '@/components/projects-section'
import {
  profileData,
  aboutData,
  resumeData,
  projectsData,
} from '@/lib/portfolio-data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = ['about', 'resume', 'projects']

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1">
            {/* Navigation */}
            <nav className="flex gap-6 mb-8 border-b border-border">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`pb-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                    activeSection === section
                      ? 'text-foreground border-foreground'
                      : 'text-muted-foreground hover:text-foreground border-transparent'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div>
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'projects' && <ProjectsSection data={projectsData} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
