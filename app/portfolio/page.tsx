import { Navigation } from "@/components/navigation"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover how we've helped businesses across industries transform their operations with AI and machine
              learning solutions that deliver measurable results.
            </p>
          </div>
        </div>
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  )
}
