"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What's included in the project price?",
    answer: "Each package includes design, development, testing, deployment, and initial support. You'll get a fully functional website optimized for performance and SEO."
  },
  {
    question: "How long does a typical project take?",
    answer: "Starter projects typically take 1-2 weeks, Professional projects 2-4 weeks, and Premium projects 4-8 weeks. Timeline depends on complexity and feedback cycles."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes! All packages include initial support (30-180 days depending on package). We also offer ongoing maintenance plans for long-term support and updates."
  },
  {
    question: "Can I make changes during development?",
    answer: "Absolutely! We encourage feedback throughout the process. Minor changes are included, while major scope changes may affect timeline and cost."
  },
  {
    question: "What if I'm not satisfied with the result?",
    answer: "We offer a 30-day money-back guarantee. We'll work with you to ensure you're completely satisfied with the final product."
  },
  {
    question: "Do you work with existing websites?",
    answer: "Yes! We can redesign, optimize, or add features to existing websites. Contact us to discuss your specific requirements."
  }
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our pricing and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card hover-lift">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="body-sm text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}