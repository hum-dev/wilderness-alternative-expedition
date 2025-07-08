import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { client, postsQuery, urlFor, type SanityPost } from "@/lib/sanity";
import { format } from "date-fns";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const destinations = ["Mt. Kenya", "Kilimanjaro", "Maasai Mara", "Samburu", "Amboseli"];
  const types = ["Trekking", "Safari", "Tips", "Packing Lists", "Wildlife"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(postsQuery);
        setPosts(data);
      } catch (err) {
        setError("Failed to load blog posts");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Extract tags from post body or title for filtering
      const postTags = extractTagsFromPost(post);
      
      const matchesDestination = selectedDestination === "all" || 
                                postTags.some(tag => tag.toLowerCase().includes(selectedDestination.toLowerCase()));
      
      const matchesType = selectedType === "all" || 
                         postTags.some(tag => tag.toLowerCase().includes(selectedType.toLowerCase()));

      return matchesSearch && matchesDestination && matchesType;
    });
  }, [searchTerm, selectedDestination, selectedType, posts]);

  const extractTagsFromPost = (post: SanityPost) => {
    // Extract potential tags from title and body content
    const titleWords = post.title.toLowerCase().split(/\s+/);
    interface BlockChild {
      text: string;
      [key: string]: unknown;
    }

    const bodyText = post.body?.map((block: unknown) => 
      (typeof block === 'object' && block !== null && 'children' in block)
        ? ((block as { children?: BlockChild[] }).children?.map((child: BlockChild) => child.text).join(' ') || '')
        : ''
    ).join(' ').toLowerCase() || '';
    
    const allTags = [...titleWords];
    
    // Add destination tags based on content
    destinations.forEach(dest => {
      if (titleWords.some(word => dest.toLowerCase().includes(word)) || 
          bodyText.includes(dest.toLowerCase())) {
        allTags.push(dest);
      }
    });
    
    // Add type tags based on content
    types.forEach(type => {
      if (titleWords.some(word => type.toLowerCase().includes(word)) || 
          bodyText.includes(type.toLowerCase())) {
        allTags.push(type);
      }
    });
    
    return allTags;
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM dd, yyyy");
  };

  interface BlockChild {
    text: string;
    [key: string]: unknown;
  }

  interface BodyBlock {
    _type: string;
    children?: BlockChild[];
    [key: string]: unknown;
  }

  const getExcerpt = (body: BodyBlock[]) => {
    const firstTextBlock = body?.find(block => block._type === 'block' && block.children?.[0]?.text);
    return firstTextBlock?.children?.[0]?.text?.substring(0, 150) + "..." || "Read more...";
  };

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

              {/* Results Count */}
              {!loading && !(searchTerm || selectedDestination !== "all" || selectedType !== "all") && (
                <div className="mb-6">
                  <span className="text-muted-foreground">
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
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <Skeleton className="w-full h-48" />
                      <CardHeader>
                        <Skeleton className="h-4 w-3/4 mb-2" />
                        <Skeleton className="h-6 w-full" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-2/3" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-destructive mb-4">Error Loading Posts</h3>
                  <p className="text-muted-foreground mb-6">{error}</p>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.reload()}
                  >
                    Try Again
                  </Button>
                </div>
              ) : filteredPosts.length === 0 ? (
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
                    <Card key={post._id} className="overflow-hidden hover:shadow-adventure transition-all duration-300 group cursor-pointer">
                      <Link to={`/blog/${post.slug.current}`}>
                        <div className="relative overflow-hidden">
                          {post.image ? (
                            <img
                              src={urlFor(post.image).width(400).height(250).fit("crop").auto("format").url()}
                              alt={post.image.alt || post.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-48 bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">No image</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base mb-4 line-clamp-3">
                            {getExcerpt(post.body as BodyBlock[])}
                          </CardDescription>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{formatDate(post.publishedAt)}</span>
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