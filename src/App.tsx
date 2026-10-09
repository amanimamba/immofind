/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { properties } from './data/properties';
import PropertyCard from './components/PropertyCard';
import SearchBar from './components/SearchBar';

export default function App() {
  const [query, setQuery] = useState('');

  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-200">
        <a href="/" className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          ImmoFind
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">Maisons</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Parcelles</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Appartements</a>
        </nav>
        <button className="px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors">
          Publier
        </button>
      </header>
      
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
      
      <footer className="border-t border-slate-200 mt-12 py-8 text-center text-slate-500 text-sm">
        &copy; 2026 ImmoFind. Tous droits réservés.
      </footer>
    </div>
  );
}
