import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, TrendingUp, TreePine, Eye } from "lucide-react";
import burguretImg from "@/assets/burguret.jpg";

const Burguret = () => {
  return (
    <>
      <Helmet>
        <title>Mount Kenya Burguret Route - Wild & Remote Trail Through Dense Forest</title>
        <meta name="description" content="Experience Mount Kenya's wildest route via Burguret. Remote trail through pristine rainforest, bamboo, and alpine zones. Perfect for adventurous trekkers seeking solitude." />
        <meta name="keywords" content="Mount Kenya Burguret route, wilderness trekking, remote trail, dense forest, adventure climbing" />
        <meta property="og:title" content="Mount Kenya Burguret Route Itinerary" />
        <meta property="og:description" content="A wild and less-traveled trail through dense forest and alpine meadows — ideal for adventurous trekkers" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mount Kenya Burguret Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                A wild and less-traveled trail through dense forest and alpine meadows — ideal for adventurous trekkers
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>6 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Challenging</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Northwest Approach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TreePine className="w-4 h-4" />
                  <span>Wilderness</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Eye className="w-4 h-4" />
                  <span>Wildlife Rich</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img
                src={burguretImg}
                alt="Mount Kenya Burguret Route - bamboo forest and highland vistas"
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
                    The Burguret Route is one of the least used trails on Mount Kenya, offering a true wilderness experience. 
                    It begins on the northwestern slopes and passes through pristine rainforest, bamboo, and alpine zones. 
                    This route is ideal for trekkers seeking solitude and a more rugged adventure.
                  </p>
                  <p>
                    Experience luxuriant bamboo forests, towering podocarpus and pencil cedar, before climbing through 
                    extraordinary giant lobelia and groundsels. Wildlife encounters with elephant and buffalo are common 
                    along this remote trail.
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
                      <li>• Adventurous and experienced trekkers</li>
                      <li>• Wildlife enthusiasts</li>
                      <li>• Those seeking true wilderness</li>
                      <li>• Photographers wanting unique shots</li>
                      <li>• Trekkers avoiding crowds</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Pristine bamboo forests</li>
                      <li>• Elephant and buffalo sightings</li>
                      <li>• Highland Castle lava cliffs</li>
                      <li>• Turquoise tarns and glaciers</li>
                      <li>• Eagles and buzzards overhead</li>
                      <li>• Lake Ellis and Nithi Falls</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">6-Day Itinerary</CardTitle>
                  <CardDescription>Complete wilderness traverse</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Nairobi - Giant Bamboo Camp (2,600m)</h3>
                      <p className="text-muted-foreground mb-2">Transfer and 4-hour ascent</p>
                      <p>Transfer from Nairobi to Nanyuki for lunch, then drive to Gathiuru forest station. 4-hour ascent through dense stands of towering bamboo to Giant Bamboo Camp. Elephant and buffalo are common in this area.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Giant Bamboo - Highlands Castle (3,700m)</h3>
                      <p className="text-muted-foreground mb-2">5-6 hours | ↑1,100m</p>
                      <p>Luxuriant bamboo yields to enormous podocarpus and pencil cedar forest. Climb to Hagenia rosewood zone at moorland edge for lunch. Continue through extraordinary giant lobelia and groundsels to Highland Castle beneath sheer lava cliffs.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Highlands Castle - Shipton Camp (4,200m)</h3>
                      <p className="text-muted-foreground mb-2">5-6 hours trek</p>
                      <p>Spectacular scenery as jagged volcanic peaks and shimmering glaciers tower above. Turquoise tarns nestle in valleys, eagles and buzzards soar overhead. Trek around summit circuit - hard to believe you're on the equator! Overnight at Shipton Camp.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Shipton - Point Lenana (4,985m) - Lake Ellis (3,455m)</h3>
                      <p className="text-muted-foreground mb-2">Long summit day</p>
                      <p>Predawn start for summit attempt. 3 hours up steep screes and rocky track to Point Lenana for sunrise - Kilimanjaro usually visible 340km south. Descend to Hall Tarns for breakfast, then gentle hike down broad ridge with magnificent views. Overnight at Lake Ellis.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 5: Lake Ellis - Mt Kenya Bandas (2,900m)</h3>
                      <p className="text-muted-foreground mb-2">Forest descent with waterfalls</p>
                      <p>Descend to road head and explore majestic Nithi waterfalls. Trail to Mount Kenya Bandas - log fires, hot showers, beds, and possibly Tusker beers! Wildlife viewing possible with elephants and buffalo often grazing outside cabins.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 6: Mt Kenya Bandas - Nairobi</h3>
                      <p className="text-muted-foreground mb-2">3 hours walk to vehicles</p>
                      <p>Three hours walk down through bamboo forest to meet vehicles for return journey to Nairobi, arriving late afternoon.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Wildlife Section */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Wildlife Encounters</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    The Burguret Route offers exceptional wildlife viewing opportunities throughout the journey:
                  </p>
                  <ul className="list-disc ml-6 mt-4">
                    <li>Elephants and buffalo in bamboo forests</li>
                    <li>Eagles and buzzards soaring overhead</li>
                    <li>Forest and moorland bird species</li>
                    <li>Possible sightings near Mt Kenya Bandas</li>
                    <li>Rich biodiversity through multiple ecosystems</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Ready for the Ultimate Wilderness Adventure?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience Mount Kenya's wildest and most remote route through pristine wilderness
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    <Link to="/contact">Book Burguret Route</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Discuss This Trek</Link>
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

export default Burguret;