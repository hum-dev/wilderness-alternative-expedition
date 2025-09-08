import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import machameImg from "@/assets/machame.jpg";
import { ArrowLeft, Clock, MapPin, TrendingUp, Star } from "lucide-react";

const Machame = () => {
  return (
    <>
      <Helmet>
        <title>Kilimanjaro Machame Route - The Whiskey Route Adventure</title>
        <meta name="description" content="Climb Kilimanjaro via the popular Machame Route. Known as the Whiskey Route for its challenging yet rewarding path to Uhuru Peak." />
        <meta name="keywords" content="Machame route, Whiskey route, Kilimanjaro climbing, challenging route, 7 days" />
        <meta property="og:title" content="Kilimanjaro Machame Route - The Whiskey Route" />
        <meta property="og:description" content="Experience the beauty of Kilimanjaro's most popular and scenic route" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kilimanjaro Machame Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Experience the beauty of Kilimanjaro's most popular route
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Challenging</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Southern Circuit</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none -z-10">
            <img src={machameImg} alt="Machame Route" className="w-full h-full object-cover opacity-30" width={1600} height={900} loading="lazy" />
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
                    The Machame Route, popularly known as the "Whiskey Route," is the most scenic and widely used trail on Mount Kilimanjaro. Its allure lies in its breathtaking landscapes, diverse ecological zones, and panoramic views. However, due to its steep sections and shorter acclimatization period, the route is considered challenging and is best suited for adventurous trekkers or those with prior experience at high altitudes.
                  </p>
                  <p>
                    The route approaches Kilimanjaro from the south, beginning with a short drive from Moshi to Machame Gate. It ascends through lush rainforest to the Shira Plateau, where it merges with other routes. The trail then traverses beneath the Southern Ice Field along the Southern Circuit before the final ascent via Barafu Camp. The descent follows the Mweka Route.
                  </p>
                </CardContent>
              </Card>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">7-Day Itinerary</CardTitle>
                  <CardDescription>The classic Whiskey Route adventure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Arusha to Machame Camp</h3>
                      <p className="text-muted-foreground mb-2">Altitude Gain: 5,380 ft to 9,350 ft | Hiking Time: 5–7 hours</p>
                      <p>After breakfast, drive from Arusha to Kilimanjaro National Park, passing through Machame village. Meet your climb crew at Machame Gate and begin your trek through the lush afromontane rainforest. This trail teems with life—moss-draped trees, colorful impatiens and begonias, and possible sightings of colobus monkeys and blue monkeys.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Machame Camp to Shira Camp</h3>
                      <p className="text-muted-foreground mb-2">Altitude Gain: 9,350 ft to 12,500 ft | Hiking Time: 4–6 hours</p>
                      <p>Leaving the rainforest behind, you ascend a steep ridge into the heath zone, marked by helichrysum and lobelia. Geological features like lava tubes and glacial valleys appear as you reach the Shira Plateau. After a picnic lunch, continue toward Shira Camp, with views of the Western Breach and Kibo Peak.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Shira Camp to Barranco Camp via Lava Tower</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 12,500 ft to 15,223 ft (Lava Tower), then down to 13,044 ft | Hiking Time: 6–8 hours</p>
                      <p>Today is a key acclimatization day: hike high, sleep low. Ascend toward Lava Tower in the alpine desert before descending to Barranco Camp. If you're feeling strong, you can opt to scramble the 300-foot Lava Tower. Pass through the surreal "Garden of the Senecios" filled with giant groundsels and lobelias.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Barranco Camp to Karanga Camp</h3>
                      <p className="text-muted-foreground mb-2">Altitude Gain: 13,044 ft to 13,123 ft | Hiking Time: 4–5 hours</p>
                      <p>Begin the day by scaling the imposing Barranco Wall—requiring use of both hands and feet. Continue over undulating terrain through a series of valleys to Karanga Camp. This short day aids acclimatization. Enjoy spectacular sunsets over the Southern Glaciers.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 5: Karanga Camp to Barafu Camp</h3>
                      <p className="text-muted-foreground mb-2">Altitude Gain: 13,123 ft to 15,288 ft | Hiking Time: 4–5 hours</p>
                      <p>Today is a short but important hike to Barafu Camp. The alpine desert here is stark, with high winds and rocky terrain. After lunch, rest and prepare for the summit push with a safety briefing on equipment such as oxygen and the hyperbaric (Gamow) bag.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 6: Summit Ascent to Uhuru Peak, then Mweka Camp</h3>
                      <p className="text-muted-foreground mb-2">Ascent: 15,288 ft to 19,341 ft | Hiking Time: 7–8 hours ascent, 4–6 hours descent</p>
                      <p>Depart around midnight for the final summit attempt. This is the most physically and mentally demanding section of your climb. After reaching Stella Point (18,652 ft), enjoy a breathtaking sunrise over Mawenzi Peak. Continue to Uhuru Peak—the Roof of Africa! After celebrations and photos, descend to Barafu Camp for a short rest, then continue to Mweka Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 7: Mweka Camp to Mweka Gate, then Transfer to Arusha</h3>
                      <p className="text-muted-foreground mb-2">Altitude Loss: 12,467 ft to 5,380 ft | Hiking Time: 3–4 hours</p>
                      <p>Descend through the montane forest to Mweka Gate, where your climb officially ends. Say farewell to your crew, then transfer back to your hotel in Arusha for a well-earned shower and celebration dinner.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Conquer the Whiskey Route</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience Kilimanjaro's most popular and scenic trail to Uhuru Peak
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Book Machame Route
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get Route Details</Link>
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

export default Machame;