import { aboutData } from '@/lib/portfolio-data'

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-10">
      {/* Bio */}
      <div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">What I Do</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {data.highlights.map((highlight, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <h4 className="font-medium text-foreground mb-1">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
