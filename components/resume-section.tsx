'use client'

import { motion } from 'motion/react'
import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  const itemEase = [0.22, 1, 0.36, 1] as const
  return (
    <div className="space-y-10">
      {/* Education */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Education</h3>
        <div className="space-y-6">
          {data.education.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-border pl-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: itemEase, delay: index * 0.06 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-medium text-foreground flex-1 min-w-0">{item.title}</h4>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                </div>
                <p className="text-sm text-accent">{item.institution}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Experience</h3>
        <div className="space-y-6">
          {data.experience.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-border pl-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: itemEase, delay: 0.1 + index * 0.06 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-medium text-foreground flex-1 min-w-0">{item.title}</h4>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                </div>
                <p className="text-sm text-accent">{item.company}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-3 py-1.5 text-sm text-foreground border border-border"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: itemEase, delay: 0.05 + index * 0.03 }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Awards</h3>
        <div className="space-y-4">
          {data.awards.map((award, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-border pl-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: itemEase, delay: 0.12 + index * 0.05 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">{award.institution}</p>
                </div>
                <span className="text-sm text-accent whitespace-nowrap">{award.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
