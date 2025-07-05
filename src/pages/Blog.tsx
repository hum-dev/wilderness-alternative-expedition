import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const destinations = ["Mt. Kenya", "Kilimanjaro", "Maasai Mara", "Samburu", "Amboseli"];
  const types = ["Trekking", "Safari", "Tips", "Packing Lists", "Wildlife"];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDestination = selectedDestination === "all" || 
                                post.tags.includes(selectedDestination);
      
      const matchesType = selectedType === "all" || 
                         post.tags.includes(selectedType);

      return matchesSearch && matchesDestination && matchesType;
    });
  }, [searchTerm, selectedDestination, selectedType]);

  return (
    <>
      <Helmet>
        <title>Travel Stories & Adventure Insights - Wilderness Alternative Expedition</title>
        <meta name="description" content="Discover travel stories, trekking guides, and safari insights from Kenya's wilderness. Expert tips for Mount Kenya, Kilimanjaro, and African safaris." />
        <meta name="keywords" content="Kenya travel blog, Mount Kenya trekking guides, Kilimanjaro climbing tips, safari stories, Africa adventure blog" />
        <meta property="og:title" content="Travel Stories & Adventure Insights" />
        <meta property="og:description" content="Tips, guides, and stories from Kenya's wild adventures" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-adventure text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Travel Stories & Adventure Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Tips, guides, and stories from the wild. Discover expert insights from our adventures across Kenya's mountains and savannas.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <Input
                    placeholder="Search by title, content, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Destinations</SelectItem>
                    {destinations.map(dest => (
                      <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              {(searchTerm || selectedDestination !== "all" || selectedType !== "all") && (
                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedDestination("all");
                      setSelectedType("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                  <span className="ml-4 text-muted-foreground">
                    {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">No posts found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search criteria or filters.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedDestination("all");
                      setSelectedType("all");
                    }}
                  >
                    Show All Posts
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden hover:shadow-adventure transition-all duration-300 group cursor-pointer">
                      <Link to={`/blog/${post.slug}`}>
                        <div className="relative overflow-hidden">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardHeader>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base mb-4 line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{post.date}</span>
                            <span>{post.readTime} min read</span>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;