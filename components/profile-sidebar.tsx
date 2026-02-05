import { Mail, MapPin, Linkedin } from 'lucide-react'
import { profileData } from '@/lib/portfolio-data'

interface ProfileSidebarProps {
  data?: typeof profileData
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  return (
    <aside className="w-full lg:w-72 lg:sticky lg:top-8 h-fit">
      {/* Profile Image */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-28 h-28 mb-4 rounded-full overflow-hidden">
          <img
            src={data.avatar || "/placeholder.svg"}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-xl font-semibold text-foreground mb-1">{data.name}</h1>
        <p className="text-sm text-muted-foreground">
          {data.title}
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3">
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-3 group"
        >
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground group-hover:text-accent transition-colors">
            {data.email}
          </span>
        </a>

        <a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <Linkedin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground group-hover:text-accent transition-colors">
            LinkedIn
          </span>
        </a>

        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">{data.location}</span>
        </div>
      </div>
    </aside>
  )
}
