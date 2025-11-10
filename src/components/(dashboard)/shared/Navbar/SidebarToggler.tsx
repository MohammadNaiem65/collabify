"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export default function SidebarToggler() {
  const { isMobile, toggleSidebar } = useSidebar();

  if (!isMobile) {
    return;
  }

  return <Menu className="size-5" onClick={toggleSidebar} />;
}
