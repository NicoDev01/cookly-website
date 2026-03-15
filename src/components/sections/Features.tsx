import { motion } from 'motion/react';

const steps = [
  {
    number: "1",
    title: "Öffne dein Rezept",
    description: "Egal ob auf Instagram, Facebook oder im Web.",
  },
  {
    number: "2",
    title: "Klicke auf das Teilen-Icon",
    description: "Nutze die Share-Funktion deiner App oder des Browsers.",
  },
  {
    number: "3",
    title: "Wähle die Cookly App aus",
    description: "Der Import passiert automatisch.",
  },
];

const benefit = "Cookly extrahiert, strukturiert und kategorisiert alles selbstständig.";

export function Features() {
  return (
    <div className="w-full">
      {/* Wave top — white shape sits on top of green section */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" style={{ width: '100%', display: 'block', color: '#b2c8ba', transform: 'scaleX(-1)' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80L60,64C120,48,240,16,360,16C480,16,600,48,720,69.3C840,91,960,101,1080,90.7C1200,80,1320,48,1380,32L1440,16L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="currentColor" />
        </svg>
      </div>

      <section id="features" style={{ backgroundColor: '#b2c8ba' }} className="pt-12 lg:pt-20 pb-10 lg:pb-16">
        <div className="site-container flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[50%]"
          >
            <img
              src="/promo-social.png"
              alt="So einfach importierst du deine Lieblingsrezepte"
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
              So einfach importierst du deine<br />
              <span className="text-white italic font-bold">Lieblingsrezepte</span>
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-900 font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-800" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)' }}>
                      {step.title}
                    </p>
                    <p className="text-slate-600" style={{ fontSize: 'clamp(1rem, 1.4vw, 1rem)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
