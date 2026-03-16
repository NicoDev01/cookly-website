import { motion } from 'motion/react';

export function DownloadCTA() {
  return (
    <section id="download" className="py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="site-container">
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-black tracking-tight text-slate-900 mb-8">
            Hol dir Cookly<br />
            <span className="text-brand italic">kostenlos</span>
          </h2>
          
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
            Starte jetzt und entdecke, wie einfach ein Kochbuch sein kann. 
          </p>

          {/* Google Play Badge */}
          <div className="flex justify-center">
            <a href="#">
              <img
                src="/GetItOnGooglePlay.png"
                alt="Jetzt bei Google Play"
                style={{ height: 'clamp(3rem, 4vw, 4rem)' }}
                className="w-auto hover:opacity-90 transition-opacity"
                width="478"
                height="142"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}