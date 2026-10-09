import { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function HomePage() {
  const [category, setCategory] = useState<string>('Tous');
  const [location, setLocation] = useState<string>('');

  const filteredProperties = properties.filter((p) => {
    const matchesCategory = category === 'Tous' || p.category === category;
    const matchesLocation = 
      p.city.toLowerCase().includes(location.toLowerCase()) ||
      p.commune.toLowerCase().includes(location.toLowerCase());
    return matchesCategory && matchesLocation;
  });

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
        
        <section className="mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h2 className="text-xl font-bold mb-4 text-slate-900">Rechercher votre bien</h2>
          
          <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                placeholder="Entrez une ville ou une commune..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-grow px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      category === cat
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-inner">
                <p className="text-xl font-semibold text-slate-900 mb-2">Aucun résultat trouvé</p>
                <p className="text-slate-500">
                  Malheureusement, nous n'avons trouvé aucun bien correspondant à votre recherche.
                  <br />
                  Veuillez essayer avec d'autres critères.
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
