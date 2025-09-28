"use client"

import { useState, useMemo } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ExternalLink, Calendar, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const PreviewModal = dynamic(() => import("@/components/preview/preview-modal").then(mod => ({ default: mod.PreviewModal })), {
  ssr: false
})

const projects = [
  {
    id: 1,
    slug: "dtmasters",
    title: "DTMasters",
    description: "Professional driving school website with course management, instructor profiles, and online booking system.",
    image: "/images/projects/dtmasters.jpg",
    category: "WordPress Sites",
    tags: ["WordPress", "PHP", "Custom Theme", "Booking System"],
    liveUrl: "https://dtmasters.net",
    githubUrl: "https://github.com",
    date: "2024-02-01",
    featured: true
  },
  {
    id: 2,
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: "/images/project-ecommerce.jpg",
    category: "E-commerce",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2024-01-15",
    featured: true
  },
  {
    id: 3,
    slug: "corporate-website",
    title: "Corporate Website",
    description: "Professional corporate website with custom WordPress theme and advanced SEO optimization.",
    image: "/images/project-corporate.jpg",
    category: "WordPress Sites",
    tags: ["WordPress", "PHP", "Custom Theme", "SEO"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2024-01-10",
    featured: true
  },
  {
    id: 4,
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and user management system.",
    image: "/images/project-saas.jpg",
    category: "Web Applications",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2024-01-05",
    featured: false
  },
  {
    id: 5,
    slug: "restaurant-landing",
    title: "Restaurant Landing Page",
    description: "Beautiful landing page for a restaurant with online reservation system and menu showcase.",
    image: "/images/project-restaurant.jpg",
    category: "Landing Pages",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2023-12-20",
    featured: false
  },
  {
    id: 6,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Creative portfolio website for a designer with smooth animations and interactive elements.",
    image: "/images/project-portfolio.jpg",
    category: "Web Applications",
    tags: ["React", "Three.js", "GSAP", "Netlify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2023-12-15",
    featured: true
  },
  {
    id: 7,
    slug: "blog-platform",
    title: "Blog Platform",
    description: "Custom blog platform with markdown support, comment system, and admin panel.",
    image: "/images/project-blog.jpg",
    category: "Web Applications",
    tags: ["Next.js", "MDX", "Prisma", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2023-12-01",
    featured: false
  }
]

interface ProjectsGridProps {
  activeCategory: string
  searchTerm: string
  activeTechnologies: string[]
}

export function ProjectsGrid({ activeCategory, searchTerm, activeTechnologies }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const handlePreview = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsPreviewOpen(true)
  }

  const handleClosePreview = () => {
    setIsPreviewOpen(false)
    setSelectedProject(null)
  }

  // Filter projects based on active filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Category filter
      const categoryMatch = activeCategory === "All Projects" || project.category === activeCategory

      // Search filter
      const searchMatch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      // Technology filter
      const technologyMatch = activeTechnologies.length === 0 ||
        activeTechnologies.some(tech => project.tags.includes(tech))

      return categoryMatch && searchMatch && technologyMatch
    })
  }, [activeCategory, searchTerm, activeTechnologies])

  return (
    <section className="py-24">
      <div className="container">
        {/* Results Summary */}
        <div className="mb-8">
          <p className="body-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
            {activeCategory !== "All Projects" && ` in ${activeCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
            {activeTechnologies.length > 0 && ` using ${activeTechnologies.join(", ")}`}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
            <Card key={project.id} className={`glass-card hover-lift group overflow-hidden ${
              project.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}>
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                {project.image && project.image.includes('dtmasters') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <span className="body-sm text-muted-foreground">Project Preview</span>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-2 py-1 bg-accent text-white text-xs rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-accent font-medium">{project.category}</span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="body-sm">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handlePreview(project)}
                    className="glass-card hover-lift"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline" asChild className="glass-card hover-lift">
                    <Link href={project.liveUrl as any}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="glass-card hover-lift">
                    <Link href={`/projects/${project.slug}` as any}>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Read More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        ) : (
          <div className="text-center py-16">
            <div className="space-y-4">
              <h3 className="heading-sm text-muted-foreground">No projects found</h3>
              <p className="body-sm text-muted-foreground">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <p className="body-sm text-muted-foreground mb-4">
              Want to see more projects or discuss a custom solution?
            </p>
            <Button asChild className="hover-lift">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        )}

        {/* Preview Modal */}
        {selectedProject && (
          <PreviewModal
            isOpen={isPreviewOpen}
            onClose={handleClosePreview}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  )
}