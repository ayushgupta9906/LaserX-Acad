import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FAQPage() {
  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer comprehensive courses for JEE (Main & Advanced) and NEET preparation. Our courses include video lectures, live classes, study materials, and practice tests."
    },
    {
      question: "How can I access the study materials?",
      answer: "Once enrolled, you can access all study materials through your student dashboard. Materials include video lectures, PDF notes, practice problems, and previous year papers."
    },
    {
      question: "Do you offer live doubt solving?",
      answer: "Yes, we have regular live doubt solving sessions with our expert faculty members. You can also ask questions during live classes."
    },
    {
      question: "What is the duration of the courses?",
      answer: "Course durations vary from 3 months to 2 years, depending on the program you choose. We have both crash courses and comprehensive preparation programs."
    },
    {
      question: "Are the recorded lectures available 24/7?",
      answer: "Yes, all recorded lectures are available 24/7 in your student dashboard. You can watch them at your convenience and revisit them multiple times."
    },
    {
      question: "How do I track my progress?",
      answer: "Our platform provides detailed progress tracking through regular tests, performance analytics, and personalized feedback from mentors."
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find answers to common questions about our courses, platform, and learning experience.
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}