import { useState } from 'react';
import { Property } from '../data/properties';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to={`/property/${property.id}`} className="block border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-56 bg-slate-100 flex items-center justify-center overflow-hidden">
        {imgError ? (
          <div className="text-slate-400 text-sm font-medium">Image non disponible</div>
        ) : (
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
          {property.category}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900">{property.title}</h3>
        <p className="text-sm text-slate-500 font-medium">
          {property.location} · {property.commune}, {property.city}
        </p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
          <span><strong>{property.bedrooms}</strong> ch</span>
          <span><strong>{property.kitchens}</strong> cuis.</span>
          <span><strong>{property.bathrooms}</strong> tlt</span>
        </div>

        <p className="text-xl font-bold text-slate-900 mt-1">{property.price.toLocaleString('fr-FR')} €</p>
      </div>
    </Link>
  );
}
