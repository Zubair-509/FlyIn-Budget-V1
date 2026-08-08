import lahoreImg from '../../../assets/images/pakistan/lahore-minar-e-pakistan.png';
import karachiImg from '../../../assets/images/pakistan/karachi-mazar-e-quaid.png';
import multanImg from '../../../assets/images/pakistan/multan-shrine.png';
import peshawarImg from '../../../assets/images/pakistan/peshawar-heritage.png';

export const pakistanFlightOptions = [
  {
    id: 'islamabad',
    sequence: '01',
    city: 'Islamabad',
    routeLabel: 'FLIGHTS TO ISLAMABAD',
    subtitle: 'Capital Gateway & Northern Valleys',
    description:
      'Direct and 1-stop flights to Islamabad International Airport with generous baggage allowance and flexible schedules.',
    startingFare: 438,
    currency: '£',
    availabilityNote: '*Subject to availability',
    image: multanImg,
    badge: 'POPULAR ROUTE',
    bookTarget: '#main-content',
    callTarget: 'tel:01143600079'
  },
  {
    id: 'lahore',
    sequence: '02',
    city: 'Lahore',
    routeLabel: 'FLIGHTS TO LAHORE',
    subtitle: 'Cultural Capital & Food Haven',
    description:
      'Experience historic architecture, vibrant food streets, and the rich cultural heritage of Punjab.',
    startingFare: 460,
    currency: '£',
    availabilityNote: '*Subject to availability',
    image: lahoreImg,
    bookTarget: '#main-content',
    callTarget: 'tel:01143600079'
  },
  {
    id: 'karachi',
    sequence: '03',
    city: 'Karachi',
    routeLabel: 'FLIGHTS TO KARACHI',
    subtitle: 'Coastal Metropolis & Commercial Hub',
    description:
      'Discover Pakistan’s energetic coastal metropolis, bustling financial center, and Arabian Sea shoreline.',
    startingFare: 304,
    currency: '£',
    availabilityNote: '*Subject to availability',
    image: karachiImg,
    bookTarget: '#main-content',
    callTarget: 'tel:01143600079'
  },
  {
    id: 'peshawar',
    sequence: '04',
    city: 'Peshawar',
    routeLabel: 'FLIGHTS TO PESHAWAR',
    subtitle: 'Historic Khyber Gateway',
    description:
      'Experience traditional bazaars, ancient historic streets, and authentic regional hospitality.',
    startingFare: 469,
    currency: '£',
    availabilityNote: '*Subject to availability',
    image: peshawarImg,
    bookTarget: '#main-content',
    callTarget: 'tel:01143600079'
  }
];
