import delhiBg from '../../../assets/images/india/delhi.png';
import mumbaiBg from '../../../assets/images/india/mumbai.png';
import ahmedabadBg from '../../../assets/images/india/ahmedabad.png';
import goaBg from '../../../assets/images/india/goa.png';
import hyderabadBg from '../../../assets/images/india/bangalore.png';

export const indiaDiscoveryData = [
  {
    id: 'delhi',
    index: 0,
    sequence: '01',
    city: 'Delhi',
    headline: 'Where history and modern India meet.',
    description:
      'Explore India’s capital gateway, where historic landmarks, contemporary city life and connections across northern India come together.',
    tags: ['Capital', 'Heritage', 'Culture'],
    ctaLabel: 'Explore flight options',
    ctaTarget: '#india-flight-inquiry',
    preselectCity: 'Delhi (DEL)',
    backgroundImage: delhiBg,
    backgroundPosition: 'center 40%',
    thumbnailPosition: 'center 40%',
    imageAlt: 'Historic and modern city view of Delhi, India'
  },
  {
    id: 'mumbai',
    index: 1,
    sequence: '02',
    city: 'Mumbai',
    headline: 'India’s coastal metropolis of energy and ambition.',
    description:
      'Discover a major international gateway shaped by its coastline, culture, commerce and unmistakable urban character.',
    tags: ['Coastal', 'Urban', 'Culture'],
    ctaLabel: 'Explore flight options',
    ctaTarget: '#india-flight-inquiry',
    preselectCity: 'Mumbai (BOM)',
    backgroundImage: mumbaiBg,
    backgroundPosition: 'center 35%',
    thumbnailPosition: 'center 35%',
    imageAlt: 'Iconic coastal skyline of Mumbai, India'
  },
  {
    id: 'ahmedabad',
    index: 2,
    sequence: '03',
    city: 'Ahmedabad',
    headline: 'Architecture, enterprise and the character of Gujarat.',
    description:
      'Explore Ahmedabad through its architectural heritage, commercial energy and role as a major gateway to Gujarat.',
    tags: ['Architecture', 'Commerce', 'Culture'],
    ctaLabel: 'Explore flight options',
    ctaTarget: '#india-flight-inquiry',
    preselectCity: 'Ahmedabad (AMD)',
    backgroundImage: ahmedabadBg,
    backgroundPosition: 'center 45%',
    thumbnailPosition: 'center 45%',
    imageAlt: 'Architectural heritage landmark in Ahmedabad, Gujarat'
  },
  {
    id: 'goa',
    index: 3,
    sequence: '04',
    city: 'Goa',
    headline: 'Coastal India with a distinct cultural rhythm.',
    description:
      'Discover a destination defined by coastline, heritage, relaxed character and a different pace of Indian travel.',
    tags: ['Coastal', 'Leisure', 'Heritage'],
    ctaLabel: 'Explore flight options',
    ctaTarget: '#india-flight-inquiry',
    preselectCity: 'Goa (GOI)',
    backgroundImage: goaBg,
    backgroundPosition: 'center 50%',
    thumbnailPosition: 'center 50%',
    imageAlt: 'Scenic coastline and beach landscape of Goa, India'
  },
  {
    id: 'hyderabad',
    index: 4,
    sequence: '05',
    city: 'Hyderabad',
    headline: 'Heritage, food and a modern southern metropolis.',
    description:
      'Explore a city where historic character, celebrated cuisine and a growing modern metropolis meet.',
    tags: ['Heritage', 'Food', 'Modern India'],
    ctaLabel: 'Explore flight options',
    ctaTarget: '#india-flight-inquiry',
    preselectCity: 'Hyderabad (HYD)',
    backgroundImage: hyderabadBg,
    backgroundPosition: 'center 50%',
    thumbnailPosition: 'center 50%',
    imageAlt: 'Historic architectural landmark in southern India'
  }
];
