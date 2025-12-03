import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import TopNavbar from "./TopNavbar";

export function AppLayout({ children }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNavbar />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
