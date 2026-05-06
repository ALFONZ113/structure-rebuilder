
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
  // Ensure we have the full URL for sharing
  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
  
  // Encode the title and URL for sharing
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
  };
  
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank');
  };
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
  };

  return (
    <div className="flex gap-2 mb-6">
      <span className="text-gray-500 mr-2 self-center">Sdílet:</span>
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full hover:bg-blue-100 hover:text-blue-600"
        onClick={shareToFacebook}
        aria-label="Sdílet na Facebook"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full hover:bg-blue-100 hover:text-blue-400"
        onClick={shareToTwitter}
        aria-label="Sdílet na Twitter"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full hover:bg-blue-100 hover:text-blue-700"
        onClick={shareToLinkedIn}
        aria-label="Sdílet na LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SocialShareButtons;
