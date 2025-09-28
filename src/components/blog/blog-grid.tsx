import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const posts = [
  {
    id: 1,
    title: "Building Modern WordPress Themes with Block Editor",
    excerpt: "Learn how to create custom WordPress themes that leverage the full power of the Gutenberg block editor for maximum flexibility.",
    content: "A comprehensive guide to modern WordPress theme development...",
    date: "2024-01-15",
    readingTime: "8 min read",
    category: "WordPress",
    tags: ["WordPress", "Gutenberg", "PHP", "JavaScript"],
    slug: "modern-wordpress-themes-block-editor",
    featured: true,
    author: "Muhammad Aslan"
  },
  {
    id: 2,
    title: "Next.js 14 App Router: Complete Migration Guide",
    excerpt: "Everything you need to know about migrating to Next.js 14's App Router, including best practices and common pitfalls.",
    content: "The App Router in Next.js 14 brings significant improvements...",
    date: "2024-01-10",
    readingTime: "12 min read",
    category: "React & Next.js",
    tags: ["Next.js", "React", "TypeScript", "App Router"],
    slug: "nextjs-14-app-router-migration-guide",
    featured: true,
    author: "Muhammad Aslan"
  },
  {
    id: 3,
    title: "Optimizing WordPress Performance in 2024",
    excerpt: "Proven strategies to make your WordPress site lightning fast with modern optimization techniques and tools.",
    content: "WordPress performance optimization has evolved significantly...",
    date: "2024-01-05",
    readingTime: "10 min read",
    category: "Performance",
    tags: ["WordPress", "Performance", "Optimization", "Core Web Vitals"],
    slug: "wordpress-performance-optimization-2024",
    featured: false,
    author: "Muhammad Aslan"
  },
  {
    id: 4,
    title: "Advanced TypeScript Patterns for React",
    excerpt: "Explore advanced TypeScript patterns that will make your React applications more type-safe and maintainable.",
    content: "TypeScript has become essential for modern React development...",
    date: "2023-12-28",
    readingTime: "15 min read",
    category: "Web Development",
    tags: ["TypeScript", "React", "Patterns", "Best Practices"],
    slug: "advanced-typescript-patterns-react",
    featured: false,
    author: "Muhammad Aslan"
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "A practical guide to choosing between CSS Grid and Flexbox for different layout scenarios in modern web design.",
    content: "Understanding when to use CSS Grid versus Flexbox...",
    date: "2023-12-20",
    readingTime: "6 min read",
    category: "Web Development",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    slug: "css-grid-vs-flexbox-guide",
    featured: false,
    author: "Muhammad Aslan"
  },
  {
    id: 6,
    title: "Building Accessible React Components",
    excerpt: "Learn how to create React components that are accessible to all users, including those using assistive technologies.",
    content: "Accessibility should be a fundamental consideration...",
    date: "2023-12-15",
    readingTime: "9 min read",
    category: "Web Development",
    tags: ["React", "Accessibility", "A11y", "WCAG"],
    slug: "building-accessible-react-components",
    featured: true,
    author: "Muhammad Aslan"
  }
]

export function BlogGrid() {
  return (
    <section className="py-24">
      <div className="container">
        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="heading-md mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.filter(post => post.featured).slice(0, 2).map((post, index) => (
              <Card key={post.id} className="glass-card hover-lift group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <span className="body-sm text-muted-foreground">Featured Article</span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs rounded-full">
                    Featured
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-accent font-medium">{post.category}</span>
                    <div className="flex items-center text-xs text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readingTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}` as any}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="body-sm">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}` as any}
                      className="text-accent hover:underline font-medium text-sm flex items-center"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="heading-md mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={post.id} className="glass-card hover-lift group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-accent font-medium">{post.category}</span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readingTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}` as any}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="body-sm">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}` as any}
                    className="text-accent hover:underline font-medium text-sm flex items-center"
                  >
                    Read article
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="glass-card hover-lift">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}