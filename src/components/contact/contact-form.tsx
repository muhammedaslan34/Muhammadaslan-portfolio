"use client"

import { useState } from "react"
import { Send, User, Mail, DollarSign, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const budgetRanges = [
  "$1,000 - $2,500",
  "$2,500 - $5,000", 
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+"
]

const timelines = [
  "ASAP",
  "Within 1 month",
  "Within 3 months",
  "Within 6 months",
  "No rush"
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeline: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    
    // Reset form or show success message
    alert("Thank you! I'll get back to you within 24 hours.")
  }

  return (
    <Card className="glass-card hover-lift">
      <CardHeader>
        <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
        <CardDescription>
          Tell me about your project and I'll provide a detailed estimate within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center">
              <User className="h-4 w-4 mr-2 text-accent" />
              Full Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your full name"
              required
              className="glass-card"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-accent" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your@email.com"
              required
              className="glass-card"
            />
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-accent" />
                Budget Range
              </Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                <SelectTrigger className="glass-card">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-accent" />
                Timeline
              </Label>
              <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                <SelectTrigger className="glass-card">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((timeline) => (
                    <SelectItem key={timeline} value={timeline}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-accent" />
              Project Details
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me about your project, goals, and any specific requirements..."
              rows={5}
              required
              className="glass-card"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full hover-lift" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Project Details
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}