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
        <section className="relative w-full h-[450px] mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/src/assets/images/hero_real_estate_1791544686016.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-tight">ImmoFind : Votre futur chez-vous</h1>
            <p className="text-white text-lg md:text-xl max-w-xl leading-relaxed">
              La plateforme simplifiée pour trouver facilement maisons, parcelles et appartements. Recherche intuitive et annonces vérifiées.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Explorer nos biens</h2>
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
