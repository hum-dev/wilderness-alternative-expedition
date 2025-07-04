import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const OlPejeta = () => {
  const conservationMilestones = [
    "Elephant hunting outlawed in 1973",
    "Sweetwaters Game Reserve established in 1988", 
    "Community-focused conservancy model launched in 2003"
  ];

  const notableSpecies = [
    "Last two northern white rhinos on Earth",
    "Black and southern white rhinos",
    "Lions, elephants, leopards, buffalo, giraffes",
    "Cheetahs, hyenas, Grevy's zebras",
    "Over 300 bird species"
  ];

  const activities = [
    "Guided morning and afternoon game drives",
    "Rhino sanctuary visits and conservation tours",
    "Night game drives",
    "Chimpanzee sanctuary tours", 
    "Visits to the Endangered Species Enclosure",
    "Bush meals, sundowners, and nature walks"
  ];

  const uniqueFeatures = [
    {
      title: "Last Northern White Rhinos",
      description: "Home to the world's last two northern white rhinos, representing hope for species conservation through advanced reproductive technology."
    },
    {
      title: "Chimpanzee Sanctuary",
      description: "Kenya's only chimpanzee sanctuary, providing refuge for rescued chimpanzees from Central Africa."
    },
    {
      title: "Conservation Model",
      description: "Internationally recognized for its integration of conservation, tourism, livestock, and community development."
    },
    {
      title: "Endangered Species Enclosure",
      description: "Specialized facility for protecting and breeding the most endangered wildlife species."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ol Pejeta Conservancy Safari - Home of the Last Northern White Rhinos | Wilderness Alternative Expedition</title>
        <meta name="description" content="Visit Ol Pejeta Conservancy, home to the world's last two northern white rhinos. Experience world-class conservation, chimpanzee sanctuary, and diverse wildlife with Mount Kenya views." />
        <meta name="keywords" content="Ol Pejeta Conservancy, northern white rhino, chimpanzee sanctuary, Kenya conservation, rhino sanctuary, Mount Kenya wildlife, endangered species" />
        <meta property="og:title" content="Ol Pejeta Conservancy Safari - Home of the Last Northern White Rhinos" />
        <meta property="og:description" content="Home of the World's Last Two Northern White Rhinos – A Symbol of Hope and Conservation" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-safari text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=1200&h=800&fit=crop"
              alt="Ol Pejeta Conservancy landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ol Pejeta Conservancy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Home of the World's Last Two Northern White Rhinos – A Symbol of Hope and Conservation
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
                    <CardTitle className="text-xl text-primary">Location & Size</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-foreground">
                      <p><strong>Region:</strong> Laikipia County, Central Highlands</p>
                      <p><strong>Position:</strong> On the Equator, between Mount Kenya and the Aberdare Ranges</p>
                      <p><strong>Size:</strong> 360 square kilometers (224 square miles)</p>
                      <p><strong>Accessibility:</strong> Easily accessible by road from Nairobi</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Park Hours & Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-foreground">
                      <p><strong>Hours:</strong> Daily 7:00 AM to 7:00 PM</p>
                      <p><strong>Adult Fee:</strong> USD 110</p>
                      <p><strong>Child Fee:</strong> USD 55</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Fees support conservation and community development programs
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  Originally a cattle ranch in the 1940s, Ol Pejeta was transformed into a wildlife sanctuary in the 1980s and officially established as a conservancy in 2003. It has since become internationally recognized for its integration of conservation, tourism, livestock, and community development.
                </p>
                <p className="text-lg mb-8">
                  Today, Ol Pejeta stands as a beacon of hope in wildlife conservation, particularly known for being home to the world's last two northern white rhinos and Kenya's only chimpanzee sanctuary.
                </p>
              </div>

              {/* Conservation History */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Conservation Milestones</h3>
                <div className="grid gap-4">
                  {conservationMilestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{milestone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unique Features */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">What Makes Ol Pejeta Special</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {uniqueFeatures.map((feature, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Wildlife Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Wildlife & Notable Species</h3>
                <Card className="bg-muted">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Wildlife Species</h4>
                        <div className="space-y-2">
                          {notableSpecies.map((species, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-foreground text-sm">{species}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Special Sanctuaries</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-foreground">Rhino Sanctuary</p>
                            <p className="text-sm text-muted-foreground">Protecting the last northern white rhinos and other endangered rhino species</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Chimpanzee Sanctuary</p>
                            <p className="text-sm text-muted-foreground">Kenya's only chimpanzee sanctuary providing refuge for rescued primates</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Activities */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Safari Activities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mount Kenya Combination */}
              <div className="mb-16">
                <Card className="bg-gradient-adventure text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Combine Ol Pejeta with a Mount Kenya Expedition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-4">
                      Ol Pejeta Conservancy is the perfect addition to your Mount Kenya trek. After summiting Point Lenana, relax on safari among Africa's rarest wildlife.
                    </p>
                    <p className="text-white/80 text-sm">
                      Enjoy conservation-focused tourism with views of Mount Kenya in the distance.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Card className="bg-muted">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Travel with Meaning
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Visiting Ol Pejeta means contributing to conservation while enjoying unforgettable wildlife encounters. Experience hope in action for endangered species.
                    </p>
                    <Button variant="adventure" size="lg">
                      Book Your Ol Pejeta Conservation Safari
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

export default OlPejeta;