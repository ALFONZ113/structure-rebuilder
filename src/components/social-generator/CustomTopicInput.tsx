import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil } from 'lucide-react';

interface CustomTopicInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CustomTopicInput({ value, onChange }: CustomTopicInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="custom-topic" className="text-sm font-medium flex items-center gap-2">
        <Pencil className="h-4 w-4 text-muted-foreground" />
        Vlastná téma (voliteľné)
      </Label>
      <Input
        id="custom-topic"
        placeholder="Internet pre rodinu"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-background"
      />
      <p className="text-xs text-muted-foreground">
        Zadaj špecifickú tému pre personalizovaný obsah
      </p>
    </div>
  );
}
