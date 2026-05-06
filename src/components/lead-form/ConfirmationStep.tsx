
import { CheckCircle } from 'lucide-react';

interface ConfirmationStepProps {
  formData: any;
}

const ConfirmationStep = ({ formData }: ConfirmationStepProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 text-primary mb-4">
          <CheckCircle className="w-7 h-7 md:w-8 md:h-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Potvrďte odeslání žádosti
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Zkontrolujte si zadané údaje a odešlete formulář pro získání nejvýhodnější nabídky.
        </p>
      </div>
      
      <div className="bg-surface border border-border p-4 md:p-6 space-y-4 md:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Jméno a příjmení
            </h4>
            <p className="text-foreground font-medium">
              {formData.firstName} {formData.lastName}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Kontakt
            </h4>
            <p className="text-foreground">
              {formData.email}<br />{formData.phone}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Adresa instalace
            </h4>
            <p className="text-foreground">
              {formData.street}<br />{formData.zipCode} {formData.city}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Současné připojení
            </h4>
            <p className="text-foreground">
              {formData.currentProvider || 'Neuvedeno'}
              {formData.monthlyPayment ? ` - ${formData.monthlyPayment} Kč/měsíc` : ''}
            </p>
          </div>
        </div>
        
        <div className="pt-2 border-t border-border">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            Požadované služby
          </h4>
          <p className="text-foreground">
            {formData.services.length > 0 ? formData.services.join(', ') : 'Neuvedeno'}
          </p>
        </div>
        
        {formData.additionalRequirements && (
          <div className="pt-2 border-t border-border">
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Další požadavky
            </h4>
            <p className="text-foreground">{formData.additionalRequirements}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationStep;
