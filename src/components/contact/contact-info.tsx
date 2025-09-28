import { Mail, MapPin, Clock, Phone, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "hello@muhammadaslan.dev",
    detail: "I typically respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    detail: "Available Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Remote Worldwide",
    detail: "Working with clients globally"
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Within 24 hours",
    detail: "Usually much faster!"
  }
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com",
    description: "View my code"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com",
    description: "Professional profile"
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl">Get in Touch</CardTitle>
          <CardDescription>
            Multiple ways to reach me. Choose what works best for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <method.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">{method.title}</h3>
                <p className="text-foreground">{method.description}</p>
                <p className="text-sm text-muted-foreground">{method.detail}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Social Links</CardTitle>
          <CardDescription>
            Connect with me on social platforms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
            >
              <link.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-medium group-hover:text-accent transition-colors">{link.name}</div>
                <div className="text-sm text-muted-foreground">{link.description}</div>
              </div>
            </a>
          ))}
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Why Work With Me?</h3>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>5+ years of experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>50+ successful projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>100% client satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Modern tech stack</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}