import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Target, Zap, Users, Award, Repeat } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "Every AI solution we develop is designed to deliver measurable business value and ROI.",
  },
  {
    icon: Shield,
    title: "Ethical AI Practices",
    description: "We prioritize responsible AI development with fairness, transparency, and bias mitigation.",
  },
  {
    icon: Zap,
    title: "Agile Implementation",
    description: "Rapid prototyping and iterative development to deliver value quickly and adapt to changing needs.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work closely with your team to ensure knowledge transfer and long-term success.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Rigorous testing, validation, and quality assurance throughout the development lifecycle.",
  },
  {
    icon: Repeat,
    title: "Continuous Improvement",
    description: "Ongoing monitoring, optimization, and enhancement to maintain peak performance.",
  },
]

export function ApproachPrinciples() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Principles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These fundamental principles guide every project we undertake, ensuring consistent quality and successful
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{principle.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
