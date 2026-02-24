import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
};

export default function Section({
  children,
  className,
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container-wide">{children}</div>
    </Component>
  );
}
