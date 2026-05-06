import { Palette, Zap, Home, Briefcase, MapPin, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export type VisualStyle = 'teal_editorial' | 'speed_tech' | 'home_comfort' | 'business_pro' | 'regional_czech' | 'clean_minimal';

interface StyleOption {
  id: VisualStyle;
  label: string;
  description: string;
  icon: React.ReactNode;
  colors: string;
}

const styles: StyleOption[] = [
  {
    id: 'teal_editorial',
    label: 'Teal Editorial',
    description: 'Hlavný brand štýl',
    icon: <Palette className="h-4 w-4" />,
    colors: 'bg-gradient-to-r from-primary to-primary/80',
  },
  {
    id: 'speed_tech',
    label: 'Speed Tech',
    description: 'Futuristický, technický',
    icon: <Zap className="h-4 w-4" />,
    colors: 'bg-gradient-to-r from-cyan-500 to-blue-600',
  },
  {
    id: 'home_comfort',
    label: 'Home Comfort',
    description: 'Teplé farby, rodina',
    icon: <Home className="h-4 w-4" />,
    colors: 'bg-gradient-to-r from-amber-400 to-orange-500',
  },
  {
    id: 'business_pro',
    label: 'Business Pro',
    description: 'Profesionálny, tmavý',
    icon: <Briefcase className="h-4 w-4" />,
    colors: 'bg-gradient-to-r from-slate-700 to-slate-900',
  },
  {
    id: 'regional_czech',
    label: 'Regional Czech',
    description: 'České mestá, mapy',
    icon: <MapPin className="h-4 w-4" />,
    colors: 'bg-gradient-to-r from-red-500 to-blue-600',
  },
  {
    id: 'clean_minimal',
    label: 'Clean Minimal',
    description: 'Čistý, minimalistický',
    icon: <Sparkles className="h-4 w-4" />,
    colors: 'bg-gradient-to-r from-gray-100 to-gray-300',
  },
];

interface StyleSelectorProps {
  value: VisualStyle;
  onChange: (value: VisualStyle) => void;
}

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Vizuálny štýl
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {styles.map((style) => (
          <button
            key={style.id}
            type="button"
            onClick={() => onChange(style.id)}
            className={cn(
              'relative flex flex-col items-start p-3 border transition-all text-left',
              'hover:border-primary/50',
              value === style.id
                ? 'border-primary ring-1 ring-primary/20'
                : 'border-border'
            )}
          >
            <div
              className={cn(
                'w-full h-2 mb-2',
                style.colors
              )}
            />
            <div className="flex items-center gap-1.5">
              {style.icon}
              <span className="font-medium text-xs">{style.label}</span>
            </div>
            <span className="text-[10px] text-muted-foreground mt-0.5">
              {style.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
