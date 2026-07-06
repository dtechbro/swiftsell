import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "./Logo";
import ThemeToggle from "../shared/ThemeToggle";

import { NAV_LINKS } from "@/constants/navigation";

import { motion } from "motion/react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-xl hover:cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[320px] border-l bg-background/95 backdrop-blur-xl"
        >
          <SheetHeader className="mb-8">
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

            <Logo onClick={closeMenu} />
          </SheetHeader>

          <motion.nav
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
            className="flex flex-col gap-2"
          >
            {NAV_LINKS.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                whileHover={{ x: 6 }}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-medium
                  text-muted-foreground
                  transition-colors
                  hover:bg-accent
                  hover:text-foreground
                "
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          <div className="my-8 h-px bg-border" />

          <div className="flex flex-col gap-3 mx-6">
            <Button variant="outline" className="h-11 rounded-xl hover:cursor-pointer">
              Login
            </Button>

            <Button className="group h-11 rounded-xl hover:cursor-pointer">
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
          </div>

          <div className="mt-8 flex items-center justify-between rounded-xl border bg-card p-4 mx-6">
            <div>
              <p className="text-sm font-medium">Appearance</p>

              <p className="text-xs text-muted-foreground">Switch theme</p>
            </div>

              <ThemeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
