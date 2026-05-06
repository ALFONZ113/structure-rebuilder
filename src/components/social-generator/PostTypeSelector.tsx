import { AlertCircle, Zap, Gift, Star, Lightbulb, MapPin, Edit3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PostType = 'problem_solution' | 'why_free' | 'review' | 'tip' | 'regional' | 'custom';

interface PostTypeOption {
  id: PostType;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const postTypes: PostTypeOption[] = [
  {
    id: 'problem_solution',
    label: 'Problém → Riešenie',
    description: 'Pomalý internet, výpadky, slabý signál',
    icon: <AlertCircle className="h-5 w-5" />,
  },
  {
    id: 'why_free',
    label: 'Prečo zadarmo?',
    description: '100% bezplatné porovnanie',
    icon: <Gift className="h-5 w-5" />,
  },
  {
    id: 'review',
    label: 'Recenzia zákazníka',
    description: 'Social proof, príbehy spokojných',
    icon: <Star className="h-5 w-5" />,
  },
  {
    id: 'tip',
    label: 'Tip a edukácia',
    description: 'Praktické rady a tipy',
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    id: 'regional',
    label: 'Regionálne',
    description: 'Mestá a kraje v ČR',
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    id: 'custom',
    label: 'Vlastná téma',
    description: 'Vlastný text a obsah',
    icon: <Edit3 className="h-5 w-5" />,
  },
];

interface PostTypeSelectorProps {
  value: PostType;
  onChange: (value: PostType) => void;
}

export function PostTypeSelector({ value, onChange }: PostTypeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Typ príspevku
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {postTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => onChange(type.id)}
            className={cn(
              'flex items-start gap-3 p-4 text-left border transition-all',
              'hover:border-primary/50 hover:bg-muted/50',
              value === type.id
                ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                : 'border-border'
            )}
          >
            <div
              className={cn(
                'flex-shrink-0 p-2 rounded-sm',
                value === type.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {type.icon}
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm">{type.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {type.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
