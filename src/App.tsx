import { LanguageProvider } from './context/LanguageContext';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import LineupSection from './sections/LineupSection';
import ExperienceSection from './sections/ExperienceSection';
import PosterSection from './sections/PosterSection';
import MenuSection from './sections/MenuSection';
import StageSection from './sections/StageSection';
import EventSection from './sections/EventSection';
import NewsletterSection from './sections/NewsletterSection';
import ContactSection from './sections/ContactSection';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="relative bg-[#0A0908] min-h-screen text-[#F4F1EC]">
        <div className="grain-overlay" />
        <Navigation />
        <main className="relative">
          <HeroSection />
          <LineupSection />
          <ExperienceSection />
          <PosterSection />
          <MenuSection />
          <StageSection />
          <EventSection />
          <NewsletterSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
