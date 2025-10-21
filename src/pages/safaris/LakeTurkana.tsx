import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const LakeTurkana = () => {
  const highlights = [
    "Samburu National Reserve - witness the Samburu Special Five and reticulated giraffes",
    "Chalbi Desert - experience the endless sea of silence and wind",
    "Kalacha Oasis - discover palm trees whispering in the desert",
    "Lake Turkana (The Jade Sea) - marvel at the color-shifting waters",
    "Sibiloi National Park & Koobi Fora - explore humanity's birthplace",
    "Marsabit National Park - discover a mountain oasis rising from the desert",
    "Traditional encounters with Samburu warriors and nomadic communities",
    "Crater lakes and ancient forests shrouded in mist",
    "Wildlife encounters in contrast landscapes - from lush forests to stark deserts",
    "Authentic cultural immersion with communities living as they have for generations"
  ];

  const keyDestinations = [
    {
      name: "Samburu National Reserve",
      description: "Begin your journey where the Ewaso Nyiro River brings life to the semi-arid landscape. Mornings are filled with the sight of elephants dusting themselves in gold, and reticulated giraffes moving like living art. The Samburu warriors walk with quiet pride—a people as deeply rooted here as the acacia trees."
    },
    {
      name: "Chalbi Desert",
      description: "Experience an endless sea of silence and wind, broken only by the green heartbeat of Kalacha Oasis, where palm trees whisper against the dry air. A landscape of mirages and shifting sands that tests and rewards the adventurous spirit."
    },
    {
      name: "Lake Turkana - The Jade Sea",
      description: "Stand at the edge of the world where the desert meets the water. The lake's colors shift from turquoise to emerald under the desert sun, creating a vista that feels almost otherworldly. This is Kenya's largest permanent desert lake, a place of haunting beauty."
    },
    {
      name: "Sibiloi National Park & Koobi Fora",
      description: "Walk where humanity took its first steps. Fossils millions of years old lie beneath the dust at Koobi Fora, one of the world's most important paleoanthropological sites. This land has watched our species evolve and begin its journey across the planet."
    },
    {
      name: "Marsabit National Park",
      description: "A mountain of green rising from the desert, cloaked in mist and mystery. Crater lakes shimmer quietly beneath ancient forests, where elephants roam in peace and leopards move like shadows. A lush paradise that seems impossible in the heart of such dryness."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lake Turkana & Northern Kenya Safari - Explore Kenya's Wild Frontier | Wilderness Alternative Expedition</title>
        <meta name="description" content="Journey to Northern Kenya's Lake Turkana, the Jade Sea. Experience Samburu, Chalbi Desert, and Marsabit on an expedition to Kenya's most remote and spectacular wilderness." />
        <meta name="keywords" content="Lake Turkana safari, Northern Kenya, Samburu safari, Chalbi Desert, Marsabit National Park, Jade Sea, Koobi Fora, remote Kenya safari, cultural safari" />
        <meta property="og:title" content="Lake Turkana & Northern Kenya Safari - Explore Kenya's Wild Frontier" />
        <meta property="og:description" content="A journey into the wild heart of Kenya - raw, real, and humbling" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-safari text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1621414050345-53db43f7e7ab?w=1200&h=800&fit=crop"
              alt="Lake Turkana landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Lake Turkana & Northern Kenya
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A journey into the wild heart of Kenya - raw, real, and humbling
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6 italic">
                  There's a part of Kenya that very few people ever see—a place where the land stretches endlessly, where silence hums louder than words, and where beauty feels ancient and untouched. This is Northern Kenya, a world apart from the usual safari trails, a region that holds the soul of adventure itself.
                </p>
                <p className="text-lg mb-6">
                  I've guided across this land many times, and every journey feels like the first. The air here carries stories—of wandering herders, of shifting sands, and of life that has learned to thrive where most would think it impossible.
                </p>
                <p className="text-lg mb-6">
                  This isn't just another safari. It's a journey into the wild heart of Kenya—raw, real, and humbling. You don't just see Northern Kenya; you feel it. Every horizon tells a story, every breeze carries history, and every sunset reminds you how small and alive you really are.
                </p>
              </div>

              {/* Key Destinations */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  The Journey Through Northern Kenya
                </h2>
                <div className="grid gap-8">
                  {keyDestinations.map((destination, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">
                          {destination.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground leading-relaxed">
                          {destination.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Highlights Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  Expedition Highlights
                </h2>
                <div className="grid gap-4">
                  {highlights.map((highlight, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary flex items-center">
                          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                            {index + 1}
                          </span>
                          Highlight {index + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground">
                          {highlight}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What Makes This Special */}
              <div className="mb-16">
                <Card className="bg-muted border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                      A Land of Contrasts and Miracles
                    </h3>
                    <div className="prose prose-lg max-w-none text-foreground">
                      <p className="text-lg mb-4">
                        Northern Kenya is a land of impossible contrasts. Here you'll find:
                      </p>
                      <ul className="space-y-3 text-base">
                        <li><strong>Desert and oasis</strong> - Palm trees rising from endless sand</li>
                        <li><strong>Mountain forests and arid plains</strong> - Lush crater lakes in the heart of dryness</li>
                        <li><strong>Ancient and modern</strong> - Humanity's birthplace alongside living traditional cultures</li>
                        <li><strong>Silence and life</strong> - Where emptiness teems with resilient wildlife</li>
                        <li><strong>Isolation and connection</strong> - Remote landscapes that bring you closer to yourself</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Card className="bg-muted">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Ready to Explore Northern Kenya?
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Join us on an expedition to one of Africa's last true frontiers. This journey will change how you see Kenya—and perhaps yourself.
                    </p>
                    <Button variant="adventure" size="lg">
                      Book Your Northern Kenya Expedition
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

export default LakeTurkana;
