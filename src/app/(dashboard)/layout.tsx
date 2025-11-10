import DashboardSidebar from "@/components/(dashboard)/shared/DashboardSidebar/DashboardSidebar";
import Navbar from "@/components/(dashboard)/shared/Navbar/Navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <SidebarProvider className="flex-wrap">
        <Navbar />

        <DashboardSidebar />

        <SidebarInset>
          <div className="min-h-screen w-full">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
