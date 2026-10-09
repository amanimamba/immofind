import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <h1 className="text-4xl font-bold mb-6">À propos d'ImmoFind</h1>
      <p className="text-lg text-slate-700 leading-relaxed">
        ImmoFind est votre plateforme de confiance pour simplifier la recherche de votre prochain chez-vous. 
        Nous connectons les particuliers et les professionnels avec une sélection rigoureuse de biens immobiliers.
      </p>
    </motion.div>
  );
}
