import type { Metadata } from "next";
import SeoLanding from "../../components/SeoLanding";

export const metadata: Metadata = {
  title: "Farmhouse for Rent in Chilkur | Daily & Weekend Bookings",
  description:
    "Rent a farmhouse in Chilkur for a day, weekend, or special occasion. Chilkur Farmhouse offers private pool, bonfire & organic farm on exclusive whole-property rental near Hyderabad. Enquire now.",
  keywords: [
    "farmhouse for rent in chilkur",
    "farmhouse on rent chilkur",
    "chilkur farmhouse rent",
    "farmhouse for day rent hyderabad",
    "rent farmhouse near hyderabad",
  ],
  alternates: { canonical: "/farmhouse-for-rent-in-chilkur" },
};

export default function Page() {
  return (
    <SeoLanding
      h1="Farmhouse for Rent in Chilkur – Exclusive Whole-Property Stays"
      intro="Rent the entire Chilkur Farmhouse for your day outing, overnight stay, or special celebration. Our exclusive whole-property rental near Hyderabad gives you complete privacy across three acres — with a private pool, bonfire courtyard, organic farm, and fully furnished rooms for up to 12 guests."
      highlights={[
        "Exclusive whole-property rental",
        "Day & overnight bookings",
        "Private pool included",
        "Ideal for events & parties",
        "Self-catering kitchen",
        "Secure parking on-site",
      ]}
      sections={[
        {
          heading: "Flexible farmhouse rental options",
          body: "Whether you want a relaxed day by the pool or a full weekend retreat, our farmhouse for rent in Chilkur adapts to your plans. Choose day-use access for picnics and get-togethers, or stay overnight to enjoy a bonfire evening and a peaceful countryside morning. The whole property is yours — no sharing, no crowds.",
        },
        {
          heading: "Perfect venue for celebrations",
          body: "Host birthdays, anniversaries, family functions, or corporate offsites in a beautiful natural setting. With a spacious lawn, music and speaker setup, barbecue facilities, and plenty of room to gather, our Chilkur farmhouse is a memorable alternative to conventional banquet halls.",
        },
        {
          heading: "Transparent booking & quick confirmation",
          body: "Renting is simple — share your preferred dates and group size, and our team confirms availability within minutes via call or WhatsApp. Located near Chilkur Balaji Temple, the farmhouse is easy to reach from anywhere in Hyderabad.",
        },
      ]}
    />
  );
}
