import delhiImg from '../../../assets/images/india/delhi.png';
import mumbaiImg from '../../../assets/images/india/mumbai.png';
import ahmedabadImg from '../../../assets/images/india/ahmedabad.png';
import goaImg from '../../../assets/images/india/goa.png';

export const indiaFlightOptions = [
  {
    id: 'delhi',
    sequence: '01',
    city: 'Delhi',
    routeLabel: 'NORTH INDIA GATEWAY',
    subtitle: 'Capital Gateway & Northern India',
    description: 'A major arrival point for journeys to Delhi and destinations across northern India.',
    startingFare: '418',
    currency: '£',
    availabilityNote: '*Starting fare subject to availability',
    image: delhiImg,
    badge: 'CAPITAL GATEWAY',
    bookTarget: '#india-flight-inquiry',
    callTarget: 'tel:01143600079',
    airportCode: 'DEL'
  },
  {
    id: 'mumbai',
    sequence: '02',
    city: 'Mumbai',
    routeLabel: 'WESTERN INDIA HUB',
    subtitle: 'Coastal Metropolis & Commercial Hub',
    description: 'A key international gateway for Mumbai and onward journeys across western India.',
    startingFare: '463',
    currency: '£',
    availabilityNote: '*Starting fare subject to availability',
    image: mumbaiImg,
    badge: 'COMMERCIAL METROPOLIS',
    bookTarget: '#india-flight-inquiry',
    callTarget: 'tel:01143600079',
    airportCode: 'BOM'
  },
  {
    id: 'ahmedabad',
    sequence: '03',
    city: 'Ahmedabad',
    routeLabel: 'GUJARAT GATEWAY',
    subtitle: 'Gujarat Gateway & Commercial Centre',
    description: 'A convenient arrival point for Ahmedabad and journeys throughout Gujarat.',
    startingFare: '500',
    currency: '£',
    availabilityNote: '*Starting fare subject to availability',
    image: ahmedabadImg,
    badge: 'GUJARAT GATEWAY',
    bookTarget: '#india-flight-inquiry',
    callTarget: 'tel:01143600079',
    airportCode: 'AMD'
  },
  {
    id: 'goa',
    sequence: '04',
    city: 'Goa',
    routeLabel: 'COASTAL LEISURE',
    subtitle: 'Coastal Leisure Gateway',
    description: 'Explore flight options for Goa and India’s distinctive western coastline.',
    startingFare: '546',
    currency: '£',
    availabilityNote: '*Starting fare subject to availability',
    image: goaImg,
    badge: 'TROPICAL COASTLINE',
    bookTarget: '#india-flight-inquiry',
    callTarget: 'tel:01143600079',
    airportCode: 'GOI'
  }
];
