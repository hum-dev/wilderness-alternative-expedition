import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const aboutData = {
    "title": "About Us",
    "shortDescription": "Wilderness Alternative Expedition is a premier travel fixer, curating unique journeys and unlocking rare, authentic experiences in the natural world. We operate across three countries—Kenya, Tanzania, and Uganda—taking you from the legendary Maasai Mara and Serengeti savannahs to the remote peaks of the Rwenzori Mountains, Mount Kenya, and Mount Kilimanjaro. Our travel style blends adventure with elegance, offering bespoke itineraries and small-group, specialist-led safaris for those seeking more than the ordinary.",
    "readMoreText": "Read More",
    "readLessText": "Read Less",
    "sections": [
      {
        "title": "About Wilderness Alternative Expedition",
        "image": {
          "src": "/src/assets/couple.jpg",
          "alt": "Family or Couple Safari Trip"
        },
        "paragraphs": [
          "Wilderness Alternative Expedition is a proudly Kenyan-owned travel company based in Nanyuki, at the foot of Mount Kenya. We specialize in small, exclusive, and high-quality trekking adventures on Mount Kenya and Mount Kilimanjaro, alongside luxury photographic safaris across Kenya's most iconic wildlife destinations including Ol Pejeta Conservancy, Maasai Mara, Amboseli, and Meru National Park.",
          "We're not a mass-market operator. We believe in the power of intimate travel experiences—tailor-made family treks, romantic couples' escapes, friends' adventures, small group climbs, and charity expeditions. Our signature is keeping group sizes small, ensuring personalized attention, high safety standards, and a truly unforgettable journey."
        ]
      },
      {
        "title": "More Than Just a Climb",
        "paragraphs": [
          "When you trek with us, you'll notice something different: our team smiles more. That's because our crew—from porters to chefs to guides—are among the best paid and most respected on the mountain. We run our company with strong ethics and local pride, ensuring our entire team is treated with dignity and fairness. As a result, our porters are not only hardworking—they're some of the happiest and most passionate on Mount Kenya.",
          "We invest in high-quality gear, including some of the best tents on the mountain, and we never cut corners when it comes to your comfort and safety."
        ]
      },
      {
        "title": "Beyond the Mountain",
        "paragraphs": [
          "We also organize luxury fly-in safaris and honeymoon experiences across Kenya, catering to discerning travelers seeking immersive wildlife encounters and unmatched comfort. Our safaris are designed for photographers, nature lovers, and couples wanting something extra special."
        ]
      },
      {
        "title": "Built on Passion and Purpose",
        "paragraphs": [
          "Most of our guests come to us through referrals and word of mouth—testament to the lasting impact we make on each journey. We host travelers from around the world, including the USA, UK, Germany, Netherlands, Norway, Scotland, Singapore, and even the UAE. Many remain friends long after their trip ends."
        ]
      }
    ],
    "founder": {
      "image": {
        "src": "/src/assets/ken.jpg",
        "alt": "Kenny – Founder"
      },
      "description": "Our founder, Kenny, is not only a seasoned guide but also the co-founder of Kurunzi Fund, a grassroots NGO that offers scholarships to underprivileged students in Northern Kenya. When not guiding on the mountain, you'll find him at our Nanyuki gear shop, where we also rent high-quality hiking gear and tents to other mountain outfitters.",
      "kurunziLink": {
        "url": "https://kurunzifund.org",
        "text": "Kurunzi Fund"
      }
    },
    "conclusion": "At Wilderness Alternative Expedition, we love what we do. We don't aim to be the cheapest—we aim to be the most memorable. Join us, and discover East Africa through the eyes of a team that truly cares."
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-mountain py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {aboutData.title}
              </h1>
              <div className="text-lg md:text-xl leading-relaxed">
                <p className={showFullDescription ? "" : "line-clamp-3"}>
                  {aboutData.shortDescription}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-4 text-white hover:text-primary"
                >
                  {showFullDescription ? aboutData.readLessText : aboutData.readMoreText}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {aboutData.sections.map((section, index) => (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {section.image && (
                    <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="w-full h-80 object-cover rounded-lg shadow-mountain"
                      />
                    </div>
                  )}
                  <div className={section.image && index % 2 === 1 ? 'md:col-start-1' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src={aboutData.founder.image.src}
                    alt={aboutData.founder.image.alt}
                    className="w-full h-80 object-cover rounded-lg shadow-mountain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest">
                    Meet Our Founder
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {aboutData.founder.description}
                  </p>
                  <Button variant="adventure" asChild>
                    <a
                      href={aboutData.founder.kurunziLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {aboutData.founder.kurunziLink.text}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                {aboutData.conclusion}
              </p>
              <div className="mt-8">
                <Button variant="adventure" size="lg">
                  <Link to="/contact">Start Your Adventure</Link>
                  
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;