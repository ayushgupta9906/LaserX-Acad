import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, Users, Video } from "lucide-react"

export default function LiveClassesPage() {
  const upcomingClasses = [
    {
      title: "JEE Main Physics - Mechanics",
      instructor: "Dr. Sharma",
      date: "2024-03-15",
      time: "10:00 AM",
      duration: "2 hours",
      participants: 45,
      subject: "Physics"
    },
    {
      title: "NEET Biology - Human Physiology",
      instructor: "Dr. Patel",
      date: "2024-03-15",
      time: "2:00 PM",
      duration: "1.5 hours",
      participants: 52,
      subject: "Biology"
    },
    {
      title: "JEE Advanced Mathematics - Calculus",
      instructor: "Prof. Kumar",
      date: "2024-03-16",
      time: "11:00 AM",
      duration: "2 hours",
      participants: 38,
      subject: "Mathematics"
    },
    {
      title: "NEET Chemistry - Organic Chemistry",
      instructor: "Dr. Singh",
      date: "2024-03-16",
      time: "3:00 PM",
      duration: "2 hours",
      participants: 60,
      subject: "Chemistry"
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Live Classes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join our interactive live classes with expert faculty members for real-time learning and doubt solving.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <select className="border rounded-md bg-background px-4 py-2">
              <option value="">All Subjects</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="mathematics">Mathematics</option>
              <option value="biology">Biology</option>
            </select>
            <select className="border rounded-md bg-background px-4 py-2">
              <option value="">All Instructors</option>
              <option value="sharma">Dr. Sharma</option>
              <option value="patel">Dr. Patel</option>
              <option value="kumar">Prof. Kumar</option>
              <option value="singh">Dr. Singh</option>
            </select>
            <input
              type="date"
              className="border rounded-md bg-background px-4 py-2"
            />
          </div>
        </div>

        {/* Live Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingClasses.map((class_, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {class_.subject}
                </span>
                <Video className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{class_.title}</h3>
              <p className="text-muted-foreground mb-2">Instructor: {class_.instructor}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(class_.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{class_.time} ({class_.duration})</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{class_.participants} enrolled</span>
                </div>
              </div>
              <Button className="w-full">Join Class</Button>
            </Card>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Weekly Schedule</h2>
          <p className="text-muted-foreground mb-6">
            View our complete class schedule and plan your study routine accordingly.
          </p>
          <Button variant="outline">View Full Schedule</Button>
        </div>
      </div>
    </div>
  )
}