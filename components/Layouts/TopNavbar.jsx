"use client";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { ModeToggle } from "./ModeToggle";

const TopNavbar = () => {
  return (
    <header className="h-14 border-b border-border bg-card flex items-center px-4 justify-between ">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold text-card-foreground">
          Finance Master
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>

        <ModeToggle />
      </div>
    </header>
  );
};

export default TopNavbar;
