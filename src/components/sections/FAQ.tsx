import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

const faqs = [
  {
    question: "Ist Cookly wirklich kostenlos?",
    answer: "Ja, der Basic-Plan ist dauerhaft kostenlos. Du kannst bis zu 100 Rezepte erstellen, 100 Links importieren und 100 KI-Foto-Scans nutzen – ohne Kreditkarte.",
  },
  {
    question: "Welche Quellen kann ich importieren?",
    answer: "Du kannst Rezepte von Instagram, Facebook, TikTok, beliebigen Rezept-Websites, aus Fotos von Kochbüchern und handschriftlichen Rezeptkarten importieren.",
  },
  {
    question: "Funktioniert Cookly ohne Internet?",
    answer: "Ja, gespeicherte Rezepte sind auch offline verfügbar. Neue Importe und KI-Scans benötigen eine Internetverbindung.",
  },
  {
    question: "Auf welchen Geräten läuft Cookly?",
    answer: "Cookly ist für Android verfügbar und kann über Google Play kostenlos heruntergeladen werden.",
  },
  {
    question: "Wie kündige ich Premium?",
    answer: "Premium kann jederzeit über den Google Play Store gekündigt werden. Es gibt keine Mindestlaufzeit.",
  },
  {
    question: "Wie funktioniert der KI-Foto-Scan?",
    answer: "Mache ein Foto deines Rezepts – aus einem Kochbuch, einer Zeitschrift oder einer handgeschriebenen Karte. Cookly erkennt den Text automatisch und wandelt ihn in ein strukturiertes digitales Rezept um.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 lg:py-20 bg-white">
      <div className="site-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
<h2 className="font-black tracking-tight text-slate-900 mb-4">
            Häufige <span className="text-brand italic">Fragen</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
            Du hast eine Frage? Wir haben die Antwort. Falls du nicht findest was du suchst, schreib uns einfach.
          </p>
        </motion.div>

        {/* Accordion */}
        <ul className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="overflow-hidden border-slate-200/80 bg-white transition-all hover:border-brand/50 hover:shadow-md">
                  <button
                    type="button"
                    id={`faq-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(prev => prev === index ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="pr-4 font-semibold text-slate-900 md:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-btn-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-5 py-4">
                          <p className="text-slate-600 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.li>
            );
          })}
        </ul>


      </div>
    </section>
  );
}
