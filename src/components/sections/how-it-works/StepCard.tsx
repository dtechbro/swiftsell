import type { ReactNode } from "react";

interface StepCardProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function StepCard({
  step,
  icon,
  title,
  description,
}: StepCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-card/70
        p-8
        shadow-sm
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          rounded-3xl
          bg-gradient-to-br
          from-primary/15
          via-transparent
          to-chart-2/15
          opacity-0
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Step Number */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-primary/20
          bg-primary/10
          text-sm
          font-bold
          text-primary
        "
      >
        {step}
      </div>

      {/* Icon */}
      <div
        className="
          mt-8
          inline-flex
          rounded-2xl
          bg-primary/10
          p-4
          text-primary
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          mt-8
          text-xl
          font-semibold
          tracking-tight
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-7
          text-muted-foreground
        "
      >
        {description}
      </p>
    </div>
  );
};
