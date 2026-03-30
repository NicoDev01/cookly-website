# FAQ Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** FAQ-Sektion als neue Seitenkomponente hinzufügen, zwischen Pricing und DownloadCTA, mit FAQ-Schema in index.html sowie theme-color und WebApplication Schema.

**Architecture:** Neue `FAQ.tsx` Komponente im Sections-Ordner, die das bestehende Design-System (site-container, Framer Motion whileInView, brand-Farben, rounded-2xl) konsequent wiederverwendet. Akkordeon via React-State. FAQ-Schema als JSON-LD in index.html.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion (motion/react)

---

### Task 1: theme-color + WebApplication in index.html

**Files:**
- Modify: `index.html`

**Step 1: theme-color Meta-Tag hinzufügen**

In `index.html` nach `<meta name="viewport" ...>` einfügen:

```html
<meta name="theme-color" content="#b2c8ba" />
```

**Step 2: WebApplication zum Schema.org @graph hinzufügen**

Im bestehenden `@graph`-Array nach dem `WebSite`-Eintrag ergänzen:

```json
{
  "@type": "WebApplication",
  "name": "Cookly",
  "url": "https://cookly.app",
  "description": "Rezept-Management-App zum Importieren, Organisieren und Verwalten von Rezepten.",
  "applicationCategory": "FoodApplication",
  "operatingSystem": "Android, iOS, Web",
  "inLanguage": "de"
}
```

**Step 3: FAQPage Schema hinzufügen**

Neues `<script type="application/ld+json">` direkt nach dem bestehenden Schema-Script:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist Cookly wirklich kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, der Basic-Plan ist dauerhaft kostenlos. Du kannst bis zu 100 Rezepte erstellen, 100 Links importieren und 100 KI-Foto-Scans nutzen – ohne Kreditkarte."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Quellen kann ich importieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du kannst Rezepte von Instagram, Facebook, TikTok, beliebigen Rezept-Websites, aus Fotos von Kochbüchern und handschriftlichen Rezeptkarten importieren."
      }
    },
    {
      "@type": "Question",
      "name": "Funktioniert Cookly ohne Internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, gespeicherte Rezepte sind auch offline verfügbar. Neue Importe und KI-Scans benötigen eine Internetverbindung."
      }
    },
    {
      "@type": "Question",
      "name": "Auf welchen Geräten läuft Cookly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cookly ist für Android verfügbar und kann über Google Play kostenlos heruntergeladen werden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie kündige ich Premium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premium kann jederzeit über den Google Play Store gekündigt werden. Es gibt keine Mindestlaufzeit."
      }
    },
    {
      "@type": "Question",
      "name": "Wie funktioniert der KI-Foto-Scan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mache ein Foto deines Rezepts – aus einem Kochbuch, einer Zeitschrift oder einer handgeschriebenen Karte. Cookly erkennt den Text automatisch und wandelt ihn in ein strukturiertes digitales Rezept um."
      }
    }
  ]
}
</script>
```

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add theme-color, WebApplication schema and FAQPage schema"
```

---

### Task 2: FAQ.tsx Komponente erstellen

**Files:**
- Create: `src/components/sections/FAQ.tsx`

**Step 1: Komponente erstellen**

```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto flex flex-col gap-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 md:text-lg">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)' }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/sections/FAQ.tsx
git commit -m "feat: add FAQ section component"
```

---

### Task 3: FAQ in App.tsx einbinden

**Files:**
- Modify: `src/App.tsx`

**Step 1: Import hinzufügen**

Nach dem `Pricing`-Import:
```tsx
import { FAQ } from './components/sections/FAQ';
```

**Step 2: Komponente einbinden**

Im JSX zwischen `<Pricing />` und `<DownloadCTA />`:
```tsx
<Pricing />
<FAQ />
<DownloadCTA />
```

**Step 3: Navbar-Link ergänzen**

In `src/components/layout/Navbar.tsx` den `navLinks`-Array ergänzen (nach `pricing`):
```tsx
{ href: '#faq', label: 'FAQ' },
```

**Step 4: Footer-Link ergänzen**

In `src/components/layout/Footer.tsx` die Produkt-Linkliste ergänzen:
```tsx
<li><a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">FAQ</a></li>
```

**Step 5: Commit**

```bash
git add src/App.tsx src/components/layout/Navbar.tsx src/components/layout/Footer.tsx
git commit -m "feat: integrate FAQ section into page, navbar and footer"
```
