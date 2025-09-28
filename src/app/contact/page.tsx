import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: 'Contact - Muhammad Aslan | Get Your Project Started',
  description: 'Ready to start your web development project? Get in touch for a free consultation and project estimate.',
  keywords: ['contact', 'web development consultation', 'project estimate', 'get started'],
}

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-main min-h-screen">
      <ContactHero />
      <div className="py-24 bg-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}