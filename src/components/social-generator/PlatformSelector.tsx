import { Facebook, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Platform = 'facebook' | 'instagram' | 'both';

interface PlatformOption {
  id: Platform;
  label: string;
  icon: React.ReactNode;
}

const platforms: PlatformOption[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    id: 'both',
    label: 'Oboje',
    icon: (
      <div className="flex -space-x-1">
        <Facebook className="h-4 w-4" />
        <Instagram className="h-4 w-4" />
      </div>
    ),
  },
];

interface PlatformSelectorProps {
  value: Platform;
  onChange: (value: Platform) => void;
}

export function PlatformSelector({ value, onChange }: PlatformSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Platforma
      </label>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            onClick={() => onChange(platform.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 border transition-all',
              'hover:border-primary/50',
              value === platform.id
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background text-foreground'
            )}
          >
            {platform.icon}
            <span className="font-medium text-sm">{platform.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
