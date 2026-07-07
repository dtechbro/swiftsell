import { motion, type Variants } from "motion/react";
import {
  CircleX,
  CircleCheckBig,
  // Globe,
  // MessageCircleMore,
} from "lucide-react";

import ComparisonCard from "./ComparisonCard";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const traditional = [
  { text: "Build a website" },
  { text: "Pay for hosting" },
  { text: "Install plugins" },
  { text: "Maintain everything yourself" },
];

const swiftsell = [
  { text: "Telegram storefront" },
  { text: "Ready in minutes" },
  { text: "Integrated payments" },
  { text: "No technical setup" },
];

export default function ComparisonGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        grid
        gap-8
        lg:grid-cols-2
        lg:items-stretch
      "
    >
      <motion.div variants={item}>
        <ComparisonCard
          title="Traditional Store"
          description="Launching an online store often means juggling multiple tools before you can even make your first sale."
          icon={
            <CircleX
              className="h-6 w-6"
              strokeWidth={2.5}
            />
          }
          items={traditional}
        />
      </motion.div>

      <motion.div variants={item}>
        <ComparisonCard
          title="SwiftSell"
          description="Everything you need to start selling directly inside Telegram from a single streamlined platform."
          icon={
            <CircleCheckBig
              className="h-6 w-6"
              strokeWidth={2.5}
            />
          }
          items={swiftsell}
          highlight
        />
      </motion.div>

      {/* Decorative Floating Icons */}

      <div
        className="
          pointer-events-none
          absolute
          left-12
          top-12
          hidden
          xl:block
        "
      >
        {/* <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            rounded-2xl
            border
            border-border/60
            bg-card/70
            p-3
            shadow-lg
            backdrop-blur-xl
          "
        >
          <Globe className="h-6 w-6 text-muted-foreground" />
        </motion.div> */}
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-12
          bottom-12
          hidden
          xl:block
        "
      >
        {/* <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="
            rounded-2xl
            border
            border-primary/30
            bg-card/80
            p-3
            shadow-xl
            backdrop-blur-xl
          "
        >
          <MessageCircleMore className="h-6 w-6 text-primary" />
        </motion.div> */}
      </div>
    </motion.div>
  );
};
