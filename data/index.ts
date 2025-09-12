import { Search, Lightbulb, Cog, Rocket, BarChart3, Users } from "lucide-react"

export const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Assessment (DAS)",
    description:
      "We begin by understanding your business objectives, current data landscape, and technical infrastructure.",
    details: [
      "Stakeholder interviews and requirements gathering",
      "Data audit and quality assessment",
      "Technical infrastructure evaluation",
      "Competitive analysis and market research",
    ],
    // duration: "2-4 weeks",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy & Planning (DAS)",
    description: "Develop a comprehensive AI/ML strategy aligned with your business goals and technical capabilities.",
    details: [
      "AI opportunity identification and prioritization",
      "Technology stack selection and architecture design",
      "Resource planning and timeline development",
      "Risk assessment and mitigation strategies",
    ],
    // duration: "3-5 weeks",
  },
  {
    step: "03",
    icon: Cog,
    title: "Development & Implementation (PoC)",
    description:
      "Build and implement custom AI/ML solutions using industry best practices and cutting-edge technologies.",
    details: [
      "Data preprocessing and feature engineering",
      "Model development and training",
      "Integration with existing systems",
      "Testing and validation procedures",
    ],
    // duration: "8-16 weeks",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deployment & Launch (Prod)",
    description: "Deploy solutions to production with comprehensive monitoring and performance optimization.",
    details: [
      "Production deployment and configuration",
      "Performance monitoring setup",
      "User training and documentation",
      "Go-live support and troubleshooting",
    ],
    // duration: "2-4 weeks",
  },
  {
    step: "05",
    icon: BarChart3,
    title: "Monitoring & Optimization (CI/CD)",
    description: "Continuously monitor performance and optimize models to ensure sustained business value.",
    details: [
      "Performance metrics tracking and analysis",
      "Model retraining and updates",
      "System optimization and scaling",
      "Regular performance reviews",
    ],
    // duration: "Ongoing",
  },
  {
    step: "06",
    icon: Users,
    title: "Knowledge Transfer & Ongoing Support",
    description: "Empower your team with the knowledge and tools needed to maintain and evolve AI solutions.",
    details: [
      "Technical documentation and best practices",
      "Team training and skill development",
      "Ongoing support and consultation",
      "Future roadmap planning",
    ],
    // duration: "4-6 weeks",
  },
]