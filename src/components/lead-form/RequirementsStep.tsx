
import { Link } from 'react-router-dom';

interface RequirementsStepProps {
  formData: any;
  updateFormData: (field: string, value: string | boolean | string[]) => void;
}

const RequirementsStep = ({ formData, updateFormData }: RequirementsStepProps) => {
  const services = ['Internet', 'TV', 'Kombinace Internet + TV', 'Pevná linka', 'Mobilní služby'];

  return (
    <div className="space-y-4 md:space-y-5">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">Vaše požadavky</h3>
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Mám zájem o služby
        </label>
        {/* Large touch targets for mobile */}
        <div className="space-y-1">
          {services.map((service) => (
            <label key={service} className="flex items-center cursor-pointer group min-h-[52px] px-3 -mx-3 rounded hover:bg-muted/40 transition-colors">
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={(e) => {
                    let newServices = [...formData.services];
                    if (e.target.checked) {
                      newServices.push(service);
                    } else {
                      newServices = newServices.filter(s => s !== service);
                    }
                    updateFormData('services', newServices);
                  }}
                  className="w-6 h-6 border-2 border-border bg-background text-primary focus:ring-primary focus:ring-2 transition-all cursor-pointer accent-primary"
                />
              </div>
              <span className="ml-3 text-base text-foreground group-hover:text-primary transition-colors select-none">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <label htmlFor="additionalRequirements" className="block text-sm font-medium text-foreground mb-2">
          Další požadavky (volitelné)
        </label>
        <textarea
          id="additionalRequirements"
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={(e) => updateFormData('additionalRequirements', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-background border border-border text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Napište vaše další požadavky nebo preference..."
        ></textarea>
      </div>
      
      <div>
        <label className="flex items-start cursor-pointer group min-h-[52px] py-2">
          <input
            type="checkbox"
            name="gdprConsent"
            checked={formData.gdprConsent}
            onChange={(e) => updateFormData('gdprConsent', e.target.checked)}
            className="w-6 h-6 mt-0.5 border-2 border-border bg-background text-primary focus:ring-primary focus:ring-2 transition-all cursor-pointer flex-shrink-0 accent-primary"
            required
          />
          <span className="ml-3 text-sm text-muted-foreground leading-relaxed">
            Souhlasím se zpracováním osobních údajů za účelem kontaktování s nabídkou internetového připojení. 
            Přečetl/a jsem si{' '}
            <Link to="/ochrana-osobnich-udaju" className="text-primary hover:underline">
              zásady ochrany osobních údajů
            </Link>.
          </span>
        </label>
      </div>
    </div>
  );
};

export default RequirementsStep;
