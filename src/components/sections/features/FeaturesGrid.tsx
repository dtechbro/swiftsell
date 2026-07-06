import {
  Package,
  Bot,
  CreditCard,
  BarChart3,
  Truck,
  Users,
} from "lucide-react";

import { motion, type Variants } from "motion/react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Package,
    title: "Product Catalog",
    description:
      "Manage unlimited products with images, pricing, and stock control.",
  },
  {
    icon: Bot,
    title: "Telegram Automation",
    description:
      "Automated replies, order handling, and customer interactions inside Telegram.",
  },
  {
    icon: CreditCard,
    title: "Integrated Payments",
    description:
      "Accept secure payments instantly with seamless checkout flows.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track revenue, conversions, and store performance in real time.",
  },
  {
    icon: Truck,
    title: "Order Management",
    description:
      "Manage fulfillment, order status, and delivery workflows efficiently.",
  },
  {
    icon: Users,
    title: "Customer Database",
    description:
      "Understand your buyers and build long-term customer relationships.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FeaturesGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <motion.div key={feature.title} variants={item}>
            <FeatureCard
              icon={<Icon className="h-5 w-5" />}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};
