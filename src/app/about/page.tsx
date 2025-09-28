import type { Metadata } from 'next'
import { AboutUsSection } from '@/components/about/about-us-section'

export const metadata: Metadata = {
  title: 'About - Muhammad Aslan | Web Developer & WordPress Specialist',
  description: 'Learn about Muhammad Aslan, a passionate web developer specializing in modern web applications, WordPress development, and digital solutions.',
  keywords: ['about', 'web developer', 'wordpress specialist', 'biography', 'experience'],
}

export default function AboutPage() {
  return (
    <div>
      <AboutUsSection />
    </div>
  )
}