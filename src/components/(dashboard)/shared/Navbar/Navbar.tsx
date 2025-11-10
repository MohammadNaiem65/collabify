import ThemeToggle from "@/components/shared/ThemeToggler";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getInitials } from "@/lib/utils";
import { Bell, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CommandPalette } from "../CommandPalette/CommandPalette";
import SearchInput from "./SearchInput";
import SidebarToggler from "./SidebarToggler";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-40 flex w-full grow items-center justify-between border-b bg-background/95 p-4 px-2 backdrop-blur supports-backdrop-filter:bg-background/60 sm:px-4">
        <div className="flex items-center gap-2">
          <SidebarToggler />

          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 sm:gap-4"
          >
            <Image
              className="size-5 md:size-8"
              src="/logo.png"
              alt="collabify logo"
              width={32}
              height={32}
            />
            <h2 className="text-base font-bold sm:text-2xl md:block">
              {" "}
              Collabify{" "}
            </h2>
          </Link>
        </div>

        <div className="flex items-center justify-between space-x-2 md:flex-1 md:justify-end">
          <SearchInput />

          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>

            <ThemeToggle />

            {true && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-9 w-9 rounded-full"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>
                        {getInitials("Rifat Ahmed Tusar")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm leading-none font-medium">
                        {/* {user.name}
                         */}
                        Rifat Ahmed Tusar
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {/* {user.email}
                         */}
                        rifat@ahmedtusr.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 size-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 size-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        </div>
      </nav>

      <CommandPalette />
    </>
  );
}
