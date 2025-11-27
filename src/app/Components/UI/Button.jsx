"use client";

export default function Button({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  // Base styles
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";

  // Variants
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-border text-foreground hover:bg-secondary hover:text-secondary-foreground",
    ghost: "hover:bg-accent/10 text-foreground",
  };

  // Sizes
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
