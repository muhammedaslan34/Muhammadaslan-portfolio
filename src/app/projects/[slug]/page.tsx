import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Mock project data - in a real app, this would come from a database or CMS
const projects = [
  {
    id: 1,
    slug: "dtmasters",
    title: "DTMasters",
    description: "Professional driving school website with course management, instructor profiles, and online booking system.",
    fullDescription: "DTMasters is a comprehensive driving school management platform built with WordPress and custom PHP development. The website features a complete course management system, detailed instructor profiles, and an integrated online booking system that allows students to schedule lessons directly through the website.\n\nKey features include:\n• Custom WordPress theme development\n• Online booking and scheduling system\n• Instructor management dashboard\n• Course catalog with detailed descriptions\n• Student progress tracking\n• Payment integration\n• Mobile-responsive design\n• SEO optimization",
    image: "/images/projects/dtmasters.jpg",
    category: "WordPress Sites",
    tags: ["WordPress", "PHP", "Custom Theme", "Booking System", "MySQL", "JavaScript"],
    liveUrl: "https://dtmasters.net",
    date: "2024-02-01",
    featured: true,
    technologies: [
      { name: "WordPress", description: "Content management system" },
      { name: "PHP", description: "Server-side scripting" },
      { name: "MySQL", description: "Database management" },
      { name: "JavaScript", description: "Interactive features" },
      { name: "CSS3", description: "Styling and animations" },
      { name: "HTML5", description: "Semantic markup" }
    ],
    challenges: [
      "Implementing a complex booking system with availability checking",
      "Creating a user-friendly instructor dashboard",
      "Ensuring mobile responsiveness across all devices",
      "Optimizing performance for fast loading times"
    ],
    results: [
      "50% increase in online bookings",
      "Improved user experience and engagement",
      "Streamlined instructor management",
      "Better SEO rankings and visibility"
    ],
    screenshots: [
      "/images/projects/dtmasters.jpg",
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080"
    ]
  },
  {
    id: 2,
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    fullDescription: "A comprehensive e-commerce platform built with Next.js and TypeScript, featuring advanced product filtering, secure payment processing through Stripe, and a powerful admin dashboard for inventory management.\n\nThe platform includes:\n• Advanced product search and filtering\n• Secure payment processing with Stripe\n• Real-time inventory management\n• Order tracking and management\n• Customer account management\n• Analytics and reporting dashboard\n• Mobile-first responsive design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "E-commerce",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    date: "2024-01-15",
    featured: true,
    technologies: [
      { name: "Next.js", description: "React framework for production" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Stripe", description: "Payment processing" },
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" }
    ],
    challenges: [
      "Implementing secure payment processing",
      "Building real-time inventory management",
      "Creating an intuitive admin interface",
      "Ensuring scalability for high traffic"
    ],
    results: [
      "Increased conversion rates by 35%",
      "Reduced cart abandonment by 25%",
      "Improved admin efficiency by 60%",
      "Enhanced mobile user experience"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080"
    ]
  }
]

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found - Muhammad Aslan',
      description: 'The requested project could not be found.'
    }
  }

  return {
    title: `${project.title} - Muhammad Aslan Portfolio`,
    description: project.description,
    keywords: [...project.tags, 'web development', 'portfolio', 'case study'],
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-main">
      <div className="container py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="hover-lift">
            <Link href="/projects" className="flex items-center space-x-2">
              <ArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm text-accent font-medium">{project.category}</span>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(project.date).toLocaleDateString()}
            </div>
            {project.featured && (
              <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="heading-lg mb-4">{project.title}</h1>
          <p className="body-lg text-muted-foreground mb-6">{project.description}</p>
          
          <div className="flex space-x-4">
            <Button asChild className="hover-lift">
              <Link href={project.liveUrl as any}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Site
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Screenshots Row */}
        <div className="mb-12">
          <h3 className="heading-sm mb-6">Project Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots?.map((screenshot, index) => (
              <Card key={index} className="overflow-hidden glass-card hover-lift group">
                <div className="aspect-video relative">
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {project.fullDescription?.split('\n').map((paragraph, index) => (
                    <p key={index} className="body-md mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technologies Used */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.technologies?.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-foreground">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Challenges & Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.challenges?.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                      <p className="body-sm text-muted-foreground">{challenge}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Tags */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.results?.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <p className="body-sm text-muted-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full hover-lift">
                  <Link href={project.liveUrl as any}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}