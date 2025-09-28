import { Briefcase, Star } from "lucide-react"

export function ProjectsHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center glass-card px-4 py-2 text-sm">
            <Briefcase className="mr-2 h-4 w-4 text-accent" />
            Portfolio Showcase
          </div>

          <h1 className="heading-xl">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h1>

          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of web development projects showcasing modern technologies, 
            creative solutions, and exceptional user experiences.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-accent" />
              <span>50+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-accent" />
              <span>Multiple Industries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-accent" />
              <span>Modern Tech Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}