import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import lemoshoCard from "@/assets/lemosho.jpg";
import machameCard from "@/assets/machame.jpg";
import maranguCard from "@/assets/marangu.jpg";
import rongaiCard from "@/assets/Rongai.jpg";
import northernCard from "@/assets/Northern Circuit.jpg";
import { ArrowLeft, Mountain, Clock, TrendingUp, MapPin } from "lucide-react";

const Kilimanjaro = () => {
  const routes = [
    {
      name: "Lemosho Route",
      link: "/kilimanjaro/lemosho",
      image: lemoshoCard,
      description: "Scenic and varied with low traffic and a high success rate."
    },
    {
      name: "Machame Route",
      link: "/kilimanjaro/machame", 
      image: machameCard,
      description: "Known as the Whisky Route; a stunning and popular trek."
    },
    {
      name: "Marangu Route",
      link: "/kilimanjaro/marangu",
      image: maranguCard,
      description: "The only route with hut accommodation. Shorter and comfortable."
    },
    {
      name: "Rongai Route",
      link: "/kilimanjaro/rongai",
      image: rongaiCard,
      description: "Approaches from the north. Quiet and gradual ascent."
    },
    {
      name: "Northern Circuit",
      link: "/kilimanjaro/northern-circuit",
      image: northernCard,
      description: "The newest and longest route with excellent acclimatization."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kilimanjaro Climbing and Trek Information for 2025 / 2026 - Expert Guided Adventures</title>
        <meta name="description" content="Embark on an unforgettable adventure to Africa's highest peak with our expert-guided Kilimanjaro treks. Choose from 5 scenic routes to Uhuru Peak." />
        <meta name="keywords" content="Mount Kilimanjaro climbing, Kilimanjaro trekking, Uhuru Peak, Tanzania climbing, Kilimanjaro routes, guided mountain climbing" />
        <meta property="og:title" content="Mount Kilimanjaro Climbing Guide 2025/2026" />
        <meta property="og:description" content="Who Can Climb Kilimanjaro? Anyone over the age of 10 with determination and physical fitness can climb Kilimanjaro." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kilimanjaro Climbing and Trek Information for 2025 / 2026
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Who Can Climb Kilimanjaro? Anyone over the age of 10 with determination and physical fitness can climb Kilimanjaro. Many people in their 60s and 70s successfully summit the mountain. The main challenge is adjusting to altitude — but rest assured, our expert team will guide you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Mountain className="w-4 h-4" />
                  <span>19,341 ft</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>5-9 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Moderate to Challenging</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Tanzania</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-6 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Overview */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Kilimanjaro Climbing Information</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    Mount Kilimanjaro, located in Tanzania, East Africa, is the highest mountain in Africa with an elevation of 19,341 feet (5,895 meters). It is the largest free-standing mountain in the world and one of the Seven Summits. Its snow-capped peak rises above the surrounding savannah and is part of Kilimanjaro National Park, which is home to a variety of unique flora and fauna.
                  </p>
                  <p>
                    Although dormant, Kilimanjaro remains an iconic beacon for adventurers and nature lovers worldwide.
                  </p>
                  <p>
                    Kilimanjaro offers a variety of routes to suit different trekking styles, fitness levels, and scenery preferences. Below are the main routes available. Click on each route to explore a detailed itinerary, highlights, and what to expect.
                  </p>
                </CardContent>
              </Card>

              {/* Routes Gallery */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary text-center mb-8">Choose Your Kilimanjaro Route</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {routes.map((route, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                      <Link to={route.link}>
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={route.image}
                            alt={`${route.name} on Mount Kilimanjaro`}
                            width={800}
                            height={600}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                            {route.name}
                          </CardTitle>
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

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Ready to Conquer Africa's Highest Peak?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of adventurers who have successfully summited Kilimanjaro with our expert guides
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                   <Link to="/contact">Start Your Kilimanjaro Journey</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get Expert Advice</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Kilimanjaro;