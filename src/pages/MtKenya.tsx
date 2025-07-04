import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const MtKenya = () => {
  const routes = [
    {
      title: "Mount Kenya Sirimon Route Itinerary",
      link: "/mt-kenya/sirimon",
      description: "A gentle ascent from the northwest with gradual altitude gain and beautiful views through Mackinder's Valley. Great for acclimatisation."
    },
    {
      title: "Mount Kenya Naro Moru Route Itinerary", 
      link: "/mt-kenya/naro-moru",
      description: "The most direct route to Point Lenana. Shorter but steeper, with features like the Vertical Bog and great summit-day access."
    },
    {
      title: "Mount Kenya Chogoria Route Itinerary",
      link: "/mt-kenya/chogoria", 
      description: "Often considered the most scenic route, with dramatic cliffs, Lake Michaelson, and The Temple amphitheatre."
    },
    {
      title: "Mount Kenya Chogoria Down – Sirimon Up Traverse Itinerary",
      link: "/mt-kenya/chogoria-down",
      description: "A perfect combination of a gradual climb via Sirimon and a scenic descent through Chogoria."
    },
    {
      title: "Mount Kenya Burguret Route Itinerary",
      link: "/mt-kenya/burguret",
      description: "A remote, little-used trail through dense forest and wild landscapes. Ideal for those seeking solitude."
    },
    {
      title: "Mount Kenya Kamweti Route Itinerary", 
      link: "/mt-kenya/kamweti",
      description: "A quiet route through bamboo forest and high moorland, rarely used but rich in biodiversity."
    },
    {
      title: "Mount Kenya Timau Route Itinerary",
      link: "/mt-kenya/timau", 
      description: "A less-travelled path with sweeping views of the northern plains, typically used for approach treks or logistics support."
    }
  ];

  const routesGallery = [
    {
      name: "Sirimon Route",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      description: "Mount Kenya peaks as seen from Shipton's Camp on Sirimon Route.",
      link: "/mt-kenya/sirimon"
    },
    {
      name: "Chogoria Route", 
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
      description: "Known for its beauty — Lake Michaelson, Mount Kenya.",
      link: "/mt-kenya/chogoria"
    },
    {
      name: "Naro Moru Route",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop", 
      description: "The fastest and most direct route to Point Lenana, with the challenging Vertical Bog.",
      link: "/mt-kenya/naro-moru"
    },
    {
      name: "Chogoria Down Sirimon Route",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop",
      description: "Our guests enjoying evening tea by the shores of lake michaelson.",
      link: "/mt-kenya/chogoria-down"
    },
    {
      name: "Burguret Route",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      description: "A remote, little-used trail through dense forest and wild landscapes. Ideal for those seeking solitude.",
      link: "/mt-kenya/burguret"
    },
    {
      name: "Kamweti Route", 
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      description: "A less-traveled path offering a unique perspective of Mount Kenya's diverse ecosystems.",
      link: "/mt-kenya/kamweti"
    },
    {
      name: "Timau Route",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      description: "A scenic route known for its beautiful landscapes and diverse wildlife.", 
      link: "/mt-kenya/timau"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mount Kenya Climbing and Trek Information for 2025 / 2026 - Wilderness Alternative Expedition</title>
        <meta name="description" content="Complete guide to Mount Kenya climbing routes including Sirimon, Naro Moru, Chogoria, and more. Expert-guided treks to Kenya's highest peaks with detailed itineraries." />
        <meta name="keywords" content="Mount Kenya, climbing, trekking, Sirimon route, Naro Moru, Chogoria, Point Lenana, Kenya mountain climbing" />
        <meta property="og:title" content="Mount Kenya Climbing and Trek Information for 2025 / 2026" />
        <meta property="og:description" content="Embark on an unforgettable adventure to Kenya's highest peaks with our expert-guided treks." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mount Kenya Climbing and Trek Information for 2025 / 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Embark on an unforgettable adventure to Kenya's highest peaks with our expert-guided treks.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Mount Kenya Climbing Information
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  Mount Kenya is the less-climbed cousin of Mount Kilimanjaro nearby in Tanzania but if you ask those who've walked its trails, they'll tell you this mountain offers something truly special.
                </p>
                <p className="text-lg mb-6">
                  Mount Kenya offers a variety of routes to suit different trekking styles, fitness levels, and scenery preferences. Below are the main routes available. Click on each route to explore a detailed itinerary, highlights, and what to expect.
                </p>
                <p className="text-lg mb-8">
                  Mount Kenya has three main peaks: Batian and Nelion, which are technical climbs, and Point Lenana, the trekking peak most visitors aim for. But you don't need to summit to be amazed — the trails themselves are filled with magic.
                </p>
              </div>

              {/* Routes List */}
              <div className="grid gap-6 mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Available Routes</h3>
                {routes.map((route, index) => (
                  <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">
                        <Link to={route.link} className="hover:text-primary-hover transition-colors">
                          {route.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {route.description}
                      </CardDescription>
                      <div className="mt-4">
                        <Button variant="outline" asChild>
                          <Link to={route.link}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Routes Gallery */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Routes Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routesGallery.map((route, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-adventure transition-all duration-300 group cursor-pointer">
                  <Link to={route.link}>
                    <div className="relative overflow-hidden">
                      <img
                        src={route.image}
                        alt={route.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">{route.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {route.description}
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

export default MtKenya;