import { lazy } from 'react';

// Eagerly loaded pages (critical path)
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

// Lazy loaded pages - grouped by category
const lazyPage = (path: string) => lazy(() => import(`../pages/${path}.tsx`));

// Core pages
const LevnyInternet = lazyPage('LevnyInternet');
const PripojeniInternetu = lazyPage('PripojeniInternetu');
const FuturisticIntro = lazyPage('FuturisticIntro');
const Contact = lazyPage('Contact');
const Blog = lazyPage('Blog');
const BlogArticle = lazyPage('BlogArticle');
const ProviderIndex = lazyPage('ProviderIndex');

// Admin pages
const AdminLogin = lazy(() => import('@/pages/admin/Login'));
const SocialGenerator = lazyPage('SocialGenerator');

// Provider comparison pages
const PodaReview = lazyPage('PodaReview');
const VodafoneVsO2 = lazyPage('VodafoneVsO2');
const TMobileVsO2 = lazyPage('TMobileVsO2');
const PodaVsO2 = lazyPage('PodaVsO2');
const PodaVsTMobile = lazyPage('PodaVsTMobile');
const NejlepsiInternetOstrava = lazyPage('NejlepsiInternetOstrava');
const O2InternetRecenze = lazyPage('O2InternetRecenze');
const TMobileInternetRecenze = lazyPage('TMobileInternetRecenze');
const VodafoneInternetRecenze = lazyPage('VodafoneInternetRecenze');
const ZmenaPoskytovatele = lazyPage('ZmenaPoskytovatele');

// City pages
const InternetOstrava = lazyPage('InternetOstrava');
const InternetKarvina = lazyPage('InternetKarvina');
const InternetHavirov = lazyPage('InternetHavirov');
const InternetBohumin = lazyPage('InternetBohumin');
const InternetPraha = lazyPage('InternetPraha');
const InternetBrno = lazyPage('InternetBrno');
const InternetLiberec = lazyPage('InternetLiberec');
const InternetPlzen = lazyPage('InternetPlzen');
const InternetCeskeBudejovice = lazyPage('InternetCeskeBudejovice');
const InternetHradecKralove = lazyPage('InternetHradecKralove');
const InternetPardubice = lazyPage('InternetPardubice');
const InternetUstiNadLabem = lazyPage('InternetUstiNadLabem');
const InternetZlin = lazyPage('InternetZlin');
const InternetOlomouc = lazyPage('InternetOlomouc');
const InternetOpava = lazyPage('InternetOpava');
const InternetFrydekMistek = lazyPage('InternetFrydekMistek');
const InternetKladno = lazyPage('InternetKladno');

// Blog articles
const BlogJakVybratInternet = lazyPage('BlogJakVybratInternet');
const BlogPlanInternetu = lazyPage('BlogPlanInternetu');
const BlogKybernetickaBezpecnost = lazyPage('BlogKybernetickaBezpecnost');
const BlogOptickeSleSrpen2025 = lazyPage('BlogOptickeSleSrpen2025');
const BlogFwaTechnologie = lazyPage('BlogFwaTechnologie');
const BlogIptvVsKabelovaTV = lazyPage('BlogIptvVsKabelovaTV');
const BlogJakUsetritNaInternetu = lazyPage('BlogJakUsetritNaInternetu');
const BlogNejlepsiInternetPraha2025 = lazyPage('BlogNejlepsiInternetPraha2025');
const BlogOptikaVs5G = lazyPage('BlogOptikaVs5G');
const BlogSrovnaniTeleviznichSluzeb = lazyPage('BlogSrovnaniTeleviznichSluzeb');
const BlogNejlepsiInternetNaDoma2025 = lazyPage('BlogNejlepsiInternetNaDoma2025');
const BlogInternetCesko2026 = lazyPage('BlogInternetCesko2026');

// Legal pages
const AboutUs = lazyPage('AboutUs');
const FAQ = lazyPage('FAQ');
const PrivacyPolicy = lazyPage('PrivacyPolicy');
const TermsAndConditions = lazyPage('TermsAndConditions');
const CookiesPolicy = lazyPage('CookiesPolicy');
const SrovnaniInternetu2025 = lazyPage('SrovnaniInternetu2025');
const NejlepsiInternetNaDoma = lazyPage('NejlepsiInternetNaDoma');
const NejlepsiInternetPraha2025Page = lazyPage('NejlepsiInternetPraha2025');
const NejlepsiInternetOstrava2025 = lazyPage('NejlepsiInternetOstrava2025');
const BlogMoravskoslezkyKraj = lazyPage('BlogMoravskoslezkyKraj');
const BlogNajlepsiPoskytovatelia2025 = lazyPage('BlogNajlepsiPoskytovatelia2025');

// Route configuration
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteConfig[] = [
  // Admin routes
  { path: '/admin/login', element: <AdminLogin /> },
  { path: '/social-generator', element: <SocialGenerator /> },
  
  // Core routes
  { path: '/', element: <Index /> },
  { path: '/levny-internet', element: <LevnyInternet /> },
  { path: '/pripojeni-internetu', element: <PripojeniInternetu /> },
  { path: '/intro', element: <FuturisticIntro /> },
  { path: '/kontakt', element: <Contact /> },
  
  // Blog routes
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogArticle /> },
  { path: '/blog/jak-vybrat-internet', element: <BlogJakVybratInternet /> },
  { path: '/blog/fwa-technologie-2025', element: <BlogFwaTechnologie /> },
  { path: '/blog/iptv-vs-kabelova-tv-2025', element: <BlogIptvVsKabelovaTV /> },
  { path: '/blog/jak-usetrit-na-internetu-2025', element: <BlogJakUsetritNaInternetu /> },
  { path: '/blog/optika-vs-5g', element: <BlogOptikaVs5G /> },
  { path: '/blog/srovnani-televiznich-sluzeb', element: <BlogSrovnaniTeleviznichSluzeb /> },
  { path: '/blog/nejlepsi-internet-na-doma-2025', element: <BlogNejlepsiInternetNaDoma2025 /> },
  { path: '/blog/plan-internetu-2025', element: <BlogPlanInternetu /> },
  { path: '/blog/kyberneticka-bezpecnost-2025', element: <BlogKybernetickaBezpecnost /> },
  { path: '/blog/opticke-site-srpen-2025', element: <BlogOptickeSleSrpen2025 /> },
  { path: '/blog/nejlepsi-internet-praha-2025', element: <BlogNejlepsiInternetPraha2025 /> },
  { path: '/blog/internet-cesko-2026', element: <BlogInternetCesko2026 /> },
  
  // Provider routes
  { path: '/poskytovatele-internetu', element: <ProviderIndex /> },
  { path: '/poskytovatele-internetu/poda-internet-recenze', element: <PodaReview /> },
  { path: '/poskytovatele-internetu/vodafone-vs-o2', element: <VodafoneVsO2 /> },
  { path: '/poskytovatele-internetu/t-mobile-vs-o2', element: <TMobileVsO2 /> },
  { path: '/poskytovatele-internetu/poda-vs-o2', element: <PodaVsO2 /> },
  { path: '/poskytovatele-internetu/poda-vs-t-mobile', element: <PodaVsTMobile /> },
  { path: '/poskytovatele-internetu/o2-internet-recenze', element: <O2InternetRecenze /> },
  { path: '/poskytovatele-internetu/t-mobile-internet-recenze', element: <TMobileInternetRecenze /> },
  { path: '/poskytovatele-internetu/vodafone-internet-recenze', element: <VodafoneInternetRecenze /> },
  { path: '/zmena-poskytovatele-internetu', element: <ZmenaPoskytovatele /> },
  { path: '/nejlepsi-internet-ostrava', element: <NejlepsiInternetOstrava /> },
  
  // City routes
  { path: '/internet-ostrava', element: <InternetOstrava /> },
  { path: '/internet-karvina', element: <InternetKarvina /> },
  { path: '/internet-havirov', element: <InternetHavirov /> },
  { path: '/internet-bohumin', element: <InternetBohumin /> },
  { path: '/nejlepsi-internet-praha-2025', element: <InternetPraha /> },
  { path: '/internet-brno', element: <InternetBrno /> },
  { path: '/internet-liberec', element: <InternetLiberec /> },
  { path: '/internet-plzen', element: <InternetPlzen /> },
  { path: '/internet-ceske-budejovice', element: <InternetCeskeBudejovice /> },
  { path: '/internet-hradec-kralove', element: <InternetHradecKralove /> },
  { path: '/internet-pardubice', element: <InternetPardubice /> },
  { path: '/internet-usti-nad-labem', element: <InternetUstiNadLabem /> },
  { path: '/internet-zlin', element: <InternetZlin /> },
  { path: '/internet-olomouc', element: <InternetOlomouc /> },
  { path: '/internet-opava', element: <InternetOpava /> },
  { path: '/internet-frydek-mistek', element: <InternetFrydekMistek /> },
  { path: '/internet-kladno', element: <InternetKladno /> },
  
  // Legal and info pages
  { path: '/o-nas', element: <AboutUs /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/ochrana-osobnich-udaju', element: <PrivacyPolicy /> },
  { path: '/obchodni-podminky', element: <TermsAndConditions /> },
  { path: '/cookies', element: <CookiesPolicy /> },
  { path: '/srovnani-internetu-2025', element: <SrovnaniInternetu2025 /> },
  { path: '/nejlepsi-internet-na-doma', element: <NejlepsiInternetNaDoma /> },
  { path: '/poskytovatele-internetu/nejlepsi-internet-praha-2025', element: <NejlepsiInternetPraha2025Page /> },
  { path: '/poskytovatele-internetu/nejlepsi-internet-ostrava-2025', element: <NejlepsiInternetOstrava2025 /> },
  { path: '/blog/moravskoslezsky-kraj-internet', element: <BlogMoravskoslezkyKraj /> },
  { path: '/blog/najlepsie-poskytovatelia-2025', element: <BlogNajlepsiPoskytovatelia2025 /> },
  
  // 404
  { path: '*', element: <NotFound /> },
];
