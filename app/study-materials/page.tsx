import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Download, FileText, Video } from "lucide-react"

export default function StudyMaterialsPage() {
  const materials = [
    {
      title: "JEE Main Physics Notes",
      type: "PDF",
      size: "15 MB",
      downloads: 1200,
      subject: "Physics",
      description: "Comprehensive notes covering mechanics, thermodynamics, and electromagnetism."
    },
    {
      title: "NEET Biology Video Lectures",
      type: "Video",
      duration: "8 hours",
      views: 850,
      subject: "Biology",
      description: "Complete video series on human anatomy and physiology."
    },
    {
      title: "Mathematics Formula Book",
      type: "PDF",
      size: "10 MB",
      downloads: 2000,
      subject: "Mathematics",
      description: "Quick reference guide for all important formulas and theorems."
    },
    {
      title: "Chemistry Practice Problems",
      type: "PDF",
      size: "12 MB",
      downloads: 1500,
      subject: "Chemistry",
      description: "Collection of solved problems from previous year papers."
    },
    {
      title: "Physics Video Solutions",
      type: "Video",
      duration: "10 hours",
      views: 920,
      subject: "Physics",
      description: "Step-by-step solutions to complex physics problems."
    },
    {
      title: "Biology Diagrams Collection",
      type: "PDF",
      size: "20 MB",
      downloads: 1800,
      subject: "Biology",
      description: "High-quality diagrams for biology concepts and systems."
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Study Materials</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Access our comprehensive collection of study materials, including notes, video lectures, and practice problems.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <select className="border rounded-md bg-background px-4 py-2">
              <option value="">All Types</option>
              <option value="pdf">PDF Notes</option>
              <option value="video">Video Lectures</option>
              <option value="practice">Practice Sets</option>
            </select>
            <select className="border rounded-md bg-background px-4 py-2">
              <option value="">All Subjects</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="mathematics">Mathematics</option>
              <option value="biology">Biology</option>
            </select>
            <input
              type="text"
              placeholder="Search materials..."
              className="border rounded-md bg-background px-4 py-2"
            />
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {material.subject}
                </span>
                {material.type === "PDF" ? (
                  <FileText className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Video className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{material.title}</h3>
              <p className="text-muted-foreground mb-4">{material.description}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                {material.type === "PDF" ? (
                  <>
                    <span>Size: {material.size}</span>
                    <span>{material.downloads} downloads</span>
                  </>
                ) : (
                  <>
                    <span>Duration: {material.duration}</span>
                    <span>{material.views} views</span>
                  </>
                )}
              </div>
              <Button className="w-full">
                {material.type === "PDF" ? (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </>
                ) : (
                  <>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Watch Now
                  </>
                )}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}