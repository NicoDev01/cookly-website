import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { PhotoFeature } from './components/sections/PhotoFeature';
import { IngredientSearch } from './components/sections/IngredientSearch';
import { MealPlanner } from './components/sections/MealPlanner';
import { ShoppingList } from './components/sections/ShoppingList';
import { Pricing } from './components/sections/Pricing';
import { DownloadCTA } from './components/sections/DownloadCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand/30">
      <Navbar />
      <Hero />
      <Features />
      <PhotoFeature />
      <IngredientSearch />
      <MealPlanner />
      <ShoppingList />
      <Pricing />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
