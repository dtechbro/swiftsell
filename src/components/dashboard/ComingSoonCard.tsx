import { motion } from "motion/react";
import {
  Clock3,
  Sparkles,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComingSoonCardProps {
  title: string;
  description: string;
}

export default function ComingSoonCard({
  title,
  description,
}: ComingSoonCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Card
        className="
          relative
          overflow-hidden
          rounded-3xl
          border-border/60
          bg-card/60
          p-10
          backdrop-blur-xl
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            right-[-120px]
            top-[-120px]
            h-72
            w-72
            rounded-full
            bg-primary/15
            blur-[120px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
            [background-size:36px_36px]
          "
        />

        <div className="relative z-10">
          <Badge className="rounded-full">
            <Sparkles className="mr-2 h-3.5 w-3.5" />

            Coming Soon
          </Badge>

          <div
            className="
              mt-8
              inline-flex
              rounded-2xl
              bg-primary/10
              p-4
              text-primary
            "
          >
            <Clock3 className="h-8 w-8" />
          </div>

          <h2 className="mt-6 text-2xl font-bold">
            {title}
          </h2>

          <p
            className="
              mt-3
              max-w-xl
              leading-7
              text-muted-foreground
            "
          >
            {description}
          </p>

          <p
            className="
              mt-8
              text-sm
              text-muted-foreground
            "
          >
            We're actively building this section. For now,
            you can manage your products while we finish the
            rest of the dashboard.
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
