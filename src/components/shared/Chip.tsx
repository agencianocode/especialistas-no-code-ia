import React from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export default function Chip({ selected, className, children, ...props }: ChipProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-colors",
        selected
          ? "bg-primary/10 text-primary border-primary/30"
          : "bg-muted text-muted-foreground border-border hover:bg-muted/80",
        className
      )}
    >
      {children}
    </button>
  );
}
