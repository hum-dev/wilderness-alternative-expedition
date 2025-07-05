import { useParams, Navigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same tags, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} - Wilderness Alternative Expedition</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
        <link rel="canonical" href={shareUrl} />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <article className="py-8">
          {/* Back Button */}
          <div className="container mx-auto px-4 mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Featured Image */}
          <div className="container mx-auto px-4 mb-8">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>

          {/* Article Header */}
          <div className="container mx-auto px-4 mb-8">
            <div className="max-w-4xl mx-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <span>Author:</span>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Date:</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Reading time:</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>

            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 mb-16">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none text-foreground
                          prose-headings:text-primary prose-headings:font-bold
                          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                          prose-p:mb-6 prose-p:leading-relaxed
                          prose-blockquote:border-l-4 prose-blockquote:border-primary
                          prose-blockquote:pl-6 prose-blockquote:italic
                          prose-blockquote:text-muted-foreground
                          prose-ul:mb-6 prose-ol:mb-6
                          prose-li:mb-2
                          prose-strong:text-primary
                          prose-a:text-primary prose-a:underline
                          prose-code:bg-muted prose-code:px-1 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-muted py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-adventure transition-all duration-300 group cursor-pointer">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          <div className="relative overflow-hidden">
                            <img
                              src={relatedPost.featuredImage}
                              alt={relatedPost.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {relatedPost.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-sm line-clamp-2">
                              {relatedPost.excerpt}
                            </CardDescription>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
                              <span>{relatedPost.date}</span>
                              <span>{relatedPost.readTime} min read</span>
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;