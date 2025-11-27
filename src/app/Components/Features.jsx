"use client";

import {
  MessageSquare,
  Reply,
  Clock,
  Users,
  BarChart3,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Bulk Messaging",
    description:
      "Send personalized messages to thousands of contacts simultaneously with high delivery rates.",
  },
  {
    icon: Reply,
    title: "Auto-Reply",
    description:
      "Set up intelligent automated responses to common questions and engage customers 24/7.",
  },
  {
    icon: Clock,
    title: "Chat Scheduler",
    description:
      "Schedule messages in advance and send them at the perfect time for maximum engagement.",
  },
  {
    icon: Users,
    title: "Contact Segments",
    description:
      "Organize contacts into smart segments for targeted campaigns and better personalization.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track message performance, delivery rates, and engagement metrics in real-time.",
  },
  {
    icon: Workflow,
    title: "Automation Flows",
    description:
      "Build complex automation workflows with triggers, conditions, and multi-step sequences.",
  },
];

export default function Features() {
  return (
    <section className="relative px-4 py-24 md:py-32" id="features">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Powerful Features for WhatsApp Automation
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to automate, scale, and optimize your WhatsApp
            business communications.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
