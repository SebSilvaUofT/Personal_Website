'use client'

import { motion } from 'motion/react'
import { aboutData } from '@/lib/portfolio-data'

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  const itemEase = [0.22, 1, 0.36, 1] as const
  return (
    <div className="space-y-10">
      {/* Bio */}
      <div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: itemEase, delay: index * 0.06 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">What I Do</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {data.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-border pl-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: itemEase, delay: 0.1 + index * 0.05 }}
              whileHover={{ x: 4 }}
            >
              <h4 className="font-medium text-foreground mb-1">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
