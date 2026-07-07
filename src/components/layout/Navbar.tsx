import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import Logo from "./Logo";
import ThemeToggle from "../shared/ThemeToggle";
import MobileNav from "./MobileNav";

import { NAV_LINKS } from "@/constants/navigation";
import { useScroll } from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <motion.div
        animate={{
          width: scrolled ? "92%" : "96%",
          y: scrolled ? -4 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`
          w-full
          max-w-7xl
          rounded-2xl
          border
          backdrop-blur-xl
          transition-all
          duration-300

          ${
            scrolled
              ? "border-border/80 bg-background/90 shadow-xl"
              : "border-border/50 bg-background/60"
          }
        `}
      >
        <div className="flex h-[72px] items-center justify-between px-6">
          <Logo />

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  duration-300

                  hover:text-foreground

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-0
                  after:rounded-full
                  after:bg-primary
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-3 lg:flex">
            {/* <Button variant="ghost" className="rounded-xl hover:cursor-pointer">
              Login
            </Button>

            <Button className="group rounded-xl hover:cursor-pointer">
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
            </Button> */}

            <ThemeToggle />
          </div>

          {/* Mobile */}

          <MobileNav />
        </div>
      </motion.div>
    </header>
  );
}
