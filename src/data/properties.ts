export interface Property {
  id: string;
  type: 'maison' | 'parcelle' | 'appartement';
  category: 'Centre-ville' | 'Zone urbaine' | 'Campagne' | 'Autre';
  title: string;
  location: string;
  city: string;
  commune: string;
  price: number;
  bedrooms: number;
  kitchens: number;
  bathrooms: number;
  image: string;
}

export const properties: Property[] = [
  {
    id: '1',
    type: 'maison',
    category: 'Zone urbaine',
    title: 'Villa moderne avec jardin',
    location: 'Quartier résidentiel',
    city: 'Paris',
    commune: '16ème',
    price: 850000,
    bedrooms: 4,
    kitchens: 1,
    bathrooms: 3,
    image: '/src/assets/images/house_modern_1791544697611.jpg',
  },
  {
    id: '2',
    type: 'parcelle',
    category: 'Campagne',
    title: 'Grand terrain constructible',
    location: 'Route principale',
    city: 'Versailles',
    commune: 'Saint-Cyr',
    price: 150000,
    bedrooms: 0,
    kitchens: 0,
    bathrooms: 0,
    image: '/src/assets/images/parcel_land_1791544707680.jpg',
  },
  {
    id: '3',
    type: 'appartement',
    category: 'Centre-ville',
    title: 'Appartement lumineux',
    location: 'Proche commodités',
    city: 'Lyon',
    commune: 'Presqu\'île',
    price: 450000,
    bedrooms: 2,
    kitchens: 1,
    bathrooms: 1,
    image: '/src/assets/images/apartment_city_1791544717527.jpg',
  },
];
