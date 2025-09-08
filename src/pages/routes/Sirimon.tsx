import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, Users, TrendingUp } from "lucide-react";
import sirimonImg from "@/assets/sirimon.jpg";

const Sirimon = () => {
  return (
    <>
      <Helmet>
        <title>Mount Kenya Sirimon Route Itinerary - 4-5 Days Climbing Guide</title>
        <meta name="description" content="Complete guide to Mount Kenya's Sirimon Route. Gentle ascent from northwest with gradual altitude gain through Mackinder's Valley. Perfect for acclimatisation." />
        <meta name="keywords" content="Mount Kenya Sirimon route, Sirimon itinerary, Mackinder's Valley, Point Lenana climb, gradual ascent" />
        <meta property="og:title" content="Mount Kenya Sirimon Route Itinerary" />
        <meta property="og:description" content="A gentle ascent from the northwest with gradual altitude gain and beautiful views through Mackinder's Valley. Great for acclimatisation." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mount Kenya Sirimon Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                A gentle ascent from the northwest with gradual altitude gain and beautiful views through Mackinder's Valley
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>4-5 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Northwest Approach</span>
                </div>
              </div>
            </div>
            {/* Decorative/local hero image (improves LCP and gives a specific OG image when crawled) */}
            <div className="mt-8">
              <img
                src={sirimonImg}
                alt="Mount Kenya Sirimon Route - Shipton's Camp view"
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
                    The Sirimon route is considered one of the most scenic and gradual approaches to Point Lenana. 
                    Starting from the northwest, this route offers excellent acclimatization opportunities with its 
                    steady altitude gain and spectacular views through Mackinder's Valley.
                  </p>
                  <p>
                    This route is perfect for trekkers who prefer a more relaxed pace and want to fully enjoy 
                    the diverse ecosystems of Mount Kenya, from montane forest to alpine moorland.
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
                      <li>• First-time Mount Kenya climbers</li>
                      <li>• Those seeking gradual acclimatization</li>
                      <li>• Photography enthusiasts</li>
                      <li>• Moderate fitness levels</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Mackinder's Valley views</li>
                      <li>• Gradual altitude gain</li>
                      <li>• Diverse wildlife viewing</li>
                      <li>• Shipton's Camp experience</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">4-Day Itinerary</CardTitle>
                  <CardDescription>Detailed day-by-day breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Nairobi (1800m) – Sirimon Park Gate (2660m) – Old Moses Camp (3300m)</h3>
                      <p className="text-muted-foreground mb-2">Altitude ↑1500m | Walking time: 3-4 hours | Driving: 4-5 hours</p>
                      <p>Drive from Nairobi to Sirimon Gate. Hike through dense forest transforming into moorland. Spot zebras and antelopes on the way. Overnight at Old Moses Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Old Moses Camp (3300m) – Shipton's Camp (4200m)</h3>
                      <p className="text-muted-foreground mb-2">Altitude ↑900m | Walking time: 6-7 hours</p>
                      <p>Trek through moorland with stunning views of the main peaks. Pass through Mackinder's Valley. Overnight at Shipton's Camp with spectacular mountain views.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Shipton's Camp (4200m) – Point Lenana (4985m) – Mintos Camp (4200m) – Meru Bandas (3000m)</h3>
                      <p className="text-muted-foreground mb-2">Altitude ↑785m, ↓1985m | Walking time: 12-14 hours</p>
                      <p>Early morning start for Point Lenana summit. Watch sunrise from Kenya's second-highest peak. Descend via Mintos Camp to Meru Bandas for overnight.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Meru Bandas (3000m) – Kilometre Kumi (2000m) – Nairobi (1800m)</h3>
                      <p className="text-muted-foreground mb-2">Altitude ↓1200m | Walking time: 1.5-2 hours</p>
                      <p>Final descent through forest to Kilometre Kumi. Transfer back to Nairobi with arrival in the afternoon.</p>
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
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Solo Trekker</h4>
                      <p className="text-2xl font-bold text-primary">$805 USD</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Double</h4>
                      <p className="text-2xl font-bold text-primary">$770 USD</p>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Group (5+)</h4>
                      <p className="text-2xl font-bold text-primary">$700 USD</p>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Rates include accommodation, meals, park fees, guides, porters, and round-trip transport from Nairobi.
                  </p>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Ready to Trek the Sirimon Route?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join us for an unforgettable journey on Mount Kenya's most scenic route
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Book This Route
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Ask Questions</Link>
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

export default Sirimon;