import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type Region = 
  | 'cela_cr' 
  | 'praha' 
  | 'ostrava' 
  | 'brno' 
  | 'msk' 
  | 'plzen' 
  | 'liberec' 
  | 'hradec_kralove' 
  | 'olomouc' 
  | 'zlin'
  | 'pardubice'
  | 'usti_nad_labem'
  | 'ceske_budejovice'
  | 'havirov'
  | 'karvina'
  | 'opava'
  | 'frydek_mistek';

interface RegionOption {
  id: Region;
  label: string;
  group: 'general' | 'msk' | 'other';
}

const regions: RegionOption[] = [
  { id: 'cela_cr', label: 'Celá ČR', group: 'general' },
  { id: 'msk', label: 'Moravskoslezský kraj', group: 'msk' },
  { id: 'ostrava', label: 'Ostrava', group: 'msk' },
  { id: 'havirov', label: 'Havířov', group: 'msk' },
  { id: 'karvina', label: 'Karviná', group: 'msk' },
  { id: 'opava', label: 'Opava', group: 'msk' },
  { id: 'frydek_mistek', label: 'Frýdek-Místek', group: 'msk' },
  { id: 'praha', label: 'Praha', group: 'other' },
  { id: 'brno', label: 'Brno', group: 'other' },
  { id: 'plzen', label: 'Plzeň', group: 'other' },
  { id: 'liberec', label: 'Liberec', group: 'other' },
  { id: 'hradec_kralove', label: 'Hradec Králové', group: 'other' },
  { id: 'olomouc', label: 'Olomouc', group: 'other' },
  { id: 'zlin', label: 'Zlín', group: 'other' },
  { id: 'pardubice', label: 'Pardubice', group: 'other' },
  { id: 'usti_nad_labem', label: 'Ústí nad Labem', group: 'other' },
  { id: 'ceske_budejovice', label: 'České Budějovice', group: 'other' },
];

interface RegionSelectorProps {
  value: Region;
  onChange: (value: Region) => void;
}

export function RegionSelector({ value, onChange }: RegionSelectorProps) {
  const selectedRegion = regions.find(r => r.id === value);

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Región
      </label>
      <Select value={value} onValueChange={(v) => onChange(v as Region)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Vyberte región">
            {selectedRegion?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cela_cr" className="font-medium">
            Celá ČR
          </SelectItem>
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
            Moravskoslezský kraj (PODA)
          </div>
          {regions.filter(r => r.group === 'msk').map((region) => (
            <SelectItem key={region.id} value={region.id}>
              {region.label}
            </SelectItem>
          ))}
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
            Ostatné mestá
          </div>
          {regions.filter(r => r.group === 'other').map((region) => (
            <SelectItem key={region.id} value={region.id}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
