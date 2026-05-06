
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import ScrollReveal from './ui/ScrollReveal';
import { submitLeadForm } from '@/lib/formHandler';
import { FormStep, getNextStep, getPreviousStep } from './lead-form/stepNavigation';
import { isStepValid } from './lead-form/formValidation';
import StepIndicator from './lead-form/StepIndicator';
import ContactStep from './lead-form/ContactStep';
import LocationStep from './lead-form/LocationStep';
import CurrentStep from './lead-form/CurrentStep';
import RequirementsStep from './lead-form/RequirementsStep';
import ConfirmationStep from './lead-form/ConfirmationStep';
import SuccessMessage from './lead-form/SuccessMessage';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const LeadForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>('contact');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    city: '',
    street: '',
    currentProvider: '',
    monthlyPayment: '',
    services: [] as string[],
    additionalRequirements: '',
    gdprConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 'confirmation') {
      setIsSubmitting(true);
      
      try {
        const result = await submitLeadForm(formData);
        
        if (result.success) {
          toast({
            title: "Děkujeme za váš zájem!",
            description: "Brzy vás budeme kontaktovat s nejvýhodnější nabídkou.",
          });
          
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            zipCode: '',
            city: '',
            street: '',
            currentProvider: '',
            monthlyPayment: '',
            services: [],
            additionalRequirements: '',
            gdprConsent: false,
          });
          
          setFormSubmitted(true);
          setCurrentStep('contact');
        } else {
          throw new Error(result.error || 'Neznámá chyba');
        }
      } catch (error) {
        toast({
          title: "Chyba při odesílání",
          description: `Zkuste to prosím později. Detail: ${error instanceof Error ? error.message : 'Neznámá chyba'}`,
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setCurrentStep(getNextStep(currentStep));
    }
  };

  const navigateToPreviousStep = () => {
    setCurrentStep(getPreviousStep(currentStep));
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 'contact':
        return <ContactStep formData={formData} updateFormData={updateFormData} />;
      case 'location':
        return <LocationStep formData={formData} updateFormData={updateFormData} />;
      case 'current':
        return <CurrentStep formData={formData} updateFormData={updateFormData} />;
      case 'requirements':
        return <RequirementsStep formData={formData} updateFormData={updateFormData} />;
      case 'confirmation':
        return <ConfirmationStep formData={formData} />;
      default:
        return null;
    }
  };

  if (formSubmitted) {
    return <SuccessMessage onNewRequest={() => setFormSubmitted(false)} />;
  }

  return (
    <section id="lead-form" className="section-editorial bg-background">
      <div className="container-editorial">
        {/* Header - Asymmetric */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
            <div>
              <span className="text-label">Bezplatná konzultace</span>
              <h2 className="heading-xl mt-4">
                Získejte nabídku zdarma
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-body-lg">
                Vyplňte krátký formulář a my vám najdeme nejlepší 
                internetové připojení ve vaší lokalitě.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Form Card - Editorial Style */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border p-5 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                <StepIndicator currentStep={currentStep} />
                
                <div className="min-h-[280px] sm:min-h-[300px] md:min-h-[320px] mt-6 sm:mt-8 md:mt-10">
                  {renderFormStep()}
                </div>
                
                {/* Navigation */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3">
                  {currentStep !== 'contact' ? (
                    <button
                      type="button"
                      onClick={navigateToPreviousStep}
                      className="btn-text text-muted-foreground hover:text-foreground min-h-[52px] justify-center sm:justify-start"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Zpět</span>
                    </button>
                  ) : (
                    <div className="hidden sm:block"></div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={!isStepValid(currentStep, formData) || isSubmitting}
                    className={`btn-primary group min-h-[52px] ${
                      !isStepValid(currentStep, formData) || isSubmitting
                        ? 'opacity-40 cursor-not-allowed hover:transform-none'
                        : ''
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2 text-base">
                      {isSubmitting 
                        ? 'Odesílání...' 
                        : currentStep === 'confirmation' 
                          ? 'Odeslat žádost' 
                          : 'Pokračovat'}
                      {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LeadForm;
