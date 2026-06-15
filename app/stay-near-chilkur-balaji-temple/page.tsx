import type { Metadata } from "next";
import SeoLanding from "../../components/SeoLanding";

export const metadata: Metadata = {
  title: "Stay Near Chilkur Balaji Temple | Farmhouse Accommodation",
  description:
    "Looking for a stay near Chilkur Balaji Temple? Chilkur Farmhouse offers comfortable, private farmhouse accommodation just 2 km from the temple, with pool, bonfire & organic farm. Book your stay.",
  keywords: [
    "stay near chilkur balaji temple",
    "accommodation near chilkur temple",
    "hotel near chilkur balaji temple",
    "rooms near chilkur temple",
    "farmhouse near chilkur balaji temple",
  ],
  alternates: { canonical: "/stay-near-chilkur-balaji-temple" },
};

export default function Page() {
  return (
    <SeoLanding
      h1="Stay Near Chilkur Balaji Temple – Comfort & Convenience"
      intro="Chilkur Farmhouse offers the perfect stay near Chilkur Balaji Temple, located just 2 km from the famous 'Visa Balaji' shrine. Combine your temple visit with a peaceful, private farm stay featuring a swimming pool, bonfire courtyard, organic farm, and well-appointed rooms — ideal for devotees, families, and pilgrims seeking comfort close to the temple."
      highlights={[
        "Only 2 km from Chilkur Balaji Temple",
        "Private & family-friendly",
        "Swimming pool & bonfire",
        "Spacious rooms for groups",
        "Self-catering kitchen",
        "Free parking on-site",
      ]}
      sections={[
        {
          heading: "Ideal accommodation for temple visitors",
          body: "Many devotees travel to Chilkur Balaji Temple for darshan and the traditional 108 pradakshina. Our nearby farmhouse gives you a restful, private base just minutes away, so you can visit comfortably and unwind afterwards in a serene natural setting rather than a crowded hotel.",
        },
        {
          heading: "More than just a place to sleep",
          body: "Beyond its convenient location, our stay near Chilkur Balaji Temple is a destination in itself. Enjoy the private pool, relax on the lawn, explore the organic farm, and gather around a bonfire in the evening. It is the perfect blend of spiritual visit and leisure getaway.",
        },
        {
          heading: "Easy access from Hyderabad",
          body: "Set in Chilkur village, Moinabad mandal, the farmhouse is around 30 km from Hyderabad and well-connected by road. Nearby Osman Sagar and Himayat Sagar lakes make it easy to extend your temple trip into a full, refreshing weekend.",
        },
      ]}
    />
  );
}
