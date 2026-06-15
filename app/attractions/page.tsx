import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Attractions from "../../components/Attractions";

export const metadata: Metadata = {
  title: "Nearby Attractions | Things to Do Near Chilkur Farmhouse",
  description:
    "Discover attractions near Chilkur Farmhouse — Chilkur Balaji Temple, Osman Sagar Lake, Himayat Sagar, and Mrugavani National Park. Plan the perfect Hyderabad getaway.",
  alternates: { canonical: "/attractions" },
};

export default function AttractionsPage() {
  return (
    <PageShell>
      <Attractions />
    </PageShell>
  );
}
