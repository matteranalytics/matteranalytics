import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, BarChart3, TrendingUp, Database, Cpu, Target, Users, Shield, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Develop comprehensive AI roadmaps aligned with your business objectives and industry requirements.",
    features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
    price: "Starting at $15,000",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable insights using advanced statistical and analytical techniques.",
    features: ["Predictive Analytics", "Business Intelligence", "Data Visualization", "Performance Metrics"],
    price: "Starting at $8,000",
  },
  {
    icon: TrendingUp,
    title: "Machine Learning Implementation",
    description: "Build, train, and deploy custom ML models that drive measurable business value.",
    features: [
      "Custom Model Development",
      "Model Training & Optimization",
      "Deployment & Monitoring",
      "Performance Tuning",
    ],
    price: "Starting at $25,000",
  },
  {
    icon: Database,
    title: "Data Engineering & Pipeline",
    description: "Design and implement robust data infrastructure for scalable analytics and ML operations.",
    features: ["Data Pipeline Design", "ETL/ELT Processes", "Data Warehouse Setup", "Real-time Processing"],
    price: "Starting at $12,000",
  },
  {
    icon: Cpu,
    title: "MLOps & Model Management",
    description: "Streamline your ML lifecycle with automated deployment, monitoring, and maintenance systems.",
    features: ["CI/CD for ML", "Model Versioning", "Automated Monitoring", "Performance Tracking"],
    price: "Starting at $18,000",
  },
  {
    icon: Target,
    title: "Computer Vision Solutions",
    description: "Leverage advanced computer vision techniques for image and video analysis applications.",
    features: ["Object Detection", "Image Classification", "Video Analytics", "Custom Vision Models"],
    price: "Starting at $20,000",
  },
  {
    icon: Users,
    title: "Natural Language Processing",
    description: "Extract insights from text data with sophisticated NLP and language understanding models.",
    features: ["Sentiment Analysis", "Text Classification", "Named Entity Recognition", "Chatbot Development"],
    price: "Starting at $16,000",
  },
  {
    icon: Shield,
    title: "AI Ethics & Governance",
    description: "Ensure responsible AI implementation with comprehensive ethics frameworks and governance.",
    features: ["Bias Detection", "Fairness Assessment", "Compliance Framework", "Risk Management"],
    price: "Starting at $10,000",
  },
  {
    icon: Zap,
    title: "AI Training & Workshops",
    description: "Empower your team with hands-on AI/ML training and customized workshop programs.",
    features: ["Executive Workshops", "Technical Training", "Hands-on Labs", "Certification Programs"],
    price: "Starting at $5,000",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive AI & ML Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From strategy to implementation, we provide end-to-end AI solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className="text-lg font-semibold text-accent mb-4">{service.price}</p>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We create tailored AI/ML strategies for unique business challenges.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Discuss Custom Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
