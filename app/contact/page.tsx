import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Contact from "../../components/Contact";
import GoogleMap from "../../components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact Us | Chilkur Farmhouse Near Hyderabad",
  description:
    "Contact Chilkur Farmhouse to plan your luxury farm stay near Chilkur Balaji Temple, Hyderabad. Call, WhatsApp, or email us — quick responses and easy booking.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
      <GoogleMap />
    </PageShell>
  );
}
