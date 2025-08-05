"use client";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  CirclePlus,
  Plus,
  List,
  UploadIcon,
  Download,
  Settings,
  Search,
  Calendar,
  ChevronLeft,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export function AppSidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        !collapsed &&
        !event.target.closest(".sidebar-container")
      ) {
        setCollapsed(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, collapsed]);

  return (
    <div className="sidebar-container">
      <Sidebar
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300
          ${isMobile ? "w-80" : collapsed ? "w-24" : "w-72"}
          ${isMobile && collapsed ? "-translate-x-full" : "translate-x-0"}
          bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 shadow-xl flex flex-col
        `}
      >
        {/* Header */}
        <SidebarHeader className="p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex gap-3 items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 rounded-lg">
                  <Image
                    src="/logo.svg"
                    width={24}
                    height={24}
                    alt="Logo"
                    className="filter invert brightness-0"
                  />
                </div>
              </div>
              {(!collapsed || isMobile) && (
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Finance{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      Master
                    </span>
                  </span>
                  <span className="text-xs text-gray-500 -mt-1">
                    Management Suite
                  </span>
                </div>
              )}
            </Link>

            {/* Collapse button (desktop only) */}
            {!isMobile && (
              <button
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft
                  size={16}
                  className={`transition-transform duration-300 ${
                    collapsed ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>
        </SidebarHeader>

        {/* Menu Items */}
        <SidebarContent className="flex-1 p-4 space-y-6 overflow-y-auto">
          <SidebarGroup>
            <SidebarGroupLabel
              className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ${
                collapsed && !isMobile ? "text-center" : ""
              }`}
            >
              {!collapsed || isMobile ? "Navigation" : "•••"}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {items.map(({ title, url, icon: Icon, badge }) => {
                  const isActive = pathname === url;

                  return (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={url}
                          className={`
                            group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                            ${
                              collapsed && !isMobile
                                ? "justify-center px-2"
                                : ""
                            }
                            ${
                              isActive
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 hover:scale-105"
                            }
                          `}
                          onClick={() => isMobile && setCollapsed(true)}
                        >
                          <Icon
                            size={20}
                            strokeWidth={isActive ? 2.5 : 2}
                            className="transition-transform group-hover:scale-110"
                          />
                          {(!collapsed || isMobile) && (
                            <span className="text-sm font-medium">{title}</span>
                          )}
                          {collapsed && !isMobile && (
                            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 z-50">
                              {title}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Quick Actions */}
          {!collapsed && !isMobile && (
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Actions
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Search size={16} />
                    Search Tests
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Calendar size={16} />
                    Schedule Run
                  </button>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          )}
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter className="mt-auto p-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          {!collapsed || isMobile ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">JK</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Kundalik Jadhav
                </p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-sm font-bold">JK</span>
            </div>
          )}
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Add Transactions", url: "/add-transactions", icon: CirclePlus },
  { title: "Add Banks", url: "/add-bank-account", icon: Plus },
  { title: "Add User", url: "/add-user", icon: User },
  { title: "To Do List", url: "/to-do-list", icon: List },
  {
    title: "Upload Bulk Trans",
    url: "/upload-bulk-transactions",
    icon: UploadIcon,
  },
  { title: "Download Reports", url: "/download", icon: Download },
  { title: "Settings", url: "/settings", icon: Settings },
];
