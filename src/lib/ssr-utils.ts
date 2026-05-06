
// SSR utility functions and types
export interface SSRContext {
  url: string;
  userAgent?: string;
  isBot?: boolean;
}

export const isSSR = (): boolean => {
  return typeof window === 'undefined';
};

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

export const detectBot = (userAgent: string = ''): boolean => {
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /rogerbot/i,
    /linkedinbot/i,
    /embedly/i,
    /quora link preview/i,
    /showyoubot/i,
    /outbrain/i,
    /pinterest/i,
    /slackbot/i,
    /vkshare/i,
    /w3c_validator/i,
    /redditbot/i,
    /applebot/i,
    /whatsapp/i,
    /flipboard/i,
    /tumblr/i,
    /bitlybot/i,
    /skypeuripreview/i,
    /nuzzel/i,
    /discordbot/i,
    /google page speed/i,
    /qwantify/i,
    /pinterestbot/i,
    /bitrix link preview/i,
    /xing-contenttabrequest/i,
    /chrome-lighthouse/i,
    /telegrambot/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
};

export const shouldPrerender = (url: string, userAgent: string = ''): boolean => {
  // Always prerender for bots
  if (detectBot(userAgent)) {
    return true;
  }
  
  // Prerender important pages
  const prerenderRoutes = [
    '/',
    '/faq',
    '/kontakt',
    '/poskytovatele-internetu',
    '/ochrana-osobnich-udaju',
    '/obchodni-podminky'
  ];
  
  return prerenderRoutes.includes(url);
};
