import { Button } from "@/components/ui/button";
import { pricing } from "@/constants";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

export default function Pricing() {
  return (
    <section className="w-full bg-muted/50 py-24 md:py-32">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[700px] text-muted-foreground sm:text-lg">
          Choose the plan that&apos;s right for you. All plans include a 14-day
          free trial.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {pricing.map((plan) => (
          <div key={plan.name}>
            <Card
              className={cn(
                "flex h-full flex-col justify-between",
                plan.popular ? "border-primary shadow-lg" : "",
              )}
            >
              <CardHeader>
                {plan.popular && (
                  <div className="mb-2 text-xs font-semibold text-primary">
                    MOST POPULAR
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/register" className="inline-block w-full">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
