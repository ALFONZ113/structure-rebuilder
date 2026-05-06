
interface LocationStepProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
}

const inputClass = "w-full px-4 py-3.5 bg-background border border-border text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[52px]";
const labelClass = "block text-sm font-medium text-foreground mb-2";

const LocationStep = ({ formData, updateFormData }: LocationStepProps) => {
  return (
    <div className="space-y-4 md:space-y-5">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">Adresa instalace</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="zipCode" className={labelClass}>PSČ</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={(e) => updateFormData('zipCode', e.target.value)}
            className={inputClass}
            placeholder="12000"
            maxLength={5}
            inputMode="numeric"
            autoComplete="postal-code"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>Město</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
            className={inputClass}
            placeholder="Praha"
            autoComplete="address-level2"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="street" className={labelClass}>Ulice a číslo popisné</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={(e) => updateFormData('street', e.target.value)}
          className={inputClass}
          placeholder="Václavské náměstí 1"
          autoComplete="street-address"
          required
        />
      </div>
    </div>
  );
};

export default LocationStep;
