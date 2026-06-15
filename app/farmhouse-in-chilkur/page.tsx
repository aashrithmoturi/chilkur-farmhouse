import type { Metadata } from "next";
import SeoLanding from "../../components/SeoLanding";

export const metadata: Metadata = {
  title: "Farmhouse in Chilkur | Luxury Private Farm Stay with Pool",
  description:
    "Looking for a farmhouse in Chilkur? Chilkur Farmhouse offers a luxury private farm stay with swimming pool, bonfire, and organic farm near Chilkur Balaji Temple, Hyderabad. Book today.",
  keywords: [
    "farmhouse in chilkur",
    "chilkur farmhouse",
    "private farmhouse chilkur",
    "luxury farmhouse chilkur",
    "farmhouse with pool chilkur",
  ],
  alternates: { canonical: "/farmhouse-in-chilkur" },
};

export default function Page() {
  return (
    <SeoLanding
      h1="Farmhouse in Chilkur – A Private Luxury Farm Stay"
      intro="Chilkur Farmhouse is a premium private farmhouse in Chilkur, set across three acres of lush organic farmland just minutes from the famous Chilkur Balaji Temple. With a private swimming pool, bonfire courtyard, and beautifully appointed rooms, it is the ideal escape for families, friends, and celebrations seeking peace, privacy, and luxury near Hyderabad."
      highlights={[
        "Private swimming pool & sun deck",
        "Whole-property exclusive booking",
        "Bonfire & barbecue evenings",
        "Organic farm & nature trails",
        "Sleeps up to 12 guests",
        "Just 2 km from Chilkur Balaji Temple",
      ]}
      sections={[
        {
          heading: "Why choose our farmhouse in Chilkur?",
          body: "Unlike crowded resorts, our farmhouse in Chilkur is booked exclusively for one group at a time, giving you complete privacy and space. Spend your day lounging by the private pool, exploring the organic farm, or simply unwinding amid birdsong and open skies. As evening falls, gather around the bonfire for music and barbecue under a starry countryside sky.",
        },
        {
          heading: "Perfect for families, friends & celebrations",
          body: "Whether it is a family reunion, a friends' weekend, a birthday, or an intimate celebration, our Chilkur farmhouse comfortably hosts up to 12 guests. The fully equipped modern kitchen lets you self-cater or bring a chef, while the spacious lawn and living areas make hosting effortless and memorable.",
        },
        {
          heading: "A serene location near Chilkur Balaji Temple",
          body: "Located in Chilkur village, Moinabad mandal, the farmhouse sits just 2 km from the revered Chilkur Balaji Temple and a short drive from Osman Sagar and Himayat Sagar lakes. You get the tranquillity of the countryside while staying well-connected to Hyderabad — approximately 30 km from the city centre.",
        },
      ]}
    />
  );
}
