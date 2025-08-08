import React from "react";
import { LucideIcon, BookOpen, LayoutDashboard, Users, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureTileProps {
  title: string;
  description: string;
  Icon?: LucideIcon;
}

const iconsMap: Record<string, LucideIcon> = {
  book: BookOpen,
  dashboard: LayoutDashboard,
  users: Users,
  chat: MessageSquare,
};

export default function FeatureTile({ title, description, Icon = BookOpen }: FeatureTileProps) {
  const Ico = Icon ?? iconsMap.book;
  return (
    <Card className="bg-background/5 backdrop-blur border-border/40">
      <CardContent className="p-5">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-background/20">
          <Ico className="h-5 w-5" />
        </div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
