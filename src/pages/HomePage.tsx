import { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  const [query, setQuery] = useState('');

  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="mb-12">
            <img src="/src/assets/images/hero_real_estate_1791544686016.jpg" alt="Hero" className="w-full h-96 object-cover rounded-xl"/>
        </section>
        
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Trouvez votre bien idéal</h2>
          <SearchBar onSearch={setQuery} />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </section>
      </main>
    </>
  );
}
