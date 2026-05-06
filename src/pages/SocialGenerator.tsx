import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Loader2, Sparkles, LogOut, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { PostTypeSelector, type PostType } from '@/components/social-generator/PostTypeSelector';
import { PlatformSelector, type Platform } from '@/components/social-generator/PlatformSelector';
import { StyleSelector, type VisualStyle } from '@/components/social-generator/StyleSelector';
import { RegionSelector, type Region } from '@/components/social-generator/RegionSelector';
import { PersonToggle } from '@/components/social-generator/PersonToggle';
import { CtaToggle } from '@/components/social-generator/CtaToggle';
import { CustomTopicInput } from '@/components/social-generator/CustomTopicInput';
import { GeneratedContent, type GeneratedPostContent } from '@/components/social-generator/GeneratedContent';
import { PostHistory } from '@/components/social-generator/PostHistory';

function SocialGeneratorContent() {
  const navigate = useNavigate();
  const [postType, setPostType] = useState<PostType>('problem_solution');
  const [platform, setPlatform] = useState<Platform>('both');
  const [visualStyle, setVisualStyle] = useState<VisualStyle>('teal_editorial');
  const [region, setRegion] = useState<Region>('cela_cr');
  const [includePerson, setIncludePerson] = useState(false);
  const [includeCta, setIncludeCta] = useState(true);
  const [customTopic, setCustomTopic] = useState('');
  const [activeTab, setActiveTab] = useState<'generator' | 'history'>('generator');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState<'facebook' | 'instagram' | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedPostContent | null>(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedContent(null);

    try {
      const { data, error } = await supabase.functions.invoke('social-content-generator', {
        body: {
          postType,
          platform,
          visualStyle,
          includePerson,
          includeCta,
          region,
          customTopic: customTopic.trim() || undefined,
        },
      });

      if (error) throw error;

      const content: GeneratedPostContent = {};
      
      if (data.facebook) {
        content.facebook = {
          text: data.facebook.text,
          hashtags: data.facebook.hashtags,
          imagePrompt: data.facebook.imagePromptEN,
        };
      }
      
      if (data.instagram) {
        content.instagram = {
          text: data.instagram.text,
          hashtags: data.instagram.hashtags,
          imagePrompt: data.instagram.imagePromptEN,
        };
      }

      setGeneratedContent(content);
      toast.success('Obsah vygenerovaný!');
    } catch (error) {
      console.error('Generation error:', error);
      toast.error('Nepodarilo sa vygenerovať obsah');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async (targetPlatform: 'facebook' | 'instagram') => {
    if (!generatedContent) return;
    
    const content = generatedContent[targetPlatform];
    if (!content?.imagePrompt) {
      toast.error('Chýba image prompt');
      return;
    }

    setIsGeneratingImage(targetPlatform);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('Not authenticated');

      const { data, error } = await supabase.functions.invoke('ai-generate-social-image', {
        body: {
          imagePrompt: content.imagePrompt,
          platform: targetPlatform,
          userId: session.user.id,
        },
      });

      if (error) throw error;

      setGeneratedContent(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          [targetPlatform]: {
            ...prev[targetPlatform]!,
            imageUrl: data.imageUrl,
          },
        };
      });

      toast.success('Obrázok vygenerovaný!');
    } catch (error) {
      console.error('Image generation error:', error);
      toast.error('Nepodarilo sa vygenerovať obrázok');
    } finally {
      setIsGeneratingImage(null);
    }
  };

  const handleSave = async () => {
    if (!generatedContent) return;

    setIsSaving(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('Not authenticated');

      // Convert structured image prompts to strings for storage
      const fbPrompt = generatedContent.facebook?.imagePrompt;
      const igPrompt = generatedContent.instagram?.imagePrompt;
      const fbPromptStr = typeof fbPrompt === 'object' ? JSON.stringify(fbPrompt) : fbPrompt;
      const igPromptStr = typeof igPrompt === 'object' ? JSON.stringify(igPrompt) : igPrompt;

      const { error } = await supabase.from('social_posts').insert([{
        user_id: session.user.id,
        post_type: postType,
        platform,
        visual_style: visualStyle,
        include_person: includePerson,
        include_cta: includeCta,
        region,
        custom_topic: postType === 'custom' ? customTopic : null,
        facebook_text: generatedContent.facebook?.text,
        facebook_hashtags: generatedContent.facebook?.hashtags,
        facebook_image_prompt: fbPromptStr,
        facebook_image_url: generatedContent.facebook?.imageUrl,
        instagram_text: generatedContent.instagram?.text,
        instagram_hashtags: generatedContent.instagram?.hashtags,
        instagram_image_prompt: igPromptStr,
        instagram_image_url: generatedContent.instagram?.imageUrl,
      }]);

      if (error) throw error;

      toast.success('Príspevok uložený do histórie');
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Nepodarilo sa uložiť príspevok');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Social Media Generátor | Nejvýhodnější Připojení</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="font-bold text-lg">Social Generátor</h1>
              </div>
              <div className="flex border border-border">
                <button
                  onClick={() => setActiveTab('generator')}
                  className={`px-4 py-1.5 text-sm font-medium transition-colors ${activeTab === 'generator' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                >
                  <Sparkles className="h-3.5 w-3.5 inline mr-1.5" />
                  Generátor
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`px-4 py-1.5 text-sm font-medium transition-colors ${activeTab === 'history' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                >
                  <Clock className="h-3.5 w-3.5 inline mr-1.5" />
                  História
                </button>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Odhlásiť
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-8 max-w-6xl">
          {activeTab === 'generator' ? (
            <div className="grid lg:grid-cols-[1fr,1fr] gap-8">
              {/* Settings Panel */}
              <Card className="border-0 shadow-lg h-fit">
                <CardHeader>
                  <CardTitle className="text-xl">Nastavenia príspevku</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <PostTypeSelector value={postType} onChange={setPostType} />
                  <PlatformSelector value={platform} onChange={setPlatform} />
                  <StyleSelector value={visualStyle} onChange={setVisualStyle} />
                  <RegionSelector value={region} onChange={setRegion} />
                  
                  <CustomTopicInput value={customTopic} onChange={setCustomTopic} />
                  
                  <div className="space-y-2">
                    <PersonToggle value={includePerson} onChange={setIncludePerson} />
                    <CtaToggle value={includeCta} onChange={setIncludeCta} />
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleGenerate}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Generujem...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generovať obsah
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Panel */}
              <div>
                {generatedContent ? (
                  <GeneratedContent
                    content={generatedContent}
                    platform={platform}
                    onContentChange={setGeneratedContent}
                    onGenerateImage={handleGenerateImage}
                    onSave={handleSave}
                    isGeneratingImage={isGeneratingImage}
                    isSaving={isSaving}
                  />
                ) : (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                      <Sparkles className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <h3 className="font-medium text-lg text-muted-foreground">
                        Vyberte nastavenia a kliknite na "Generovať obsah"
                      </h3>
                      <p className="text-sm text-muted-foreground/70 mt-2 max-w-sm">
                        AI vygeneruje texty a hashtagy pre vybrané platformy na základe vašich preferencií
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold mb-6">História príspevkov</h2>
              <PostHistory />
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default function SocialGenerator() {
  return (
    <AuthGuard requireAdmin>
      <SocialGeneratorContent />
    </AuthGuard>
  );
}
