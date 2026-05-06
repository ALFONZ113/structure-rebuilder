
import { useState } from 'react';
import { Star, MessageSquare, ThumbsUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const CommunityReviews = () => {
  const [selectedProvider, setSelectedProvider] = useState('all');
  
  const reviews = [
    { id: 1, author: 'Jana Nováková', avatar: '/placeholder.svg', provider: 'PODA', rating: 5, date: '10. května 2025', comment: 'Skvělá rychlost a stabilita připojení. Optika od PODA a.s. je opravdu špičková a instalace byla provedena profesionálně a rychle. PODA má 29 let zkušeností a je jedním z největších poskytovatelů v ČR.', upvotes: 12, replies: 2, city: 'Ostrava' },
    { id: 2, author: 'Pavel Svoboda', avatar: '/placeholder.svg', provider: 'O2', rating: 4, date: '2. května 2025', comment: 'Spolehlivé připojení s dobrou zákaznickou podporou. Občas mám problém s rychlostí ve večerních hodinách, ale celkově jsem spokojený.', upvotes: 8, replies: 1, city: 'Praha' },
    { id: 3, author: 'Martin Dvořák', avatar: '/placeholder.svg', provider: 'T-Mobile', rating: 3, date: '25. dubna 2025', comment: 'Průměrná kvalita za trochu vyšší cenu. Výhodou je možnost kombinace s mobilními službami, ale samotný internet není ničím výjimečný.', upvotes: 5, replies: 3, city: 'Brno' },
    { id: 4, author: 'Tereza Malá', avatar: '/placeholder.svg', provider: 'Vodafone', rating: 4, date: '18. dubna 2025', comment: 'Po přechodu na Vodafone jsem ušetřila téměř 300 Kč měsíčně a rychlost je lepší než u předchozího poskytovatele.', upvotes: 10, replies: 0, city: 'Plzeň' },
    { id: 5, author: 'Jakub Novotný', avatar: '/placeholder.svg', provider: 'PODA', rating: 5, date: '12. dubna 2025', comment: 'Nejlepší poskytovatel, se kterým jsem měl zkušenost. PODA a.s. má dlouholetou tradici od roku 1996. Rychlé připojení až 2000 Mb/s bez výpadků a cena odpovídá kvalitě.', upvotes: 15, replies: 4, city: 'Havířov' }
  ];
  
  const filteredReviews = selectedProvider === 'all'
    ? reviews
    : reviews.filter(review => review.provider === selectedProvider);
  
  const calculateAverageRating = (provider: string) => {
    const providerReviews = provider === 'all' 
      ? reviews 
      : reviews.filter(review => review.provider === provider);
    if (providerReviews.length === 0) return '0';
    const sum = providerReviews.reduce((total, review) => total + review.rating, 0);
    return (sum / providerReviews.length).toFixed(1);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`}
      />
    ));
  };
  
  return (
    <div className="bg-card border border-border p-6">
      <h2 className="heading-sm mb-2">Hodnocení komunity</h2>
      <p className="text-muted-foreground mb-6">Přečtěte si recenze od skutečných uživatelů</p>
      
      <Tabs defaultValue="all" value={selectedProvider} onValueChange={setSelectedProvider}>
        <TabsList className="mb-6 w-full grid grid-cols-5 max-w-none">
          {['all', 'PODA', 'O2', 'T-Mobile', 'Vodafone'].map(provider => (
            <TabsTrigger key={provider} value={provider} className="text-center">
              <div>
                <div className="font-semibold">{provider === 'all' ? 'Všichni' : provider}</div>
                <div className="flex items-center justify-center mt-1">
                  {renderStars(Math.round(Number(calculateAverageRating(provider))))}
                </div>
                <div className="text-xs mt-1">{calculateAverageRating(provider)}</div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={selectedProvider} className="mt-0">
          <div className="space-y-4">
            {filteredReviews.map(review => (
              <div key={review.id} className="border border-border p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback>{review.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{review.author}</div>
                      <div className="text-xs text-muted-foreground">
                        {review.date} • {review.city}
                      </div>
                    </div>
                  </div>
                  <Badge>{review.provider}</Badge>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-muted-foreground mb-4">{review.comment}</p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    <span>{review.upvotes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center ml-4">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    <span>{review.replies}</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredReviews.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Žádná hodnocení pro tohoto poskytovatele
            </div>
          )}
          
          <div className="mt-6 text-center">
            <Button>Přidat hodnocení</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityReviews;
