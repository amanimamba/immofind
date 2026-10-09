import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900 mb-6">Expertise et Confiance en Immobilier</h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Chez ImmoFind, nous redéfinissons la recherche immobilière grâce à une approche technologique centrée sur l'humain. Notre mission est de vous accompagner vers votre projet de vie.
        </p>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <img 
            src="/assets/images/about_team_working_1791546909799.jpg" 
            alt="Équipe ImmoFind" 
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />
      </motion.section>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Transparence', desc: 'Des annonces vérifiées et des informations claires sur chaque bien.' },
          { title: 'Proximité', desc: 'Une couverture étendue sur tout le territoire pour vous servir.' },
          { title: 'Simplicité', desc: 'Une plateforme conçue pour faciliter vos démarches immobilières.' }
        ].map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
          >
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
