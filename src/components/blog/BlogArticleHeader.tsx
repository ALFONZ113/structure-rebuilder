
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon, ClockIcon } from 'lucide-react';

interface BlogArticleHeaderProps {
  title: string;
  publishDate: string;
  author: string;
  category: string;
  readTime: string;
}

const BlogArticleHeader: React.FC<BlogArticleHeaderProps> = ({
  title,
  publishDate,
  author,
  category,
  readTime
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {/* Category badge with premium styling */}
      <div className="mb-6">
        <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm font-semibold tracking-wide uppercase">{category}</Badge>
      </div>
      
      {/* Title with enhanced typography */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight tracking-tight">{title}</h1>
      
      {/* Meta information with premium styling */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 text-sm bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100 inline-flex">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-green-500" />
          <span className="font-medium">{publishDate}</span>
        </div>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="flex items-center gap-2">
          <UserIcon className="h-4 w-4 text-green-500" />
          <span className="font-medium">{author}</span>
        </div>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-green-500" />
          <span className="font-medium">{readTime} čtení</span>
        </div>
      </div>
    </div>
  );
};

export default BlogArticleHeader;
