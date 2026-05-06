
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Helmet } from 'react-helmet-async';

import BlogArticleHeader from './BlogArticleHeader';
import BlogArticleSchema from './BlogArticleSchema';
import BlogCTA from './BlogCTA';
import BlogKeywords from './BlogKeywords';
import RelatedArticles from './RelatedArticles';
import SocialShareButtons from './SocialShareButtons';

interface BlogArticleProps {
  title: string;
  metaDescription: string;
  publishDate: string;
  author: string;
  category: string;
  readTime: string;
  heroImage: string;
  perex1: string;
  perex2: string;
  content: React.ReactNode;
  keywords: string[];
}

const BlogArticlePage: React.FC<BlogArticleProps> = ({
  title,
  metaDescription,
  publishDate,
  author,
  category,
  readTime,
  heroImage,
  perex1,
  perex2,
  content,
  keywords
}) => {
  // Wrap the content with our CTA buttons
  const wrapContentWithCTAs = (contentElement: React.ReactNode) => {
    // Check if content is a fragment or an array
    if (React.isValidElement(contentElement)) {
      // Clone the element to preserve all props and children
      return React.cloneElement(contentElement, {}, 
        React.Children.map(contentElement.props.children, (child, index) => {
          // Add CTAs after every other h2 element
          if (React.isValidElement(child) && child.type === 'h2' && index % 2 === 1) {
            return (
              <React.Fragment key={index}>
                {child}
                <BlogCTA type="inline" />
              </React.Fragment>
            );
          }
          return child;
        })
      );
    }
    
    return contentElement;
  };

  // Get the current URL for sharing
  const currentUrl = window.location.href;
  const canonicalUrl = `https://www.nejvyhodnejsipripojeni.cz${window.location.pathname}`;
  
  // Generate additional meta tags for better SEO
  const estimatedReadingTime = parseInt(readTime.replace(/\D/g, '')) || 5;
  const wordCount = content?.toString().length ? Math.ceil(content.toString().length / 5) : 1000;

  return (
    <PageLayout
      pageTitle={`${title} | Nejvýhodnější Připojení`}
      pageDescription={metaDescription}
      pageType="article"
      publishDate={publishDate}
      imageUrl={heroImage}
    >
      <Helmet>
        {/* Advanced SEO Meta Tags */}
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content={author} />
        <meta name="article:author" content={author} />
        <meta name="article:published_time" content={publishDate} />
        <meta name="article:modified_time" content={publishDate} />
        <meta name="article:section" content={category} />
        <meta name="article:tag" content={keywords.join(', ')} />
        
        {/* Open Graph Article Tags */}
        <meta property="og:article:author" content={author} />
        <meta property="og:article:published_time" content={publishDate} />
        <meta property="og:article:modified_time" content={publishDate} />
        <meta property="og:article:section" content={category} />
        {keywords.map((keyword, index) => (
          <meta key={index} property="og:article:tag" content={keyword} />
        ))}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:label1" content="Doba čtení" />
        <meta name="twitter:data1" content={readTime} />
        <meta name="twitter:label2" content="Kategorie" />
        <meta name="twitter:data2" content={category} />
        
        {/* Schema.org Meta Tags */}
        <meta name="datePublished" content={publishDate} />
        <meta name="dateModified" content={publishDate} />
        <meta name="wordCount" content={wordCount.toString()} />
        
        {/* Content Language */}
        <meta httpEquiv="content-language" content="cs" />
        <meta name="language" content="Czech" />
        
        {/* Additional SEO Tags */}
        <meta name="news_keywords" content={keywords.slice(0, 10).join(', ')} />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Domov",
                "item": "https://www.nejvyhodnejsipripojeni.cz/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.nejvyhodnejsipripojeni.cz/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <BlogArticleSchema 
        title={title}
        metaDescription={metaDescription}
        publishDate={publishDate}
        author={author}
        heroImage={heroImage}
        keywords={keywords}
      />

      <div className="bg-surface min-h-screen">
        <div className="container-editorial py-8 xs:py-12 lg:py-16">
          {/* Back to blog - Enhanced styling */}
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 xs:mb-8 lg:mb-12 group transition-all duration-200 min-h-[44px]">
            <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Zpět na blog</span>
          </Link>

          {/* Article container with premium styling */}
          <div className="max-w-4xl mx-auto">
            {/* Article Header - Enhanced spacing */}
            <div className="mb-8 xs:mb-12 lg:mb-16">
              <BlogArticleHeader 
                title={title}
                publishDate={publishDate}
                author={author}
                category={category}
                readTime={readTime}
              />
            </div>

            {/* Hero Image - Premium styling with subtle shadow and border */}
            <div className="mb-8 xs:mb-12 lg:mb-16">
              <div className="relative overflow-hidden shadow-xl bg-card p-1 xs:p-2 border border-border">
                <img 
                  src={heroImage} 
                  alt={title} 
                  className="w-full h-auto max-h-[400px] xs:max-h-[500px] object-cover" 
                />
              </div>
            </div>

            {/* Social Share Buttons - Enhanced spacing */}
            <div className="mb-8 xs:mb-10 lg:mb-12">
              <SocialShareButtons url={currentUrl} title={title} />
            </div>

            {/* Perex 1 - Premium styling with enhanced typography */}
            <div className="mb-8 xs:mb-12 lg:mb-16">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                <div className="pl-6 xs:pl-8 py-3 xs:py-4">
                  <p className="text-lg xs:text-xl lg:text-2xl font-medium text-foreground leading-relaxed">{perex1}</p>
                </div>
              </div>
            </div>

            {/* First CTA - subtle with enhanced spacing */}
            <div className="mb-8 xs:mb-12 lg:mb-16">
              <BlogCTA type="subtle" />
            </div>

            {/* Perex 2 - Enhanced typography and spacing */}
            <div className="mb-12 xs:mb-16 lg:mb-20">
              <div className="bg-card p-6 xs:p-8 lg:p-12 border border-border">
                <p className="text-base xs:text-lg lg:text-xl text-muted-foreground leading-relaxed">{perex2}</p>
              </div>
            </div>

            {/* Main Content - Enhanced prose styling */}
            <div className="mb-12 xs:mb-16 lg:mb-20">
              <div className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl xs:prose-h2:text-3xl prose-h2:mb-6 xs:prose-h2:mb-8 prose-h2:mt-10 xs:prose-h2:mt-12 prose-h3:text-xl xs:prose-h3:text-2xl prose-h3:mb-4 xs:prose-h3:mb-6 prose-h3:mt-8 xs:prose-h3:mt-10 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 xs:prose-p:mb-6 prose-li:text-muted-foreground prose-li:mb-2 prose-strong:text-foreground">
                {wrapContentWithCTAs(content)}
              </div>
            </div>

            {/* Final CTA - Premium styling */}
            <div className="mb-12 xs:mb-16 lg:mb-20">
              <BlogCTA type="prominent" />
            </div>

            {/* Tags - Enhanced styling */}
            <div className="mb-8 xs:mb-12 lg:mb-16">
              <BlogKeywords keywords={keywords} />
            </div>

            {/* Social Share Buttons - Bottom placement */}
            <div className="mb-8 xs:mb-12 lg:mb-16">
              <SocialShareButtons url={currentUrl} title={title} />
            </div>

            {/* Elegant separator */}
            <div className="my-12 xs:my-16 lg:my-20">
              <Separator className="bg-border" />
            </div>

            {/* Related Articles - Enhanced container */}
            <div className="bg-card p-6 xs:p-8 lg:p-12 border border-border">
              <RelatedArticles />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogArticlePage;
