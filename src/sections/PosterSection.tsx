import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { ArrowRight } from 'lucide-react';

export default function PosterSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const handleBook = () => window.open('tel:053908888', '_self');

  return (
    <section ref={ref} id="poster" className="relative section-pad bg-[#0A0908] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/poster_wall.jpg" alt="" className="w-full h-full object-cover img-cinematic opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-[#0A0908]/85 to-[#0A0908]" />
      </div>

      <div className="relative container-deco">
        <div className="max-w-3xl mx-auto" data-reveal>
          {/* Vintage poster card */}
          <div className="relative deco-corners bg-[#141210] p-10 md:p-16 text-center">
            <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />

            {/* Inner double border */}
            <div className="absolute inset-3 border border-[#D4A84B]/20 pointer-events-none" />
            <div className="absolute inset-6 border border-[#D4A84B]/10 pointer-events-none" />

            <div className="relative">
              <p className="font-mono text-[10px] tracking-[0.5em] text-[#D4A84B] uppercase mb-6">
                {language === 'en' ? 'A Special Engagement' : 'การแสดงพิเศษ'}
              </p>

              {/* Decorative ornament */}
              <div className="gold-divider-ornament mb-8">
                <span className="font-serif italic text-2xl text-[#D4A84B]">~</span>
              </div>

              <p className="font-display italic text-2xl text-[#F4F1EC]/70 mb-2">{language === 'en' ? 'Presenting' : 'นำเสนอ'}</p>

              <h2 className="font-serif text-[clamp(48px,9vw,120px)] leading-[0.9] mb-4">
                <span className="block gold-shimmer italic">{t('poster.title')}</span>
              </h2>

              <p className="font-display italic text-3xl md:text-4xl text-[#F4F1EC] mb-2">{t('poster.time')}</p>

              <div className="gold-divider w-24 mx-auto my-6" />

              <p className="font-mono text-xs tracking-[0.35em] text-[#F4F1EC]/70 uppercase mb-10">{t('poster.venue')}</p>

              <button onClick={handleBook} className="btn-gold">
                {t('poster.cta')}
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Footer ornament */}
              <div className="mt-10 flex items-center justify-center gap-4 text-[#D4A84B]/60">
                <span className="text-xs">◆</span>
                <span className="font-mono text-[9px] tracking-[0.5em] uppercase">Chiang Mai</span>
                <span className="text-xs">◆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
