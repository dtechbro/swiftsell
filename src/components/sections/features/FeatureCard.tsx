import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        group
        relative
        isolate
        rounded-2xl
        border
        border-border/60
        bg-card/60
        p-6
        shadow-sm
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Glow Layer (behind everything) */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          rounded-2xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-r
          from-primary/20
          via-transparent
          to-chart-2/20
          blur-2xl
        "
      />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            mb-4
            inline-flex
            rounded-xl
            bg-primary/10
            p-3
            text-primary
          "
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};
