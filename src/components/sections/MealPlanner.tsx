import { motion } from 'motion/react';

const features = [
  {
    title: "Wochenplan in Sekunden",
    description: "Verwandle gespeicherte Rezepte in einen praktischen Wochenplan – automatisch und mühelos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Favoriten separat",
    description: "Markiere deine Lieblingsrezepte und finde sie jederzeit in einer dedizierten Sektion.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Teilen leicht gemacht",
    description: "Teile deinen Essensplan mit der Familie – jeder sieht sofort, was auf den Tisch kommt.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
];

export function MealPlanner() {
  return (
    <section id="meal-planner" style={{ backgroundColor: '#ffffff' }} className="py-12 lg:py-20">
      <div className="site-container flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Image on the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%]"
        >
          <img
            src="/promo-fav-week.png"
            alt="Wochenplan und Favoriten mit Cookly"
            className="w-full rounded-2xl"
          />
        </motion.div>

        {/* Text content on the right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] text-center lg:text-left"
        >
          <h2 className="font-black tracking-tight text-slate-900 mb-6">
            Woche planen, <span className="text-brand italic font-bold">Favoriten festlegen</span>
          </h2>

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