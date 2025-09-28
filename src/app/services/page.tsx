import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesBento } from '@/components/services/services-bento'
import { ProcessSection } from '@/components/services/process-section'
import { TechStack } from '@/components/services/tech-stack'
import { ServicesCTA } from '@/components/services/services-cta'

export const metadata: Metadata = {
  title: 'Services - Muhammad Aslan | Web Development & WordPress Solutions',
  description: 'Professional web development services including custom WordPress themes, React applications, e-commerce solutions, and modern web technologies.',
  keywords: ['web development', 'wordpress development', 'react development', 'nextjs', 'e-commerce'],
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-main min-h-screen">
      <ServicesHero />
      <ServicesBento />
      <ProcessSection />
      <TechStack />
      <ServicesCTA />
    </div>
  )
}