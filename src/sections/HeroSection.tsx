import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Phone, Calendar, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>({ threshold: 0.05 });

  const handleBook = () => window.open('tel:053908888', '_self');
  const scrollToLineup = () => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero_doorway.jpg"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover img-warm"
        />
        {/* Layered atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/85 via-[#0A0908]/55 to-[#0A0908]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0908_85%)]" />
      </div>

      {/* Top corner mark */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20" data-reveal data-delay="0">
        <div className="gold-divider-ornament">
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase">Chiang Mai · Est. 1925</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <p className="eyebrow mb-8 mx-auto justify-center" data-reveal data-delay="100">
          {language === 'en' ? 'A Jazz Lounge & Listening Room' : 'แจ๊สเลานจ์ และห้องฟังเพลง'}
        </p>

        <h1
          className="font-serif font-medium text-[clamp(48px,10vw,160px)] leading-[0.95] tracking-tight mb-6"
          data-reveal data-delay="200"
        >
          <span className="block gold-shimmer italic">The</span>
          <span className="block text-[#F4F1EC]">Mellowship</span>
        </h1>

        <p
          className="font-display italic text-[clamp(18px,2.4vw,28px)] text-[#F4F1EC]/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          data-reveal data-delay="320"
        >
          {language === 'en'
            ? '“Where the night turns slow, the brass turns warm, and every set tells its own story.”'
            : '“ค่ำคืนช้าลง เสียงเครื่องเป่าอุ่นขึ้น และทุกเซ็ตล้วนมีเรื่องราวของตัวเอง”'}
        </p>

        <div className="gold-divider mx-auto w-32 mb-10" data-reveal data-delay="420" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-reveal data-delay="500">
          <button onClick={handleBook} className="btn-gold">
            <Phone className="w-4 h-4" />
            {t('hero.cta.book')}
          </button>
          <button onClick={scrollToLineup} className="btn-ghost">
            <Calendar className="w-4 h-4" />
            {t('hero.cta.lineup')}
          </button>
        </div>

        {/* Subtitle line */}
        <div className="mt-16 flex items-center justify-center gap-6 text-[#F4F1EC]/60" data-reveal data-delay="620">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Live Jazz</span>
          <span className="w-1 h-1 rounded-full bg-[#D4A84B]" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Crafted Cocktails</span>
          <span className="w-1 h-1 rounded-full bg-[#D4A84B]" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase hidden sm:inline">Late Nights</span>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToLineup}
        aria-label="Scroll to lineup"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#D4A84B]/70 hover:text-[#F0CF65] transition-colors group"
        data-reveal data-delay="800"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.4s' }} />
      </button>
    </section>
  );
}
