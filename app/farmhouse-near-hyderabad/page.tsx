import type { Metadata } from "next";
import SeoLanding from "../../components/SeoLanding";

export const metadata: Metadata = {
  title: "Farmhouse Near Hyderabad | Luxury Weekend Farm Stay",
  description:
    "Searching for a farmhouse near Hyderabad? Chilkur Farmhouse is a luxury farm stay with private pool, bonfire & organic farm, just 30 km from the city near Chilkur Balaji Temple. Book now.",
  keywords: [
    "farmhouse near hyderabad",
    "luxury farmhouse hyderabad",
    "farm stay near hyderabad",
    "farmhouse with pool hyderabad",
    "private farmhouse hyderabad",
  ],
  alternates: { canonical: "/farmhouse-near-hyderabad" },
};

export default function Page() {
  return (
    <SeoLanding
      h1="Farmhouse Near Hyderabad – Luxury Weekend Escape"
      intro="Chilkur Farmhouse is a luxury farmhouse near Hyderabad, located just about 30 km from the city in serene Chilkur. With a private pool, bonfire courtyard, organic farm, and premium interiors, it is the perfect weekend retreat for families and groups looking to swap the city rush for nature, privacy, and comfort."
      highlights={[
        "Only ~30 km from Hyderabad city",
        "Private pool & bonfire nights",
        "Whole-property private bookings",
        "Organic farm experience",
        "Modern kitchen & WiFi",
        "Family & group friendly",
      ]}
      sections={[
        {
          heading: "The ideal weekend farmhouse near Hyderabad",
          body: "When you need to disconnect without travelling far, our farmhouse near Hyderabad delivers a complete change of pace. Arrive in under an hour and step into three acres of green calm. Swim, relax, explore the farm, and enjoy uninterrupted time with the people who matter — all within easy reach of the city.",
        },
        {
          heading: "Luxury comfort meets countryside charm",
          body: "Every detail is designed for a premium stay: plush bedding, spacious living areas, a fully equipped kitchen, reliable high-speed WiFi, and ample secure parking. Our on-site caretaker ensures everything runs smoothly so you can focus entirely on relaxing.",
        },
        {
          heading: "Easy to reach, hard to leave",
          body: "Set near Chilkur Balaji Temple in Moinabad mandal, the farmhouse is conveniently connected by road from Gachibowli, the Financial District, and the ORR. Combine your stay with visits to Osman Sagar Lake, Himayat Sagar, and Mrugavani National Park for a complete weekend getaway near Hyderabad.",
        },
      ]}
    />
  );
}
