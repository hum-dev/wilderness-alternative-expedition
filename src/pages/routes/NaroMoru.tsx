import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, TrendingUp, AlertTriangle } from "lucide-react";
import narumoruImg from "@/assets/narumoru.jpg";

const NaroMoru = () => {
  return (
    <>
      <Helmet>
        <title>Mount Kenya Naro Moru Route Itinerary - Fastest Route to Point Lenana</title>
        <meta name="description" content="Complete guide to Mount Kenya's Naro Moru Route. The most direct and fastest route to Point Lenana featuring the famous Vertical Bog challenge." />
        <meta name="keywords" content="Mount Kenya Naro Moru route, Vertical Bog, fastest route Point Lenana, direct ascent Mount Kenya" />
        <meta property="og:title" content="Mount Kenya Naro Moru Route Itinerary" />
        <meta property="og:description" content="The most direct route to Point Lenana. Shorter but steeper, with features like the Vertical Bog and great summit-day access." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mount Kenya Naro Moru Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                The most direct route to Point Lenana. Shorter but steeper, with features like the Vertical Bog and great summit-day access
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>3-4 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Challenging</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Southwest Approach</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img
                src={narumoruImg}
                alt="Mount Kenya Naro Moru Route - Vertical Bog approach"
                width={1600}
                height={900}
                loading="eager"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-6 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/mt-kenya" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Mount Kenya
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
                    The Naro Moru route is the fastest and most direct path to Point Lenana, Mount Kenya's trekking summit. 
                    This route is known for its steep ascent and the infamous "Vertical Bog" - a challenging section that 
                    tests trekkers' determination and endurance.
                  </p>
                  <p>
                    While shorter in distance, this route demands good fitness levels and mental preparation. 
                    It's favored by experienced trekkers and those with limited time who still want to reach the summit.
                  </p>
                </CardContent>
              </Card>

              {/* Warning Card */}
              <Card className="mb-12 border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-800 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Important Note
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-700">
                  <p>
                    The Vertical Bog section can be extremely challenging, especially during rainy seasons. 
                    Proper preparation and good physical fitness are essential for this route.
                  </p>
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
                      <li>• Experienced trekkers</li>
                      <li>• Limited time schedules</li>
                      <li>• Good fitness levels</li>
                      <li>• Challenge seekers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Fastest route to summit</li>
                      <li>• The famous Vertical Bog</li>
                      <li>• Mackinder's Valley access</li>
                      <li>• Direct summit approach</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">4-Day Itinerary</CardTitle>
                  <CardDescription>Fast-track to Point Lenana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Nairobi to Naro Moru Gate to Met Station</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 2,600m to 3,050m | Distance: 10km | Time: 3-4 hours</p>
                      <p>Drive from Nairobi to Naro Moru Gate. Trek through bamboo forest and begin the ascent. Overnight at Met Station with views of the peaks ahead.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Met Station to Mackinder's Camp via Vertical Bog</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 3,050m to 4,200m | Distance: 9km | Time: 5-7 hours</p>
                      <p>The challenging day featuring the famous Vertical Bog. Navigate through muddy, steep terrain before reaching the beautiful Mackinder's Valley. Overnight at Mackinder's Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Summit Day - Point Lenana to Met Station</h3>
                      <p className="text-muted-foreground mb-2">Summit: 4,985m | Distance: 11km up + down | Time: 8-10 hours</p>
                      <p>Early morning start (3 AM) for Point Lenana summit attempt. Experience sunrise from Kenya's second-highest peak. Descend to Met Station for overnight.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Met Station to Naro Moru Gate to Nairobi</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 3,050m to 2,600m | Distance: 10km | Time: 2-3 hours</p>
                      <p>Final descent through bamboo forest to Naro Moru Gate. Transfer back to Nairobi, arriving in the afternoon.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Special Features */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">The Vertical Bog Challenge</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    The Vertical Bog is Mount Kenya's most notorious section - a steep, muddy climb that can be 
                    knee-deep in places. This challenging terrain requires mental toughness and proper gear.
                  </p>
                  <ul className="list-disc ml-6 mt-4">
                    <li>Waterproof boots are essential</li>
                    <li>Gaiters highly recommended</li>
                    <li>Take your time and use trekking poles</li>
                    <li>Weather conditions greatly affect difficulty</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Ready for the Naro Moru Challenge?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Test your limits on Mount Kenya's most direct route to the summit
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    <Link to="/contact">Book This Route</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get More Info</Link>
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

export default NaroMoru;