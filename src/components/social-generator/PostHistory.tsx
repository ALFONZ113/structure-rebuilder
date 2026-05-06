import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Facebook, Instagram, Trash2, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

interface SavedPost {
  id: string;
  created_at: string;
  post_type: string;
  platform: string;
  region: string | null;
  facebook_text: string | null;
  facebook_hashtags: string[] | null;
  facebook_image_url: string | null;
  instagram_text: string | null;
  instagram_hashtags: string[] | null;
  instagram_image_url: string | null;
}

const postTypeLabels: Record<string, string> = {
  problem_solution: 'Problém → Riešenie',
  why_free: 'Prečo zadarmo?',
  review: 'Recenzia',
  tip: 'Tip',
  regional: 'Regionálne',
  custom: 'Vlastná téma',
};

export function PostHistory() {
  const [posts, setPosts] = useState<SavedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('social_posts')
      .select('id, created_at, post_type, platform, region, facebook_text, facebook_hashtags, facebook_image_url, instagram_text, instagram_hashtags, instagram_image_url')
      .order('created_at', { ascending: false })
      .limit(50);

    if (!error && data) setPosts(data as SavedPost[]);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('social_posts').delete().eq('id', id);
    if (error) {
      toast.error('Nepodarilo sa vymazať');
      return;
    }
    setPosts(prev => prev.filter(p => p.id !== id));
    toast.success('Príspevok vymazaný');
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Skopírované!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <Clock className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="font-medium text-lg text-muted-foreground">Žiadne uložené príspevky</h3>
          <p className="text-sm text-muted-foreground/70 mt-2">Vygenerujte a uložte obsah, aby sa tu zobrazil.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map(post => {
        const isExpanded = expandedId === post.id;
        const date = new Date(post.created_at!).toLocaleDateString('cs-CZ', {
          day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
        });

        return (
          <Card key={post.id} className="border-0 shadow-sm">
            <CardContent className="p-4">
              {/* Header row */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : post.id)}
                className="w-full flex items-center justify-between gap-2 text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex gap-1">
                    {(post.platform === 'facebook' || post.platform === 'both') && (
                      <Facebook className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    )}
                    {(post.platform === 'instagram' || post.platform === 'both') && (
                      <Instagram className="h-4 w-4 text-pink-500 flex-shrink-0" />
                    )}
                  </div>
                  <span className="text-sm font-medium truncate">
                    {postTypeLabels[post.post_type] || post.post_type}
                  </span>
                  {post.region && (
                    <span className="text-xs text-muted-foreground hidden sm:inline">
                      · {post.region}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-muted-foreground">{date}</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="mt-4 space-y-4">
                  {post.facebook_text && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium uppercase text-muted-foreground flex items-center gap-1">
                          <Facebook className="h-3 w-3" /> Facebook
                        </span>
                        <Button variant="ghost" size="sm" onClick={() => copyText(post.facebook_text!)}>
                          <Copy className="h-3 w-3 mr-1" /> Kopírovať
                        </Button>
                      </div>
                      <p className="text-sm whitespace-pre-wrap bg-muted/50 p-3 max-h-48 overflow-y-auto">
                        {post.facebook_text}
                      </p>
                      {post.facebook_hashtags && (
                        <p className="text-xs text-primary">{post.facebook_hashtags.join(' ')}</p>
                      )}
                      {post.facebook_image_url && (
                        <img src={post.facebook_image_url} alt="FB" className="w-full max-w-md aspect-video object-cover" />
                      )}
                    </div>
                  )}

                  {post.instagram_text && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium uppercase text-muted-foreground flex items-center gap-1">
                          <Instagram className="h-3 w-3" /> Instagram
                        </span>
                        <Button variant="ghost" size="sm" onClick={() => copyText(post.instagram_text!)}>
                          <Copy className="h-3 w-3 mr-1" /> Kopírovať
                        </Button>
                      </div>
                      <p className="text-sm whitespace-pre-wrap bg-muted/50 p-3 max-h-48 overflow-y-auto">
                        {post.instagram_text}
                      </p>
                      {post.instagram_hashtags && (
                        <p className="text-xs text-primary">{post.instagram_hashtags.join(' ')}</p>
                      )}
                      {post.instagram_image_url && (
                        <img src={post.instagram_image_url} alt="IG" className="w-full max-w-xs aspect-square object-cover" />
                      )}
                    </div>
                  )}

                  <div className="flex justify-end pt-2 border-t border-border">
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="h-3 w-3 mr-1" /> Vymazať
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
