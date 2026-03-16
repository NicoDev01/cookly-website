import { motion } from 'motion/react';

const features = [
  {
    icon: "camera",
    title: "Rezepte fotografieren",
    description: "Fotografiere deine Lieblingsrezepte aus Büchern, handschriftlichen Rezeptkarten oder Magazine.",
  },
  {
    icon: "text",
    title: "Automatische Texterkennung",
    description: "Cookly erkennt den Text automatisch und wandelt ihn in ein strukturiertes Rezept um.",
  },
  {
    icon: "organize",
    title: "Perfekt organisiert",
    description: "Alle deine Rezepte werden automatisch kategorisiert und sind jederzeit schnell gefunden.",
  },
];

export function PhotoFeature() {
  return (
    <div className="w-full">
      <section id="photo-feature" style={{ backgroundColor: '#b2c8ba' }} className="pt-10 lg:pt-16 pb-12 lg:pb-20">
      <div className="site-container flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Text content on the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] text-center lg:text-left"
        >
          <h2 className="font-black tracking-tight text-slate-900 mb-6">
            Verwandle Fotos <br /> 
            in 
            <span className="text-white italic font-bold"> digitale Rezepte</span>
          </h2>

          <p className="text-slate-600 mb-8 max-w-xl" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)' }}>
            Egal ob aus Kochbüchern, handschriftlichen Rezeptkarten oder Magazine -
            mit Cookly werden alle deine analogen Rezepte digital erfasst.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  {feature.icon === "camera" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {feature.icon === "text" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {feature.icon === "organize" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  )}
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

        {/* Image on the right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%]"
        >
          <img
            src="/promo-foto.webp"
            alt="Rezepte fotografieren mit Cookly"
            className="w-full rounded-2xl"
            width="800"
            height="935"
          />
        </motion.div>
      </div>
      </section>

      {/* Wave bottom — white shape below green section */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 320" style={{ width: '100%', display: 'block', color: '#b2c8ba', transform: 'scaleX(-1)' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L60,144C120,128,240,96,360,96C480,96,600,128,720,149.3C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
