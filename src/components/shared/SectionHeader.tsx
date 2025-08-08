import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  href,
  linkLabel = "Ver todos",
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-6 flex flex-col items-center gap-2 text-center md:mb-8", className)}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
      {href && (
        <div className="mt-3">
          <Button asChild variant="link" className="text-base">
            <a href={href} aria-label={`${linkLabel} ${title}`}>
              {linkLabel}
              <ArrowRight className="ml-1" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
