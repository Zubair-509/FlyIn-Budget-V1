import IndiaHero from './components/IndiaHero';
import IndiaInquiryForm from './components/IndiaInquiryForm';
import IndiaFlightOptions from './components/IndiaFlightOptions';
import IndiaDiscovery from './components/IndiaDiscovery';
import IndiaArrivalGuidance from './components/IndiaArrivalGuidance';
import { useIndiaHeroAnimation } from './animations/useIndiaHeroAnimation';
import { useIndiaScrollStack } from './animations/useIndiaScrollStack';
import { useIndiaDiscoveryTransition } from './animations/useIndiaDiscoveryTransition';
import { indiaDestinations } from './data/indiaDestinations';
import { indiaFlightOptions } from './data/indiaFlightOptions';
import { indiaDiscoveryData } from './data/indiaDiscoveryData';
import { indiaArrivalGuidanceData } from './data/indiaArrivalGuidanceData';
import './styles/india-hero.css';
import './styles/india-flight-options.css';
import './styles/india-discovery.css';
import './styles/india-arrival-guidance.css';

export {
  IndiaHero,
  IndiaInquiryForm,
  IndiaFlightOptions,
  IndiaDiscovery,
  IndiaArrivalGuidance,
  useIndiaHeroAnimation,
  useIndiaScrollStack,
  useIndiaDiscoveryTransition,
  indiaDestinations,
  indiaFlightOptions,
  indiaDiscoveryData,
  indiaArrivalGuidanceData
};

export default IndiaHero;
