import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nairobiImg from "@/assets/nairobi park.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NairobiPark = () => {
  const tourOptions = [
    {
      name: "Morning Tour",
      pickup: "06:00 AM from your hotel or airport",
      dropoff: "Approximately 11:30 AM",
      benefits: "Recommended for cooler temperatures and a higher chance of spotting big cats"
    },
    {
      name: "Afternoon Tour", 
      pickup: "1:00 PM",
      dropoff: "Approximately 6:30 PM",
      benefits: "Ideal for soft lighting and relaxed viewing, perfect for photography"
    }
  ];

  const highlights = [
    "Home to the largest population of endangered black rhinos in Kenya - known as Kifaru Ark",
    "Private game drives with excellent chances of seeing The Big Four (lion, rhino, leopard, buffalo)",
    "Over 400 species of birds, making it a paradise for birdwatchers",
    "Guided walking trails to hippo pools with hippos and crocodiles",
    "Visit to the historic Ivory Burning Monument",
    "Wildlife viewing against the unique backdrop of Nairobi's skyline",
    "Only 10 kilometers from Nairobi city center",
    "Kenya's oldest national park, gazetted in 1946"
  ];

  const wildlifeToExpect = [
    "Lions roaming free in their natural habitat",
    "Black and white rhinos - largest population in Kenya",
    "Giraffes, buffalo, zebras, cheetahs, hyenas",
    "Impalas and various antelope species",
    "Hippos wallowing in pools",
    "Crocodiles sunning on riverbanks",
    "Over 400 bird species for birdwatchers"
  ];

  const idealFor = [
    "Travelers arriving early or departing late wanting to use available hours",
    "Those spending a night in Nairobi before or after Mount Kenya, Kilimanjaro, or Maasai Mara expeditions",
    "Visitors wanting a short, family-friendly safari experience without long transfers",
    "Travelers preferring private, customizable outings over group tours",
    "Wildlife enthusiasts on tight schedules",
    "First-time safari goers or experienced travelers adding to longer adventures"
  ];

  return (
    <>
      <Helmet>
        <title>Nairobi National Park Safari - Private Tours Minutes from the City | Wilderness Alternative Expedition</title>
        <meta name="description" content="Experience Nairobi National Park, the world's only national park within a capital city. Private morning and afternoon tours with lions, rhinos, and 400+ bird species." />
        <meta name="keywords" content="Nairobi National Park safari, Kenya city safari, black rhino sanctuary, Big Four Kenya, Nairobi wildlife tours, private game drives" />
        <meta property="og:title" content="Nairobi National Park Safari - Private Tours Minutes from the City" />
        <meta property="og:description" content="Private Morning & Afternoon Tours - Make the Most of Your Time in Nairobi" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-safari text-white">
          <div className="absolute inset-0">
            <img
              src={nairobiImg}
              alt="Nairobi National Park with city skyline"
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Nairobi National Park Safari
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Private Morning & Afternoon Tours - Make the Most of Your Time in Nairobi
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  Even a short stay in Nairobi can become a thrilling wildlife adventure with Wilderness Alternative Expedition. Whether you're stopping over before your Mount Kenya climb, heading to the coast, or simply spending a night in the capital, our private half-day safaris to Nairobi National Park are the perfect way to immerse yourself in Kenya's natural beauty without venturing far from the city.
                </p>
                <p className="text-lg mb-6">
                  Conveniently located just 10 kilometers south of the city center, Nairobi National Park is one of the most unique wildlife sanctuaries in the world—a full safari experience just minutes from your hotel or the airport.
                </p>
                <p className="text-lg mb-8">
                  Nairobi National Park is not a zoo or a theme park. This is a wild and open ecosystem, where you'll witness lions, rhinos, giraffes, buffalo, zebras, cheetahs, hyenas, impalas, and other wildlife roaming free against the surreal backdrop of Nairobi's skyline.
                </p>
              </div>

              {/* Tour Options */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Tour Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {tourOptions.map((tour, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{tour.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm text-foreground">
                          <p><strong>Pickup:</strong> {tour.pickup}</p>
                          <p><strong>Return:</strong> {tour.dropoff}</p>
                          <p><strong>Benefits:</strong> {tour.benefits}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Safari Highlights</h3>
                <div className="grid gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wildlife Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Wildlife to Expect</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">The Big Four & More</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {wildlifeToExpect.slice(0, 4).map((wildlife, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-foreground text-sm">{wildlife}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Aquatic & Avian Life</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {wildlifeToExpect.slice(4).map((wildlife, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-foreground text-sm">{wildlife}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Unique Features */}
              <div className="mb-16">
                <Card className="bg-gradient-adventure text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Unique Conservation Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Kifaru Ark (Rhino Sanctuary)</h4>
                        <p className="text-white/90 text-sm mb-4">
                          Leading role in rhino conservation with the largest black rhino population in Kenya. Source population for restocking other protected areas.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Historical Significance</h4>
                        <p className="text-white/90 text-sm">
                          Kenya's oldest national park (1946) with the historic Ivory Burning Monument marking conservation milestones.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* What to Expect */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">What to Expect</h3>
                <Card className="bg-muted">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Safari Experience</h4>
                        <div className="space-y-2 text-sm text-foreground">
                          <p>• Private game drives in pop-top 4×4 Land Cruisers</p>
                          <p>• Experienced driver-guides with wildlife insights</p>
                          <p>• Comfortable, secure, and professional transport</p>
                          <p>• Wildlife photography opportunities</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Logistics</h4>
                        <div className="space-y-2 text-sm text-foreground">
                          <p>• Round-trip transfers from Nairobi hotels</p>
                          <p>• Wilson Airport or JKIA pickup available</p>
                          <p>• Educational conservation component</p>
                          <p>• Duration: Half-day tours (5.5 hours)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Ideal For */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Ideal For</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {idealFor.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div className="mb-16">
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Park Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Location & Access</h4>
                        <div className="space-y-1 text-sm text-foreground">
                          <p>• 10 kilometers south of Nairobi city center</p>
                          <p>• Kenya's oldest national park (est. 1946)</p>
                          <p>• Accessible by road from hotels and airports</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Tour Details</h4>
                        <div className="space-y-1 text-sm text-foreground">
                          <p>• Private pop-top 4×4 Land Cruisers</p>
                          <p>• Half-day tours (5.5 hours duration)</p>
                          <p>• Advance booking recommended</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Card className="bg-muted">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Turn Your Layover into an Adventure
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Experience Africa's wildlife just minutes from Nairobi's city center. Perfect for tight schedules and maximum impact.
                    </p>
                    <div className="space-y-4">
                      <Button variant="adventure" size="lg">
                       <Link to="/contact">Book Your Nairobi Park Safari</Link>
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Contact: info@wildernessalternativeexpedition.com | +254743789655
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NairobiPark;