import { Navigation } from "@/components/navigation"
import { ServicesGrid } from "@/components/services-grid"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Transform your business with our comprehensive suite of AI and machine learning services. From strategic
              planning to full-scale implementation, we deliver solutions that drive real results.
            </p>
          </div>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
