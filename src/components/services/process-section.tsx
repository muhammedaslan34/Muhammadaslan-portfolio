import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    description: "We start with understanding your goals, target audience, and project requirements through detailed consultation.",
    duration: "1-2 days"
  },
  {
    icon: Lightbulb,
    title: "Design & Strategy",
    description: "Creating wireframes, mockups, and technical architecture that aligns with your vision and business objectives.",
    duration: "3-5 days"
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Building your solution with clean, maintainable code while conducting thorough testing throughout the process.",
    duration: "1-4 weeks"
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploying your project to production and providing ongoing support to ensure optimal performance.",
    duration: "Ongoing"
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg">My Development Process</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures quality results and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform translate-x-4" />
              )}
              
              <div className="glass-card p-6 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-medium text-accent mb-2">{step.duration}</div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="body-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}