import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, BookOpen, Users, Target } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Students Enrolled"
    },
    {
      icon: BookOpen,
      value: "500+",
      label: "Video Lectures"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate"
    },
    {
      icon: Target,
      value: "100+",
      label: "Top Rankers"
    }
  ]

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Physics Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "PhD in Physics with 15+ years of teaching experience"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chemistry Expert",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Specializes in Organic Chemistry and competitive exam preparation"
    },
    {
      name: "Prof. Amit Verma",
      role: "Mathematics Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Former IIT professor with extensive teaching experience"
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About LaserX Acad</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Empowering students to achieve their dreams through quality education and personalized guidance.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At LaserX Acad, we believe in providing quality education that's accessible to all. Our mission is to help students achieve their academic goals through comprehensive learning resources, expert guidance, and innovative teaching methods.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 mt-1 mr-3 flex-shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center">✓</div>
                  <div>Quality education at affordable prices</div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 mt-1 mr-3 flex-shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center">✓</div>
                  <div>Personalized learning experience</div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 mt-1 mr-3 flex-shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center">✓</div>
                  <div>Expert faculty and mentors</div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Students studying"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-primary mb-2">{member.role}</div>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of successful students who achieved their dreams with LaserX Acad.
          </p>
          <Button size="lg">Explore Courses</Button>
        </div>
      </div>
    </div>
  )
}