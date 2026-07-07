import { motion, type Variants } from "motion/react";
import {
  Store,
  Send,
  BadgeCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import StepCard from "./StepCard";

const steps = [
  {
    step: 1,
    icon: <Store className="h-7 w-7" />,
    title: "Create Your Store",
    description:
      "Set up your storefront, upload products, organize collections, and customize your shop in just a few minutes.",
  },
  {
    step: 2,
    icon: <Send className="h-7 w-7" />,
    title: "Share on Telegram",
    description:
      "Share your unique Telegram store link with your audience so customers can browse and order directly.",
  },
  {
    step: 3,
    icon: <BadgeCheck className="h-7 w-7" />,
    title: "Receive Orders & Payments",
    description:
      "Customers place orders and complete secure payments while you manage everything from one dashboard.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function StepsFlow() {
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
        flex
        flex-col
        items-center
        gap-8
        lg:flex-row
        lg:items-stretch
        lg:justify-between
      "
    >
      {steps.map((step, index) => (
        <div
          key={step.step}
          className="
            flex
            w-full
            flex-col
            items-center
            lg:flex-row
            lg:flex-1
          "
        >
          <motion.div variants={item} className="w-full">
            <StepCard
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          </motion.div>

          {index < steps.length - 1 && (
            <>
              {/* Desktop Connector */}
              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="
                  mx-6
                  hidden
                  origin-left
                  items-center
                  lg:flex
                "
              >
                <div
                  className="
                    h-12
                    w-px
                  "
                />

                <ArrowRight
                  className="
                    -mt-1
                    h-8
                    w-8
                    text-primary
                  "
                  strokeWidth={3}
                />
              </motion.div>

              {/* Mobile Connector */}
              <motion.div
                initial={{
                  opacity: 0,
                  scaleY: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="
                  my-3
                  flex
                  origin-top
                  flex-col
                  items-center
                  lg:hidden
                "
              >
                <div
                  className="
                    h-12
                    w-px
                  "
                />

                <ArrowDown
                  className="
                    -mt-1
                    h-10
                    w-10
                    text-primary
                  "
                  strokeWidth={3}
                />
              </motion.div>
            </>
          )}
        </div>
      ))}
    </motion.div>
  );
};
