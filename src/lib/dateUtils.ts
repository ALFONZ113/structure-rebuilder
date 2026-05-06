// Czech month names in uppercase for SEO titles
const czechMonths = [
  'LEDEN', 'ÚNOR', 'BŘEZEN', 'DUBEN', 'KVĚTEN', 'ČERVEN',
  'ČERVENEC', 'SRPEN', 'ZÁŘÍ', 'ŘÍJEN', 'LISTOPAD', 'PROSINEC'
];

const czechMonthsLower = [
  'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
  'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
];

export const getCurrentMonthCzech = (uppercase = true): string => {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  return uppercase 
    ? `${czechMonths[month]} ${year}` 
    : `${czechMonthsLower[month]} ${year}`;
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const getCurrentDateISO = (): string => {
  return new Date().toISOString().split('T')[0];
};
