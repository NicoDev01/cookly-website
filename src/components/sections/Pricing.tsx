import { useState } from 'react';
import { motion } from 'motion/react';

const basicFeatures = [
  { text: "Bis zu 100 Rezepte manuell erstellen" },
  { text: "Bis zu 100 Rezept-Links importieren" },
  { text: "Bis zu 100 KI-Foto-Scans" },
  { text: "Unbegrenzt Sammlungen erstellen" },
  { text: "Unbegrenzt Wochenpläne erstellen" },
  { text: "Unbegrenzt Einkaufslisten erstellen" },
  { text: "Nutze auf iOS, Android und Web" },
  { text: "Automatische Cloud-Synchronisierung" },
  { text: "Werbefreie Erfahrung" },
];

const premiumFeatures = [
  { text: "Unbegrenzt Rezepte erstellen" },
  { text: "Unbegrenzt KI-Foto-Scans" },
  { text: "Unbegrenzt Link-Imports" },
  { text: "Jederzeit kündbar" },
];

const premiumAnnualFeatures = [
  { text: "Priorisierter Support" },
  { text: "Early Access auf neue Features" },
];

const CheckIcon = () => (
  <div className="bg-brand/20 p-1.5 rounded-full shrink-0 mt-0.5">
    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
    </svg>
  </div>
);

function BasicCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 py-8 px-6 md:px-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-slate-900">Basic</h3>
        <p className="text-base text-slate-600 mt-2">Für den Start – alles was du brauchst.</p>
        <p className="text-4xl font-bold mt-8 mb-4">KOSTENLOS</p>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold mb-4">Was ist enthalten?</h4>
        <ul className="flex flex-col gap-4 mb-8">
          {basicFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon />
              <p className="md:text-lg">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all border-2 border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-900 h-12 px-6 py-2 w-full">
          Kostenlos starten
        </a>
      </div>
    </div>
  );
}

function PremiumCard({ price, period, isAnnual }: { price: string; period: string; isAnnual: boolean }) {
  return (
    <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-brand via-brand/80 to-emerald-400 h-full">
      <div className="bg-white rounded-xl py-8 px-6 md:px-8 flex flex-col h-full shadow-xl">
        <div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight text-slate-900 flex gap-2 items-center">
            <span className="relative" style={{ width: 24, height: 24 }}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="url(#gradient)" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              </svg>
              <svg className="w-2 h-2 absolute right-0 top-0" fill="none" viewBox="0 0 24 24" stroke="url(#gradient)" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              </svg>
              <svg className="w-1.5 h-1.5 absolute left-px bottom-px" fill="none" viewBox="0 0 24 24" stroke="url(#gradient)" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              </svg>
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="50%" stopColor="#16a34a" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            Premium
          </h3>
          <p className="text-base text-slate-600 mt-2">Für alle, die mehr wollen.</p>
          <div className="flex items-center gap-4 mt-8 mb-4">
            <p className="text-5xl font-bold text-brand">
              {price}
              <span className="text-base text-slate-500 ml-2">{period}</span>
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-4">Was ist enthalten?</h4>
          <ul className="flex flex-col gap-4 mb-8">
            {premiumFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon />
                <p className="md:text-lg">{feature.text}</p>
              </li>
            ))}
            {isAnnual && premiumAnnualFeatures.map((feature, index) => (
              <li key={`annual-${index}`} className="flex items-start gap-3">
                <CheckIcon />
                <p className="md:text-lg">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all bg-brand text-white hover:bg-brand/90 h-12 px-6 py-2 w-full shadow-lg shadow-brand/25">
            Jetzt upgraden
          </a>
        </div>
      </div>
    </div>
  );
}

type Plan = 'free' | 'monthly' | 'annual';

export function Pricing() {
  const [plan, setPlan] = useState<Plan>('free');

  return (
    <section id="pricing" className="py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="site-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <h2 className="font-black tracking-tight text-slate-900 mb-4">
            Pläne & <span className="text-brand">Preise</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Keine Werbung. Kein Datenverkauf. 100% von Nutzern finanziert.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <div
            role="group"
            aria-label="Preisplan auswählen"
            className="flex items-center justify-center rounded-full bg-slate-100 p-1 text-slate-600 w-full max-w-xs"
          >
            <button
              type="button"
              onClick={() => setPlan('free')}
              aria-pressed={plan === 'free'}
              className={`flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium transition-all ${
                plan === 'free' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Free
            </button>
            <button
              type="button"
              onClick={() => setPlan('monthly')}
              aria-pressed={plan === 'monthly'}
              className={`flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium transition-all ${
                plan === 'monthly' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monatlich
            </button>
            <button
              type="button"
              onClick={() => setPlan('annual')}
              aria-pressed={plan === 'annual'}
              className={`flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium transition-all ${
                plan === 'annual' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jährlich
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Desktop: beide Cards nebeneinander */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <BasicCard />
            <PremiumCard price={plan === 'annual' ? '34,99€' : '3,99€'} period={plan === 'annual' ? '/Jahr' : '/Monat'} isAnnual={plan === 'annual'} />
          </div>

          {/* Mobile: eine Card je nach Toggle, zentriert */}
          <div className="md:hidden w-full max-w-md mx-auto">
            {plan === 'free' && <BasicCard />}
            {plan === 'monthly' && <PremiumCard price="3,99€" period="/Monat" isAnnual={false} />}
            {plan === 'annual' && <PremiumCard price="34,99€" period="/Jahr" isAnnual={true} />}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
