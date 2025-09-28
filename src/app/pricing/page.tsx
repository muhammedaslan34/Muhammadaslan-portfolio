import type { Metadata } from 'next'
import { PricingHero } from '@/components/pricing/pricing-hero'
import { PricingPlans } from '@/components/pricing/pricing-plans'
import { PricingFAQ } from '@/components/pricing/pricing-faq'
import { PricingCTA } from '@/components/pricing/pricing-cta'

export const metadata: Metadata = {
  title: 'Pricing - Muhammad Aslan | Web Development Services',
  description: 'Transparent pricing for web development services. Choose from Starter, Professional, or Premium packages for your project needs.',
  keywords: ['web development pricing', 'website cost', 'development packages', 'project pricing'],
}

export default function PricingPage() {
  return (
    <div className="flex flex-col bg-main min-h-screen">
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
    </div>
  )
}