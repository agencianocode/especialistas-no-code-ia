import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface ArticleCardProps {
  title: string;
  tag?: string;
  date?: string;
  excerpt?: string;
  featured?: boolean;
  image?: string;
}

export default function ArticleCard({ title, tag, date, excerpt, featured, image }: ArticleCardProps) {
  const Meta = (
    <CardDescription>
      {tag}{tag && date ? " · " : ""}{date}
    </CardDescription>
  );

  if (featured) {
    return (
      <Card className="group col-span-2 row-span-2 h-full overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
        {image && (
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={image} alt={`Imagen de ${title}`} className="h-full w-full object-cover" loading="lazy" />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          {(tag || date) && Meta}
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
    <Card className="group h-full overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
      {image && (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img src={image} alt={`Miniatura de ${title}`} className="h-full w-full object-cover" loading="lazy" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {(tag || date) && Meta}
      </CardHeader>
      {excerpt && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
      )}
    </Card>
  );
}
