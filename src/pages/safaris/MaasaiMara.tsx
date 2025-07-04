import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const MaasaiMara = () => {
  const bucketListExperiences = [
    "Experience the Masai Mara on twice-daily game drives. The Mara is a wildlife haven with an incredible concentration of animals year-round. Expert rangers lead interpretive drives that uncover the wonders of this remarkable landscape.",
    "Explore the open savanna on foot during a guided walking safari. Step off the beaten path and connect with the land on a sensory level — hear the insects, breathe the fresh air, and feel the African soil underfoot.",
    "Take to the skies in a hot air balloon. Before dawn, soar above the plains for a magnificent aerial view of the landscape and wildlife below. Finish with a hearty champagne breakfast in the wild.",
    "Mingle with the Maasai on a community visit to their manyattas. Be welcomed into traditional mud and stick homes, and learn about Maasai pastoral life, customs, and enduring traditions.",
    "Take to the saddle on a horseback safari. Ride across the plains like the explorers of old, past herds of zebra, giraffe, and if timed right, the mighty Great Migration.",
    "Witness the thundering hooves of the Great Migration. One of the most dramatic natural spectacles, this annual event sees over two million herbivores moving across the Serengeti-Mara ecosystem. The nail-biting Mara River crossings (July–October) are a highlight.",
    "Recreate your favorite scenes from the film 'Out of Africa'. Fans of this romantic classic can visit filming locations and walk in the footsteps of Meryl Streep and Robert Redford.",
    "Celebrate the sunset with Maasai warriors on the Oloololo Escarpment. Enjoy sundowners with panoramic views, a roaring fire, snacks, a full bar, and a live performance by Maasai warriors.",
    "Photograph lions in the 'Big Cat Diary' territory. With one of the highest lion densities in the world, the Mara is home to the Marsh pride and iconic individuals like Scarface. A paradise for wildlife photographers.",
    "Perfect your photography skills in custom safari vehicles. These state-of-the-art vehicles offer 360° swivel chairs, unobstructed views, personal bars, and air conditioning. Combined with the Mara's rich wildlife, it's a photographer's dream come true."
  ];

  return (
    <>
      <Helmet>
        <title>Masai Mara Safari - Experience Kenya's Premier Wildlife Destination | Wilderness Alternative Expedition</title>
        <meta name="description" content="Discover the world-famous Masai Mara with expert guides. Witness the Great Migration, Big Five wildlife, and authentic Maasai culture in Kenya's most iconic safari destination." />
        <meta name="keywords" content="Masai Mara safari, Kenya wildlife safari, Great Migration, Big Five, Maasai culture, hot air balloon safari, wildlife photography" />
        <meta property="og:title" content="Masai Mara Safari - Experience Kenya's Premier Wildlife Destination" />
        <meta property="og:description" content="A vast, game-filled landscape and cultural treasure in Kenya" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-safari text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1549366021-9f761d040ed2?w=1200&h=800&fit=crop"
              alt="Masai Mara landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Masai Mara
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A vast, game-filled landscape and cultural treasure in Kenya
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-foreground mb-12">
                <p className="text-lg mb-6">
                  Masai Mara … two words that evoke the senses and inspire bucket list dreams. It is a vast, magnificent and game-filled landscape in Kenya that has been frequented and made famous by intrepid explorers, royal families, A-list celebrities, wildlife photographers and award-winning filmmakers.
                </p>
                <p className="text-lg mb-6">
                  The Masai Mara features prominently on wanderlust travellers' wish lists and if you haven't witnessed it yourself, then now is the time. In addition to the 10 bucket list experiences listed below, the region offers even more breathtaking surprises for every visitor.
                </p>
                <p className="text-lg mb-6">
                  <strong>What is the difference between Masai and Maasai?</strong> You may notice the two spellings: 'Masai' refers to the land — the world-famous, sprawling and game-rich ecosystem bordering Tanzania's Serengeti National Park. 'Maasai' refers to the semi-nomadic Maa-speaking people of East Africa, known for their vibrant culture, traditional attire, beaded jewelry, fearless coexistence with wildlife, and their incredible vertical jumps.
                </p>
                <p className="text-lg mb-8">
                  The Mara (from the Maa word meaning 'spotted') is a land of breathtaking vistas, abundant wildlife, and endless grassy plains dotted with Acacia trees and thorn bushes. While some mistakenly say 'Maasai Mara', the correct name for the reserve is 'Masai Mara'. When in East Africa, you'll see that all signage points to 'Masai Mara'. You can now share this knowledge as an Africa fundi (slang for expert).
                </p>
              </div>

              {/* Top 10 Bucket List Experiences */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  Top 10 Bucket List Experiences in the Masai Mara
                </h2>
                <div className="grid gap-6">
                  {bucketListExperiences.map((experience, index) => (
                    <Card key={index} className="hover:shadow-adventure transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary flex items-center">
                          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                            {index + 1}
                          </span>
                          Experience {index + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-foreground">
                          {experience}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Card className="bg-muted">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Ready to Experience the Masai Mara?
                    </h3>
                    <p className="text-lg text-foreground mb-6">
                      Join us for an unforgettable safari adventure in Kenya's most iconic wildlife destination.
                    </p>
                    <Button variant="adventure" size="lg">
                      Book Your Masai Mara Safari
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

export default MaasaiMara;