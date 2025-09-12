import { Search, Lightbulb, Cog, Rocket, BarChart3, Users } from "lucide-react"
import { Brain, TrendingUp, Database, Cpu, Target, Shield, Zap } from "lucide-react"

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

export const services = [
  {
    icon: Target,
    title: "Full-Stack AI App  Engineering",
    description: "Build end-to-end AI-powered applications that seamlessly connect data pipelines, machine learning models, and intuitive user interfaces.",
    features: ["Backend APIs for AI/ML", "Data Pipeline & Integration", "Frontend Development (or Integration)", "Admin Dashboards & Web Apps", "Cloud-Native Deployment"],
  },
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Develop comprehensive AI roadmaps aligned with your business objectives and industry requirements.",
    features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable insights using advanced statistical and analytical techniques.",
    features: ["Predictive Analytics", "Business Intelligence", "Data Visualization", "Performance Metrics"],
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
    ]
  },
  {
    icon: Database,
    title: "Data Engineering & Pipeline",
    description: "Design and implement robust data infrastructure for scalable analytics and ML operations.",
    features: ["Data Pipeline Design", "ETL/ELT Processes", "Data Warehouse Setup", "Real-time Processing"],
  },
  {
    icon: Cpu,
    title: "MLOps & AI/Model Management",
    description: "Streamline your ML lifecycle with automated deployment, monitoring, and maintenance systems.",
    features: ["CI/CD for ML", "Model Versioning", "Automated Monitoring", "Performance Tracking"],
  },
  {
    icon: Users,
    title: "Natural Language Processing",
    description: "Extract insights from text data with sophisticated NLP and language understanding models.",
    features: ["Sentiment Analysis", "Text Classification", "Named Entity Recognition", "Chatbot Development"],
  },
  {
    icon: Shield,
    title: "AI Ethics & Governance",
    description: "Ensure responsible AI implementation with comprehensive ethics frameworks and governance.",
    features: ["Bias Detection", "Fairness Assessment", "Compliance Framework", "Risk Management"],
  },
  {
    icon: Zap,
    title: "AI Training & Workshops",
    description: "Empower your team with hands-on AI/ML training and customized workshop programs.",
    features: ["Executive Workshops", "Technical Training", "Hands-on Labs", "Certification Programs"],
  },
]


export const portfolioProjects = [
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

export const categories = [
  "All",
  "Predictive Analytics",
  "Machine Learning",
  "AI Security",
  "Optimization",
  "NLP",
  "IoT Analytics",
]