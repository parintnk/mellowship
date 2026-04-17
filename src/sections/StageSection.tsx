import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Star, Armchair, Sofa, ArrowRight } from 'lucide-react';

export default function StageSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const handleReserve = () => window.open('tel:053908888', '_self');

  const seating = [
    {
      icon: Star,
      key: 'stage.front',
      tag: language === 'en' ? 'Closest to the brass' : 'ใกล้เครื่องเป่าที่สุด',
      capacity: language === 'en' ? '4 tables · seats 2–4' : '4 โต๊ะ · 2–4 ที่นั่ง',
      featured: true,
    },
    {
      icon: Armchair,
      key: 'stage.bar',
      tag: language === 'en' ? 'Solo or duo' : 'เดี่ยวหรือคู่',
      capacity: language === 'en' ? '12 stools · first come' : '12 ที่นั่ง · มาก่อนได้ก่อน',
    },
    {
      icon: Sofa,
      key: 'stage.lounge',
      tag: language === 'en' ? 'Long, slow nights' : 'ค่ำคืนที่ยาวนาน',
      capacity: language === 'en' ? '6 lounges · seats 4–6' : '6 โซฟา · 4–6 ที่นั่ง',
    },
  ];

  return (
    <section ref={ref} id="stage" className="relative section-pad bg-[#0A0908] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/stage_drums.jpg" alt="" className="w-full h-full object-cover img-cinematic opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-[#0A0908]/80 to-[#0A0908]" />
      </div>

      <div className="relative container-deco">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7" data-reveal>
            <p className="eyebrow mb-5">{language === 'en' ? 'The Room' : 'ห้องของเรา'}</p>
            <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-[1.05] mb-6">
              <span className="block text-[#F4F1EC]">{language === 'en' ? 'Stage &' : 'เวที &'}</span>
              <span className="block italic gold-text">{language === 'en' ? 'Seating' : 'ที่นั่ง'}</span>
            </h2>
            <p className="font-display italic text-xl text-[#F4F1EC]/75 max-w-xl leading-relaxed">
              {t('stage.subtitle')}
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right" data-reveal data-delay="100">
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] uppercase mb-2">{language === 'en' ? 'Capacity' : 'ความจุ'}</p>
            <p className="font-serif italic text-5xl text-[#F4F1EC]">60</p>
            <p className="text-sm text-[#F4F1EC]/55 mt-1">{language === 'en' ? 'seats — intentionally intimate' : 'ที่นั่ง — ตั้งใจให้ใกล้ชิด'}</p>
          </div>
        </div>

        {/* Seating cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {seating.map((s, i) => (
            <div
              key={s.key}
              data-reveal
              data-delay={String(i * 100)}
              className={`relative deco-corners p-6 sm:p-8 transition-all duration-500 ${
                s.featured
                  ? 'bg-gradient-to-br from-[#1A1714] via-[#141210] to-[#0F0D0B] hover:shadow-[0_20px_60px_rgba(212,168,75,0.18)]'
                  : 'bg-[#141210]/80 hover:bg-[#1A1714]'
              }`}
            >
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />

              {s.featured && (
                <div className="absolute -top-3 left-8 bg-[#0A0908] px-3 py-1 border border-[#D4A84B]/40">
                  <span className="font-mono text-[9px] tracking-[0.4em] text-[#F0CF65] uppercase">{language === 'en' ? 'Featured' : 'แนะนำ'}</span>
                </div>
              )}

              <s.icon className={`w-7 h-7 mb-6 ${s.featured ? 'text-[#F0CF65]' : 'text-[#D4A84B]'}`} />
              <h3 className="font-serif italic text-2xl text-[#F4F1EC] mb-2">{t(s.key)}</h3>
              <p className="text-sm text-[#F4F1EC]/55 mb-4">{s.tag}</p>
              <div className="gold-divider mb-4" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#D4A84B] uppercase">{s.capacity}</p>
            </div>
          ))}
        </div>

        {/* Floor plan + CTA */}
        <div className="grid lg:grid-cols-12 gap-10 items-center" data-reveal>
          <div className="lg:col-span-7 relative deco-corners aspect-[16/9] overflow-hidden">
            <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
            <img src="/seating_area.jpg" alt="The Mellowship seating" className="w-full h-full object-cover img-warm" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-[10px] tracking-[0.4em] text-[#F0CF65] uppercase">{language === 'en' ? 'The lounge — 9:42 PM' : 'เลานจ์ — 21:42 น.'}</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-serif italic text-3xl md:text-4xl text-[#F4F1EC] mb-4">
              {language === 'en' ? 'Reserve before sundown' : 'จองก่อนพระอาทิตย์ตก'}
            </h3>
            <p className="text-[#F4F1EC]/65 leading-relaxed mb-8">
              {language === 'en'
                ? 'We hold a small list each night. A quick call is the easiest way to keep your spot.'
                : 'เราจองรายชื่อสั้นๆ ในแต่ละคืน โทรเข้ามาคือวิธีที่ง่ายที่สุดในการรักษาที่นั่ง'}
            </p>
            <button onClick={handleReserve} className="btn-gold">
              {t('stage.cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
