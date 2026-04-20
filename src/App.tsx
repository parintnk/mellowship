import { LanguageProvider } from './context/LanguageContext';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import LineupSection from './sections/LineupSection';
import ExperienceSection from './sections/ExperienceSection';
import MenuSection from './sections/MenuSection';
import StageSection from './sections/StageSection';
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
          <ExperienceSection />
          <LineupSection />
          <MenuSection />
          <StageSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
