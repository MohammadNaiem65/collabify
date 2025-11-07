"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";

export default function CTASection() {
  return (
    <section className="container mx-auto py-24 md:py-32">
      <div className="flex flex-col items-center gap-4 rounded-xl border bg-card p-12 text-center shadow-lg">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to get started?
        </h2>
        <p className="max-w-[600px] text-muted-foreground sm:text-lg">
          Join thousands of teams already using Collabify to manage their
          projects and collaborate effectively.
        </p>
        <Link href="/register">
          <Button size="lg" className="mt-4 gap-2">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
