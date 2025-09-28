import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Muhammad Aslan | Web Development Portfolio',
  description: 'Explore my portfolio of web development projects including React applications, WordPress sites, and e-commerce solutions.',
  keywords: ['portfolio', 'web development projects', 'react projects', 'wordpress sites', 'case studies'],
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}