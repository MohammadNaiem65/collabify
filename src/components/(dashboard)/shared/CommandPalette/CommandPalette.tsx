"use client";

import useUIStore from "@/store/useUIStore";
import {
  Bot,
  Calendar,
  FileText,
  Home,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

import { UIStore } from "@/store/useUIStore";
import { useCallback, useEffect } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const commandLinks = [
  {
    heading: "Quick Start",
    links: [
      {
        name: "Home",
        href: "/",
        icon: Home,
      },
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Projects",
        href: "/projects",
        icon: FileText,
      },
      {
        name: "Clients",
        href: "/clients",
        icon: Users,
      },
      {
        name: "Calendar",
        href: "/calendar",
        icon: Calendar,
      },
    ],
  },
  {
    heading: "Other Links",
    links: [
      {
        name: "AI Assistant",
        href: "/ai-assistant",
        icon: Bot,
      },
      {
        name: "Integrations",
        href: "/integrations",
        icon: Settings,
      },
    ],
  },
];

export function CommandPalette() {
  const router = useRouter();
  const { showCommandPalette, setShowCommandPalette } = useUIStore(
    useShallow(
      (state): UIStore => ({
        showCommandPalette: state.showCommandPalette,
        setShowCommandPalette: state.setShowCommandPalette,
      }),
    ),
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommandPalette(!showCommandPalette);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [showCommandPalette, setShowCommandPalette]);

  const runCommand = useCallback(
    (command: () => void) => {
      setShowCommandPalette(false);
      command();
    },
    [setShowCommandPalette],
  );

  return (
    <CommandDialog
      open={showCommandPalette}
      onOpenChange={setShowCommandPalette}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {commandLinks.map((linkGroup, index) => (
          <CommandGroup key={linkGroup.heading} heading={linkGroup.heading}>
            {linkGroup.links.map((link) => (
              <CommandItem
                key={link.name}
                onSelect={() => runCommand(() => router.push(link.href))}
                className="ml-2 flex cursor-pointer items-center gap-x-1"
              >
                <link.icon className="mr-2 size-3" />
                <span>{link.name}</span>
              </CommandItem>
            ))}

            <CommandSeparator
              className={cn(
                "mt-3",
                index === commandLinks.length - 1 && "hidden",
              )}
            />
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
