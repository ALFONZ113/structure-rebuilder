import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { MousePointerClick } from 'lucide-react';

interface CtaToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export function CtaToggle({ value, onChange }: CtaToggleProps) {
  return (
    <div className="flex items-center justify-between p-4 border bg-muted/30">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-muted rounded-sm">
          <MousePointerClick className="h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <Label htmlFor="cta-toggle" className="text-sm font-medium cursor-pointer">
            Výzva k akcii (CTA)
          </Label>
          <p className="text-xs text-muted-foreground">
            Pridať odkaz na formulár/web
          </p>
        </div>
      </div>
      <Switch
        id="cta-toggle"
        checked={value}
        onCheckedChange={onChange}
      />
    </div>
  );
}
