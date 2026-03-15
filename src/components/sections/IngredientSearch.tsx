import { motion } from 'motion/react';

const ingredients = [
  "Kartoffeln",
  "Tomaten",
  "Zwiebeln",
  "Knoblauch",
  "Paprika",
  "Karotten",
  "Hähnchen",
  "Nudeln",
  "Reis",
  "Basilikum",
  "Käse",
  "Olivenöl",
  "Rindfleisch",
  "Lachs",
  "Eier",
  "Mehl",
  "Butter",
  "Sahne",
  "Milch",
  "Zitrone",
  "Ingwer",
  "Oregano",
  "Thymian",
  "Muskat",
];

const colorClasses = [
  "bg-amber-200/20",
  "bg-lime-200/20",
  "bg-red-200/20",
  "bg-purple-200/20",
  "bg-blue-200/20",
  "bg-teal-200/20",
];

export function IngredientSearch() {
  return (
    <section id="ingredient-search" className="py-12 lg:py-20 bg-white">
      <div className="site-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-black tracking-tight text-slate-900 mb-6">
            Suche nicht nur nach <span className="text-brand italic">Rezepten</span>,<br />
            sondern nach <span className="text-brand italic">Zutaten</span>
          </h2>
          <p className="font-medium max-w-3xl mx-auto leading-relaxed text-slate-600" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}>
            Du hast nur Tomaten und Nudeln zu Hause?
            Gib einfach die Zutaten ein, die du hast –
            und Cookly zeigt dir alle Rezepte, die du damit kochen kannst.
          </p>
        </motion.div>

        {/* Ingredient Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {ingredients.map((ingredient, index) => (
            <span key={index} className={index >= 6 ? 'hidden lg:contents' : 'contents'}>
              <motion.button
                initial={{ opacity: 0, translateY: 16 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.05, 0.5),
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileTap={{ scale: 0.95 }}
                className={`${colorClasses[index % 6]} px-3.5 py-2 rounded-full inline-flex items-center cursor-pointer select-none relative touch-manipulation transition-transform shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)]`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <span className="text-sm font-medium text-black">
                  {ingredient}
                </span>
              </motion.button>
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
