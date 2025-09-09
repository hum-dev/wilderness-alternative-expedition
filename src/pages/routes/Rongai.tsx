import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import rongaiImg from "@/assets/Rongai.jpg";
import { ArrowLeft, Clock, MapPin, TrendingUp, Users } from "lucide-react";

const Rongai = () => {
  return (
    <>
      <Helmet>
        <title>Kilimanjaro Rongai Route - Remote Northern Approach with Stunning Views</title>
        <meta name="description" content="Experience Kilimanjaro via the remote Rongai Route. Less crowded northern approach with stunning Kenyan landscape views." />
        <meta name="keywords" content="Rongai route, northern approach, less crowded, Kenya border, remote climbing" />
        <meta property="og:title" content="Kilimanjaro Rongai Route - Northern Wilderness" />
        <meta property="og:description" content="A remote and less crowded trail with stunning views of the Kenyan landscape" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kilimanjaro Rongai Route
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                A remote and less crowded trail with stunning views of the Kenyan landscape
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>Northern Approach</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4" />
                  <span>Less Crowded</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none -z-10">
            <img src={rongaiImg} alt="Rongai Route" className="w-full h-full object-cover opacity-30" width={1600} height={900} loading="lazy" />
          </div>
        </section>

        {/* Navigation */}
        <section className="py-6 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/kilimanjaro" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Kilimanjaro
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
                    The Rongai route is 73 km (45 miles) in total, and can be completed over six or seven days. We always recommend opting for the seven-day Rongai itinerary (as opposed to the six-day itinerary) as you really need the extra day in order to acclimatise properly and so avoid developing altitude sickness. The Rongai route is the only route that approaches the summit from the northern side of the mountain, near the Kenyan border. It's one of the least crowded of the seven Kilimanjaro routes.
                  </p>
                  <p>
                    To trek the Rongai route, you enter Kilimanjaro National Park at Rongai Gate. During the trek you pass through the different Kilimanjaro climate zones on your way to the arctic summit, namely rainforest, Afro-alpine moorland and high-altitude alpine desert. The highest point of Mount Kilimanjaro is Uhuru Peak, which sits at 5,895 m (19,341 ft) above sea level.
                  </p>
                  <p>
                    After hopefully summiting, you descend the mountain via the Marangu route on the southeast side of the mountain. This means you don't retrace your steps on the Rongai route but are always trekking new trail!
                  </p>
                </CardContent>
              </Card>

              {/* Sample Itinerary */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">7-Day Itinerary</CardTitle>
                  <CardDescription>Northern wilderness approach to Uhuru Peak</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 1: Rongai Gate to Simba Camp</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 1,950 m to 2,830 m | Distance: 8 km | Hiking time: 4 hours</p>
                      <p>First things first, you drive to Rongai Gate where you're recorded in the Kilimanjaro National Park's registry. You begin your climb by trekking through rainforest. At points you have breaks in the vegetation that offer magnificent views of cultivated fields down below. You climb for about four hours to reach Simba Camp, where you spend the night.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 2: Simba Camp to Second Cave</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 2,830 m to 3,450 m | Distance: 6 km | Hiking time: 3-4 hours</p>
                      <p>Today you trek through moorland to Second Cave. This takes three to four hours.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 3: Second Cave to Kikelelwa Cave</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 3,450 m to 3,600 m | Distance: 6 km | Hiking time: 3-4 hours</p>
                      <p>Today you trek through alpine desert to Kikelelwa Cave. The scenery along this part of the journey is quite remarkable. You hike for about four hours.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 4: Kikelelwa Cave to Mawenzi Tarn Hut</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 3,600 m to 4,315 m | Distance: 4 km | Hiking time: 4 hours</p>
                      <p>After breakfast you trek to Mawenzi Tarn Hut, which takes around four hours. Here, as on future nights, you camp next to the permanent huts housing trekkers using the Marangu route, as the two routes have now merged. You can also expect the trail to therefore be a little busier from now on.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 5: Mawenzi Tarn Hut to Kibo Hut</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 4,315 m to 4,703 m | Distance: 8 km | Hiking time: 5-6 hours</p>
                      <p>Today you trek for five to six hours through alpine desert to reach Kibo Hut. The trek is a gradual incline that heads west through the Saddle, a ridge of barren land that connects the peaks of Kibo and Mawenzi.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 6: Kibo Hut to Uhuru Peak to Horombo Hut</h3>
                      <p className="text-muted-foreground mb-2">Summit: 4,703 m to 5,895 m to 3,720 m | Hiking time: 15+ hours total</p>
                      <p>Today is the day! All going well, you'll be standing at the tippy top of Africa before lunchtime and glorying in your mega achievement. Summit day is split into two parts: the ascent to Uhuru Peak, followed by a descent of over two vertical kilometres. The first half of today's journey starts much earlier than on every other day. Your guide wakes you up at midnight. Welcome to the Roof of Africa!</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-bold text-lg mb-2">Day 7: Horombo Hut to Marangu Gate</h3>
                      <p className="text-muted-foreground mb-2">Elevation: 3,720 m to 1,843 m | Distance: 10 km | Hiking time: 5-7 hours</p>
                      <p>Today is the last day of your incredible journey! You do however have a relatively long hike down the mountain ahead of you. You trek for five to seven hours from Horombo Hut to Marangu Gate, where you bid Kilimanjaro farewell.</p>
                    </div>

                  </div>
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
                      <li>• Trekkers seeking solitude and fewer crowds</li>
                      <li>• Those wanting views of the Kenyan landscape</li>
                      <li>• Climbers preferring gradual ascent</li>
                      <li>• Adventure seekers wanting remote wilderness</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Only northern approach route</li>
                      <li>• Stunning views into Kenya</li>
                      <li>• Less crowded than other routes</li>
                      <li>• Diverse descent via Marangu</li>
                      <li>• Excellent wildlife spotting opportunities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Discover the Remote Northern Route</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience Kilimanjaro's least crowded path with stunning border views
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="adventure" size="lg">
                    <Link to="/contact">Book Rongai Route</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Plan Your Adventure</Link>
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

export default Rongai;