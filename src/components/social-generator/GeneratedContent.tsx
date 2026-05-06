import { useState } from 'react';
import { Facebook, Instagram, Copy, Check, Download, Save, Loader2, Hash, Image as ImageIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import type { Platform } from './PlatformSelector';
import { ImagePromptSection, type StructuredImagePrompt } from './ImagePromptSection';

export interface GeneratedPostContent {
  facebook?: {
    text: string;
    hashtags: string[];
    imagePrompt: string | StructuredImagePrompt;
    imageUrl?: string;
  };
  instagram?: {
    text: string;
    hashtags: string[];
    imagePrompt: string | StructuredImagePrompt;
    imageUrl?: string;
  };
}

interface GeneratedContentProps {
  content: GeneratedPostContent | null;
  platform: Platform;
  onContentChange: (content: GeneratedPostContent) => void;
  onGenerateImage: (platform: 'facebook' | 'instagram') => Promise<void>;
  onSave: () => Promise<void>;
  isGeneratingImage: 'facebook' | 'instagram' | null;
  isSaving: boolean;
}

type CopiedSection = 'text' | 'hashtags' | 'prompt' | null;

export function GeneratedContent({
  content,
  platform,
  onContentChange,
  onGenerateImage,
  onSave,
  isGeneratingImage,
  isSaving,
}: GeneratedContentProps) {
  const [copiedSection, setCopiedSection] = useState<{ platform: 'facebook' | 'instagram'; section: CopiedSection } | null>(null);

  if (!content) return null;

  const copyText = async (text: string, platformType: 'facebook' | 'instagram', section: CopiedSection) => {
    await navigator.clipboard.writeText(text);
    setCopiedSection({ platform: platformType, section });
    toast.success('Skopírované do schránky');
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const isCopied = (platformType: 'facebook' | 'instagram', section: CopiedSection) => 
    copiedSection?.platform === platformType && copiedSection?.section === section;

  const CopyButton = ({ 
    onClick, 
    platformType, 
    section 
  }: { 
    onClick: () => void; 
    platformType: 'facebook' | 'instagram'; 
    section: CopiedSection;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className="text-muted-foreground hover:text-foreground h-8 px-2"
      onClick={onClick}
    >
    {isCopied(platformType, section) ? (
        <Check className="h-4 w-4 text-primary" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className="ml-1 text-xs">Kopírovať</span>
    </Button>
  );

  const downloadImage = async (imageUrl: string, platformType: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `social-post-${platformType}-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success('Obrázok stiahnutý');
    } catch {
      toast.error('Nepodarilo sa stiahnuť obrázok');
    }
  };

  const updateText = (platformType: 'facebook' | 'instagram', text: string) => {
    const updated = { ...content };
    if (updated[platformType]) {
      updated[platformType] = { ...updated[platformType]!, text };
      onContentChange(updated);
    }
  };

  const updateImagePrompt = (platformType: 'facebook' | 'instagram', imagePrompt: string | StructuredImagePrompt) => {
    const updated = { ...content };
    if (updated[platformType]) {
      updated[platformType] = { ...updated[platformType]!, imagePrompt };
      onContentChange(updated);
    }
  };

  const showFacebook = platform === 'facebook' || platform === 'both';
  const showInstagram = platform === 'instagram' || platform === 'both';

  const getImagePromptText = (prompt: string | StructuredImagePrompt): string => {
    if (typeof prompt === 'string') return prompt;
    return `Topic: ${prompt.headline}\n${prompt.subheadline}\n${prompt.ctaButton ? `CTA: ${prompt.ctaButton}\n` : ''}SCENE: ${prompt.scene}\nStyle: ${prompt.style}\nMood: ${prompt.mood}`;
  };

  const renderPlatformCard = (
    platformType: 'facebook' | 'instagram',
    platformContent: NonNullable<GeneratedPostContent['facebook']>,
    icon: React.ReactNode
  ) => {
    const dimensions = platformType === 'facebook' ? '1200×630' : '1080×1080';
    const hashtagsText = platformContent.hashtags.join(' ');
    const charCount = platformContent.text.length;

    return (
      <Card className="border border-border/50 bg-card/50 backdrop-blur">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-base">
              {icon}
              {platformType === 'facebook' ? 'Facebook' : 'Instagram'}
            </div>
            <Badge variant="outline" className="font-mono text-xs">
              {dimensions}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Post Text Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <FileText className="h-4 w-4" />
                Text príspevku
              </div>
              <CopyButton 
                onClick={() => copyText(platformContent.text, platformType, 'text')}
                platformType={platformType}
                section="text"
              />
            </div>
            <Textarea
              value={platformContent.text}
              onChange={(e) => updateText(platformType, e.target.value)}
              className="min-h-[180px] resize-none bg-background/50 border-border/50"
            />
            <div className="text-right text-xs text-muted-foreground">
              {charCount} / 2000 znaků
            </div>
          </div>
          
          {/* Hashtags Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Hash className="h-4 w-4" />
                Hashtagy
              </div>
              <CopyButton 
                onClick={() => copyText(hashtagsText, platformType, 'hashtags')}
                platformType={platformType}
                section="hashtags"
              />
            </div>
            <div className="p-3 rounded-md bg-background/50 border border-border/50">
              <p className="text-sm">{hashtagsText}</p>
            </div>
          </div>
          
          {/* Image Prompt Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <ImageIcon className="h-4 w-4" />
                Prompt pre obrázok (EN)
              </div>
              <CopyButton 
                onClick={() => copyText(getImagePromptText(platformContent.imagePrompt), platformType, 'prompt')}
                platformType={platformType}
                section="prompt"
              />
            </div>
            <ImagePromptSection
              platform={platformType}
              imagePrompt={platformContent.imagePrompt}
              onImagePromptChange={(prompt) => updateImagePrompt(platformType, prompt)}
            />
          </div>
          
          {/* Generate/View Image Section */}
          <div className="space-y-2 pt-2">
            {platformContent.imageUrl ? (
              <div className="space-y-3">
                <img
                  src={platformContent.imageUrl}
                  alt={`Generated for ${platformType}`}
                  className={cn(
                    "w-full object-cover rounded-md border border-border/50",
                    platformType === 'instagram' ? 'aspect-square' : 'aspect-video'
                  )}
                />
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => downloadImage(platformContent.imageUrl!, platformType)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Stiahnuť obrázok
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onGenerateImage(platformType)}
                    disabled={isGeneratingImage !== null}
                  >
                    {isGeneratingImage === platformType ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Regenerovať'
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full h-12"
                onClick={() => onGenerateImage(platformType)}
                disabled={isGeneratingImage !== null}
              >
                {isGeneratingImage === platformType ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <ImageIcon className="mr-2 h-4 w-4" />
                )}
                Vygenerovať obrázok ({dimensions})
              </Button>
            )}
            <p className="text-xs text-center text-muted-foreground">
              ⚡ Generovanie obrázka = +1 AI požiadavka
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Vygenerovaný obsah</h3>
        <Button onClick={onSave} disabled={isSaving} variant="outline">
          {isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Uložiť do histórie
        </Button>
      </div>

      <div className={cn('grid gap-6', showFacebook && showInstagram ? 'lg:grid-cols-2' : 'grid-cols-1')}>
        {showFacebook && content.facebook && renderPlatformCard(
          'facebook',
          content.facebook,
          <Facebook className="h-5 w-5 text-primary" />
        )}

        {showInstagram && content.instagram && renderPlatformCard(
          'instagram',
          content.instagram,
          <Instagram className="h-5 w-5 text-accent-foreground" />
        )}
      </div>
    </div>
  );
}
