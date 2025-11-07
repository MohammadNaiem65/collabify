"use client";

import {
  Bot,
  Calendar,
  DollarSign,
  LucideIcon,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react"; 
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features = [
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time updates and project chat.",
  },
  {
    icon: Calendar,
    title: "Smart Calendar",
    description:
      "Track deadlines, milestones, and meetings in one unified calendar.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Get intelligent suggestions for task breakdowns and project planning.",
  },
  {
    icon: DollarSign,
    title: "Billing & Invoices",
    description: "Manage payments, create invoices, and track project budgets.",
  },
  {
    icon: MessageSquare,
    title: "Project Chat",
    description: "Communicate with your team directly within each project.",
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Connect with Google Drive, Slack, Stripe, and more.",
  },
];

export default function Features() {
  return (
    <section className="container mx-auto py-24 md:py-32">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Everything you need to succeed
        </h2>
        <p className="max-w-[700px] text-muted-foreground sm:text-lg">
          Powerful features designed to help you manage projects, collaborate
          with your team, and deliver outstanding results.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
             
          >
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
