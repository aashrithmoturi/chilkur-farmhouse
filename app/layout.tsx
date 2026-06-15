import type { Metadata } from "next";
import { Playfair_Display, Mulish } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider, themeInitScript } from "../components/theme/ThemeProvider";
import { site } from "../lib/site";
import "./globals.css";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Chilkur Balaji Lake View Villa | 2 BHK Stay Near Chilkur Balaji Temple",
    template: "%s | Chilkur Balaji Lake View Villa",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "chilkur balaji lake view villa",
    "villa near chilkur balaji temple",
    "stay near chilkur balaji temple",
    "2 bhk villa chilkur",
    "farmhouse near hyderabad",
    "farmhouse for rent in chilkur",
    "weekend getaway near hyderabad",
    "villa for family stay hyderabad",
    "accommodation near chilkur balaji temple",
    "moinabad villa",
    "villa for rent chilkur",
    "family villa hyderabad",
    "chilkur farmhouse",
    "stay near chilkur temple hyderabad",
    "guava orchard villa hyderabad",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    title: "Chilkur Balaji Lake View Villa | 2 BHK Stay Near the Temple",
    description:
      "A peaceful, well-maintained 2 BHK villa just 200 m from Chilkur Balaji Temple, Hyderabad. AC rooms, full kitchen, and calm orchard surroundings — ideal for families.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: site.locale,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Chilkur Balaji Lake View Villa near Chilkur Balaji Temple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chilkur Balaji Lake View Villa | 2 BHK Stay Near the Temple",
    description:
      "A peaceful 2 BHK villa just 200 m from Chilkur Balaji Temple, Hyderabad. AC rooms, full kitchen & calm orchard surroundings.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  verification: { google: site.googleVerification },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1311" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Resort", "LodgingBusiness"],
  name: site.legalName,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/hero.jpg`,
  telephone: [site.phonePrimary, site.phoneSecondary],
  email: site.email,
  priceRange: site.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  checkinTime: site.checkinTime,
  checkoutTime: site.checkoutTime,
  hasMap: site.maps.directions,
  sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "19",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Air Conditioned Rooms" },
    { "@type": "LocationFeatureSpecification", name: "Fully Equipped Kitchen" },
    { "@type": "LocationFeatureSpecification", name: "RO Drinking Water" },
    { "@type": "LocationFeatureSpecification", name: "Refrigerator" },
    { "@type": "LocationFeatureSpecification", name: "Television" },
    { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    { "@type": "LocationFeatureSpecification", name: "Family Friendly" },
  ],
  containsPlace: [
    { "@type": "TouristAttraction", name: "Chilkur Balaji Temple" },
    { "@type": "TouristAttraction", name: "Osman Sagar Lake" },
  ],
  areaServed: ["Chilkur", "Moinabad", "Hyderabad", "Ranga Reddy", "Telangana"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <GoogleAnalytics gaId={site.gaId} />
    </html>
  );
}
