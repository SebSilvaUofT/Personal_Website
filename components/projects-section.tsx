'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { projectsData } from '@/lib/portfolio-data'

interface ProjectsSectionProps {
  data?: typeof projectsData
}

export function ProjectsSection({ data = projectsData }: ProjectsSectionProps) {
  const itemEase = [0.22, 1, 0.36, 1] as const
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="border-l-2 border-border pl-4 py-2 hover:border-accent transition-colors group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: itemEase, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <Link href={`/projects/${project.id}`} className="block">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-accent transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
