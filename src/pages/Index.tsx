import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Wilderness Alternative — Tailored Kilimanjaro & Safari Expeditions</title>
        <meta
          name="description"
          content="Small-group guided Kilimanjaro climbs and safari adventures across East Africa. Custom itineraries, experienced guides, and sustainable practices."
        />
        <meta name="keywords" content="Kilimanjaro trek, safari, guided expeditions, Mt Kenya, climbing, wildlife" />
        <meta property="og:title" content="Wilderness Alternative — Kilimanjaro & Safari Expeditions" />
        <meta property="og:description" content="Small-group guided Kilimanjaro climbs and safari adventures across East Africa." />
        <meta property="og:image" content="/src/assets/hero-mountain.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://wilderness-expedition.com/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
