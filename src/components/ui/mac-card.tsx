import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MacCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function MacCard({
  children,
  className,
  hover = true,
  glass = false,
}: MacCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 p-6",
        glass
          ? "bg-background/60 backdrop-blur-xl backdrop-saturate-200"
          : "bg-card",
        hover &&
          "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        "shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
