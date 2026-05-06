
interface ContactStepProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
}

const inputClass = "w-full px-4 py-3.5 bg-background border border-border text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[52px]";
const labelClass = "block text-sm font-medium text-foreground mb-2";

const ContactStep = ({ formData, updateFormData }: ContactStepProps) => {
  return (
    <div className="space-y-4 md:space-y-5">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">Kontaktní údaje</h3>
      {/* On mobile: 1 col, on sm+: 2 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>Jméno</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className={inputClass}
            placeholder="Jan"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Příjmení</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className={inputClass}
            placeholder="Novák"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={inputClass}
          placeholder="jan.novak@email.cz"
          autoComplete="email"
          inputMode="email"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>Telefon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
          className={inputClass}
          placeholder="+420 123 456 789"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </div>
    </div>
  );
};

export default ContactStep;
