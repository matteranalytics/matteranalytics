"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SpotlightStepCard } from "@/components/SpotlightStepCard"; 

import { processSteps } from "@/data"



export function ApproachProcess() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Proven Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We follow a systematic, data-driven approach to ensure successful AI implementation and measurable business
            outcomes.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0

            return (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                <div className="lg:w-1/2">
                    <SpotlightStepCard
                    step={step.step}
                    icon={IconComponent}
                    title={step.title}
                    description={step.description}
                    details={step.details}
                    className="min-h-[22rem] rounded-xl bg-white" // optional sizes
                  />
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="w-full max-w-md aspect-square rounded-lg flex items-center justify-center">
                    <IconComponent className="h-48 w-48 text-accent/20" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
