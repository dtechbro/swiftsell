import { useState } from "react";
import type { ReactNode } from "react";

import DashboardSidebar from "../dashboard/DashboardSidebar";
import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardMobileNav from "../dashboard/DashboardMobileNav";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <DashboardMobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      />

      <div className="lg:pl-72">
        <DashboardHeader
          onMenuClick={() =>
            setMobileOpen(true)
          }
        />

        <main
          className="
            px-5
            py-8
            sm:px-6
            lg:px-8
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
};
