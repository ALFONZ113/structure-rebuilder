import { useState } from 'react';
import { Image, Copy, Check, Type, MessageSquare, MousePointer, Film, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export interface StructuredImagePrompt {
  headline: string;
  subheadline: string;
  ctaButton?: string | null;
  scene: string;
  style: string;
  mood: string;
  fullPrompt?: string;
}

interface ImagePromptSectionProps {
  platform: 'facebook' | 'instagram';
  imagePrompt: string | StructuredImagePrompt;
  onImagePromptChange: (prompt: string | StructuredImagePrompt) => void;
}

const PLATFORM_SPECS = {
  facebook: {
    dimensions: '1200×630',
    aspectRatio: '16:9',
  },
  instagram: {
    dimensions: '1080×1080',
    aspectRatio: '1:1',
  },
};

export function ImagePromptSection({
  platform,
  imagePrompt,
  onImagePromptChange,
}: ImagePromptSectionProps) {
  const [copied, setCopied] = useState(false);
  const specs = PLATFORM_SPECS[platform];

  // Check if it's a structured prompt or legacy string
  const isStructured = typeof imagePrompt === 'object' && imagePrompt !== null;
  
  const structuredPrompt: StructuredImagePrompt = isStructured 
    ? imagePrompt as StructuredImagePrompt
    : {
        headline: '',
        subheadline: '',
        ctaButton: null,
        scene: typeof imagePrompt === 'string' ? imagePrompt : '',
        style: '',
        mood: 'dark premium',
      };

  const copyFullPrompt = async () => {
    let promptToCopy: string;
    
    if (isStructured && structuredPrompt.fullPrompt) {
      // Use the optimized fullPrompt from edge function
      promptToCopy = structuredPrompt.fullPrompt;
    } else if (isStructured) {
      // Fallback - build AI-friendly prompt format
      const platformLabel = platform === 'instagram' ? 'Instagram (1080x1080, 1:1)' : 'Facebook (1200x630, 16:9)';
      const dimensions = platform === 'instagram' ? '1080x1080' : '1200x630';
      
      promptToCopy = `Social media image for ${platformLabel}.

SCENE: ${structuredPrompt.scene}

Topic: ${structuredPrompt.headline}

${structuredPrompt.subheadline}

${structuredPrompt.ctaButton ? `CTA Button: ${structuredPrompt.ctaButton}` : ''}

${structuredPrompt.style}

CRITICAL LANGUAGE REQUIREMENT:
All text visible in the image MUST be in CZECH language (čeština).
Do NOT display structural labels like "HEADLINE" or "SUBHEADLINE" on the image.
Only display the actual content text.

Dimensions: ${dimensions}px`;
    } else {
      promptToCopy = String(imagePrompt);
    }
    
    await navigator.clipboard.writeText(promptToCopy);
    setCopied(true);
    toast.success('Image prompt skopírovaný');
    setTimeout(() => setCopied(false), 2000);
  };

  const updateField = (field: keyof StructuredImagePrompt, value: string) => {
    const updated = { ...structuredPrompt, [field]: value };
    onImagePromptChange(updated);
  };

  // Legacy mode - simple textarea
  if (!isStructured) {
    return (
      <div className="rounded-lg border border-border bg-muted/50 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Image className="h-4 w-4 text-muted-foreground" />
            <span>Image Prompt</span>
            <span className="text-xs text-muted-foreground font-normal">
              ({specs.dimensions}, {specs.aspectRatio})
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={copyFullPrompt}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
        <Textarea
          value={String(imagePrompt)}
          onChange={(e) => onImagePromptChange(e.target.value)}
          className="min-h-[100px] text-xs font-mono bg-background resize-none"
          placeholder="Image prompt will appear here..."
        />
      </div>
    );
  }

  // Structured mode - separate fields
  return (
    <div className="rounded-lg border border-border bg-muted/50 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Image className="h-4 w-4 text-primary" />
          <span>Image Prompt</span>
          <span className="text-xs text-muted-foreground font-normal">
            ({specs.dimensions}, {specs.aspectRatio})
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs"
          onClick={copyFullPrompt}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-primary" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>

      {/* Text Overlays Section */}
      <div className="space-y-3 p-3 rounded-md bg-background border border-border">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
          <Type className="h-3.5 w-3.5" />
          Text na obrázku (čeština)
        </div>
        
        <div className="space-y-2">
          <div>
            <Label className="text-xs text-muted-foreground">Hlavní titulok</Label>
            <Input
              value={structuredPrompt.headline}
              onChange={(e) => updateField('headline', e.target.value)}
              className="text-sm font-medium"
              placeholder="Proč máš pomalý internet?"
            />
          </div>
          
          <div>
            <Label className="text-xs text-muted-foreground">Podtitulok</Label>
            <Input
              value={structuredPrompt.subheadline}
              onChange={(e) => updateField('subheadline', e.target.value)}
              className="text-sm"
              placeholder="5 nejčastějších důvodů"
            />
          </div>

          {structuredPrompt.ctaButton !== null && (
            <div>
              <Label className="text-xs text-muted-foreground flex items-center gap-1">
                <MousePointer className="h-3 w-3" />
                CTA tlačítko
              </Label>
              <Input
                value={structuredPrompt.ctaButton || ''}
                onChange={(e) => updateField('ctaButton', e.target.value)}
                className="text-sm"
                placeholder="Zjistit více →"
              />
            </div>
          )}
        </div>
      </div>

      {/* Visual Scene Section */}
      <div className="space-y-3 p-3 rounded-md bg-background border border-border">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
          <Film className="h-3.5 w-3.5" />
          Vizuální scéna (angličtina)
        </div>
        
        <Textarea
          value={structuredPrompt.scene}
          onChange={(e) => updateField('scene', e.target.value)}
          className="min-h-[80px] text-xs font-mono resize-none"
          placeholder="Modern WiFi router with glowing LED..."
        />
      </div>

      {/* Style & Mood Section */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2 p-3 rounded-md bg-background border border-border">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <Palette className="h-3.5 w-3.5" />
            Štýl
          </div>
          <Input
            value={structuredPrompt.style}
            onChange={(e) => updateField('style', e.target.value)}
            className="text-xs"
            placeholder="Dark premium, gold accents..."
          />
        </div>
        
        <div className="space-y-2 p-3 rounded-md bg-background border border-border">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <MessageSquare className="h-3.5 w-3.5" />
            Nálada
          </div>
          <Input
            value={structuredPrompt.mood}
            onChange={(e) => updateField('mood', e.target.value)}
            className="text-xs"
            placeholder="dark premium"
          />
        </div>
      </div>
    </div>
  );
}
