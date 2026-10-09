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

export const properties: Property[] = Array.from({ length: 12 }, (_, i) => ({
  id: `${i + 1}`,
  type: i % 3 === 0 ? 'maison' : i % 3 === 1 ? 'parcelle' : 'appartement',
  category: i % 4 === 0 ? 'Centre-ville' : i % 4 === 1 ? 'Zone urbaine' : i % 4 === 2 ? 'Campagne' : 'Autre',
  title: `Propriété ${i + 1}`,
  location: 'Localisation test',
  city: 'Ville test',
  commune: 'Commune test',
  price: 100000 + i * 50000,
  bedrooms: i % 3 + 1,
  kitchens: 1,
  bathrooms: i % 2 + 1,
  image: i % 3 === 0 ? '/assets/images/house_modern_1791544697611.jpg' : i % 3 === 1 ? '/assets/images/parcel_land_1791544707680.jpg' : '/assets/images/apartment_city_1791544717527.jpg',
}));
