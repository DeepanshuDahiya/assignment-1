"use client";

import Link from "next/link";
import Button from "./UI/Button";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Now available for businesses
          </div>

          {/* Main heading */}
          <h1 className="mb-6 max-w-4xl text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Automate Your WhatsApp
          </h1>

          {/* Subtext */}
          <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Send bulk messages, auto-reply, and schedule chats using AutoBot WA.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="#features">
              <Button
                size="lg"
                className="group h-12 bg-accent px-8 text-base font-semibold text-accent-foreground cursor-pointer hover:bg-accent/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-border px-8 text-base font-semibold hover:bg-secondary bg-transparent cursor-pointer"
              >
                View Pricing
              </Button>
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              className="h-5 w-5 text-accent"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No credit card required • Free 14-day trial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
