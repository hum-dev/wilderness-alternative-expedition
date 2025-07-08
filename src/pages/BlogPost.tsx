import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { client, postQuery, urlFor, type SanityPost } from "@/lib/sanity";
import { PortableText } from "@/components/PortableText";
import type { PortableTextBlock } from "@portabletext/types";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const data = await client.fetch(postQuery, { slug });
        if (!data) {
          setError("Post not found");
          return;
        }
        setPost(data);
      } catch (err) {
        setError("Failed to load blog post");
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM dd, yyyy");
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-24 mb-8" />
            <Skeleton className="h-64 w-full mb-8 rounded-lg" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = `${window.location.origin}/blog/${post.slug.current}`;

  return (
    <>
      <Helmet>
        <title>{post.title} - Wilderness Alternative Expedition</title>
        <meta name="description" content={post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.title} />
        {post.image && (
          <>
            <meta property="og:image" content={urlFor(post.image).width(1200).height(630).fit("crop").auto("format").url()} />
            <meta name="twitter:image" content={urlFor(post.image).width(1200).height(630).fit("crop").auto("format").url()} />
          </>
        )}
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.title} />
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
          {post.image && (
            <div className="container mx-auto px-4 mb-8">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={urlFor(post.image).width(1200).height(600).fit("crop").auto("format").url()}
                  alt={post.image.alt || post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Header */}
          <div className="container mx-auto px-4 mb-8">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <span>Published:</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <PortableText value={post.body as PortableTextBlock[]} />
              </div>
            </div>
          </div>

        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;