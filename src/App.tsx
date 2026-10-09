/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';
import AboutPage from './pages/AboutPage';

export default function App() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Recherche', path: '/' }, // Redirects to home for now
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900">
              ImmoFind
            </Link>
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        
        <footer className="border-t border-slate-200 mt-12 py-8 text-center text-slate-500 text-sm">
          &copy; 2026 ImmoFind. Tous droits réservés.
        </footer>
      </div>
    </BrowserRouter>
  );
}
