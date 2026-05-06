
import { Check } from 'lucide-react';
import { FormStep } from './stepNavigation';

interface StepIndicatorProps {
  currentStep: FormStep;
}

const steps: { id: FormStep; label: string; number: string }[] = [
  { id: 'contact', label: 'Kontakt', number: '01' },
  { id: 'location', label: 'Lokalita', number: '02' },
  { id: 'current', label: 'Poskytovatel', number: '03' },
  { id: 'requirements', label: 'Požadavky', number: '04' },
  { id: 'confirmation', label: 'Potvrzení', number: '05' },
];

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const currentIndex = steps.findIndex(s => s.id === currentStep);

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = step.id === currentStep;
        
        return (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div 
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300 rounded-sm ${
                  isCompleted 
                    ? 'bg-primary text-primary-foreground' 
                    : isCurrent 
                      ? 'bg-foreground text-background' 
                      : 'bg-muted text-muted-foreground'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step.number}
              </div>
              {/* Label: hidden on very small, visible sm+ */}
              <span className={`hidden sm:block mt-2 text-[10px] md:text-xs font-medium transition-colors whitespace-nowrap ${
                isCurrent ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {step.label}
              </span>
            </div>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-1.5 sm:mx-2">
                <div className={`h-0.5 transition-colors duration-300 ${
                  isCompleted ? 'bg-primary' : 'bg-border'
                }`} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
