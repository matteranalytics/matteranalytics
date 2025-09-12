"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, Zap, Shield, BarChart3, Brain } from "lucide-react"
import { useState } from "react"

const portfolioProjects = [
  {
    id: 1,
    title: "Predictive Maintenance for Manufacturing",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    category: "Predictive Analytics",
    description:
      "Implemented ML models to predict equipment failures, reducing downtime by 40% and maintenance costs by $2.3M annually.",
    image: "/industrial-manufacturing-equipment-with-ai-monitor.jpg",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "PostgreSQL"],
    results: [
      "40% reduction in unplanned downtime",
      "$2.3M annual cost savings",
      "85% prediction accuracy",
      "ROI achieved in 8 months",
    ],
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Customer Churn Prediction System",
    client: "TechStart SaaS",
    industry: "Technology",
    category: "Machine Learning",
    description:
      "Developed a comprehensive churn prediction model that increased customer retention by 25% through proactive intervention strategies.",
    image: "/customer-analytics-dashboard-with-retention-metric.jpg",
    technologies: ["Python", "Scikit-learn", "AWS SageMaker", "Tableau"],
    results: [
      "25% improvement in retention",
      "92% model accuracy",
      "$1.8M revenue protected",
      "3x faster intervention response",
    ],
    icon: Users,
  },
  {
    id: 3,
    title: "Real-time Fraud Detection",
    client: "FinSecure Bank",
    industry: "Financial Services",
    category: "AI Security",
    description:
      "Built a real-time fraud detection system processing 100K+ transactions per second with 99.7% accuracy and minimal false positives.",
    image: "/financial-security-dashboard-with-fraud-detection-.jpg",
    technologies: ["Python", "Apache Spark", "Redis", "Kubernetes"],
    results: [
      "99.7% fraud detection accuracy",
      "0.1% false positive rate",
      "100K+ transactions/second",
      "$5.2M fraud prevented annually",
    ],
    icon: Shield,
  },
  {
    id: 4,
    title: "Supply Chain Optimization",
    client: "LogiFlow Enterprises",
    industry: "Logistics",
    category: "Optimization",
    description:
      "Optimized supply chain operations using AI-driven demand forecasting and route optimization, reducing costs by 30%.",
    image: "/supply-chain-logistics-dashboard-with-route-optimi.jpg",
    technologies: ["Python", "OR-Tools", "Docker", "MongoDB"],
    results: [
      "30% reduction in logistics costs",
      "95% demand forecast accuracy",
      "20% faster delivery times",
      "15% inventory reduction",
    ],
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Intelligent Document Processing",
    client: "LegalTech Solutions",
    industry: "Legal",
    category: "NLP",
    description:
      "Automated legal document analysis and contract review using advanced NLP, reducing processing time by 80%.",
    image: "/legal-document-processing-interface-with-ai-text-a.jpg",
    technologies: ["Python", "spaCy", "Transformers", "FastAPI"],
    results: [
      "80% faster document processing",
      "95% accuracy in contract analysis",
      "60% cost reduction",
      "500+ hours saved monthly",
    ],
    icon: Brain,
  },
  {
    id: 6,
    title: "Energy Consumption Optimization",
    client: "GreenPower Utilities",
    industry: "Energy",
    category: "IoT Analytics",
    description:
      "Developed smart grid analytics to optimize energy distribution and reduce consumption by 22% across the network.",
    image: "/smart-grid-energy-management-dashboard-with-consum.jpg",
    technologies: ["Python", "InfluxDB", "Grafana", "Apache Airflow"],
    results: [
      "22% energy consumption reduction",
      "98% grid stability maintained",
      "$3.1M annual savings",
      "Carbon footprint reduced by 15%",
    ],
    icon: Zap,
  },
]

const categories = [
  "All",
  "Predictive Analytics",
  "Machine Learning",
  "AI Security",
  "Optimization",
  "NLP",
  "IoT Analytics",
]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our successful AI and machine learning implementations across various industries and use cases.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon
            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{project.industry}</Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to see similar results for your business? Let's discuss your AI project.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
