import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import meruImg from "@/assets/meru safari.jpeg";
import { Helmet } from "react-helmet-async";

const Meru = () => {
  const activities = [
    {
      name: "Game Viewing",
      description: "Enjoy sightings of elephants, lions, leopards, and rare species in their natural habitat. Game drives are best during the dry season, from June to September."
    },
    {
      name: "Scenic Safaris",
      description: "Traverse Meru's diverse ecosystems, from lush forests and swamps to open plains and riverbanks, with uninterrupted views of Mount Kenya."
    },
    {
      name: "Nature and Bush Walks",
      description: "Explore the park on foot with our expert guides and experience wildlife and flora at a closer and slower pace."
    },
    {
      name: "Bird Watching",
      description: "With over 400 species, Meru is a birdwatcher's paradise. The best time for birding is early morning or at dusk."
    },
    {
      name: "Fishing",
      description: "Catch Barbus and catfish along the Tana River or at designated fishing spots inside the park."
    },
    {
      name: "Cultural Visits",
      description: "Engage with local communities including the Borana, Orma, and Kamba. Learn about their conservation heritage, culture, and traditions."
    }
  ];

  const pointsOfInterest = [
    {
      name: "Elsa's Grave",
      description: "Final resting place of Elsa the lioness, raised by George and Joy Adamson and made famous by the film Born Free."
    },
    {
      name: "Pippa's Grave",
      description: "Pippa was a cheetah raised by Joy Adamson. Her story and legacy live on in Meru, where she and her cub are buried."
    },
    {
      name: "Adamson Falls",
      description: "A spectacular 50-meter waterfall where the Tana River cuts through a narrow rock gorge. The hike to the falls takes approximately 2 to 3 hours depending on physical ability."
    }
  ];

  const bigFive = [
    "Lions - Meru's pride populations roam the open plains",
    "Leopards - Often spotted in the riverine forests",
    "Elephants - Large herds frequent the Tana River",
    "Buffalos - Found in the park's diverse habitats",
    "Rhinos - Both black and white rhinos in the protected sanctuary"
  ];

  return (
    <>
      <Helmet>
        <title>Meru National Park Safari - Explore Elsa's Country & Kenya's Untamed Wilderness | Wilderness Alternative Expedition</title>
        <meta name="description" content="Discover Meru National Park, Kenya's untouched safari destination with rich wildlife including the Big Five, over 400 bird species, and the famous Elsa's grave from Born Free." />
        <meta name="keywords" content="Meru National Park safari, Kenya wildlife safari, Big Five Kenya, Elsa Born Free, Meru Rhino Sanctuary, Mount Kenya views, Tana River ecosystem" />
        <meta property="og:title" content="Meru National Park Safari - Explore Elsa's Country & Kenya's Untamed Wilderness" />
        <meta property="og:description" content="Explore Kenya's untamed wilderness and Elsa's legendary homeland" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-safari text-white">
          <div className="absolute inset-0">
            <img
              src={meruImg}
              alt="Meru National Park landscape"
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Meru National Park
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore Kenya's untamed wilderness and Elsa's legendary homeland
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Discover Meru National Park - Kenya's Untamed Wilderness
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  Meru National Park is one of Kenya's most spectacular and least-explored safari destinations. Located approximately 300 kilometers northeast of Nairobi, the park covers an area of 870 km² and offers breathtaking views of snow-capped Mount Kenya on the distant horizon. At Wilderness Alternative Expedition, we guide you off the beaten path and into this raw and authentic wilderness for a truly immersive safari experience.
                </p>
                <p className="text-lg mb-6">
                  Meru National Park lies at an altitude of 1,000 to 3,400 feet above sea level on the eastern slopes of the Nyambene Hills, within Meru County in Kenya's Eastern Province. Managed by the Kenya Wildlife Service (KWS), the park is famously known as 'Elsa's Country,' named after the lioness from the true-life story Born Free.
                </p>
                <p className="text-lg mb-8">
                  The park is part of the expansive Meru Conservation Area, which spans more than 5,000 km² and centers around the Tana River ecosystem. Meru's habitats range from lush, green volcanic soils to semi-arid scrublands and open plains. The park is also home to dense riverine forests of Doum and Raffia palms, permanent rivers, swamps, and forested hills.
                </p>
              </div>

              {/* Wildlife Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Wildlife in Meru National Park</h3>
                <p className="text-lg text-foreground mb-6">
                  Meru National Park is rich in wildlife diversity and home to four of the Big Five. The park features one of Kenya's most successful conservation efforts—The Meru Rhino Sanctuary—a secure 80 km² enclosure protecting both black and white rhinos.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="hover:shadow-adventure transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">The Big Five in Meru</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {bigFive.map((animal, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-foreground text-sm">{animal}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-adventure transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Birdlife Paradise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-4">
                        Bird enthusiasts will be thrilled by the more than 400 species recorded in the park, including:
                      </p>
                      <div className="space-y-1 text-sm text-foreground">
                        <p>• Pel's fishing owl</p>
                        <p>• Hinde's babbler (threatened)</p>
                        <p>• African finfoot</p>
                        <p>• Red-necked falcon</p>
                        <p>• Somali bee-eater</p>
                        <p>• Three-banded courser</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Activities Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Safari Activities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {activities.map((activity, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{activity.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground">
                          {activity.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Points of Interest */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Points of Interest</h3>
                <div className="grid gap-6">
                  {pointsOfInterest.map((point, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{point.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground">
                          {point.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Best Time to Visit */}
              <div className="mb-16">
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Best Time to Visit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Meru National Park can be visited year-round due to its equatorial location, enjoying warm daytime temperatures and generally dry, sunny weather.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Best Wildlife Viewing</h4>
                        <p className="text-sm text-foreground">June to September - Dry season with excellent game viewing</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Rainy Seasons</h4>
                        <p className="text-sm text-foreground">Long rains: March to May<br />Short rains: October to November</p>
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
                      Ready to Explore Meru National Park?
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Discover Kenya's untouched safari destination with rich wildlife, birdlife, and cultural heritage.
                    </p>
                    <Button variant="adventure" size="lg">
                      Book Your Meru Safari Adventure
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

export default Meru;