"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    quote:
      "AutoBot transformed how we communicate with customers. We've saved 20+ hours per week on repetitive messages.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Sales Director",
    quote:
      "The auto-reply feature is a game-changer. Our response time improved by 90% and customer satisfaction is at an all-time high.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Business Owner",
    quote:
      "Scheduling messages and managing contact segments has never been easier. This tool paid for itself in the first month.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-8 lg:px-12" id="testimonials">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Trusted by Businesses Worldwide
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See what our customers have to say about AutoBot WA
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Quote Icon */}
              <div className="mb-6 inline-flex rounded-full bg-accent/10 p-3">
                <Quote className="h-6 w-6 text-accent" />
              </div>

              {/* Quote Text */}
              <blockquote className="mb-8 text-base leading-relaxed text-card-foreground">
                "{testimonial.quote}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
