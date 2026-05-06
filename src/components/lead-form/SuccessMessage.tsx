
import ScrollReveal from '../ui/ScrollReveal';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface SuccessMessageProps {
  onNewRequest: () => void;
}

const SuccessMessage = ({ onNewRequest }: SuccessMessageProps) => {
  return (
    <section id="lead-form" className="section-editorial bg-background">
      <div className="container-editorial">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 text-primary mb-6">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            
            <h2 className="heading-lg mb-4">
              Děkujeme za váš zájem!
            </h2>
            
            <p className="text-body-lg mb-8 md:mb-10">
              Vaše žádost byla úspěšně odeslána. Brzy vás budeme kontaktovat 
              s nejvýhodnější nabídkou internetového připojení.
            </p>
            
            <button 
              onClick={onNewRequest} 
              className="btn-secondary group"
            >
              <span className="flex items-center gap-2">
                Odeslat další žádost
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SuccessMessage;
