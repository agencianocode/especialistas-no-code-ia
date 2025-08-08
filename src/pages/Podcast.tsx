import SectionHeader from "@/components/shared/SectionHeader";
import AudioPlaylistCard from "@/components/shared/AudioPlaylistCard";

export default function Podcast() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Podcast — IA al Día",
  };

  const episodes = [
    { title: "Cómo la IA está cambiando el trabajo del conocimiento" },
    { title: "Modelos multimodales: casos reales" },
    { title: "Evaluando agentes con métricas prácticas" },
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SectionHeader title="Podcast" subtitle="Resumen semanal de lo más importante" />
      <AudioPlaylistCard title="Episodios recientes" subtitle="Actualizado cada semana" episodes={episodes} />
    </main>
  );
}
