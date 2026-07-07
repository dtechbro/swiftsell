import { motion } from "motion/react";

import Logo from "@/components/layout/Logo";

import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";

import { DASHBOARD_NAVIGATION } from "@/constants/dashboard-navigation";

interface DashboardMobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DashboardMobileNav({
  open,
  onOpenChange,
}: DashboardMobileNavProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        side="left"
        className="
          w-72
          border-r
          bg-background/95
          backdrop-blur-xl
          p-2
        "
      >
        <div className="mb-8 mt-4">
          <Logo />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
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
                    x: -20,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                  },
                }}
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
                    className="text-[10px]"
                  >
                    Coming soon
                  </Badge>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};
