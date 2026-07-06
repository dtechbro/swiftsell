import { motion } from "motion/react";
import {
  CheckCircle2,
  Package,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

import telegramImage from "@/assets/telegram-img.png";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const floating = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-xl
        items-center
        justify-center
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          h-[480px]
          w-[480px]
          rounded-full
          bg-primary/20
          blur-[120px]
        "
      />

      {/* Telegram Image */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <img
          src={telegramImage}
          alt="SwiftSell Telegram storefront"
          className="
            w-full
            max-w-[330px]
            rounded-[2rem]
            border
            border-border/60
            shadow-2xl
          "
        />
      </motion.div>

      {/* Product Card */}

      <motion.div
        variants={floating}
        animate="animate"
        className="
          absolute
          -left-6
          top-10
          z-20
          hidden
          lg:block
        "
      >
        <Card
          className="
            w-56
            rounded-2xl
            border-border/60
            bg-card/90
            p-4
            shadow-xl
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                rounded-xl
                bg-primary/15
                p-2
                text-primary
              "
            >
              <ShoppingBag className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold">
                Premium Sneakers
              </p>

              <p className="text-sm text-muted-foreground">
                ₦48,000
              </p>
            </div>
          </div>

          <Badge
            className="mt-4"
            variant="secondary"
          >
            In Stock
          </Badge>
        </Card>
      </motion.div>

      {/* Payment Card */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="
          absolute
          -right-6
          top-24
          z-20
          hidden
          lg:block
        "
      >
        <Card
          className="
            w-60
            rounded-2xl
            border-border/60
            bg-card/90
            p-4
            shadow-xl
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                rounded-full
                bg-green-500/15
                p-2
                text-green-500
              "
            >
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold">
                Payment Successful
              </p>

              <p className="text-sm text-muted-foreground">
                Order confirmed
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Revenue Card */}

      <motion.div
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute
          bottom-8
          -left-10
          z-20
          hidden
          lg:block
        "
      >
        <Card
          className="
            w-56
            rounded-2xl
            border-border/60
            bg-card/90
            p-4
            shadow-xl
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                rounded-xl
                bg-chart-2/20
                p-2
                text-chart-2
              "
            >
              <TrendingUp className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold">
                Revenue
              </p>

              <p className="text-xl font-bold">
                ₦2.4M
              </p>

              <p className="text-xs text-muted-foreground">
                +24% this month
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Orders Card */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="
          absolute
          -right-8
          bottom-4
          z-20
          hidden
          lg:block
        "
      >
        <Card
          className="
            w-52
            rounded-2xl
            border-border/60
            bg-card/90
            p-4
            shadow-xl
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                rounded-xl
                bg-primary/15
                p-2
                text-primary
              "
            >
              <Package className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold">
                New Orders
              </p>

              <p className="text-2xl font-bold">
                +32
              </p>

              <p className="text-xs text-muted-foreground">
                Today
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
