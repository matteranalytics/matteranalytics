"use client";

import * as React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

type IconType = React.ComponentType<{ className?: string }>;

export type SpotlightStepCardProps = {
  step: number | string;
  icon: IconType;
  title: string;
  description: string;
  details: string[];
  className?: string;
};

export function SpotlightStepCard({
  step,
  icon: Icon,
  title,
  description,
  details,
  className,
}: SpotlightStepCardProps) {
  return (
    <CardSpotlight className={`relative h-full w-full ${className ?? ""}`}>
      {/* Header row with step bubble + icon */}
      <div className="flex items-center gap-4 mb-4 relative z-20">
        <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
          {step}
        </div>
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      </div>

      {/* Title / description */}
      <p className="text-3xl font-semibold text-foreground relative z-20">{title}</p>
      <p className="text-lg text-muted-foreground mt-2 relative z-20">{description}</p>

      {/* Bulleted details */}
      <ul className="mt-4 space-y-2 relative z-20">
        {details.map((d, i) => (
          <li key={i} className="flex items-start text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
            {d}
          </li>
        ))}
      </ul>
    </CardSpotlight>
  );
}
