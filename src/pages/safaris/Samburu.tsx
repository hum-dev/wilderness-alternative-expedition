import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Samburu = () => {
  const specialFive = [
    {
      name: "Grevy's Zebra",
      description: "Distinguished by narrow stripes and large ears, this endangered species is found mainly in northern Kenya."
    },
    {
      name: "Somali Ostrich",
      description: "Also known as the blue-necked ostrich, with distinctive blue-grey skin on neck and legs."
    },
    {
      name: "Reticulated Giraffe",
      description: "Features a distinctive coat pattern with large polygonal patches separated by white lines."
    },
    {
      name: "Beisa Oryx",
      description: "A large antelope with long, straight horns and striking facial markings."
    },
    {
      name: "Gerenuk",
      description: "The 'giraffe gazelle' with an elongated neck, capable of standing on hind legs to reach high vegetation."
    }
  ];

  const highlights = [
    "Encounter the rare 'Samburu Special Five' found nowhere else in Kenya",
    "Experience authentic Samburu culture and traditions",
    "Enjoy intimate wildlife viewing in a less crowded environment",
    "Witness diverse wildlife along the life-giving Ewaso Nyiro River",
    "Explore rugged landscapes with stunning mountain backdrops",
    "Visit traditional Samburu villages and learn about pastoral life"
  ];

  return (
    <>
      <Helmet>
        <title>Samburu National Reserve Safari - Discover Northern Kenya's Wildlife & Culture | Wilderness Alternative Expedition</title>
        <meta name="description" content="Experience Samburu National Reserve's unique wildlife including the Special Five, authentic Samburu culture, and stunning northern Kenya landscapes along the Ewaso Nyiro River." />
        <meta name="keywords" content="Samburu National Reserve, Samburu Special Five, Grevy's zebra, reticulated giraffe, northern Kenya safari, Samburu culture, Ewaso Nyiro River" />
        <meta property="og:title" content="Samburu National Reserve Safari - Discover Northern Kenya's Wildlife & Culture" />
        <meta property="og:description" content="Discover the wild beauty and cultural richness of northern Kenya" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-safari text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=1200&h=800&fit=crop"
              alt="Samburu landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Samburu National Reserve
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover the wild beauty and cultural richness of northern Kenya
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Discover Samburu National Reserve In Kenya
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  The Samburu National Reserve, located in the northern shadow of Mount Kenya, is a land of contrasts. Here, you can witness Kenya's diverse and beautiful wildlife and culture firsthand and learn how Kenya's conservancies sustainably blend tourism, conservation, and communities.
                </p>
                <p className="text-lg mb-6">
                  Your guide will introduce you to the Samburu people, who proudly wear traditional bright red robes and warmly welcome visitors to their ancestral homes. On exciting safaris, you can explore the reserve and encounter majestic lion, elephant, and rare animals such as the gerenuk, a graceful long-necked antelope.
                </p>
                <p className="text-lg mb-8">
                  The Ewaso Nyiro River flows through the reserve, which creates a lush oasis for crocodile, birds, and other wildlife. Samburu National Reserve is an excellent destination for a Kenya safari, offering stunning landscapes, unique species, and easy access to other attractions in Laikipia County, such as the Ol Pejeta Conservancy.
                </p>
              </div>

              {/* Why Go Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Why Go On A Samburu Safari</h3>
                <div className="grid gap-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg text-foreground">
                  Samburu National Reserve in Kenya offers a unique safari experience, distinguished by several key features. Its arid landscape, dotted with rugged hills and the winding Ewaso Nyiro River, provides a stunning backdrop and supports a diverse ecosystem. The cultural immersion aspect is another highlight—visitors can engage with the local Samburu tribes, known for their traditional practices and colorful attire, offering a glimpse into their rich heritage. The reserve's less crowded environment allows for more intimate wildlife viewing, making every safari here exceptionally personal and memorable.
                </p>
              </div>

              {/* Samburu Special Five */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">The Samburu Special Five</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {specialFive.map((animal, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{animal.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground">
                          {animal.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Itineraries Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-6">Samburu National Reserve Itineraries</h3>
                <p className="text-lg text-foreground mb-8">
                  We commit to offering personalised itineraries tailored perfectly to your preferences, with expert and knowledgeable designers available for advice and support. See our most popular and sought-after itineraries for inspiration, combining magnificent wildlife viewing and memorable cultural interactions.
                </p>
                <p className="text-lg text-foreground">
                  Let us help plan your perfect safari adventure. Don't miss this opportunity to experience the wonders of Samburu National Reserve and the beauty and diversity of Kenya. We have the perfect safari adventures, so contact us today and let our friendly and experienced design team help you plan your dream trip.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Card className="bg-muted">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Ready to Explore Samburu?
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Join us for an unforgettable adventure where you can feel the pulse of nature and the romance of Africa.
                    </p>
                    <Button variant="adventure" size="lg">
                      Book Your Samburu Safari
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

export default Samburu;