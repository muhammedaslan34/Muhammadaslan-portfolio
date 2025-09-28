import { Hero } from '@/components/hero'
import { WhyChooseUs } from '@/components/why-choose-us'
import { FeaturedServices } from '@/components/featured-services'
import { FeaturedProjects } from '@/components/featured-projects'
import { Testimonials } from '@/components/testimonials'
import { BlogHighlights } from '@/components/blog-highlights'
import { FinalCTA } from '@/components/final-cta'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyChooseUs />
      <FeaturedServices />
      <FeaturedProjects />
      <Testimonials />
      <BlogHighlights />
      <FinalCTA />
    </div>
  )
}