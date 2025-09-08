import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import northernImg from "@/assets/Northern Circuit.jpg";
import { ArrowLeft, Clock, MapPin, TrendingUp, Award } from "lucide-react";

const NorthernCircuit = () => {
  return (
    <>
      <Helmet>
        <title>Kilimanjaro Northern Circuit Route - Highest Success Rate & Longest Route</title>
        <meta name="description" content="Experience Kilimanjaro's newest route with the highest success rate. 9-day Northern Circuit offers excellent acclimatization and stunning 360-degree views." />
        <meta name="keywords" content="Northern Circuit route, highest success rate, 9 days, best acclimatization, newest route" />
        <meta property="og:title" content="Kilimanjaro Northern Circuit - Highest Success Rate" />
        <meta property="og:description" content="The longest route with the highest summit success rate and incredible 360-degree views" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kilimanjaro Northern Circuit Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                The newest and longest route with excellent acclimatization and highest success rate
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>9 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Challenging</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Northern Slopes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4" />
                  <span>Highest Success Rate</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none -z-10">
              <img src={northernImg} alt="Northern Circuit" className="w-full h-full object-cover opacity-30" width={1600} height={900} loading="lazy" />
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
                    The Northern Circuit takes you up the northern slope of the mountain, where few trekkers go. The views are just amazing! It's a nine-day trek (the longest one on offer) and as such has the highest summit success rate. It's also a very pretty and varied route. We love it, and highly recommend this route to anyone keen to climb to the roof of Africa!
                  </p>
                  <p>
                    This route offers the best acclimatization profile of all Kilimanjaro routes, giving your body the maximum time to adjust to the altitude. The extended itinerary allows for a more gradual ascent, significantly increasing your chances of reaching Uhuru Peak successfully.
                  </p>
                  <p>
                    The Northern Circuit combines the scenic approach of the Lemosho Route with an extended trek around the quieter northern slopes of Kilimanjaro, offering spectacular 360-degree views and a true wilderness experience.
                  </p>
                </CardContent>
              </Card>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">11-Day Itinerary</CardTitle>
                  <CardDescription>Maximum acclimatization for highest success rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Arrival Day</h3>
                      <p className="text-muted-foreground mb-2">Airport transfer and briefing</p>
                      <p>If you've booked an airport transfer with us, we'll pick you up from Kilimanjaro International Airport and drive you to your lodge. Here, you'll meet your mountain crew and fellow trekkers. Unwind and get to know each other over dinner, followed by a comprehensive trek briefing from your lead guide.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Hike Through the Pristine Forest</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 3-4 hours | Mkubwa Camp (2,895 m)</p>
                      <p>Today, we drive to Londorossi Gate, where you'll be officially registered with Kilimanjaro National Park. The trek begins at Lemosho Gate, taking you through the lush rainforest. After 3–4 hours of hiking, we arrive at Mkubwa Camp for the night.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Enter the Heath Zone</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 5-6 hours | Shira 1 Camp (3,505 m)</p>
                      <p>Leaving the forest behind, we enter moorland terrain with open views and changing vegetation. The trail leads to Shira Plateau, ending the day at Shira 1 Camp. Total hiking time is around 5–6 hours.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Cross the Shira Plateau</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 4-6 hours | Shira 2 Camp (3,810 m)</p>
                      <p>Today's 4–6 hour hike takes us across the wide and scenic Shira Plateau to Shira 2 Camp. The temperatures begin to fluctuate more dramatically, especially at night which can drop below freezing.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 5: Acclimatization and Solitude</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 2-3 hours | Moir Camp (4,206 m)</p>
                      <p>We break away from the crowds today, trekking 2–3 hours through the alpine desert to reach Shark's Tooth rock formation. After taking in the views, we descend to Moir Camp. This is a vital day for acclimatization.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 6: Traverse the Northern Slope</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 4-5 hours | Pofu Camp (4,033 m)</p>
                      <p>We begin with a steep ascent as we circle around Kibo's northern face. The landscape is barren yet majestic. After 4–5 hours, we reach Pofu Camp, our resting point for the night.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 7: Descend to Third Cave</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 4-6 hours | Third Cave Camp (3,870 m)</p>
                      <p>This scenic day involves crossing valleys and trekking for 4–6 hours. Along the way, we may encounter buffaloes. The trail ends at Third Cave Camp, where we spend the night.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 8: Trek Across the Saddle</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 4-5 hours | Kibo Hut (4,750 m)</p>
                      <p>We begin a steady climb over the high-altitude desert plateau known as 'The Saddle,' which connects Mawenzi and Kibo peaks. After 4–5 hours of trekking, we reach Kibo Hut for an early dinner and rest before summit night.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 9: Summit Day!</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 12-16 hours | Uhuru Peak (5,895 m) to Mweka Camp (3,068 m)</p>
                      <p>Your guide wakes you around midnight to start the final ascent. We climb steadily through the darkness, reaching Stella Point in 6–7 hours. After another hour, you'll arrive at Uhuru Peak (5,895 m)—the roof of Africa! Celebrate your achievement, then begin the 6–8 hour descent to Mweka Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 10: Final Descent</h3>
                      <p className="text-muted-foreground mb-2">Hiking time: 3 hours | Mweka Gate (1,640 m)</p>
                      <p>We hike the final stretch—about 3 hours—through beautiful rainforest to Mweka Gate. Here, your driver will be waiting to return you to the lodge. Enjoy a hot shower, a cold drink, and well-earned rest.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 11: Departure Day</h3>
                      <p className="text-muted-foreground mb-2">Transfer to airport or safari</p>
                      <p>After breakfast, we say goodbye to majestic Kilimanjaro and transfer you to the airport. Or, if you've booked a safari with us, your next adventure begins!</p>
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
                      <li>• First-time Kilimanjaro climbers</li>
                      <li>• Those prioritizing summit success</li>
                      <li>• Trekkers wanting maximum acclimatization</li>
                      <li>• Adventure seekers with ample time</li>
                      <li>• Photographers seeking diverse landscapes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Highest success rate of all routes</li>
                      <li>• 360-degree views around Kilimanjaro</li>
                      <li>• Remote northern slopes rarely visited</li>
                      <li>• Excellent acclimatization profile</li>
                      <li>• Most comprehensive Kilimanjaro experience</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Maximize Your Summit Success</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience Kilimanjaro's newest route with the highest success rate and incredible 360-degree views
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Book Northern Circuit
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get Success Strategy</Link>
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

export default NorthernCircuit;