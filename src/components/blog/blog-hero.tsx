import { BookOpen, TrendingUp } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center glass-card px-4 py-2 text-sm">
            <BookOpen className="mr-2 h-4 w-4 text-accent" />
            Knowledge Sharing
          </div>

          <h1 className="heading-xl">
            Web Development{" "}
            <span className="gradient-text">Insights</span>
          </h1>

          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Tutorials, insights, and thoughts on modern web development, WordPress, 
            React, and the latest technologies shaping the web.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span>Practical Tutorials</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span>Industry Insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}