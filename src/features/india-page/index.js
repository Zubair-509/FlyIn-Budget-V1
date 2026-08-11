import IndiaHero from './components/IndiaHero';
import IndiaInquiryForm from './components/IndiaInquiryForm';
import IndiaFlightOptions from './components/IndiaFlightOptions';
import IndiaDiscovery from './components/IndiaDiscovery';
import IndiaArrivalGuidance from './components/IndiaArrivalGuidance';
import IndiaTravelEssentials from './components/IndiaTravelEssentials';
import IndiaTravelEssentialsAccordion from './components/IndiaTravelEssentialsAccordion';
import IndiaFAQ from './components/IndiaFAQ';
import IndiaFAQAccordion from './components/IndiaFAQAccordion';
import IndiaFinalCTA from './components/IndiaFinalCTA';
import { useIndiaHeroAnimation } from './animations/useIndiaHeroAnimation';
import { useIndiaScrollStack } from './animations/useIndiaScrollStack';
import { useIndiaDiscoveryTransition } from './animations/useIndiaDiscoveryTransition';
import { indiaDestinations } from './data/indiaDestinations';
import { indiaFlightOptions } from './data/indiaFlightOptions';
import { indiaDiscoveryData } from './data/indiaDiscoveryData';
import { indiaArrivalGuidanceData } from './data/indiaArrivalGuidanceData';
import { indiaTravelEssentialsData } from './data/indiaTravelEssentialsData';
import { indiaFaqData } from './data/indiaFaqData';
import './styles/india-hero.css';
import './styles/india-flight-options.css';
import './styles/india-discovery.css';
import './styles/india-arrival-guidance.css';
import './styles/india-travel-essentials.css';
import './styles/india-faq.css';
import './styles/india-final-cta.css';

export {
  IndiaHero,
  IndiaInquiryForm,
  IndiaFlightOptions,
  IndiaDiscovery,
  IndiaArrivalGuidance,
  IndiaTravelEssentials,
  IndiaTravelEssentialsAccordion,
  IndiaFAQ,
  IndiaFAQAccordion,
  IndiaFinalCTA,
  useIndiaHeroAnimation,
  useIndiaScrollStack,
  useIndiaDiscoveryTransition,
  indiaDestinations,
  indiaFlightOptions,
  indiaDiscoveryData,
  indiaArrivalGuidanceData,
  indiaTravelEssentialsData,
  indiaFaqData
};

export default IndiaHero;
