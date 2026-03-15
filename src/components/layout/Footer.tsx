export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="site-container py-12 lg:py-16">

        {/* Top: Logo + Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <img src="/green-logo.png" alt="Cookly" className="h-8 w-auto self-start" />
            <p className="text-slate-500 text-sm leading-relaxed">
              Alle deine Rezepte. Ein Ort. Importiere, organisiere und teile deine Lieblingsrezepte
            </p>
            <a href="#" className="inline-block mt-2 hover:opacity-90 transition-opacity self-start">
              <img
                src="/GetItOnGooglePlay.png"
                alt="Jetzt bei Google Play"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Produkt</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#features" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">Importieren</a></li>
                <li><a href="#photo-feature" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">Digitalisieren</a></li>
                <li><a href="#ingredient-search" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">Suchen</a></li>
                <li><a href="#meal-planner" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">Wochenplan</a></li>
                <li><a href="#shopping-list" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">Einkaufsliste</a></li>
                <li><a href="#pricing" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">Preise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="mailto:support@cookly.app" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">support@cookly.app</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Cookly. Alle Rechte vorbehalten.</p>
        </div>

      </div>
    </footer>
  );
}
