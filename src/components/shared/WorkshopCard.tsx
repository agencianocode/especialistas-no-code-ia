import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WorkshopCardProps {
  title: string;
  instructor: string;
  role?: string;
  avatar?: string;
  date?: string;
  duration?: string;
  ctaLabel?: string;
}

export default function WorkshopCard({
  title,
  instructor,
  role,
  avatar = "/placeholder.svg",
  date,
  duration,
  ctaLabel = "Reserva tu plaza",
}: WorkshopCardProps) {
  return (
    <Card className="hover:shadow-[var(--shadow-elevated)] transition-shadow">
      <CardContent className="flex items-center gap-4 p-4">
        <img src={avatar} alt={`Avatar de ${instructor}`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
        <div className="flex-1">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">{instructor}{role ? ` · ${role}` : ""}</p>
          {(date || duration) && (
            <p className="mt-1 text-xs text-muted-foreground">{date}{date && duration ? " · " : ""}{duration}</p>
          )}
        </div>
        <Button variant="soft" size="sm">{ctaLabel}</Button>
      </CardContent>
    </Card>
  );
}
