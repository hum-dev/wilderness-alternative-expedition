import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import kilimanjaroImage from "@/assets/kilimanjaro-trek.jpg";
import safariImage from "@/assets/safari-wildlife.jpg";
import { Clock, Users, Mountain, Binoculars } from "lucide-react";

const Expeditions = () => {
  const expeditions = {
    "Mount Kenya": {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      description: "Africa's second highest peak with diverse routes through alpine landscapes",
      icon: Mountain,
      routes: [
        { name: "Sirimon Route", path: "/mt-kenya/sirimon", duration: "4-5 Days", difficulty: "Moderate" },
        { name: "Naro Moru Route", path: "/mt-kenya/naro-moru", duration: "3-4 Days", difficulty: "Moderate" },
        { name: "Chogoria Route", path: "/mt-kenya/chogoria", duration: "5-6 Days", difficulty: "Moderate" },
        { name: "Chogoria Down", path: "/mt-kenya/chogoria-down", duration: "4-5 Days", difficulty: "Moderate" },
        { name: "Burguret Route", path: "/mt-kenya/burguret", duration: "4-5 Days", difficulty: "Challenging" },
        { name: "Kamweti Route", path: "/mt-kenya/kamweti", duration: "4-5 Days", difficulty: "Moderate" },
        { name: "Timau Route", path: "/mt-kenya/timau", duration: "4-5 Days", difficulty: "Moderate" }
      ]
    },
    "Mount Kilimanjaro": {
      image: kilimanjaroImage,
      description: "Roof of Africa - the world's highest free-standing mountain",
      icon: Mountain,
      routes: [
        { name: "Lemosho Route", path: "/kilimanjaro/lemosho", duration: "7-8 Days", difficulty: "Moderate" },
        { name: "Machame Route", path: "/kilimanjaro/machame", duration: "6-7 Days", difficulty: "Moderate" },
        { name: "Marangu Route", path: "/kilimanjaro/marangu", duration: "5-6 Days", difficulty: "Easy-Moderate" },
        { name: "Rongai Route", path: "/kilimanjaro/rongai", duration: "6-7 Days", difficulty: "Moderate" },
        { name: "Northern Circuit", path: "/kilimanjaro/northern-circuit", duration: "8-9 Days", difficulty: "Moderate" }
      ]
    },
    "Wildlife Safaris": {
      image: safariImage,
      description: "Experience Kenya's incredible wildlife in world-renowned national parks",
      icon: Binoculars,
      routes: [
        { name: "Maasai Mara", path: "/safaris/maasai-mara", duration: "3-7 Days", difficulty: "Easy" },
        { name: "Samburu National Reserve", path: "/safaris/samburu", duration: "2-4 Days", difficulty: "Easy" },
        { name: "Meru National Park", path: "/safaris/meru", duration: "2-3 Days", difficulty: "Easy" },
        { name: "Amboseli National Park", path: "/safaris/amboseli", duration: "2-4 Days", difficulty: "Easy" },
        { name: "Ol Pejeta Conservancy", path: "/safaris/ol-pejeta", duration: "2-3 Days", difficulty: "Easy" },
        { name: "Nairobi National Park", path: "/safaris/nairobi-park", duration: "1 Day", difficulty: "Easy" }
      ]
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-200';
      case 'easy-moderate':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      case 'moderate':
        return 'bg-orange-500/10 text-orange-600 border-orange-200';
      case 'challenging':
        return 'bg-red-500/10 text-red-600 border-red-200';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-mountain">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              All Expeditions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover all our carefully crafted expeditions across East Africa. 
              From towering peaks to wildlife-rich savannas, choose your next adventure.
            </p>
          </div>
        </section>

        {/* Expeditions Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {Object.entries(expeditions).map(([category, data]) => {
                const IconComponent = data.icon;
                return (
                  <div key={category} className="space-y-8">
                    {/* Category Header */}
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-3">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">{category}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {data.description}
                      </p>
                    </div>

                    {/* Category Image */}
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-adventure">
                      <img
                        src={data.image}
                        alt={category}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold">{category}</h3>
                        <p className="text-white/90">{data.routes.length} Routes Available</p>
                      </div>
                    </div>

                    {/* Routes Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.routes.map((route) => (
                        <Card key={route.name} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <span className="text-lg">{route.name}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{route.duration}</span>
                              </div>
                              <Badge variant="outline" className={getDifficultyColor(route.difficulty)}>
                                {route.difficulty}
                              </Badge>
                            </div>
                            
                            <Button asChild variant="adventure" className="w-full">
                              <Link to={route.path}>
                                View Details
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center bg-gradient-adventure rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h3>
              <p className="text-lg mb-8 text-white/90">
               <Link to="/contact">Contact us to plan your perfect expedition and create memories that will last a lifetime.</Link>
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get Started Today
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Expeditions;