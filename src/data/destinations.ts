export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  type: 'Historical' | 'Natural' | 'Cultural' | 'Adventure';
}

export const destinations: Destination[] = [
  {
    id: 'issyk-kul',
    name: 'Issyk-Kul Lake',
    country: 'Kyrgyzstan',
    description: 'The world\'s second-largest alpine lake, surrounded by snow-capped mountains and pristine beaches.',
    imageUrl: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800',
    highlights: ['Crystal clear mountain lake', 'Hot springs', 'Petroglyphs at Cholpon-Ata', 'Traditional nomad culture'],
    bestTime: 'June - September',
    duration: '3-5 days',
    difficulty: 'Easy',
    type: 'Natural'
  },
  {
    id: 'registan-samarkand',
    name: 'Registan Square',
    country: 'Uzbekistan',
    description: 'The heart of ancient Samarkand, featuring three magnificent madrasas with stunning Islamic architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1583249598531-0fe46d53a376?w=800',
    highlights: ['UNESCO World Heritage Site', 'Islamic architecture masterpiece', 'Night illumination', 'Historical significance'],
    bestTime: 'April - May, September - October',
    duration: '2-3 days',
    difficulty: 'Easy',
    type: 'Historical'
  },
  {
    id: 'tian-shan',
    name: 'Tian Shan Mountains',
    country: 'Kyrgyzstan',
    description: 'Majestic mountain range offering spectacular trekking, alpine lakes, and nomadic culture experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800',
    highlights: ['Khan Tengri Peak', 'Alpine meadows', 'Nomad settlements', 'Wildlife watching'],
    bestTime: 'July - September',
    duration: '7-14 days',
    difficulty: 'Challenging',
    type: 'Adventure'
  },
  {
    id: 'bukhara',
    name: 'Historic Bukhara',
    country: 'Uzbekistan',
    description: 'A living museum of Central Asian Islamic culture with over 140 architectural monuments.',
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800',
    highlights: ['Ark Fortress', 'Poi Kalyan Complex', 'Trading domes', 'Traditional crafts'],
    bestTime: 'April - May, September - October',
    duration: '2-4 days',
    difficulty: 'Easy',
    type: 'Historical'
  },
  {
    id: 'ala-archa',
    name: 'Ala Archa National Park',
    country: 'Kyrgyzstan',
    description: 'Alpine national park just 40km from Bishkek, perfect for day hiking and mountaineering.',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800',
    highlights: ['Easy access from Bishkek', 'Glacial valleys', 'Mountain hiking trails', 'Wildlife spotting'],
    bestTime: 'May - October',
    duration: '1-2 days',
    difficulty: 'Moderate',
    type: 'Natural'
  },
  {
    id: 'song-kul',
    name: 'Song-Kul Lake',
    country: 'Kyrgyzstan',
    description: 'High-altitude alpine lake surrounded by vast pastures where nomads graze their herds in summer.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    highlights: ['Nomadic yurt stays', 'Horse riding', 'Pristine wilderness', 'Traditional dairy products'],
    bestTime: 'June - September',
    duration: '2-4 days',
    difficulty: 'Moderate',
    type: 'Cultural'
  }
];

export const tourPackages = [
  {
    id: 'silk-road-classic',
    name: 'Classic Silk Road Adventure',
    duration: '14 days',
    countries: ['Kyrgyzstan', 'Uzbekistan'],
    price: '€2,890',
    description: 'Complete journey through the heart of the Silk Road, combining natural wonders with historical treasures.',
    includes: ['All accommodations', 'Professional guide', 'All meals', 'Transportation', 'Entry fees'],
    highlights: ['Registan Square', 'Issyk-Kul Lake', 'Historic Bukhara', 'Tian Shan Mountains']
  },
  {
    id: 'nomadic-experience',
    name: 'Nomadic Culture Experience',
    duration: '10 days',
    countries: ['Kyrgyzstan'],
    price: '€1,950',
    description: 'Immerse yourself in traditional nomadic life with yurt stays and horseback adventures.',
    includes: ['Yurt accommodations', 'Cultural guide', 'Traditional meals', '4WD transport', 'Horse riding'],
    highlights: ['Song-Kul Lake', 'Yurt stays', 'Traditional crafts', 'Horseback riding']
  },
  {
    id: 'architectural-wonders',
    name: 'Architectural Wonders of Uzbekistan',
    duration: '8 days',
    countries: ['Uzbekistan'],
    price: '€1,680',
    description: 'Discover the magnificent Islamic architecture and rich history of ancient Uzbekistan.',
    includes: ['Hotel accommodations', 'Expert historian guide', 'All meals', 'Transportation', 'Museum entries'],
    highlights: ['Samarkand', 'Bukhara', 'Khiva', 'Tashkent']
  }
];