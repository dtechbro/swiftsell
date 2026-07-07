import type { ReactNode } from "react";

interface ComparisonItem {
  text: string;
}

interface ComparisonCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  items: ComparisonItem[];
  highlight?: boolean;
}

export default function ComparisonCard({
  title,
  description,
  icon,
  items,
  highlight = false,
}: ComparisonCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        ${
          highlight
            ? "border-primary/40 bg-card shadow-xl"
            : "border-border/60 bg-card/70 shadow-sm"
        }
      `}
    >
      {/* Hover Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          opacity-0
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-100
          ${
            highlight
              ? "bg-primary/20"
              : "bg-chart-2/10"
          }
        `}
      />

      {/* Top Accent */}

      {highlight && (
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary
            to-transparent
          "
        />
      )}

      <div className="relative z-10">
        {/* Icon */}

        <div
          className={`
            mb-6
            inline-flex
            rounded-2xl
            p-3
            ${
              highlight
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            }
          `}
        >
          {icon}
        </div>

        {/* Title */}

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-3 text-muted-foreground leading-7">
          {description}
        </p>

        {/* Divider */}

        <div className="my-8 h-px bg-border" />

        {/* Checklist */}

        <ul className="space-y-5">
          {items.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-4"
            >
              <div
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  ${
                    highlight
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }
                `}
              >
                {icon}
              </div>

              <span className="text-base font-medium">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
