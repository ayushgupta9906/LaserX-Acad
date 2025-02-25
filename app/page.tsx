import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Success Journey Starts Here
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join LaserX Acad for comprehensive JEE & NEET preparation with expert faculty, live classes, and structured learning paths.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Start Learning Now</Button>
              <Button size="lg" variant="outline">Explore Courses</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-muted-foreground">Learn from experienced educators who understand your needs</p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Classes</h3>
              <p className="text-muted-foreground">Interactive sessions with real-time doubt solving</p>
            </Card>
            <Card className="p-6">
              <Trophy className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
              <p className="text-muted-foreground">Regular assessments to track your progress</p>
            </Card>
            <Card className="p-6">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock assistance for all your queries</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "JEE Main Complete Course",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "₹9,999",
                duration: "12 months"
              },
              {
                title: "NEET Crash Course",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "₹8,999",
                duration: "6 months"
              },
              {
                title: "JEE Advanced Pro",
                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "₹12,999",
                duration: "12 months"
              }
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">{course.duration}</span>
                    <span className="font-semibold">{course.price}</span>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of successful students who achieved their dreams with LaserX Acad</p>
          <Button size="lg" variant="secondary">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}