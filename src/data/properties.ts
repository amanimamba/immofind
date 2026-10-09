export interface Property {
  id: string;
  type: 'maison' | 'parcelle' | 'appartement';
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

export const properties: Property[] = [
  {
    id: '1',
    type: 'maison',
    title: 'Villa moderne avec jardin',
    location: 'Quartier résidentiel, Paris',
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    image: '/src/assets/images/house_modern_1791544697611.jpg',
  },
  {
    id: '2',
    type: 'parcelle',
    title: 'Terrain constructible viabilisé',
    location: 'Banlieue calme',
    price: 150000,
    bedrooms: 0,
    bathrooms: 0,
    image: '/src/assets/images/parcel_land_1791544707680.jpg',
  },
  {
    id: '3',
    type: 'appartement',
    title: 'Appartement lumineux centre-ville',
    location: 'Centre-ville, Lyon',
    price: 450000,
    bedrooms: 2,
    bathrooms: 1,
    image: '/src/assets/images/apartment_city_1791544717527.jpg',
  },
];
