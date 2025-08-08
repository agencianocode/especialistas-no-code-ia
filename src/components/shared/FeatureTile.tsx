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
    <Card className="bg-slate-900 border-slate-700 text-white">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 border border-slate-600">
          <Ico className="h-6 w-6 text-purple-400" />
        </div>
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
