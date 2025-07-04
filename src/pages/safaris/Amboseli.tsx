import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Amboseli = () => {
  const landscapes = [
    "Savannah grasslands",
    "Seasonal wetlands and swamps",
    "Acacia forests", 
    "Dry salt pans and ancient lake beds"
  ];

  const photographyHighlights = [
    "Sunrise and sunset silhouette shots",
    "Elephants crossing salty lakebeds",
    "Dust trails in golden hour light", 
    "Big cats set against open plains",
    "Towering Kilimanjaro as scenic backdrop"
  ];

  const activities = [
    {
      activity_type: "Morning and afternoon game drives",
      details: "Small private groups for optimal photography opportunities"
    },
    {
      activity_type: "Scenic bush meals",
      details: "Bush breakfasts and lunches in stunning natural settings"
    },
    {
      activity_type: "Walking safaris",
      details: "Guided walking safaris where permitted for intimate wildlife encounters"
    },
    {
      activity_type: "Photography time",
      details: "Ample time to wait for and capture perfect wildlife moments"
    },
    {
      activity_type: "Evening relaxation",
      details: "Camp relaxation, reviewing shots, and sharing stories under the stars"
    }
  ];

  const mammals = [
    "Lions (stalking or lazing under acacia trees)",
    "Cheetahs traversing open plains", 
    "Rare melanistic (black) serval, unique to this region",
    "Zebras",
    "Buffalo",
    "Wildebeest",
    "Giraffes"
  ];

  const endemicBirds = [
    "Pangani longclaw",
    "Steel-blue whydah",
    "Von der Decken's hornbill",
    "White-bellied go-away-bird",
    "African swamp hen"
  ];

  return (
    <>
      <Helmet>
        <title>Amboseli Safari - Wildlife Photography Haven with Kilimanjaro Views | Wilderness Alternative Expedition</title>
        <meta name="description" content="Experience Amboseli National Park, Kenya's premier destination for wildlife photography. Large elephant herds, Big Five wildlife, and spectacular Mount Kilimanjaro backdrop." />
        <meta name="keywords" content="Amboseli safari, Kenya wildlife photography, Mount Kilimanjaro views, elephant herds, Big Five Kenya, UNESCO Biosphere Reserve" />
        <meta property="og:title" content="Amboseli Safari - Wildlife Photography Haven with Kilimanjaro Views" />
        <meta property="og:description" content="A Haven for Wildlife Photography - Experience the land of giants with Mount Kilimanjaro as your backdrop" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-safari text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=800&fit=crop"
              alt="Amboseli landscape with elephants and Kilimanjaro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Amboseli Safari
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A Haven for Wildlife Photography - Experience the land of giants with Mount Kilimanjaro as your backdrop
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Park Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-foreground">
                      <p><strong>Location:</strong> Southern Kenya, at the foot of Mount Kilimanjaro</p>
                      <p><strong>Size:</strong> 392 square kilometers</p>
                      <p><strong>UNESCO Status:</strong> Biosphere Reserve (1991)</p>
                      <p><strong>Nickname:</strong> "The land of giants"</p>
                      <p><strong>Border:</strong> Near Kenyan-Tanzanian border</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Photography Appeal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground mb-4">
                      "The daily movement of elephants across Amboseli creates some of the most atmospheric images imaginable, especially when the salty dust kicks up into golden light."
                    </p>
                    <p className="text-xs text-muted-foreground">- Janine Krayer, Wildlife Photographer</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  Amboseli National Park is one of Africa's most iconic destinations for wildlife photographers, known for its large herds of big-tusked elephants and spectacular views of Mount Kilimanjaro.
                </p>
                <p className="text-lg mb-6">
                  The park offers perfect harmony between wildlife and scenery, with wide open landscapes punctuated by swamps, acacia woodlands, and the dried-up Lake Amboseli basin.
                </p>
                <p className="text-lg mb-8">
                  As one of Kenya's smaller national parks, Amboseli provides an intimate and easily explorable experience with incredible photographic variety across diverse ecosystems.
                </p>
              </div>

              {/* Landscapes */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Diverse Landscapes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {landscapes.map((landscape, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">{landscape}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wildlife Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Wildlife & Signature Species</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="hover:shadow-adventure transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Elephant Herds</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground text-sm mb-3">
                        Large herds with fascinating natural behavior, creating perfect formation crossings with Mount Kilimanjaro backdrop.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Daily movement from swampy marshlands to surrounding conservancies creates clouds of fine white dust - the origin of "Amboseli" name meaning "salty dust".
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-adventure transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Other Mammals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {mammals.map((mammal, index) => (
                          <p key={index} className="text-xs text-foreground">• {mammal}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Birdlife Paradise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">Over 400 recorded bird species including endemic species:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Endemic Species</h4>
                        <div className="space-y-1">
                          {endemicBirds.map((bird, index) => (
                            <p key={index} className="text-xs text-foreground">• {bird}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Wetland Birds</h4>
                        <div className="space-y-1">
                          <p className="text-xs text-foreground">• Pelicans</p>
                          <p className="text-xs text-foreground">• Kingfishers</p>
                          <p className="text-xs text-foreground">• Crakes</p>
                          <p className="text-xs text-foreground">• Raptors</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Photography Highlights */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Photography Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {photographyHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <p className="text-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safari Activities */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Safari Experience</h3>
                <div className="grid gap-4">
                  {activities.map((activity, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{activity.activity_type}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground">
                          {activity.details}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Best Times to Visit */}
              <div className="mb-16">
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Best Times to Visit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">Amboseli is a year-round destination with different seasonal advantages:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Dry Seasons (June-October, Jan-Feb)</h4>
                        <div className="space-y-1 text-sm text-foreground">
                          <p>• Large herds gathering</p>
                          <p>• Dramatic light conditions</p>
                          <p>• Clearer views of Mount Kilimanjaro</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Green Seasons (Mar-May, Nov-Dec)</h4>
                        <div className="space-y-1 text-sm text-foreground">
                          <p>• Vibrant scenery</p>
                          <p>• Bird migration periods</p>
                          <p>• Moody atmospheric skies</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Card className="bg-muted">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Capture Once-in-a-Lifetime Moments
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Experience Amboseli's unrivalled scenic opportunities with Kilimanjaro proximity and perfect photographic positioning.
                    </p>
                    <Button variant="adventure" size="lg">
                      Book Your Amboseli Photography Safari
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Amboseli;