import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import lemoshoImg from "@/assets/lemosho.jpg";
import { ArrowLeft, Clock, MapPin, TrendingUp, TreePine } from "lucide-react";

const Lemosho = () => {
  return (
    <>
  {/* Local hero image for Lemosho */}
      <Helmet>
        <title>Kilimanjaro Lemosho Route - Most Scenic Path to Uhuru Peak</title>
        <meta name="description" content="Experience the most beautiful Kilimanjaro route. The Lemosho Route offers stunning scenery, excellent acclimatization, and high success rates." />
        <meta name="keywords" content="Lemosho route, Kilimanjaro climbing, scenic route, high success rate, 8 days" />
        <meta property="og:title" content="Kilimanjaro Lemosho Route Guide" />
        <meta property="og:description" content="The most scenic and successful route to Uhuru Peak with excellent acclimatization" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kilimanjaro Lemosho Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Experience one of the most scenic and accessible trekking routes to Uhuru Peak
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>8 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>High Success Rate</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Western Approach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TreePine className="w-4 h-4" />
                  <span>Most Scenic</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none -z-10">
              <img src={lemoshoImg} alt="Lemosho Route" className="w-full h-full object-cover opacity-30" width={1600} height={900} loading="lazy" />
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
                    The Lemosho Route is often considered the most beautiful of all the trekking trails up Mount Kilimanjaro. It crosses the entire Shira Plateau from west to east on a pleasant, relatively flat hike. Crowds are generally low until the route merges with the Machame Route near Lava Tower. As one of the newer routes on the mountain, Lemosho shares a portion of the path with the Machame Route but offers several advantages that make it well worth considering—especially for travelers with a bit more time.
                  </p>
                  <p>
                    Starting on the western flanks of Mount Kilimanjaro at the Londorossi Gate, the Lemosho Route winds through some of the mountain's most remote and scenic areas. The trail takes hikers through a beautiful rainforest, where they may have the chance to spot wildlife along the way. Black-and-white colobus monkeys are frequently seen in the forest, as are blue monkeys, small lizards, and a wide variety of birds.
                  </p>
                  <p>
                    If you're looking to maximize your chances of reaching the summit, this is certainly one of the best routes to choose—especially when compared to the Machame and Marangu routes. However, despite its higher success rate, it's important to note that the Lemosho Route is also more strenuous than both the "Whiskey" (Machame) and "Coca-Cola" (Marangu) routes.
                  </p>
                </CardContent>
              </Card>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">8-Day Itinerary</CardTitle>
                  <CardDescription>The most scenic path to Uhuru Peak</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Lemosho Glades</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 3–4 hours | Overnight altitude: ~9,498 ft (2,895 m)</p>
                      <p>From your lodge, we drive to the Londorossi Gate on the western side of Mount Kilimanjaro. After a picnic lunch, we hike for about 3–4 hours to Forest Camp. This lush rainforest is home to exotic mosses, vibrant flowers, and lively bird calls. You may spot black-and-white colobus monkeys and see signs of elephants that pass through the area.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Shira Plateau</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 6–9 hours | Overnight altitude: 11,500 ft (3,505 m)</p>
                      <p>Leaving the montane forest, we enter the Hagenia zone, where expansive views open up and the majestic Kibo Peak comes into sight. Today offers excellent acclimatization as we cross several ridges, reaching a high point of about 11,500 ft before descending slightly to Shira 1 Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Moir Camp</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 5–6 hours | Overnight altitude: ~13,650 ft (4,160 m)</p>
                      <p>Today we traverse the heath zone of the Shira Plateau and begin ascending the western slopes of the Kibo Massif. We stop for a picnic lunch at the Scott Fischer Memorial Camp, then continue to Moir Camp in the upper heath zone. Optional acclimatization hikes can be arranged in the late afternoon.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Barranco Camp</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 4–6 hours | Overnight altitude: ~13,044 ft (3,976 m)</p>
                      <p>We leave the heath zone and enter the alpine zone, hiking past Lava Tower (up to 14,300 ft / 4,360 m) with its stark volcanic landscape. Afterward, we descend into the scenic Barranco Valley for the night.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 5: Karanga Camp</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 3–5 hours | Overnight altitude: ~13,106 ft (3,995 m)</p>
                      <p>We begin the day by ascending the Great Barranco Wall, rewarded with stunning views of Kilimanjaro's glaciers. The trail then winds through a series of valleys before arriving at Karanga Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 6: Barafu Camp</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 3–5 hours | Overnight altitude: ~15,100 ft (4,600 m)</p>
                      <p>Today's hike takes about 3–5 hours as we continue across undulating terrain toward Barafu Camp. After settling in, your guide will demonstrate safety equipment such as the Gamow (hyperbaric) bag and oxygen. After an early dinner, rest before your summit bid begins around 11:00 PM or midnight.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 7: Summit & Mweka Camp</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 12–17 hours | Summit altitude: 19,341 ft (5,895 m)</p>
                      <p>Summit Day. The ascent begins around 11:00 PM or midnight the night before. Using headlamps, you'll hike 6–7 hours to Stella Point and then another 1–2 hours to Uhuru Peak (19,341 ft / 5,895 m). Most climbers aim to reach the summit at sunrise. After celebrating at the summit, descend back to Barafu Camp for a short rest and lunch, then continue down to Mweka Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 8: Mweka Gate</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 3–5 hours</p>
                      <p>Today marks your final descent. We hike for 3–5 hours down to Mweka Gate. After lunch and a celebration with your mountain crew, we return to your lodge. Arrival in town is typically between 3:00–5:00 PM.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="font-bold text-lg mb-2">Solo Climber</h3>
                      <p className="text-3xl font-bold text-primary mb-2">$2200</p>
                      <p className="text-sm text-muted-foreground">USD per person</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-primary/5">
                      <h3 className="font-bold text-lg mb-2">Two Climbers</h3>
                      <p className="text-3xl font-bold text-primary mb-2">$2000</p>
                      <p className="text-sm text-muted-foreground">USD per person</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="font-bold text-lg mb-2">Group (5+)</h3>
                      <p className="text-3xl font-bold text-primary mb-2">$1900</p>
                      <p className="text-sm text-muted-foreground">USD per person</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Rates include accommodation, meals, park fees, guides, porters, and round-trip transport from Nairobi.
                  </p>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Ready for the Most Scenic Route to Uhuru Peak?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience the beauty of the Lemosho Route with our expert guides
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Book Lemosho Route
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Plan Your Trek</Link>
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

export default Lemosho;