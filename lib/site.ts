/**
 * Central site configuration.
 * Update business details, media paths, and content here.
 * Drop real photos in /public/images and videos in /public/videos
 * matching the file names referenced below.
 */

export const site = {
  name: "Chilkur Balaji Lake View Villa",
  legalName: "Chilkur Balaji Lake View Villa",
  tagline: "A Peaceful 2 BHK Villa Beside Chilkur Balaji Temple",
  description:
    "Chilkur Balaji Lake View Villa is a serene, well-maintained 2 BHK villa just 200 metres from the Chilkur Balaji Temple, on the outskirts of Hyderabad, Telangana. Spacious air-conditioned rooms, a large hall with TV, a fully equipped kitchen, and surroundings full of guava orchards and peacocks make it the perfect calm getaway for families and small gatherings.",
  url: "https://www.chilkurfarmhouse.in",
  domain: "www.chilkurfarmhouse.in",
  locale: "en_IN",

  // Logo — drop your file at public/images/logo.png (optional).
  // The navbar/footer fall back to a "CF" monogram if not present.
  logo: "/images/logo.png",
  hasLogo: true, // set to true once you add a real logo file

  // Contact
  phonePrimary: "+919000000000",
  phoneSecondary: "+919000000001",
  phoneDisplay: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "stay@chilkurfarmhouse.in",

  // Address
  address: {
    street: "Chilkur Village, Moinabad Mandal",
    locality: "Chilkur",
    region: "Telangana",
    postalCode: "501504",
    country: "IN",
    full: "Chilkur Village, Moinabad Mandal, Ranga Reddy District, Telangana 501504",
  },

  geo: { lat: 17.3554444, lng: 78.2986393 },

  maps: {
    embed:
      "https://www.google.com/maps?q=17.3554444,78.2986393&z=16&hl=en&output=embed",
    directions: "https://www.google.com/maps/place/Chilkur+Balaji+Lake+View+Villa/@17.3554444,78.2986393,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb95000a287d49:0x31fd0aa31fdbf258!8m2!3d17.3554444!4d78.2986393!16s%2Fg%2F11wnmx928s",
  },

  social: {
    instagram: "https://www.instagram.com/chilkurfarmhouse",
    facebook: "https://www.facebook.com/chilkurfarmhouse",
    youtube: "https://www.youtube.com/@chilkurfarmhouse",
  },

  // Review / listing profiles — replace with your real profile links.
  reviews: {
    google:
      "https://www.google.com/maps/place/Chilkur+Balaji+Lake+View+Villa/@17.3555284,78.2986472,15z/data=!4m27!1m13!3m12!1s0x3bcb95000a287d49:0x31fd0aa31fdbf258!2sChilkur+Balaji+Lake+View+Villa!5m4!1s2026-06-15!2i8!4m1!1i2!8m2!3d17.3554444!4d78.2986393!10e5!16s%2Fg%2F11wnmx928s!3m12!1s0x3bcb95000a287d49:0x31fd0aa31fdbf258!5m4!1s2026-06-15!2i8!4m1!1i2!8m2!3d17.3554444!4d78.2986393!9m1!1b1!16s%2Fg%2F11wnmx928s?entry=ttu",
    bookingDotCom: "", // e.g. https://www.booking.com/hotel/in/chilkur-farmhouse.html
    airbnb: "", // e.g. https://www.airbnb.co.in/rooms/XXXXXXXX
  },

  gaId: "G-XXXXXXXXXX",
  googleVerification: "REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN",

  checkinTime: "13:00",
  checkoutTime: "11:00",
  priceRange: "₹₹₹",

  stats: [
    { value: 4.8, suffix: "/5", label: "Google Rating", decimals: 1 },
    { value: 19, suffix: "+", label: "Google Reviews" },
    { value: 200, suffix: " m", label: "From Balaji Temple" },
    { value: 2, suffix: " BHK", label: "Spacious Villa" },
  ],
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Attractions", href: "/#attractions" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const seoLinks: NavLink[] = [
  { label: "Farmhouse in Chilkur", href: "/farmhouse-in-chilkur" },
  { label: "Farmhouse Near Hyderabad", href: "/farmhouse-near-hyderabad" },
  { label: "Farmhouse for Rent in Chilkur", href: "/farmhouse-for-rent-in-chilkur" },
  { label: "Weekend Getaway Near Hyderabad", href: "/weekend-getaway-near-hyderabad" },
  { label: "Stay Near Chilkur Balaji Temple", href: "/stay-near-chilkur-balaji-temple" },
];

export type GalleryCategory = "All" | "Rooms" | "Pool" | "Farm" | "Events" | "Dining";

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
};

export const gallery: GalleryItem[] = [
  { src: "/images/hero.jpg", alt: "Chilkur Farmhouse at golden hour", category: "Farm" },
  { src: "/images/pool-1.jpg", alt: "Private swimming pool surrounded by greenery", category: "Pool" },
  { src: "/images/room-master.jpg", alt: "Luxury master bedroom with garden view", category: "Rooms" },
  { src: "/images/room-twin.jpg", alt: "Spacious twin bedroom", category: "Rooms" },
  { src: "/images/bonfire.jpg", alt: "Evening bonfire setup under the stars", category: "Events" },
  { src: "/images/dining.jpg", alt: "Open-air dining area", category: "Dining" },
  { src: "/images/farm-1.jpg", alt: "Organic farm and orchard", category: "Farm" },
  { src: "/images/pool-2.jpg", alt: "Poolside lounge deck", category: "Pool" },
  { src: "/images/lawn.jpg", alt: "Manicured event lawn", category: "Events" },
  { src: "/images/kitchen.jpg", alt: "Fully equipped modern kitchen", category: "Dining" },
  { src: "/images/farm-2.jpg", alt: "Cattle and nature trail", category: "Farm" },
  { src: "/images/living.jpg", alt: "Cozy luxury living room", category: "Rooms" },
];

export type ShowcaseItem = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

export const showcase: ShowcaseItem[] = [
  {
    src: "/images/room-master.jpg",
    title: "Master Suite",
    subtitle: "Sleeps 3 · Garden View",
    description:
      "A serene king-bed suite with premium linens, an ensuite bathroom, and floor-to-ceiling views of the orchard.",
  },
  {
    src: "/images/pool-1.jpg",
    title: "Private Pool Deck",
    subtitle: "Exclusive Access",
    description:
      "Take a refreshing dip in your private pool, framed by palms and a sun-drenched lounge deck.",
  },
  {
    src: "/images/villa.jpg",
    title: "Family Villa",
    subtitle: "Sleeps 12 · Full Kitchen",
    description:
      "A spacious villa with multiple bedrooms, a living lounge, and a modern kitchen — perfect for large groups.",
  },
  {
    src: "/images/bonfire.jpg",
    title: "Bonfire Courtyard",
    subtitle: "Evenings Under the Stars",
    description:
      "Gather around a crackling bonfire with music, barbecue, and unforgettable countryside nights.",
  },
];

export const videos = [
  { src: "/videos/walkthrough.mp4", title: "Property Walkthrough", poster: "/images/hero.jpg" },
  { src: "/videos/drone.mp4", title: "Aerial Drone Tour", poster: "/images/farm-1.jpg" },
  { src: "/videos/experience.mp4", title: "Guest Experience", poster: "/images/bonfire.jpg" },
];

export type Testimonial = {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  source: "Google" | "Booking.com" | "Guest";
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sanket Shenoy",
    location: "Local Guide · Google",
    avatar: "/images/guest-1.jpg",
    rating: 5,
    source: "Google",
    quote:
      "A well maintained peaceful 2 BHK villa. Balaji temple is 200 meters away and can be reached in 5–10 mins walking. There is a huge hall with TV, AC, and it's well lit with a kitchen attached.",
  },
  {
    name: "Nayan Saha",
    location: "Local Guide · Google",
    avatar: "/images/guest-2.jpg",
    rating: 5,
    source: "Google",
    quote:
      "Truly a gem of a place with exceptional support from the host and caretaker. If you want to stay close to Balaji temple this place would be the best choice. Calm and quiet ambiance — best for families.",
  },
  {
    name: "V K",
    location: "Family Stay · Google",
    avatar: "/images/guest-3.jpg",
    rating: 5,
    source: "Google",
    quote:
      "The rooms are extremely spacious, clean and spot on with air conditioners in all the rooms. There are facilities to make tea, an RO filter, and a fridge. An ideal place for a family stay for any occasion.",
  },
  {
    name: "Amit Chauhan",
    location: "Local Guide · Google",
    avatar: "/images/guest-4.jpg",
    rating: 5,
    source: "Google",
    quote:
      "I was searching for a place for a get-together of my close friends and this villa turned out to be perfect. The location is close to the main road and the surroundings are peaceful with enough parking space.",
  },
  {
    name: "Brandon & Tania Alaraju",
    location: "Wedding Stay · Google",
    avatar: "/images/guest-5.jpg",
    rating: 5,
    source: "Google",
    quote:
      "We booked and stayed here for a wedding. The villa was clean and cozy, and Vijay the caretaker was really helpful and polite. We had a good, comfortable stay. Thank you!",
  },
  {
    name: "Mahadev",
    location: "Local Guide · Google",
    avatar: "/images/guest-6.jpg",
    rating: 5,
    source: "Google",
    quote:
      "New house surrounded by peacocks and guava orchards. Very much a village with lots of greenery. The owner is good — a lovely, refreshing stay close to nature.",
  },
];

export type Attraction = {
  name: string;
  distance: string;
  description: string;
  image: string;
};

export const attractions: Attraction[] = [
  {
    name: "Chilkur Balaji Temple",
    distance: "2 km",
    description:
      "The famous 'Visa Balaji' temple, one of the most visited spiritual landmarks near Hyderabad.",
    image: "/images/attraction-temple.jpg",
  },
  {
    name: "Osman Sagar (Gandipet) Lake",
    distance: "8 km",
    description:
      "A scenic reservoir and popular picnic spot with boating and lush surroundings.",
    image: "/images/attraction-lake.jpg",
  },
  {
    name: "Himayat Sagar Lake",
    distance: "10 km",
    description:
      "Tranquil waters and beautiful sunset views, ideal for a peaceful day trip.",
    image: "/images/attraction-himayat.jpg",
  },
  {
    name: "Mrugavani National Park",
    distance: "12 km",
    description:
      "A protected forest reserve rich with wildlife, nature trails, and birdwatching.",
    image: "/images/attraction-park.jpg",
  },
];

/* ----------------------------------------------------------------
   Room / stay details & pricing
   Update room types, occupancy, and weekday/weekend prices below.
-----------------------------------------------------------------*/
export type Room = {
  name: string;
  image: string;
  occupancy: string;
  beds: string;
  weekdayPrice: string; // e.g. "₹12,000" — leave "On request" if not set
  weekendPrice: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    name: "Whole Property (Exclusive)",
    image: "/images/hero.jpg",
    occupancy: "Up to 12 guests",
    beds: "Multiple bedrooms",
    weekdayPrice: "On request",
    weekendPrice: "On request",
    features: [
      "Private pool access",
      "Bonfire & barbecue",
      "Full kitchen",
      "Entire farm & lawn",
    ],
  },
  {
    name: "Master Suite",
    image: "/images/room-master.jpg",
    occupancy: "2–3 guests",
    beds: "1 King bed",
    weekdayPrice: "On request",
    weekendPrice: "On request",
    features: ["Garden view", "Ensuite bathroom", "Premium linens", "AC"],
  },
  {
    name: "Family Room",
    image: "/images/room-twin.jpg",
    occupancy: "4 guests",
    beds: "2 Queen beds",
    weekdayPrice: "On request",
    weekendPrice: "On request",
    features: ["Spacious layout", "Attached bathroom", "AC", "Farm view"],
  },
];

// Toggle to true once you receive confirmed prices from the client.
export const showPricing = false;

/* ----------------------------------------------------------------
   Frequently Asked Questions
   Replace answers with the client's confirmed policies.
-----------------------------------------------------------------*/
export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is from 1:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available on request, subject to availability.",
  },
  {
    question: "Is the whole property booked privately?",
    answer:
      "Yes. Chilkur Farmhouse is rented exclusively to one group at a time, so you enjoy complete privacy across the entire property, pool, and farm.",
  },
  {
    question: "How many guests can stay?",
    answer:
      "The farmhouse comfortably accommodates up to 12 guests. Please contact us for larger groups or day-outing arrangements.",
  },
  {
    question: "Is the swimming pool private?",
    answer:
      "Yes, the swimming pool is private and exclusively for your group during your stay.",
  },
  {
    question: "Do you allow events, parties, or celebrations?",
    answer:
      "Yes, the property is ideal for birthdays, anniversaries, family functions, and small get-togethers. Please inform us in advance so we can help you plan.",
  },
  {
    question: "Is food provided, or can we cook ourselves?",
    answer:
      "A fully equipped kitchen is available for self-catering. Meal arrangements or a cook can be organised on request — please ask while booking.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, ample free and secure parking is available on-site for cars and larger vehicles.",
  },
  {
    question: "How far is it from Hyderabad and Chilkur Balaji Temple?",
    answer:
      "The farmhouse is around 30 km from Hyderabad city and just 2 km from Chilkur Balaji Temple, easily reachable by road.",
  },
];
