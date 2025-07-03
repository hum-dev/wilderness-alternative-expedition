import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MapPin, TrendingUp, TreePine, Eye } from "lucide-react";

const Kamweti = () => {
  return (
    <>
      <Helmet>
        <title>Mount Kenya Kamweti Route - Remote Southern Trail Through Dense Forest</title>
        <meta name="description" content="Discover Mount Kenya's hidden Kamweti Route. Remote southern approach through thick bamboo and moorland. Perfect for trekkers seeking solitude and biodiversity." />
        <meta name="keywords" content="Mount Kenya Kamweti route, remote trekking, southern approach, bamboo forest, biodiversity, solitude trekking" />
        <meta property="og:title" content="Mount Kenya Kamweti Route Itinerary" />
        <meta property="og:description" content="A remote and rarely used trail through dense forest — ideal for solitude and nature immersion" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mount Kenya Kamweti Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                A remote and rarely used trail through dense forest — ideal for solitude and nature immersion
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
                  <span>Southern Approach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TreePine className="w-4 h-4" />
                  <span>Bamboo Forest</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Eye className="w-4 h-4" />
                  <span>Rarely Used</span>
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
                    The Kamweti Route is one of the least known and most secluded trails on Mount Kenya. It begins deep in the 
                    southern forest reserve and ascends through thick bamboo and moorland. This route is perfect for trekkers 
                    seeking a quiet, off-the-beaten-path experience with rich biodiversity.
                  </p>
                  <p>
                    This rarely used trail offers an intimate encounter with Mount Kenya's pristine ecosystems, from dense 
                    bamboo forests to high-altitude heather moorlands. The route provides excellent opportunities for wildlife 
                    viewing and botanical discovery in peaceful solitude.
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
                      <li>• Solitude seekers</li>
                      <li>• Nature and wildlife enthusiasts</li>
                      <li>• Botanists and researchers</li>
                      <li>• Experienced trekkers</li>
                      <li>• Those avoiding crowded routes</li>
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
                      <li>• Rich biodiversity</li>
                      <li>• Peaceful high-altitude meadows</li>
                      <li>• Undisturbed wildlife</li>
                      <li>• Unique southern perspective</li>
                      <li>• Complete solitude</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">4-Day Itinerary</CardTitle>
                  <CardDescription>Remote wilderness experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Nairobi – Kamweti Forest Gate – Forest Camp (2,800m)</h3>
                      <p className="text-muted-foreground mb-2">Remote forest entry</p>
                      <p>Drive to remote Kamweti Gate deep in the southern forest reserve. Begin trek through thick bamboo forest and pristine woodland. Establish camp in untouched forest environment with excellent wildlife viewing opportunities.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Forest Camp – Moorland Camp (3,600m)</h3>
                      <p className="text-muted-foreground mb-2">Ascend through bamboo and heather zones</p>
                      <p>Gradual ascent through towering bamboo stands and transitioning heather zones. Experience the quiet majesty of Mount Kenya's southern slopes with diverse plant life and bird species. Camp in peaceful high-altitude moorlands.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Moorland Camp – Mackinder's Camp (4,200m)</h3>
                      <p className="text-muted-foreground mb-2">Join main route network</p>
                      <p>Continue ascent through alpine moorland to join the established route network at Mackinder's Camp. Transition from complete solitude to the more familiar high-altitude camping experience with stunning mountain views.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Mackinder's Camp – Point Lenana – Descent</h3>
                      <p className="text-muted-foreground mb-2">Summit attempt and scenic descent</p>
                      <p>Early morning summit attempt to Point Lenana (4,985m). Enjoy sunrise from Kenya's second-highest peak before beginning descent via either Chogoria or Naro Moru route, completing this unique traverse experience.</p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Biodiversity Section */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Rich Biodiversity</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    The Kamweti Route offers unparalleled access to Mount Kenya's pristine ecosystems:
                  </p>
                  <ul className="list-disc ml-6 mt-4">
                    <li>Thick bamboo forests with endemic species</li>
                    <li>Diverse bird populations in undisturbed habitat</li>
                    <li>Unique plant communities in heather moorlands</li>
                    <li>Pristine water sources and streams</li>
                    <li>Undisturbed wildlife corridors</li>
                    <li>Opportunity for botanical discovery</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Important Notes */}
              <Card className="mb-12 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">Important Considerations</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-700">
                  <ul className="space-y-2">
                    <li>• This route requires experienced guides familiar with the terrain</li>
                    <li>• Limited infrastructure - bring comprehensive camping equipment</li>
                    <li>• Weather-dependent access due to remote location</li>
                    <li>• Advance planning and permits required</li>
                    <li>• Best suited for experienced trekkers</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Discover Mount Kenya's Hidden Route</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience the ultimate wilderness solitude on this rarely traveled southern approach
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    Inquire About Kamweti
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Custom Planning Required</Link>
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

export default Kamweti;