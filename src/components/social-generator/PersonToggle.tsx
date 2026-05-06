import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';

interface PersonToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export function PersonToggle({ value, onChange }: PersonToggleProps) {
  return (
    <div className="flex items-center justify-between p-4 border bg-muted/30">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-muted rounded-sm">
          <User className="h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <Label htmlFor="person-toggle" className="text-sm font-medium cursor-pointer">
            Osoba na obrázku
          </Label>
          <p className="text-xs text-muted-foreground">
            Pridať postavu/osobu do vizuálu
          </p>
        </div>
      </div>
      <Switch
        id="person-toggle"
        checked={value}
        onCheckedChange={onChange}
      />
    </div>
  );
}
