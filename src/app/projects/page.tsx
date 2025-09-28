"use client"

import { useState } from 'react'
import type { Metadata } from 'next'
import { ProjectsHero } from '@/components/projects/projects-hero'
import { ProjectsFilter } from '@/components/projects/projects-filter'
import { ProjectsGrid } from '@/components/projects/projects-grid'

// Note: Since this is now a client component, metadata should be handled differently
// You might want to use next/head or move metadata to a parent server component

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([])

  return (
    <div className="flex flex-col bg-main min-h-screen">
      <ProjectsHero />
      <ProjectsFilter 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTechnologies={activeTechnologies}
        setActiveTechnologies={setActiveTechnologies}
      />
      <ProjectsGrid 
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        activeTechnologies={activeTechnologies}
      />
    </div>
  )
}