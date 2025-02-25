import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import Image from "next/image"

export default function CoursesPage() {
  const courses = [
    {
      title: "JEE Main Complete Course",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "₹9,999",
      duration: "12 months",
      description: "Comprehensive preparation for JEE Main with detailed video lectures, study materials, and mock tests.",
      subjects: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      title: "NEET Crash Course",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "₹8,999",
      duration: "6 months",
      description: "Intensive preparation program for NEET aspirants with focus on Biology, Physics, and Chemistry.",
      subjects: ["Biology", "Physics", "Chemistry"]
    },
    {
      title: "JEE Advanced Pro",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "₹12,999",
      duration: "12 months",
      description: "Advanced level preparation for JEE Advanced with problem-solving techniques and previous year papers.",
      subjects: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      title: "Foundation Course (Class 11)",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "₹7,999",
      duration: "12 months",
      description: "Build strong fundamentals for competitive exams starting from Class 11.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"]
    },
    {
      title: "Foundation Course (Class 12)",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "₹7,999",
      duration: "12 months",
      description: "Comprehensive preparation for Class 12 board exams and competitive exams.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"]
    },
    {
      title: "Doubt Solving Program",
      image: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "₹1,999",
      duration: "3 months",
      description: "Personalized doubt solving sessions with expert faculty members.",
      subjects: ["All Subjects"]
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose from our wide range of courses designed to help you succeed in JEE and NEET examinations.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-md bg-background"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <select className="border rounded-md bg-background px-4 py-2">
                <option value="">All Subjects</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="mathematics">Mathematics</option>
                <option value="biology">Biology</option>
              </select>
              <select className="border rounded-md bg-background px-4 py-2">
                <option value="">All Durations</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.subjects.map((subject, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
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
    </div>
  )
}