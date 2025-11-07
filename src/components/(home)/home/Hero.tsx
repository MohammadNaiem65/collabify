import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="container-center mx-auto space-y-16 py-24 text-center md:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-primary dark:text-chart-1">All In One</span>
          <br />
          Project Management Platform
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          The all-in-one platform for freelancers and small teams to manage
          projects, collaborate in real-time, and deliver exceptional results.
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <Link href={"/"}>
            <Button size={"lg"} className="gap-2">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"outline"} size={"lg"}>
              View Demo
            </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl rounded-md bg-slate-200/75 p-4 shadow-xl dark:bg-slate-800">
        <Image
          className="rounded-sm border border-gray-100"
          src="/dashboard.png"
          alt="hero image"
          width={896}
          height={504}
          loading="eager"
        />
      </div>
    </header>
  );
};

export default Hero;
