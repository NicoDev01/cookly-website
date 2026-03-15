import { motion } from 'motion/react';

const features = [
  {
    title: "Zutaten mit einem Klick",
    description: "Füge Zutaten aus Rezepten ganz einfach der Einkaufsliste hinzu – per Klick auf die Zutat.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Automatisch strukturiert",
    description: "Die Einkaufsliste wird automatisch nach Kategorien sortiert – so sparst du Zeit im Supermarkt.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Im Handumdrehen erledigt",
    description: "Plane deinen Einkauf im Voraus und habe immer eine fertige Liste dabei – egal ob online oder offline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export function ShoppingList() {
  return (
    <section id="shopping-list" style={{ backgroundColor: '#ffffff' }} className="py-12 lg:py-20">
      <div className="site-container flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">

        {/* Image on the right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%]"
        >
          <img
            src="/promo-einkaufsliste.png"
            alt="Einkaufsliste mit Cookly"
            className="w-full rounded-2xl"
          />
        </motion.div>

        {/* Text content on the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] text-center lg:text-left"
        >
          <h2 className="font-black tracking-tight text-slate-900 mb-6">
            Deine <span className="text-brand italic font-bold">Einkaufsliste</span><br />
            ganz einfach
          </h2>

          <p className="text-slate-600 mb-8 max-w-xl" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)' }}>
            Füge Zutaten ganz einfach der Einkaufsliste hinzu – durch Klick auf Zutaten im Rezept werden sie im Handumdrehen hinzugefügt.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/10 shadow-md flex items-center justify-center text-brand">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)' }}>
                    {feature.title}
                  </p>
                  <p className="text-slate-600" style={{ fontSize: 'clamp(1rem, 1.4vw, 1rem)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}