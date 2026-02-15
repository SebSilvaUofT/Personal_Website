'use client'

import { Mail, MapPin, Linkedin } from 'lucide-react'
import { motion } from 'motion/react'
import { profileData } from '@/lib/portfolio-data'

interface ProfileSidebarProps {
  data?: typeof profileData
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  const itemEase = [0.22, 1, 0.36, 1] as const
  return (
    <aside className="w-full lg:w-72 lg:sticky lg:top-8 h-fit">
      {/* Profile Image */}
      <div className="flex flex-col items-start lg:items-center mb-6">
        <motion.div
          className="w-44 h-44 mb-4 rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: itemEase }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src={data.avatar || "/placeholder.svg"}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="text-xl font-semibold text-foreground mb-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: itemEase, delay: 0.1 }}
        >
          {data.name}
        </motion.h1>
        <motion.p
          className="text-sm text-muted-foreground text-center lg:text-left"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: itemEase, delay: 0.18 }}
        >
          {data.title}
        </motion.p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3">
        <motion.a
          href={`mailto:${data.email}`}
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: itemEase, delay: 0.24 }}
          whileHover={{ x: 4 }}
        >
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground group-hover:text-accent transition-colors">
            {data.email}
          </span>
        </motion.a>

        <motion.a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: itemEase, delay: 0.3 }}
          whileHover={{ x: 4 }}
        >
          <Linkedin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground group-hover:text-accent transition-colors">
            LinkedIn
          </span>
        </motion.a>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: itemEase, delay: 0.36 }}
        >
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">{data.location}</span>
        </motion.div>
      </div>
    </aside>
  )
}
