import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import safariImage from "@/assets/safari-wildlife.jpg";
import kilimanjaroImage from "@/assets/kilimanjaro-trek.jpg";

const destinations = [
  {
    id: "mt-kenya",
    title: "Mount Kenya",
    subtitle: "Africa's Second Highest Peak",
    description: "Challenge yourself on Kenya's most iconic mountain with diverse routes through alpine landscapes and unique wildlife encounters.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    highlights: ["Point Lenana (4,985m)", "5 Different Routes", "Alpine Wildlife"],
    duration: "4-6 Days",
    difficulty: "Moderate to Challenging"
  },
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro",
    subtitle: "Roof of Africa",
    description: "Conquer Africa's highest peak through stunning climate zones from rainforest to arctic conditions at the summit.",
    image: kilimanjaroImage,
    highlights: ["Uhuru Peak (5,895m)", "7 Different Routes", "No Technical Climbing"],
    duration: "5-9 Days",
    difficulty: "Moderate"
  },
  {
    id: "safaris",
    title: "Wildlife Safaris",
    subtitle: "Big Five Adventures",
    description: "Experience Kenya's world-renowned wildlife in their natural habitat across multiple national parks and conservancies.",
    image: safariImage,
    highlights: ["Big Five Sightings", "Great Migration", "Cultural Experiences"],
    duration: "3-14 Days",
    difficulty: "Easy"
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Expeditions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our signature adventures designed to create unforgettable memories 
            and challenge your limits in East Africa's most spectacular destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden shadow-adventure hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium text-sunset">{destination.subtitle}</div>
                  <h3 className="text-2xl font-bold">{destination.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {destination.duration}
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <span className="font-medium text-primary">{destination.difficulty}</span>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Highlights:</div>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs bg-forest/10 text-forest px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button variant="adventure" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="mountain" size="lg">
            View All Expeditions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;