import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  asChild?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-secondary text-white shadow-button border-transparent hover:bg-secondary-dark active:bg-secondary-dark",
  secondary:
    "bg-primary text-white shadow-button border-transparent hover:bg-primary-light active:bg-primary-dark",
  outline:
    "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400",
};

export default function Button({
  variant = "primary",
  className,
  asChild,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(base, variants[variant], className, (children as React.ReactElement<{ className?: string }>).props?.className),
    });
  }

  return (
    <button type="button" className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
