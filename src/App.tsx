import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import AppLoader from './components/AppLoader';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import LineupSection from './sections/LineupSection';
import ExperienceSection from './sections/ExperienceSection';
import MenuSection from './sections/MenuSection';
import StageSection from './sections/StageSection';
import ContactSection from './sections/ContactSection';
import './App.css';

const HERO_IMAGE_SRC = '/photo/New2/612506391_1354558433377785_4564113088896336069_n.jpg';

function waitForWindowLoad() {
  if (document.readyState === 'complete') {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true });
  });
}

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve();
    image.onerror = () => resolve();

    if ('decode' in image) {
      image.decode().then(() => resolve()).catch(() => resolve());
    }
  });
}

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const minimumLoadingTime = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 900);
    });
    const maximumLoadingTime = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 3800);
    });
    const criticalAssets = Promise.all([
      waitForWindowLoad(),
      preloadImage(HERO_IMAGE_SRC),
    ]).then(() => undefined);

    Promise.all([
      minimumLoadingTime,
      Promise.race([criticalAssets, maximumLoadingTime]),
    ]).then(() => {
      if (!cancelled) {
        setIsReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative bg-[#14100E] min-h-screen text-[#F7EFE2]">
        <AppLoader isReady={isReady} />
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
