import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, TrendingUp, Camera, Mountain } from "lucide-react";

const ChogoriaDown = () => {
  return (
    <>
      <Helmet>
        <title>Mount Kenya Chogoria to Sirimon Traverse - Ultimate Scenic Mountain Traverse</title>
        <meta name="description" content="Experience the ultimate Mount Kenya traverse: ascend via scenic Chogoria route through Lake Michaelson and Temple, descend via Sirimon. Perfect combination of beauty and adventure." />
        <meta name="keywords" content="Mount Kenya traverse, Chogoria Sirimon, Lake Michaelson, Temple cliff, Austrian Hut, Via Ferrata" />
        <meta property="og:title" content="Mount Kenya Chogoria to Sirimon Traverse" />
        <meta property="og:description" content="Ascend through Mount Kenya's most scenic landscapes and descend through lush valleys" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Chogoria to Sirimon Traverse
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Ascend through Mount Kenya's most scenic landscapes and descend through lush valleys
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>4 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Challenging</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>East to West Traverse</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Camera className="w-4 h-4" />
                  <span>Most Scenic</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Mountain className="w-4 h-4" />
                  <span>Via Ferrata</span>
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
                    The Chogoria route is our recommended and arguably the most magnificent ascent route to the summit of Mount Kenya. 
                    The physical landscape on this route is its biggest attraction. Whereas other routes generally follow a 
                    U-shaped glacial valley, the Chogoria traverses around the head of the spectacular 'Temple' with the Hall Tarns 
                    perched on the rock ledge above it and Lake Michaelson in the base of the Amphitheatre.
                  </p>
                  <p>
                    The additional features of Lake Ellis, the Giant's Billiard Table and the Nithi Falls further add to its interest. 
                    The descent by the Sirimon route takes one through some beautiful forest tracks and completes the traverse of the mountain.
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
                      <li>• Experienced mountaineers</li>
                      <li>• Photography enthusiasts</li>
                      <li>• Adventure seekers</li>
                      <li>• Those wanting the complete Mount Kenya experience</li>
                      <li>• Via Ferrata enthusiasts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Lake Michaelson camping</li>
                      <li>• The Temple amphitheatre</li>
                      <li>• Austrian Hut at 4,790m</li>
                      <li>• World's highest Via Ferrata</li>
                      <li>• Sunrise from Chogoria side</li>
                      <li>• Sirimon forest descent</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">4-Day Traverse Itinerary</CardTitle>
                  <CardDescription>The ultimate Mount Kenya experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Nairobi – Chogoria – Lake Ellis (3,600m)</h3>
                      <p className="text-muted-foreground mb-2">Drive and trek to alpine lake</p>
                      <p>Early morning departure from Nairobi to Chogoria town. Transfer to trailhead and begin trek through montane forest to Lake Ellis. Camp beside this beautiful alpine lake surrounded by dramatic scenery.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Lake Ellis – Lake Michaelson (4,200m)</h3>
                      <p className="text-muted-foreground mb-2">The scenic highlight day</p>
                      <p>Trek up through glades of montane forest climbing away from Lake Ellis. Cross moorland to ridge with breathtaking views over Gorges Valley and towards Ithanguni. Lunch at stream crossing before continuing to spectacular Lake Michaelson camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Lake Michaelson – Austrian Hut (4,790m)</h3>
                      <p className="text-muted-foreground mb-2">High altitude preparation</p>
                      <p>Trek up from Lake Michaelson through the Temple cliff drop with stunning views. Circumnavigate the peaks around the mountain to reach Austrian Hut at 4,790m. This vantage point puts you very close to the peaks for a short summit push.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Austrian Hut – Point Lenana (4,985m) – Sirimon – Nairobi</h3>
                      <p className="text-muted-foreground mb-2">Summit day and descent</p>
                      <p>Early 4:30 AM start up the rope-lined steep path to summit. Experience the world's highest Via Ferrata - protected climbing route with ropes. Watch spectacular sunrise from eastern Chogoria side. After summit photos, descend west via Sirimon route for breakfast at Shipton's Camp, then continue 15km to Old Moses before transfer to Nairobi.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Via Ferrata Section */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">World's Highest Via Ferrata</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    The final section to Point Lenana features the world's highest Via Ferrata - a protected climbing route 
                    where ropes and fixed anchors help climbers navigate the rocky terrain safely. This makes the summit 
                    accessible to those with basic climbing experience.
                  </p>
                  <ul className="list-disc ml-6 mt-4">
                    <li>Protected climbing route with safety ropes</li>
                    <li>Suitable for beginners with guide assistance</li>
                    <li>Spectacular exposure and views</li>
                    <li>Unique addition to trekking experience</li>
                    <li>All safety equipment provided</li>
                  </ul>
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
                    Prices include park fees, transport, meals, accommodation, guide, porters, summit certificate. 
                    Excludes sleeping bag, tips, flights, and personal items.
                  </p>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Experience the Ultimate Mount Kenya Traverse</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Combine the most scenic ascent with a beautiful forest descent on this spectacular traverse
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Book This Traverse
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get Detailed Info</Link>
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

export default ChogoriaDown;