import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TrustStats from "../components/TrustStats";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import WhatsAppButton from "../components/WhatsAppButton";
import StickyMobileBooking from "../components/StickyMobileBooking";

// Below-the-fold sections are dynamically imported to improve LCP.
const PropertyShowcase = dynamic(() => import("../components/PropertyShowcase"));
const Rooms = dynamic(() => import("../components/Rooms"));
const Videos = dynamic(() => import("../components/Videos"));
const Testimonials = dynamic(() => import("../components/Testimonials"));
const Attractions = dynamic(() => import("../components/Attractions"));
const FAQ = dynamic(() => import("../components/FAQ"));
const BookingCTA = dynamic(() => import("../components/BookingCTA"));
const GoogleMap = dynamic(() => import("../components/GoogleMap"));
const Contact = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrustStats />
        <Amenities />
        <PropertyShowcase />
        <Rooms />
        <Gallery />
        <Videos />
        <Testimonials />
        <Attractions />
        <FAQ />
        <BookingCTA />
        <GoogleMap />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileBooking />
    </>
  );
}
