import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, TrendingUp, Camera } from "lucide-react";

const Chogoria = () => {
  return (
    <>
      <Helmet>
        <title>Mount Kenya Chogoria Route - Most Scenic Route with Lake Michaelson</title>
        <meta name="description" content="Experience Mount Kenya's most beautiful route via Chogoria. Features Lake Michaelson, dramatic cliffs, and The Temple amphitheatre. Perfect for photographers." />
        <meta name="keywords" content="Mount Kenya Chogoria route, Lake Michaelson, scenic route Mount Kenya, Temple amphitheatre, photography trekking" />
        <meta property="og:title" content="Mount Kenya Chogoria Route Itinerary" />
        <meta property="og:description" content="Often considered the most scenic route, with dramatic cliffs, Lake Michaelson, and The Temple amphitheatre." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mount Kenya Chogoria Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Often considered the most scenic route, with dramatic cliffs, Lake Michaelson, and The Temple amphitheatre
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>5-6 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Moderate-Challenging</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>East Approach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Camera className="w-4 h-4" />
                  <span>Most Scenic</span>
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
                    The Chogoria route is widely regarded as the most beautiful and scenic approach to Mount Kenya. 
                    This route offers spectacular views, diverse landscapes, and unique geological formations that 
                    make it a photographer's paradise and a memorable experience for all trekkers.
                  </p>
                  <p>
                    The route features the stunning Lake Michaelson, dramatic cliff faces, and the impressive 
                    Temple amphitheatre - natural formations that showcase the raw beauty of Mount Kenya's landscape.
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
                      <li>• Photography enthusiasts</li>
                      <li>• Scenic landscape lovers</li>
                      <li>• Experienced trekkers</li>
                      <li>• Those wanting the full Mount Kenya experience</li>
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
                      <li>• Dramatic cliff formations</li>
                      <li>• Gorges Valley views</li>
                      <li>• Diverse ecosystems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">6-Day Itinerary</CardTitle>
                  <CardDescription>The ultimate Mount Kenya scenic experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Nairobi to Chogoria Gate to Mount Meru Bandas</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 1,600m to 2,950m | Distance: Drive + 16km | Time: 4-5 hours trek</p>
                      <p>Drive from Nairobi to Chogoria Gate. Begin trek through bamboo forest with spectacular views. Overnight at Mount Meru Bandas.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Mount Meru Bandas to Lake Ellis</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 2,950m to 3,500m | Distance: 8km | Time: 4-5 hours</p>
                      <p>Trek through the moorland zone with stunning views of the surrounding landscape. Reach Lake Ellis, a beautiful alpine lake for overnight camping.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Lake Ellis to Lake Michaelson</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 3,500m to 4,100m | Distance: 9km | Time: 5-6 hours</p>
                      <p>The highlight day! Trek to the spectacular Lake Michaelson, nestled beneath towering cliffs. Camp by the lake with incredible mountain views.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Explore Gorges Valley and Temple</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 4,100m | Various day hikes available</p>
                      <p>Acclimatization day exploring the famous Gorges Valley and The Temple formations. Optional hikes to various viewpoints. Overnight at Lake Michaelson.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 5: Summit Day - Point Lenana to Mackinder's Camp</h3>
                      <p className="text-muted-foreground mb-2">Summit: 4,985m | Distance: 14km | Time: 8-10 hours</p>
                      <p>Early morning start for Point Lenana summit via Austrian Hut. Enjoy sunrise from the peak, then descend to Mackinder's Camp via Sirimon route.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 6: Mackinder's to Sirimon Gate to Nairobi</h3>
                      <p className="text-muted-foreground mb-2">Altitude: 4,200m to 2,400m | Distance: 14km | Time: 4-5 hours</p>
                      <p>Final descent through Mackinder's Valley to Sirimon Gate. Transfer back to Nairobi, completing the scenic traverse.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Special Features */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Lake Michaelson - The Crown Jewel</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    Lake Michaelson is the highlight of the Chogoria route - a pristine alpine lake sitting at 4,100m 
                    beneath dramatic cliff faces. The lake offers some of the most spectacular camping experiences on Mount Kenya.
                  </p>
                  <ul className="list-disc ml-6 mt-4">
                    <li>Crystal clear mountain lake</li>
                    <li>Surrounded by towering cliffs</li>
                    <li>Perfect for photography at sunrise/sunset</li>
                    <li>Unique geological formations nearby</li>
                    <li>Excellent base for exploring The Temple</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Photography Tips */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Photography Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Best Photo Spots:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Lake Michaelson reflections</li>
                        <li>• The Temple amphitheatre</li>
                        <li>• Gorges Valley panoramas</li>
                        <li>• Cliff face formations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Best Times:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Early morning at Lake Michaelson</li>
                        <li>• Golden hour cliff shots</li>
                        <li>• Clear afternoon valley views</li>
                        <li>• Sunrise from high camps</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Experience Mount Kenya's Most Beautiful Route</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join us for an unforgettable journey through Mount Kenya's most spectacular landscapes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Book Chogoria Route
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

export default Chogoria;