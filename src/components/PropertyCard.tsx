import { Property } from '../data/properties';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/property/${property.id}`} className="block border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
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
