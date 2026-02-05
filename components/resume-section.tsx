import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-10">
      {/* Education */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Education</h3>
        <div className="space-y-6">
          {data.education.map((item, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-medium text-foreground flex-1 min-w-0">{item.title}</h4>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                </div>
                <p className="text-sm text-accent">{item.institution}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Experience</h3>
        <div className="space-y-6">
          {data.experience.map((item, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-medium text-foreground flex-1 min-w-0">{item.title}</h4>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                </div>
                <p className="text-sm text-accent">{item.company}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-sm text-foreground border border-border"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Awards</h3>
        <div className="space-y-4">
          {data.awards.map((award, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">{award.institution}</p>
                </div>
                <span className="text-sm text-accent whitespace-nowrap">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
