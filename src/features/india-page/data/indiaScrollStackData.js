import delhiImg from '../../../assets/images/india/delhi.png';
import mumbaiImg from '../../../assets/images/india/mumbai.png';
import ahmedabadImg from '../../../assets/images/india/ahmedabad.png';
import goaImg from '../../../assets/images/india/goa.png';

export const indiaScrollStackData = [
  {
    id: 'delhi',
    number: '01',
    city: 'Delhi',
    code: 'DEL',
    positioning: 'Capital Gateway & Northern India',
    description: 'A major arrival point for journeys to Delhi and destinations across northern India.',
    startingFare: '£418*',
    image: delhiImg,
    imagePosition: 'center 40%'
  },
  {
    id: 'mumbai',
    number: '02',
    city: 'Mumbai',
    code: 'BOM',
    positioning: 'Coastal Metropolis & Commercial Hub',
    description: 'A key international gateway for Mumbai and onward journeys across western India.',
    startingFare: '£463*',
    image: mumbaiImg,
    imagePosition: 'center 35%'
  },
  {
    id: 'ahmedabad',
    number: '03',
    city: 'Ahmedabad',
    code: 'AMD',
    positioning: 'Gujarat Gateway & Commercial Centre',
    description: 'A convenient arrival point for Ahmedabad and journeys throughout Gujarat.',
    startingFare: '£500*',
    image: ahmedabadImg,
    imagePosition: 'center 45%'
  },
  {
    id: 'goa',
    number: '04',
    city: 'Goa',
    code: 'GOI',
    positioning: 'Coastal Leisure Gateway',
    description: 'Explore flight options for Goa and India’s distinctive western coastline.',
    startingFare: '£546*',
    image: goaImg,
    imagePosition: 'center 50%'
  }
];
