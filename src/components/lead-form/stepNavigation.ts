
export type FormStep = 'contact' | 'location' | 'current' | 'requirements' | 'confirmation';

export const getNextStep = (currentStep: FormStep): FormStep => {
  switch (currentStep) {
    case 'contact': return 'location';
    case 'location': return 'current';
    case 'current': return 'requirements';
    case 'requirements': return 'confirmation';
    default: return currentStep;
  }
};

export const getPreviousStep = (currentStep: FormStep): FormStep => {
  switch (currentStep) {
    case 'location': return 'contact';
    case 'current': return 'location';
    case 'requirements': return 'current';
    case 'confirmation': return 'requirements';
    default: return currentStep;
  }
};

export const getStepProgress = (currentStep: FormStep): string => {
  switch (currentStep) {
    case 'contact': return '0%';
    case 'location': return '25%';
    case 'current': return '50%';
    case 'requirements': return '75%';
    case 'confirmation': return '100%';
    default: return '0%';
  }
};
