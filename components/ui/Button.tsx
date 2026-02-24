import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  asChild?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-secondary text-white hover:bg-secondary/90 border-transparent",
  secondary: "bg-primary text-white hover:bg-primary/90 border-transparent",
  outline: "border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-50",
};

export default function Button({
  variant = "primary",
  className,
  asChild,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

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
