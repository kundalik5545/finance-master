"use client";

import {
  Home,
  Plus,
  CreditCard,
  TrendingUp,
  Settings,
  Tags,
  FileText,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx"; // Optional utility to manage classNames

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Add Transaction", url: "/add-transactions", icon: Plus },
  { title: "Ad ", url: "/add-user", icon: CreditCard },
  { title: "Categories", url: "/categories", icon: Tags },
  { title: "Reports", url: "/reports", icon: TrendingUp },
  { title: "Import/Export", url: "/import-export", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar
      className={state === "collapsed" ? "w-14" : "w-60"}
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Finance Tracker</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={clsx(
                          "flex items-center gap-2 p-2 rounded-md transition-colors",
                          {
                            "bg-sidebar-accent text-sidebar-accent-foreground font-medium":
                              isActive,
                            "hover:bg-sidebar-accent/50": !isActive,
                          }
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {state !== "collapsed" && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/profile"
                className={clsx(
                  "flex items-center gap-2 p-2 rounded-md transition-colors",
                  {
                    "bg-sidebar-accent text-sidebar-accent-foreground font-medium":
                      pathname === "/profile",
                    "hover:bg-sidebar-accent/50": pathname !== "/profile",
                  }
                )}
              >
                <User className="h-4 w-4" />
                {state !== "collapsed" && <span>Profile</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
