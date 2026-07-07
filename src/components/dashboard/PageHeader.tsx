import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description: string;

  primaryAction?: {
    label: string;
    onClick?: () => void;
  };

  secondaryAction?: {
    label: string;
    onClick?: () => void;
  };
}

export default function PageHeader({
  title,
  description,
  primaryAction,
  secondaryAction,
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        mb-8
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="mt-2 max-w-2xl text-muted-foreground">
          {description}
        </p>
      </div>

      {(primaryAction || secondaryAction) && (
        <div className="flex flex-wrap gap-3">
          {secondaryAction && (
            <Button
              variant="outline"
              onClick={secondaryAction.onClick}
              className="rounded-xl"
            >
              {secondaryAction.label}
            </Button>
          )}

          {primaryAction && (
            <Button
              onClick={primaryAction.onClick}
              className="group rounded-xl"
            >
              {primaryAction.label}

              <ArrowRight
                className="
                  ml-2
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
};
