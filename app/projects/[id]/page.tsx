import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Building } from 'lucide-react'
import { projectsData } from '@/lib/portfolio-data'
import { notFound } from 'next/navigation'

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectsData.projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background p-4 pb-8 md:p-8 md:pb-0 lg:p-12">
      <div className="mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-xs text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.details && (
              <div className="space-y-2 text-sm text-muted-foreground border-l-2 border-border pl-4">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>{project.details.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.details.event} - {project.details.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.details.location}</span>
                </div>
              </div>
            )}
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            
            {project.fullDescription && (
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}
