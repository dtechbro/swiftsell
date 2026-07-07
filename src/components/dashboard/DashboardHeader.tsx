import { Menu, Bell } from "lucide-react";

import ThemeToggle from "@/components/shared/ThemeToggle";

import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        border-b
        border-border/60
        bg-background/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-16
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Left */}

        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            onClick={onMenuClick}
            className="rounded-xl lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* <div>
            <h1 className="text-xl font-bold">
              Products
            </h1>

            <p className="text-sm text-muted-foreground">
              Manage your Telegram store.
            </p>
          </div> */}
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button
            size="icon"
            variant="ghost"
            className="rounded-xl"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <Avatar className="h-9 w-9">
            <AvatarFallback>
              SS
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
