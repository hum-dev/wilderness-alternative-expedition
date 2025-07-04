import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Safaris = () => {
  const safaris = [
    {
      name: "Maasai Mara",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040ed2?w=800&h=600&fit=crop",
      description: "Home of the Great Migration and the Big Five, the Mara is Kenya's premier safari park.",
      link: "/safaris/maasai-mara"
    },
    {
      name: "Amboseli",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      description: "Famous for large elephant herds and stunning views of Mount Kilimanjaro.",
      link: "/safaris/amboseli"
    },
    {
      name: "Samburu",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop",
      description: "Experience rare species and the rich culture of Northern Kenya in Samburu Reserve.",
      link: "/safaris/samburu"
    },
    {
      name: "Meru",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=600&fit=crop",
      description: "A hidden gem where Elsa the lioness of 'Born Free' was raised—raw, wild, and lush.",
      link: "/safaris/meru"
    },
    {
      name: "Ol Pejeta",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=600&fit=crop",
      description: "Home to endangered rhinos, chimpanzees, and luxurious conservancy experiences.",
      link: "/safaris/ol-pejeta"
    },
    {
      name: "Nairobi National Park",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&h=600&fit=crop",
      description: "Wildlife against a city skyline. The only national park within a capital city.",
      link: "/safaris/nairobi-park"
    }
  ];

  const experiences = [
    "Spot the Big Five and track big cats in the Masai Mara with expert Maasai guides",
    "Witness the Great Migration from July to October",
    "Expert-guided game drives, walking safaris and hot air balloon safaris",
    "Discover Kenya's rhino population in Lewa Wildlife Conservancy",
    "Combine your safari with a relaxing beach stay",
    "Explore Chyulu Hills on horseback or mountain bike"
  ];

  return (
    <>
      <Helmet>
        <title>Discover Kenya's Classic Safari Experiences for 2025 / 2026 - Wilderness Alternative Expedition</title>
        <meta name="description" content="Experience Kenya's breathtaking landscapes and unrivaled wildlife. From Maasai Mara to Amboseli, discover authentic safari encounters with the Big Five and Great Migration." />
        <meta name="keywords" content="Kenya safari, Maasai Mara safari, Big Five, Great Migration, Amboseli elephants, Samburu wildlife, Kenya national parks" />
        <meta property="og:title" content="Discover Kenya's Classic Safari Experiences for 2025 / 2026" />
        <meta property="og:description" content="Kenya is the land of breathtaking landscapes and unrivaled wildlife experiences." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-adventure text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Kenya's Classic Safari Experiences for 2025 / 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Kenya is the land of breathtaking landscapes and unrivaled wildlife experiences. From the world-renowned Maasai Mara to the snow-capped peaks of Mount Kenya, Kenya offers the most authentic safari encounters. Whether it's spotting the Big Five or witnessing the Great Migration, Kenya is the heart of Africa's safari tradition.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Wilderness Alternative Kenya Safaris
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  Kenya is the birthplace of safari holidays. The word 'safari' itself even stems from the local Swahili dialect for 'journey'. Kenya safari holidays are no ordinary journeys. Picture wildlife roaming across grassy plains against the backdrop of majestic snow-capped mountains, where nature's wilderness meets absolute luxury.
                </p>
                <p className="text-lg mb-8">
                  Embark on an extraordinary Kenya safari, where you can witness everything from the big five and the great migration to river safaris and sundowners—enjoying a refreshing drink while watching the sun set over the African bush. Despite being Africa's most celebrated safari destination, Kenya offers a variety of luxury experiences. With our first-hand knowledge, we can help you avoid the mass market, ensuring an exclusive and unforgettable wildlife adventure.
                </p>
              </div>

              {/* Safari Experience */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">The Kenya Safari Holiday Experience</h3>
                <div className="grid gap-4">
                  {experiences.map((experience, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{experience}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safari Destinations Gallery */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Safari Destinations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safaris.map((safari, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-adventure transition-all duration-300 group cursor-pointer">
                  <Link to={safari.link}>
                    <div className="relative overflow-hidden">
                      <img
                        src={safari.image}
                        alt={safari.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">{safari.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {safari.description}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Safaris;