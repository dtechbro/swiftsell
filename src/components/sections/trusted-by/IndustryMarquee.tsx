import { motion } from "motion/react";
import {
  Shirt,
  Laptop,
  Sparkles,
  UtensilsCrossed,
  MonitorSmartphone,
  ShoppingBasket,
} from "lucide-react";

import IndustryBadge from "./IndustryBadge";

const industries = [
  {
    icon: Shirt,
    label: "Fashion Stores",
  },
  {
    icon: Laptop,
    label: "Electronics",
  },
  {
    icon: Sparkles,
    label: "Beauty",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants",
  },
  {
    icon: MonitorSmartphone,
    label: "Digital Products",
  },
  {
    icon: ShoppingBasket,
    label: "Groceries",
  },
];

const items = [...industries, ...industries];

export default function IndustryMarquee() {
  return (
    <div
      className="group relative overflow-hidden"
    >
      {/* Left Fade */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-24
          bg-gradient-to-r
          from-background
          via-background/80
          to-transparent
        "
      />

      {/* Right Fade */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-24
          bg-gradient-to-l
          from-background
          via-background/80
          to-transparent
        "
      />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{
          transition: {
            duration: 0,
          },
        }}
        className="
          flex
          w-max
          gap-5
          py-2
          will-change-transform
        "
      >
        {items.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <motion.div
              key={`${industry.label}-${index}`}
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <IndustryBadge
                icon={<Icon className="h-5 w-5" />}
                label={industry.label}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
