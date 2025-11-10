import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThemeToggle from "../../shared/ThemeToggler";

const Header = () => {
  return (
    <header className="sticky top-0 border-b border-gray-200 bg-background/30 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/60 dark:text-white">
      <div className="container-center flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Image
            className="size-8"
            src="/logo.png"
            alt="collabify logo"
            width={32}
            height={32}
          />
          <h2 className="text-2xl font-bold"> Collabify </h2>
        </div>
        <div className="flex items-center">
          {/*todo: i will separte this later as a standalone components */}

          <ThemeToggle />

          <Button variant={"ghost"}>Log in </Button>
          <Button>Get started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
