import { Globe, Smartphone, ShoppingCart, Wrench } from "lucide-react"
import { BentoGrid } from "@/components/ui/bento-grid"

const featuredServices = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
    icon: <Globe className="size-6" />,
    size: 'large' as const,
  },
  {
    title: "WordPress Development",
    description: "Custom themes, plugins, and complete WordPress solutions tailored to your business needs.",
    icon: <Wrench className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with WooCommerce, Shopify, or custom e-commerce platforms.",
    icon: <ShoppingCart className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first designs that look and work perfectly on all devices and screen sizes.",
    icon: <Smartphone className="size-6" />,
    size: 'small' as const,
  },
]

export function FeaturedServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="heading-lg">Services</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </div>

        <BentoGrid items={featuredServices} className="px-0" />
      </div>
    </section>
  )
}