import { Code2, Palette, ShoppingCart, Smartphone, Database, Zap, Globe, Wrench, Search, Shield, Monitor, Settings, Users, BarChart3, Cloud, Lock } from "lucide-react"
import { BentoGrid } from "@/components/ui/bento-grid"

const servicesItems = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites built with React, Next.js, and TypeScript for optimal performance.',
    icon: <Code2 className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'WordPress Development',
    description: 'Custom themes, plugins, and complete WordPress solutions tailored to your needs.',
    icon: <Wrench className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores with secure payment processing and inventory management.',
    icon: <ShoppingCart className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Mobile-First Design',
    description: 'Responsive designs that work perfectly on all devices and screen sizes.',
    icon: <Smartphone className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your website with advanced optimization techniques and best practices.',
    icon: <Zap className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions with APIs, databases, and cloud integrations.',
    icon: <Database className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website visibility and ranking with comprehensive SEO strategies and technical optimization.',
    icon: <Search className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Security Implementation',
    description: 'Protect your website with advanced security measures, SSL certificates, and vulnerability assessments.',
    icon: <Shield className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences with modern design principles and user research.',
    icon: <Palette className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your website updated, secure, and performing optimally with regular maintenance and support.',
    icon: <Settings className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Consulting Services',
    description: 'Get expert advice on technology choices, architecture decisions, and digital strategy planning.',
    icon: <Users className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Track performance with detailed analytics, custom dashboards, and actionable insights.',
    icon: <BarChart3 className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Cloud Hosting',
    description: 'Deploy and manage your applications on scalable cloud platforms with 99.9% uptime guarantee.',
    icon: <Cloud className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'API Development',
    description: 'Build robust RESTful APIs and GraphQL endpoints for seamless data integration and third-party services.',
    icon: <Lock className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Progressive Web Apps',
    description: 'Create fast, reliable, and engaging web applications that work like native mobile apps.',
    icon: <Monitor className="size-6" />,
    size: 'large' as const,
  },
]

export function ServicesBento() {
  return (
    <section className="py-24 bg-main">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg text-white">Services & Solutions</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services designed to bring your digital vision to life
          </p>
        </div>
        
        <BentoGrid items={servicesItems} />
      </div>
    </section>
  )
}