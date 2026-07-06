import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface FloatingBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export default function FloatingBadge({
  icon,
  text,
}: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
    >
      <Badge
        className="
          flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-border/60
          bg-card/80
          px-4
          py-2
          text-sm
          shadow-lg
          backdrop-blur-xl
        "
        variant="outline"
      >
        <span className="text-primary">
          {icon}
        </span>

        <span>{text}</span>
      </Badge>
    </motion.div>
  );
};
