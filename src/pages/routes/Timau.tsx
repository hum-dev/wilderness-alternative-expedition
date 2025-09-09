import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, TrendingUp, TreePine } from "lucide-react";
import timauImg from "@/assets/Timau.jpg";

const Timau = () => {
  return (
    <>
      <Helmet>
        <title>Mount Kenya Timau Route - Scenic Northern Approach with Gentle Slopes</title>
        <meta name="description" content="Explore Mount Kenya via the scenic Timau Route. Gentle gradients perfect for acclimatization with stunning views of northern plains and moorlands." />
        <meta name="keywords" content="Mount Kenya Timau route, gentle ascent, acclimatization, northern approach, scenic trekking" />
        <meta property="og:title" content="Mount Kenya Timau Route Itinerary" />
        <meta property="og:description" content="A scenic and less-traveled trail with gentle slopes — perfect for acclimatization and nature lovers" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mount Kenya Timau Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                A scenic and less-traveled trail with gentle slopes — perfect for acclimatization and nature lovers
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>4 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Northern Approach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TreePine className="w-4 h-4" />
                  <span>Less Traveled</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img
                src={timauImg}
                alt="Mount Kenya Timau Route - northern plains view"
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
                    The Timau Route is known for its gradual ascent and stunning scenery, making it ideal for trekkers 
                    seeking a quieter and more immersive experience. It approaches Mount Kenya from the north and offers 
                    excellent acclimatization opportunities due to its gentle gradient.
                  </p>
                  <p>
                    This route provides breathtaking views of the northern plains, patchwork fields on lower slopes, 
                    and the golden hills of Lewa Downs. The diverse landscape takes you through moorland, bamboo, 
                    and giant heather zones.
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
                      <li>• Nature lovers and wildlife enthusiasts</li>
                      <li>• Those seeking gradual acclimatization</li>
                      <li>• Photographers wanting unique perspectives</li>
                      <li>• Trekkers preferring less crowded trails</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Stunning northern plains views</li>
                      <li>• Gentle, gradual ascent</li>
                      <li>• Diverse moorland ecosystems</li>
                      <li>• Zebra sightings at Marania Spring</li>
                      <li>• Dramatic rock faces at Major's Camp</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">4-Day Itinerary</CardTitle>
                  <CardDescription>Gentle ascent through northern wilderness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Timau Roadhead to Marania Camp (3,200m)</h3>
                      <p className="text-muted-foreground mb-2">Trekking time: 4 hours</p>
                      <p>Start at 2,700m roadhead through moorland, bamboo and giant heather. Enjoy breathtaking views over patchwork fields, golden hills of Lewa Downs, and the Northern Frontier. Picnic lunch on crater rim before continuing to Marania Camp in heather moorland.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Marania Camp to Major's Camp (3,800m)</h3>
                      <p className="text-muted-foreground mb-2">Trekking time: 8 hours</p>
                      <p>Trek through moorland toward Mount Kenya massif with glimmering peaks ahead. Picnic lunch at beautiful Marania Spring, source of the river flowing past camp. Often see curious zebra here. Arrive at Major's Camp set in dramatic valley with spectacular rock faces.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Major's Camp to Simba Tarn (4,650m)</h3>
                      <p className="text-muted-foreground mb-2">Trekking time: 8 hours</p>
                      <p>Long, gradual trek through lunar-like landscape with distinctive vegetation. See endemic giant groundsels and lobelias adapted to Mount Kenya's temperature fluctuations. Pass under Terere and Sendeyo massifs. Arrive at Simba Tarn with breathtaking views down Gorges Valley.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Simba Tarn to Point Lenana (4,985m) to Met Station</h3>
                      <p className="text-muted-foreground mb-2">Trekking time: 12 hours</p>
                      <p>Early 5:30 AM departure for sunrise summit. On clear days, valleys light up golden-green with reflecting tarns, and Kilimanjaro may be visible 340km away. After summit celebration, descend via Naro Moru route with brunch in Teleki Valley before final trek to Met Station.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Experience the Tranquil Timau Route</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover Mount Kenya's northern wilderness on this peaceful, scenic trail
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    <Link to="/contact">Book Timau Route</Link>
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

export default Timau;