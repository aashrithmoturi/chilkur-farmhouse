import type { Metadata } from "next";
import SeoLanding from "../../components/SeoLanding";

export const metadata: Metadata = {
  title: "Weekend Getaway Near Hyderabad | Chilkur Farmhouse Retreat",
  description:
    "Plan the perfect weekend getaway near Hyderabad at Chilkur Farmhouse. Private pool, bonfire nights, organic farm & nature — a luxury retreat just 30 km from the city. Book your weekend now.",
  keywords: [
    "weekend getaway near hyderabad",
    "weekend trip near hyderabad",
    "resorts near hyderabad for weekend",
    "nature retreat near hyderabad",
    "best weekend getaway hyderabad",
  ],
  alternates: { canonical: "/weekend-getaway-near-hyderabad" },
};

export default function Page() {
  return (
    <SeoLanding
      h1="Weekend Getaway Near Hyderabad – Reconnect with Nature"
      intro="Chilkur Farmhouse is one of the most relaxing weekend getaways near Hyderabad. Just about 30 km from the city, this luxury farm stay offers a private pool, bonfire evenings, an organic farm, and serene open spaces — everything you need to recharge over a weekend away from the urban hustle."
      highlights={[
        "Quick ~45 minute drive from the city",
        "Private pool & bonfire",
        "Peaceful 3-acre farmland",
        "Great for couples & families",
        "Nearby lakes & nature parks",
        "Premium, private & secure",
      ]}
      sections={[
        {
          heading: "A refreshing escape, close to home",
          body: "You don't need a long road trip to feel truly away. Our weekend getaway near Hyderabad lets you trade traffic for tranquillity in under an hour. Spend Saturday by the pool and the farm, enjoy a bonfire dinner, and wake up Sunday to fresh country air and birdsong before heading back recharged.",
        },
        {
          heading: "Activities for every kind of traveller",
          body: "Couples love the privacy and romantic bonfire evenings; families enjoy the pool, open lawns, and farm animals; friends appreciate the space to celebrate. Pair your stay with nearby highlights like Chilkur Balaji Temple, Osman Sagar Lake, and Mrugavani National Park for a well-rounded weekend.",
        },
        {
          heading: "Book your weekend retreat",
          body: "Weekends are our most requested dates, so early booking is recommended. Reserve the entire property for your group and enjoy a private, premium escape. Reach out by call or WhatsApp for instant availability and the best rates.",
        },
      ]}
    />
  );
}
