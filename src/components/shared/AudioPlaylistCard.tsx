import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface AudioPlaylistCardProps {
  title: string;
  subtitle?: string;
  episodes: { title: string }[];
}

export default function AudioPlaylistCard({ title, subtitle, episodes }: AudioPlaylistCardProps) {
  return (
    <Card className="bg-gradient-to-br from-[hsl(var(--primary)/0.08)] to-[hsl(var(--primary-glow)/0.1)]">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {episodes.map((e, i) => (
            <li key={i} className="flex items-center justify-between">
              <span>• {e.title}</span>
              <Button size="sm" variant="soft" aria-label={`Reproducir ${e.title}`}>
                <Play className="mr-1" /> Reproducir
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
