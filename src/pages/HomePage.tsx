import { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function HomePage() {
  const [category, setCategory] = useState<string>('Tous');

  const filteredProperties = category === 'Tous' 
    ? properties 
    : properties.filter((p) => p.category === category);

  const categories = ['Tous', 'Centre-ville', 'Zone urbaine', 'Campagne', 'Autre'];

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="relative w-full h-[400px] mb-12 rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="/assets/images/hero_real_estate_1791544686016.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">ImmoFind</h1>
            <p className="text-white text-lg md:text-xl max-w-lg">
              Votre partenaire de confiance pour trouver le bien idéal, partout où vous souhaitez vous installer.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Filtrer par catégorie</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  category === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </section>
      </main>
    </>
  );
}
