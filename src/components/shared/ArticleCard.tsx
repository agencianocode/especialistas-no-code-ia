import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface ArticleCardProps {
  title: string;
  tag?: string;
  date?: string;
  excerpt?: string;
  featured?: boolean;
}

export default function ArticleCard({ title, tag, date, excerpt, featured }: ArticleCardProps) {
  if (featured) {
    return (
      <Card className="group col-span-2 row-span-2 h-full hover:shadow-[var(--shadow-elevated)] transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          {(tag || date) && (
            <CardDescription>
              {tag}{tag && date ? " · " : ""}{date}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {excerpt && <p className="mb-4 text-muted-foreground">{excerpt}</p>}
          <Button variant="link" className="p-0">
            Leer más <ArrowRight className="ml-1" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-[var(--shadow-elevated)] transition-shadow h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {(tag || date) && (
          <CardDescription>
            {tag}{tag && date ? " · " : ""}{date}
          </CardDescription>
        )}
      </CardHeader>
      {excerpt && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
      )}
    </Card>
  );
}
