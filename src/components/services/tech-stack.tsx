const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "WordPress", category: "CMS" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Vercel", category: "Hosting" },
  { name: "AWS", category: "Cloud" },
  { name: "Figma", category: "Design" },
  { name: "Git", category: "Version Control" }
]

const categories = ["Frontend", "Framework", "Language", "Styling", "CMS", "Backend", "Database", "Hosting", "Cloud", "Design", "Version Control"]

export function TechStack() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-lg">Technology Stack</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Modern tools and technologies I use to build exceptional web solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass-card p-4 text-center hover-lift group"
            >
              <div className="text-sm font-semibold mb-1 group-hover:text-accent transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="body-sm text-muted-foreground">
            Always learning and adapting to the latest technologies to deliver cutting-edge solutions
          </p>
        </div>
      </div>
    </section>
  )
}