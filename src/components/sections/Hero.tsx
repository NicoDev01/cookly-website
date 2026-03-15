import { motion } from 'motion/react';
import { TextLoop } from '../ui/text-loop';

export function Hero() {
  return (
    <section className="relative pt-28 lg:pt-40 pb-12 lg:pb-20 bg-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] -z-10"></div>

      <div className="site-container flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] text-center lg:text-left"
        >
          <h1
            className="font-black tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Alle deine <br />
            Rezepte.<br />
            <span className="text-brand italic pr-4">Ein Ort.</span>
          </h1>
          <p
            className="font-medium mb-8 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
          >
            Importiere all deine lieblingsrezepte. <br />
            <TextLoop className="text-brand font-bold">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>TikTok</span>
              <span>Rezept-Websites</span>
              <span>Fotos von Rezepten</span>
              <span>Kochbücher</span>
            </TextLoop>
            <br />
            Teile es einfach, mit Cookly. <br />
            Kostenlos!
          </p>

          <div className="flex items-center justify-center lg:justify-start">
            <a href="#" className="hover:scale-105 transition-transform inline-block">
              <img
                src="/GetItOnGooglePlay.png"
                alt="Get it on Google Play"
                style={{ height: 'clamp(3rem, 4vw, 4rem)' }}
                className="w-auto"
              />
            </a>
          </div>
        </motion.div>

        {/* Promo Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] relative z-10 flex justify-center"
        >
          <img src="/Cookly-promo1.png" alt="Cookly App" className="w-full rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

