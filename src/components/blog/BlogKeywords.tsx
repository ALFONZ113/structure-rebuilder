
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface BlogKeywordsProps {
  keywords: string[];
}

const BlogKeywords: React.FC<BlogKeywordsProps> = ({ keywords }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {keywords.map((keyword, index) => (
        <Badge key={index} variant="outline">{keyword}</Badge>
      ))}
    </div>
  );
};

export default BlogKeywords;
