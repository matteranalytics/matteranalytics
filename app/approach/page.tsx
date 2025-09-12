import { Navigation } from "@/components/navigation"
import { ApproachProcess } from "@/components/approach-process"
import { ApproachPrinciples } from "@/components/approach-principles"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Approach</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
              We combine deep technical expertise with proven methodologies to deliver AI solutions that transform
              businesses. Our systematic approach ensures successful implementation and sustainable results.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/contact">Start Your AI Journey</Link>
            </Button>
          </div>
        </div>
        <ApproachPrinciples />
        <ApproachProcess />
      </main>
      <Footer />
    </div>
  )
}
