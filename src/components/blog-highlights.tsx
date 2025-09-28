import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const posts = [
  {
    title: "Building Modern WordPress Themes with Block Editor",
    excerpt: "Learn how to create custom WordPress themes that leverage the full power of the Gutenberg block editor.",
    date: "2024-01-15",
    readingTime: "5 min read",
    slug: "modern-wordpress-themes-block-editor",
  },
  {
    title: "Next.js 14 App Router: Complete Guide",
    excerpt: "Everything you need to know about the new App Router in Next.js 14 and how to migrate your existing projects.",
    date: "2024-01-10",
    readingTime: "8 min read",
    slug: "nextjs-14-app-router-guide",
  },
  {
    title: "Optimizing WordPress Performance in 2024",
    excerpt: "Proven strategies to make your WordPress site lightning fast with modern optimization techniques.",
    date: "2024-01-05",
    readingTime: "6 min read",
    slug: "wordpress-performance-optimization-2024",
  },
]

export function BlogHighlights() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="heading-lg">Latest from the Blog</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and WordPress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}` as any}>
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="body-sm mb-4">
                  {post.excerpt}
                </CardDescription>
                <Link
                  href={`/blog/${post.slug}` as any}
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}