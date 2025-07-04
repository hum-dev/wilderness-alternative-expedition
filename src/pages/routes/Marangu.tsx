import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, TrendingUp, Home } from "lucide-react";

const Marangu = () => {
  return (
    <>
      <Helmet>
        <title>Kilimanjaro Marangu Route - The Coca Cola Route with Hut Accommodation</title>
        <meta name="description" content="Climb Kilimanjaro via the comfortable Marangu Route. The only route with hut accommodation and the most direct path to Uhuru Peak." />
        <meta name="keywords" content="Marangu route, Coca Cola route, Kilimanjaro huts, comfortable climbing, 6 days" />
        <meta property="og:title" content="Kilimanjaro Marangu Route - Hut Accommodation" />
        <meta property="og:description" content="The oldest and most popular route with comfortable hut accommodations" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kilimanjaro Marangu Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                The oldest and most popular route, known for its hut accommodations
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>6 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Southeast Route</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Home className="w-4 h-4" />
                  <span>Hut Accommodation</span>
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
                <Link to="/kilimanjaro" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Kilimanjaro
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Route Overview */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Route Overview</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    The Marangu is one of the oldest and most popular Kilimanjaro routes. It's sometimes called the Coca-Cola route because you stay in huts and can buy a Coke en route. The Marangu route approaches the summit of Kilimanjaro from the southeast. Overall, it's a relatively easy route, having very few steep climbs. But it doesn't let you acclimatise well, so trekkers using this route often develop altitude sickness and don't make it to the summit.
                  </p>
                  <p>
                    The Marangu route can be completed over five or six days and is 72 km (45 miles) in total. It approaches the summit of Kilimanjaro by ascending the southeastern slope. The Marangu is the only one of the seven Kilimanjaro routes to offer hutted accommodation. On all of the other routes, you must camp.
                  </p>
                  <p>
                    Given the hut situation, Marangu trekkers are the only ones who use the same route for their descent. This makes the Marangu the route with the least varied scenery. The scenery that you do see is nonetheless very beautiful! The Marangu route sees you climb through a handful of distinct climatic zones, namely rainforest, moorland, alpine desert and arctic summit.
                  </p>
                </CardContent>
              </Card>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">6-Day Itinerary</CardTitle>
                  <CardDescription>The classic hut-to-hut experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Marangu Gate to Mandara Hut</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 1,843 m to 2,700 m | Distance: 8 km | Hiking time: 4-5 hours</p>
                      <p>On Day 1 of your Kilimanjaro trek, you hike through dense rainforest, though at points there are openings in the vegetation that offer views of the farmlands which cover the base of the mountain outside of the Kilimanjaro National Park. The day's trail ends at Mandara Hut, where you overnight.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Mandara Hut to Horombo Hut</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 2,700 m to 3,720 m | Distance: 12 km | Hiking time: 6-8 hours</p>
                      <p>On Day 2, you trek through more beautiful rainforest, but soon the forest gives way to moorland. The snowcapped peaks of Kibo and Mawenzi can be seen. After trekking for six to eight hours, you reach Horombo Hut, where you stay for the night.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Horombo Hut to Mawenzi Ridge to Horombo Hut</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 3,720 m to 4,390 m and back | Hiking time: 4-6 hours</p>
                      <p>Your third day on the mountain can be split into two parts: a climb to Mawenzi Ridge, followed by a return to Horombo Hut. The reason for this is that it's in keeping with the 'climb high, sleep low' acclimatisation strategy that helps your body to better adjust to the demanding elevation. This part of the day's trek sees you climb from Horombo Hut up into the heath zone of Kilimanjaro.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Horombo Hut to Kibo Hut</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 3,720 m to 4,750 m | Distance: 10 km | Hiking time: 6-8 hours</p>
                      <p>Today, you traverse the so-called Saddle, a five-mile stretch of rubble and relative emptiness that connects the craters of Mawenzi and Kibo. You spend the night at Kibo Hut.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 5: Kibo Hut to Uhuru Peak to Horombo Hut</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 4,703 m to 5,895 m to 3,720 m | Hiking time: 12-15 hours total</p>
                      <p>Your guide wakes you up around midnight to get ready for the ascent. Today is usually the most mentally and physically challenging part of the entire Kilimanjaro climb. The route ascends northwest into the dark night. Within about six hours, you reach Stella Point and enjoy the sunrise. After that, you trek for about another hour on a snow-covered trail to reach Uhuru Peak at 5,895 m (19,341 ft) at the very top of Africa!</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 6: Horombo Hut to Marangu Gate</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 3,720 m to 1,843 m | Distance: 20 km | Hiking time: 5-7 hours</p>
                      <p>Today, you do the last bit of hiking down through the rainforest to the foot of the mountain, where your driver is waiting for you. Time for a beer and a great celebration dinner!</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Best For</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Trekkers seeking comfortable accommodation</li>
                      <li>• Those preferring a shorter itinerary</li>
                      <li>• Beginners to high-altitude trekking</li>
                      <li>• Budget-conscious climbers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Only route with hut accommodation</li>
                      <li>• Historical significance as oldest route</li>
                      <li>• Well-maintained trail infrastructure</li>
                      <li>• Coca-Cola available at huts</li>
                      <li>• Direct and straightforward path</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Experience the Classic Coca-Cola Route</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Enjoy comfortable hut accommodation on Kilimanjaro's most established trail
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Book Marangu Route
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Learn More</Link>
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

export default Marangu;