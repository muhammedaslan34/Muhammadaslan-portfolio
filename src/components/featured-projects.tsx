'use client'

import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

const Gallery4 = dynamic(() => import("@/components/blocks/gallery4").then(mod => ({ default: mod.Gallery4 })), {
  ssr: false,
  loading: () => (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="heading-lg">Featured Projects</h2>
            <p className="max-w-lg body-lg text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </div>
    </section>
  )
})

// Transform project data to match Gallery4 format
const featuredProjects = [
  {
    id: "dtmasters",
    title: "DTMasters - Driving School Platform",
    description: "Professional driving school website with course management, instructor profiles, and online booking system built with WordPress and custom PHP development.",
    href: "/projects/dtmasters",
    image: "/images/projects/dtmasters.jpg",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard built with Next.js and TypeScript.",
    href: "/projects/ecommerce-platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "corporate",
    title: "Corporate Website",
    description: "Professional corporate website with custom WordPress theme and advanced SEO optimization, featuring modern design and performance optimization.",
    href: "/projects/corporate-website",
    image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "saas",
    title: "SaaS Analytics Dashboard",
    description: "Analytics dashboard with real-time data visualization and user management system built with React, D3.js, and modern web technologies.",
    href: "/projects/saas-dashboard",
    image: "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "portfolio",
    title: "Creative Portfolio Website",
    description: "Creative portfolio website for a designer with smooth animations and interactive elements, showcasing modern web development techniques.",
    href: "/projects/portfolio-website",
    image: "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
]

export function FeaturedProjects() {
  return (
    <>
      <Gallery4
        title="Featured Projects"
        description="A showcase of recent work demonstrating technical expertise and creative solutions across various industries and technologies."
        items={featuredProjects}
      />
      <div className="container text-center pb-16">
        <Button asChild className="hover-lift">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </>
  )
}