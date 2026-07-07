import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import FloatingBadge from "./FloatingBadge";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="
        flex
        max-w-2xl
        flex-col
        items-center
        text-center
        lg:items-start
        lg:text-left
      "
    >
      {/* Announcement */}

      <motion.div variants={item}>
        <FloatingBadge
          icon={<Sparkles className="h-4 w-4" />}
          text="Now accepting Telegram merchants"
        />
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="
          mt-8
          text-5xl
          font-black
          leading-tight
          tracking-tight
          sm:text-6xl
          xl:text-7xl
        "
      >
        Launch your{" "}
        <span
          className="
            bg-gradient-to-r
            from-primary
            via-chart-2
            to-chart-3
            bg-clip-text
            text-transparent
          "
        >
          Telegram store
        </span>
        <br />
        in minutes.
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={item}
        className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-muted-foreground
        "
      >
        SwiftSell transforms your Telegram community into a
        complete ecommerce storefront where customers can browse
        products, place orders, and pay securely without leaving
        the conversation.
      </motion.p>

      {/* CTA Buttons */}

      <motion.div
        variants={item}
        className="
          mt-10
          flex
          flex-col
          gap-4
          sm:flex-row
        "
      >
        <Button
          size="lg"
          className="
            group
            h-12
            rounded-xl
            px-7
            text-base
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:cursor-pointer
          "
        >
          Start Selling

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

        <Button
          size="lg"
          variant="outline"
          className="
            group
            h-12
            rounded-xl
            border-border/70
            bg-background/60
            px-7
            text-base
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:cursor-pointer
          "
        >
          <Play
            className="
              mr-2
              h-4
              w-4
              fill-current
            "
          />

          Watch Demo
        </Button>
      </motion.div>

      {/* Social Proof */}

      <motion.div
        variants={item}
        className="
          mt-10
          flex
          flex-col
          items-center
          gap-4
          sm:flex-row
        "
      >
        <div className="flex -space-x-3">
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/100?img=12" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Avatar className="border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/100?img=18" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>

          <Avatar className="border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/100?img=24" />
            <AvatarFallback>KO</AvatarFallback>
          </Avatar>

          <Avatar className="border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/100?img=41" />
            <AvatarFallback>LS</AvatarFallback>
          </Avatar>
        </div>

        <p className="text-sm text-muted-foreground">
          Trusted by{" "}
          <span className="font-semibold text-foreground">
            500+
          </span>{" "}
          businesses launching on Telegram.
        </p>
      </motion.div>
    </motion.div>
  );
};
