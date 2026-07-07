import { motion } from "motion/react";
import { DASHBOARD_NAVIGATION } from "@/constants/dashboard-navigation";

import {
  BadgeCheck
} from "lucide-react";

import Logo from "@/components/layout/Logo";

import { Badge } from "@/components/ui/badge";


export default function DashboardSidebar() {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        fixed
        inset-y-0
        left-0
        z-40
        hidden
        w-72
        border-r
        border-border/60
        bg-card/70
        backdrop-blur-xl
        lg:flex
        lg:flex-col
      "
    >
      {/* Logo */}

      <div
        className="
          flex
          h-20
          items-center
          border-b
          border-border/60
          px-6
        "
      >
        <Logo />
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="space-y-2"
        >
          {DASHBOARD_NAVIGATION.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -10,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                whileHover={
                  !item.disabled
                    ? {
                        x: 4,
                      }
                    : undefined
                }
                disabled={item.disabled}
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    item.active
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }

                  ${
                    item.disabled
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />

                  {item.title}
                </div>

                {item.disabled && (
                  <Badge
                    variant="secondary"
                    className="
                      rounded-full
                      text-[10px]
                    "
                  >
                    Coming soon
                  </Badge>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </nav>

      {/* Footer */}

      <div
        className="
          border-t
          border-border/60
          p-6
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-border/60
            bg-background/60
            p-4
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                rounded-full
                bg-primary/15
                p-2
                text-primary
              "
            >
              <BadgeCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="font-medium">
                Telegram Connected
              </p>

              <p className="text-sm text-muted-foreground">
                Store is online
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs text-muted-foreground">
              Ready to receive orders
            </span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};
