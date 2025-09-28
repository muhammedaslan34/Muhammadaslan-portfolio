import { Code2, Palette, ShoppingCart, Smartphone, Database, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Modern, responsive websites built with React, Next.js, and TypeScript for optimal performance and user experience.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
    timeline: "2-4 weeks",
    price: "From $2,500"
  },
  {
    icon: Palette,
    title: "WordPress Development",
    description: "Custom themes, plugins, and complete WordPress solutions tailored to your business requirements.",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "Performance Optimization"],
    timeline: "1-3 weeks",
    price: "From $1,500"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing, inventory management, and analytics.",
    features: ["WooCommerce", "Shopify", "Payment Integration", "Inventory Management"],
    timeline: "3-6 weeks",
    price: "From $3,500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that look and perform perfectly across all devices and screen sizes.",
    features: ["Mobile Optimization", "Touch-Friendly UI", "Fast Loading", "Cross-Browser"],
    timeline: "1-2 weeks",
    price: "From $1,000"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with APIs, databases, and cloud integrations for scalable applications.",
    features: ["REST APIs", "Database Design", "Cloud Integration", "Security"],
    timeline: "2-5 weeks",
    price: "From $2,000"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing website with advanced optimization techniques and modern best practices.",
    features: ["Speed Optimization", "Core Web Vitals", "Caching", "CDN Setup"],
    timeline: "1-2 weeks",
    price: "From $800"
  }
]

export function ServicesList() {
  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg">Services & Solutions</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services designed to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-lift group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-accent">{service.price}</div>
                    <div className="text-xs text-muted-foreground">{service.timeline}</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="body-sm">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}