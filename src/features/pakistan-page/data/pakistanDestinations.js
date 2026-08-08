import islamabadBg from '../../../assets/Desktop Assets/Flights To Pakistan/IslamabadC.png';
import lahoreBg from '../../../assets/Desktop Assets/Flights To Pakistan/LahoreC.png';
import karachiBg from '../../../assets/Desktop Assets/Flights To Pakistan/KarachiC.png';
import peshawarBg from '../../../assets/Desktop Assets/Flights To Pakistan/PeshawarC.png';
import multanBg from '../../../assets/Desktop Assets/Flights To Pakistan/MultanC.png';

export const pakistanDestinations = [
  {
    id: 'islamabad',
    index: 0,
    sequence: '01',
    city: 'Islamabad',
    headline: 'Where modern calm meets the Margalla Hills.',
    description:
      'Explore Pakistan’s capital through green boulevards, landmark architecture and a gateway to the country’s northern landscapes.',
    tags: ['Capital', 'Nature', 'Architecture'],
    ctaLabel: 'Explore flights to Islamabad',
    ctaTarget: '#pakistan-flight-inquiry',
    preselectCity: 'Islamabad (ISB)',
    backgroundImage: islamabadBg,
    backgroundPosition: 'center 58%',
    thumbnailPosition: 'center 50%',
    imageAlt: 'Pakistan Monument and Margalla Hills in Islamabad, Pakistan'
  },
  {
    id: 'lahore',
    index: 1,
    sequence: '02',
    city: 'Lahore',
    headline: 'Where history, food and culture come alive.',
    description:
      'Discover Mughal landmarks, energetic food streets and a city shaped by centuries of art, architecture and tradition.',
    tags: ['Heritage', 'Food', 'Culture'],
    ctaLabel: 'Explore flights to Lahore',
    ctaTarget: '#pakistan-flight-inquiry',
    preselectCity: 'Lahore (LHE)',
    backgroundImage: lahoreBg,
    backgroundPosition: 'center 55%',
    thumbnailPosition: 'center 45%',
    imageAlt: 'Badshahi Mosque and grand entrance in Lahore, Pakistan'
  },
  {
    id: 'karachi',
    index: 2,
    sequence: '03',
    city: 'Karachi',
    headline: 'Pakistan’s coastal city of energy and contrast.',
    description:
      'Explore a fast-moving metropolis shaped by the Arabian Sea, modern commerce, diverse neighbourhoods and iconic city landmarks.',
    tags: ['Coastal', 'Urban', 'Culture'],
    ctaLabel: 'Explore flights to Karachi',
    ctaTarget: '#pakistan-flight-inquiry',
    preselectCity: 'Karachi (KHI)',
    backgroundImage: karachiBg,
    backgroundPosition: 'center 52%',
    thumbnailPosition: 'center 50%',
    imageAlt: 'Coastal skyline and Arabian Sea shoreline in Karachi, Pakistan'
  },
  {
    id: 'peshawar',
    index: 3,
    sequence: '04',
    city: 'Peshawar',
    headline: 'A historic gateway shaped by centuries of stories.',
    description:
      'Experience traditional bazaars, regional architecture and the distinctive cultural character of one of Pakistan’s oldest cities.',
    tags: ['History', 'Bazaars', 'Heritage'],
    ctaLabel: 'Explore flights to Peshawar',
    ctaTarget: '#pakistan-flight-inquiry',
    preselectCity: 'Peshawar (PEW)',
    backgroundImage: peshawarBg,
    backgroundPosition: 'center 52%',
    thumbnailPosition: 'center 50%',
    imageAlt: 'Historic architecture and old-city streets of Peshawar, Pakistan'
  },
  {
    id: 'multan',
    index: 4,
    sequence: '05',
    city: 'Multan',
    headline: 'A city of heritage, craft and timeless character.',
    description:
      'Discover historic shrines, traditional craftsmanship and the warm architectural identity of southern Punjab.',
    tags: ['Heritage', 'Craft', 'Architecture'],
    ctaLabel: 'Explore flights to Multan',
    ctaTarget: '#pakistan-flight-inquiry',
    preselectCity: 'Multan (MUX)',
    backgroundImage: multanBg,
    backgroundPosition: 'center 52%',
    thumbnailPosition: 'center 50%',
    imageAlt: 'Historic shrine dome and turquoise tile details in Multan, Pakistan'
  }
];
