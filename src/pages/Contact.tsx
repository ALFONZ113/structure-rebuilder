import { useState } from 'react';
import { ArrowLeft, Send, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import PageLayout from '@/components/PageLayout';
import { submitContactForm } from '@/lib/formHandler';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({
          title: "Formulář byl odeslán",
          description: "Děkujeme za vaši zprávu. Brzy se vám ozveme."
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFormSubmitted(true);
      } else {
        throw new Error(result.error || 'Neznámá chyba');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Chyba při odesílání formuláře",
        description: "Zkuste to prosím později.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRedirectToLeadForm = () => {
    window.location.href = '/#lead-form';
  };

  return (
    <PageLayout
      pageTitle="Kontakt | Nejvýhodnější Připojení"
      pageDescription="Máte dotaz nebo potřebujete pomoc? Kontaktujte nás a my vám rádi poradíme s výběrem nejlepšího internetového připojení."
    >
      <div className="container-editorial">
        <div className="mb-6 xs:mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors min-h-[44px]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpět na hlavní stránku</span>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-3 xs:mb-4">Kontaktujte nás</h1>
          <p className="text-body-lg mb-8 xs:mb-12">Máte dotaz nebo potřebujete pomoc? Jsme tu pro vás.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-12">
            {/* Contact Form */}
            <div className="bg-card p-5 xs:p-6 border border-border" id="kontaktni-udaje">
              <h2 className="heading-sm mb-5 xs:mb-6">Napište nám</h2>
              
              {formSubmitted ? (
                <div className="text-center py-6 xs:py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Zpráva odeslána!</h3>
                  <p className="text-muted-foreground mb-4">Děkujeme za vaši zprávu. Brzy se vám ozveme.</p>
                  <button onClick={() => setFormSubmitted(false)} className="text-primary hover:text-primary/80 font-medium">
                    Poslat další zprávu
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4 xs:space-y-6"
                >
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Jméno a příjmení
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Vaše zpráva
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows={5} 
                      className="w-full px-4 py-3 border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none" 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn-primary w-full min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <span>Odesílám...</span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Odeslat zprávu</span>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="heading-sm mb-5 xs:mb-6">Kontaktní údaje</h2>
              
              <div className="space-y-6 xs:space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Telefon</h3>
                    <p className="text-muted-foreground mt-1">+420 756 756 147</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Po-Pá, 9:00 - 17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">E-mail</h3>
                    <p className="text-muted-foreground mt-1 break-all">info@nejvyhodnejsipripojeni.cz</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Odpovídáme do 24 hodin</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Adresa</h3>
                    <p className="text-muted-foreground mt-1">Technologická 1234/8</p>
                    <p className="text-muted-foreground">150 00 Praha 5</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 xs:mt-10 p-5 xs:p-6 bg-surface border border-border">
                <h3 className="font-semibold text-foreground mb-2">Máte zájem o nabídku?</h3>
                <p className="text-muted-foreground mb-4 text-sm xs:text-base">Získejte nezávaznou nabídku šitou na míru vašim potřebám.</p>
                <button 
                  onClick={handleRedirectToLeadForm} 
                  className="btn-primary w-full xs:w-auto min-h-[48px]"
                >
                  Získat nabídku zdarma
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
