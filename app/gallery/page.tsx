import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Gallery from "../../components/Gallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Chilkur Farmhouse Luxury Farm Stay",
  description:
    "Browse the Chilkur Farmhouse photo gallery — luxury rooms, private pool, organic farm, bonfire evenings, and dining spaces near Chilkur Balaji Temple, Hyderabad.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <PageShell>
      <Gallery />
    </PageShell>
  );
}
