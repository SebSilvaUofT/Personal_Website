'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
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
  const pageEase = [0.22, 1, 0.36, 1] as const
  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative min-h-screen bg-background p-4 pb-8 md:p-8 md:pb-0 lg:p-12 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0], scale: [1, 1.12, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: pageEase }}
      >
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-start"
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: pageEase, staggerChildren: 0.12 }}
        >
          <motion.div className="self-start" variants={fadeUp}>
            <ProfileSidebar data={profileData} />
          </motion.div>

          {/* Main Content */}
          <motion.main className="flex-1" variants={fadeUp}>
            {/* Navigation */}
            <nav className="flex gap-6 mb-8 border-b border-border">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`pb-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                    activeSection === section
                      ? 'text-foreground border-foreground'
                      : 'text-muted-foreground hover:text-foreground border-transparent'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section}
                </motion.button>
              ))}
            </nav>

            <div>
              <AnimatePresence mode="wait">
                {activeSection === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: pageEase }}
                  >
                    <AboutSection data={aboutData} />
                  </motion.div>
                )}
                {activeSection === 'resume' && (
                  <motion.div
                    key="resume"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: pageEase }}
                  >
                    <ResumeSection data={resumeData} />
                  </motion.div>
                )}
                {activeSection === 'projects' && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: pageEase }}
                  >
                    <ProjectsSection data={projectsData} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.main>
        </motion.div>
      </motion.div>
    </div>
  )
}
