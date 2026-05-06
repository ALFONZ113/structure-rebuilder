
import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface BlogCTAProps {
  type: 'subtle' | 'inline' | 'prominent';
  text?: string;
}

const BlogCTA: React.FC<BlogCTAProps> = ({ type, text }) => {
  const navigate = useNavigate();

  const navigateToLeadForm = () => {
    navigate('/#lead-form');
  };

  if (type === 'subtle') {
    return (
      <div className="mb-8 text-center">
        <Button 
          variant="outline" 
          className="text-green-600 border-green-300 hover:border-green-500 hover:bg-green-50"
          onClick={navigateToLeadForm}
        >
          {text || "Zjistěte nejlepší nabídku pro vaši adresu"}
        </Button>
      </div>
    );
  }

  if (type === 'inline') {
    return (
      <div className="my-6">
        <Button 
          onClick={navigateToLeadForm} 
          className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white"
        >
          {text || "Získat nejvýhodnější nabídku"} <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="my-10 bg-green-50 border border-green-100 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold text-green-800 mb-2">Získejte nejvýhodnější nabídku internetu</h3>
      <p className="text-green-700 mb-4">Porovnáme pro vás všechny dostupné poskytovatele na vaší adrese a najdeme nejlepší řešení.</p>
      <Button 
        onClick={navigateToLeadForm}
        className="bg-green-600 hover:bg-green-700 text-white"
        size="lg"
      >
        {text || "Nezávazně porovnat nabídky"}
      </Button>
    </div>
  );
};

export default BlogCTA;
