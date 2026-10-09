import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Bien non trouvé</h2>
        <Link to="/" className="text-blue-600 hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-900 mb-4 inline-block">&larr; Retour</Link>
      <img src={property.image} alt={property.title} className="w-full h-96 object-cover rounded-xl mb-8" />
      <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
      <p className="text-slate-600 mb-6">{property.location}</p>
      <p className="text-3xl font-bold text-slate-900 mb-6">{property.price.toLocaleString('fr-FR')} €</p>
      <div className="flex gap-8 mb-8 border-t border-b border-slate-200 py-6">
        <div className="text-center">
            <p className="text-sm text-slate-500">Chambres</p>
            <p className="text-2xl font-semibold">{property.bedrooms}</p>
        </div>
        <div className="text-center">
            <p className="text-sm text-slate-500">Salles de bain</p>
            <p className="text-2xl font-semibold">{property.bathrooms}</p>
        </div>
        <div className="text-center">
            <p className="text-sm text-slate-500">Type</p>
            <p className="text-2xl font-semibold capitalize">{property.type}</p>
        </div>
      </div>
      <button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition">
        Contacter l'agence
      </button>
    </div>
  );
}
