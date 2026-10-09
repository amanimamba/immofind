/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-200">
          <a href="/" className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
            ImmoFind
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="/" className="hover:text-slate-900 transition-colors">Maisons</a>
            <a href="/" className="hover:text-slate-900 transition-colors">Parcelles</a>
            <a href="/" className="hover:text-slate-900 transition-colors">Appartements</a>
          </nav>
          <button className="px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors">
            Publier
          </button>
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        
        <footer className="border-t border-slate-200 mt-12 py-8 text-center text-slate-500 text-sm">
          &copy; 2026 ImmoFind. Tous droits réservés.
        </footer>
      </div>
    </BrowserRouter>
  );
}
