import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Phone, Calendar } from 'lucide-react';

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
      {/* Cinematic stage image */}
      <div className="absolute inset-0">
        <img
          src="/photo/Head.jpg"
          alt="The Mellowship lounge interior with live stage"
          width={1920}
          height={1920}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center img-warm"
        />
        {/* Layered atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/85 via-[#0A0908]/55 to-[#0A0908]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0908_85%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl pt-16">
        <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.38em] uppercase text-[#D4A84B] mb-7" data-reveal data-delay="100">
          The Mellowship · Chiang Mai
        </p>

        <h1
          className="font-serif font-medium text-[clamp(42px,7.4vw,104px)] leading-[1.02] tracking-tight mb-7"
          data-reveal data-delay="200"
        >
          <span className="block text-[#F4F1EC]">The Soul of Jazz</span>
          <span className="block gold-text italic">in the Heart of the City.</span>
        </h1>

        <p
          className="font-display italic text-[clamp(18px,2.1vw,25px)] text-[#F4F1EC]/78 max-w-2xl mx-auto mb-10 leading-relaxed"
          data-reveal data-delay="320"
        >
          {language === 'en'
            ? 'Experience the authentic vibe of a New York-style jazz lounge. Where world-class melodies meet an unforgettable atmosphere.'
            : 'สัมผัสบรรยากาศแจ๊สเลานจ์สไตล์นิวยอร์ก ที่ท่วงทำนองระดับโลกพบกับบรรยากาศอันน่าจดจำ'}
        </p>

        <div className="mx-auto flex w-full max-w-[320px] flex-col sm:w-auto sm:max-w-none sm:flex-row gap-3 sm:gap-4 justify-center items-center" data-reveal data-delay="430">
          <button onClick={handleBook} className="btn-gold w-full sm:w-auto">
            <Phone className="w-4 h-4" />
            {t('hero.cta.book')}
          </button>
          <button onClick={scrollToLineup} className="btn-ghost w-full sm:w-auto">
            <Calendar className="w-4 h-4" />
            {t('hero.cta.lineup')}
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      {/* <button
        onClick={scrollToLineup}
        aria-label="Scroll to lineup"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-[#D4A84B]/70 hover:text-[#F0CF65] transition-colors group"
        data-reveal data-delay="800"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.4s' }} />
      </button> */}
    </section>
  );
}
