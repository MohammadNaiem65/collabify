"use client";

import { Button } from "@/components/ui/button";
import useUIStore from "@/store/useUIStore";
import { Search } from "lucide-react";

export default function SearchInput() {
  const setShowCommandPalette = useUIStore(
    (state) => state.setShowCommandPalette,
  );

  return (
    <div className="w-full md:w-auto">
      <Button
        variant="outline"
        className="relative w-fit cursor-pointer justify-start border-0 p-0 text-sm text-muted-foreground shadow-none has-[>svg]:px-0 sm:border sm:pr-12 sm:shadow-xs sm:has-[>svg]:px-3 md:w-40 lg:w-64"
        onClick={() => setShowCommandPalette(true)}
      >
        <Search className="size-5 sm:mr-2 md:size-4" />
        <span className="hidden md:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute top-2 right-1.5 hidden h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </div>
  );
}
