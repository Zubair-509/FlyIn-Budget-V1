import lahoreImage from '../../../assets/images/pakistan/lahore-minar-e-pakistan.png';
import karachiImage from '../../../assets/images/pakistan/karachi-mazar-e-quaid.png';
import multanImage from '../../../assets/images/pakistan/multan-shrine.png';
import peshawarImage from '../../../assets/images/pakistan/peshawar-heritage.png';

export const pakistanFlights = [
  {
    id: 'lahore',
    city: 'Lahore',
    country: 'Pakistan',
    title: 'Flights to Lahore',
    price: 460,
    badge: 'Popular Route',
    image: lahoreImage,
    description:
      'Experience historic architecture, vibrant food streets, and the cultural heart of Punjab.',
    mapPosition: {
      x: 72,
      y: 39
    }
  },
  {
    id: 'karachi',
    city: 'Karachi',
    country: 'Pakistan',
    title: 'Flights to Karachi',
    price: 304,
    image: karachiImage,
    description:
      'Discover Pakistan’s energetic coastal metropolis and vibrant cultural scene.',
    mapPosition: {
      x: 32,
      y: 82
    }
  },
  {
    id: 'multan',
    city: 'Multan',
    country: 'Pakistan',
    title: 'Flights to Multan',
    price: 682,
    image: multanImage,
    description:
      'Explore the historic City of Saints and its celebrated architecture.',
    mapPosition: {
      x: 55,
      y: 52
    }
  },
  {
    id: 'peshawar',
    city: 'Peshawar',
    country: 'Pakistan',
    title: 'Flights to Peshawar',
    price: 469,
    image: peshawarImage,
    description:
      'Experience traditional bazaars, historic streets and rich regional heritage.',
    mapPosition: {
      x: 64,
      y: 24
    }
  }
];
