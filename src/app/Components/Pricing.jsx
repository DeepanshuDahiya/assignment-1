"use client";

import { Check } from "lucide-react";
import Button from "./UI/Button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 1,000 messages/month",
      "Basic auto-reply",
      "Chat scheduler",
      "Email support",
      "1 WhatsApp account",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For growing businesses with advanced needs",
    features: [
      "Up to 10,000 messages/month",
      "Advanced auto-reply with AI",
      "Chat scheduler & automation flows",
      "Contact segments",
      "Analytics dashboard",
      "Priority support",
      "Up to 5 WhatsApp accounts",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "For enterprises with unlimited scale",
    features: [
      "Unlimited messages",
      "AI-powered automation",
      "Advanced automation flows",
      "Unlimited contact segments",
      "Advanced analytics & reports",
      "24/7 dedicated support",
      "Unlimited WhatsApp accounts",
      "Custom integrations",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a
            14-day free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl border transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 ${
                plan.popular
                  ? "border-accent shadow-lg shadow-accent/20 scale-105"
                  : "border-border hover:border-accent/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 cursor-pointer ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
