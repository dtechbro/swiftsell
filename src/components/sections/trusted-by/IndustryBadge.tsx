import type { ReactNode } from "react";

interface IndustryBadgeProps {
  icon: ReactNode;
  label: string;
}

export default function IndustryBadge({
  icon,
  label,
}: IndustryBadgeProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-card/70
        px-5
        py-3
        shadow-sm
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          -z-10
          rounded-2xl
          bg-gradient-to-r
          from-primary/20
          via-transparent
          to-chart-2/20
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
            transition-colors
            duration-300
            group-hover:bg-primary/15
          "
        >
          {icon}
        </div>

        <span
          className="
            whitespace-nowrap
            text-sm
            font-medium
            text-foreground
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
};
