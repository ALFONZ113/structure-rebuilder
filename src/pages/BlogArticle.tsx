import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/PageLayout";
import BlogArticleHeader from "@/components/blog/BlogArticleHeader";
import BlogKeywords from "@/components/blog/BlogKeywords";
import RelatedArticles from "@/components/blog/RelatedArticles";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogArticleSchema from "@/components/blog/BlogArticleSchema";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogSection {
  heading: string;
  content: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  hero_image: string;
  content: BlogSection[];
  keywords: string[];
  author: string;
  category: string;
  read_time: string;
  publish_date: string;
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching blog post:', error);
        setNotFound(true);
      } else if (!data) {
        setNotFound(true);
      } else {
        // Type guard to validate content structure
        if (data.content && Array.isArray(data.content)) {
          setPost({
            ...data,
            content: data.content as unknown as BlogSection[]
          });
        } else {
          setNotFound(true);
        }
      }
      
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="h-96 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-2" />
        </div>
      </PageLayout>
    );
  }

  if (!post) return null;

  return (
    <PageLayout>
      <BlogArticleSchema
        title={post.title}
        metaDescription={post.meta_description}
        publishDate={post.publish_date}
        author={post.author}
        heroImage={post.hero_image}
        keywords={post.keywords}
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src={post.hero_image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{post.category}</span>
            <span>•</span>
            <span>{new Date(post.publish_date).toLocaleDateString('cs-CZ')}</span>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.read_time}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          {post.content.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.content) }}
              />
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Hledáte nejlepší internetové připojení?</h3>
          <p className="mb-4">Vyplňte náš formulář a najdeme pro vás tu nejlepší nabídku zdarma!</p>
          <a 
            href="/#formular" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            Získat nabídku zdarma
          </a>
        </div>
        
        <BlogKeywords keywords={post.keywords} />
      </article>
    </PageLayout>
  );
};

export default BlogArticle;