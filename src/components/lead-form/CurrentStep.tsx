
interface CurrentStepProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
}

const selectClass = "w-full px-4 py-3.5 bg-background border border-border text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer min-h-[52px]";
const inputClass = "w-full px-4 py-3.5 bg-background border border-border text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[52px]";
const labelClass = "block text-sm font-medium text-foreground mb-2";

const CurrentStep = ({ formData, updateFormData }: CurrentStepProps) => {
  return (
    <div className="space-y-4 md:space-y-5">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">Současný poskytovatel</h3>
      <div>
        <label htmlFor="currentProvider" className={labelClass}>
          Současný poskytovatel internetu
        </label>
        <select
          id="currentProvider"
          name="currentProvider"
          value={formData.currentProvider}
          onChange={(e) => updateFormData('currentProvider', e.target.value)}
          className={selectClass}
        >
          <option value="">-- Vyberte poskytovatele --</option>
          <option value="O2">O2</option>
          <option value="T-Mobile">T-Mobile</option>
          <option value="Vodafone">Vodafone</option>
          <option value="UPC">UPC</option>
          <option value="CETIN">CETIN</option>
          <option value="Starnet">Starnet</option>
          <option value="Poda">Poda</option>
          <option value="Nej.cz">Nej.cz</option>
          <option value="Nordic Telecom">Nordic Telecom</option>
          <option value="Jiný">Jiný</option>
          <option value="Žádný">Nemám internet</option>
        </select>
      </div>
      <div>
        <label htmlFor="monthlyPayment" className={labelClass}>
          Měsíční platba (Kč)
        </label>
        <input
          type="text"
          id="monthlyPayment"
          name="monthlyPayment"
          value={formData.monthlyPayment}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            updateFormData('monthlyPayment', value);
          }}
          className={inputClass}
          placeholder="Např. 550"
          inputMode="numeric"
        />
      </div>
    </div>
  );
};

export default CurrentStep;
