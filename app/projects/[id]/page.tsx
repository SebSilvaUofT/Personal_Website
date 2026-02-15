import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Building } from 'lucide-react'
import { projectsData } from '@/lib/portfolio-data'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

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
              <ReactMarkdown>{project.title}</ReactMarkdown>
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
                  <span>
                    {(project.details as any).event ? `${(project.details as any).event} - ` : ''}
                    {project.details.date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.details.location}</span>
                </div>
              </div>
            )}
          </header>

          {project.images && project.images.length === 2 ? (
            <div className="flex flex-col md:flex-row gap-4 mb-8 h-auto md:h-80">
              {project.images.map((img, idx) => (
                <div key={idx} className="relative rounded-2xl overflow-hidden border border-border bg-card w-full md:w-auto h-64 md:h-full shrink-0">
                  <img
                    src={img}
                    alt={`${project.title} - ${idx + 1}`}
                    className="w-full md:w-auto h-full object-contain md:object-cover"
                  />
                </div>
              ))}
            </div>
          ) : project.images && project.images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.images.map((img, idx) => {
                const isWide = project.images!.length === 3 && idx === 0
                return (
                  <div
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden border border-border bg-card ${isWide ? 'md:col-span-2' : 'h-64 md:h-80'
                      }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} - ${idx + 1}`}
                      className={`w-full object-cover ${isWide ? 'h-auto' : 'h-full'}`}
                    />
                  </div>
                )
              })}
            </div>
          ) : project.image ? (
            <div className="mb-8 rounded-2xl overflow-hidden border border-border bg-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : null}

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="text-foreground leading-relaxed mb-6">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>

            {project.fullDescription && (
              <div className="text-muted-foreground leading-relaxed">
                <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
              </div>
            )}
          </div>
        </article>
      </div >
    </div >
  )
}
