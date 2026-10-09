import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{property.title}</h3>
        <p className="text-slate-600">{property.location}</p>
        <p className="text-xl font-bold text-slate-900">{property.price.toLocaleString('fr-FR')} €</p>
        <div className="flex gap-4 text-sm text-slate-500">
          <span>{property.bedrooms} ch.</span>
          <span>{property.bathrooms} sdb.</span>
        </div>
      </div>
    </div>
  );
}
