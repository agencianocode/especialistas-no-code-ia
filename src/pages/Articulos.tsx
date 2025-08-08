import SectionHeader from "@/components/shared/SectionHeader";
import ArticleCard from "@/components/shared/ArticleCard";

export default function Articulos() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artículos — IA al Día",
  };

  const articles = [
    { title: "El potencial doble de Gemini", tag: "Noticias", date: "Hoy" },
    { title: "Lanzamientos clave de la semana", tag: "Actualidad", date: "Ayer" },
    { title: "Cómo elegir la mejor herramienta de IA", tag: "Guías", date: "Ayer" },
    { title: "Riesgos y oportunidades de los agentes", tag: "Análisis", date: "Esta semana" },
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SectionHeader title="Artículos" subtitle="Explora todas las publicaciones" />
      <div className="grid gap-6 md:grid-cols-3">
        <ArticleCard featured title={articles[0].title} tag={articles[0].tag} date={articles[0].date} excerpt="Análisis detallado con ejemplos y recursos." />
        {articles.slice(1).map((a, i) => (
          <ArticleCard key={i} title={a.title} tag={a.tag} date={a.date} />
        ))}
      </div>
    </main>
  );
}
