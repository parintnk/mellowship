import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { ArrowRight } from 'lucide-react';

export default function LineupSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const handleReserve = () => window.open('tel:053908888', '_self');

  const today = new Date();
  const dayName = today.toLocaleDateString(language === 'th' ? 'th-TH' : 'en-US', { weekday: 'long' });
  const dateStr = today.toLocaleDateString(language === 'th' ? 'th-TH' : 'en-US', { day: '2-digit', month: 'short' });

  return (
    <section ref={ref} id="lineup" className="relative section-pad bg-[#0A0908] overflow-hidden">
      {/* Faint background image */}
      <div className="absolute inset-0 opacity-[0.18]">
        <img src="/stage_spotlight.jpg" alt="" className="w-full h-full object-cover img-cinematic" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-transparent to-[#0A0908]" />
      </div>

      <div className="relative container-deco">
        <div className="text-center mb-16" data-reveal>
          <p className="eyebrow mx-auto justify-center mb-5">{t('lineup.label')}</p>
          <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-none gold-text">
            <span className="italic font-medium">Tonight on Stage</span>
          </h2>
          <div className="gold-divider w-40 mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Card */}
          <div className="lg:col-span-7 deco-corners relative bg-gradient-to-br from-[#141210] to-[#0F0D0B] p-10 md:p-16" data-reveal data-delay="100">
            <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <div className="font-mono text-[10px] tracking-[0.3em] text-[#D4A84B] uppercase">{dayName}</div>
                <div className="font-serif italic text-3xl text-[#F4F1EC] mt-1">{dateStr}</div>
              </div>
              <div className="h-12 w-px bg-[#D4A84B]/30" />
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-[#D4A84B] uppercase">Doors</div>
                <div className="font-serif italic text-3xl text-[#F4F1EC] mt-1">{t('lineup.time')}</div>
              </div>
            </div>

            <h3 className="font-serif text-[clamp(36px,5vw,68px)] leading-[1.05] mb-4">
              <span className="block text-[#F4F1EC]">{language === 'en' ? 'The Mellowship' : 'เดอะ เมลโลชิพ'}</span>
              <span className="block italic gold-text">{language === 'en' ? 'Quartet' : 'ควอเตท'}</span>
            </h3>

            <p className="text-[#F4F1EC]/65 leading-relaxed max-w-xl mb-8 font-light">
              {language === 'en'
                ? 'A four-piece set woven from standards, bossa, and late-night blues. Stay for the second set — that is where the room loosens up.'
                : 'การแสดง 4 ชิ้นที่ถักทอจากเพลงคลาสสิก บอสซา และบลูส์ดึก อยู่ต่อจนเซ็ตที่สอง — เพราะนั่นคือเวลาที่ห้องนี้กลายเป็นของจริง'}
            </p>

            {/* Set list */}
            <div className="grid grid-cols-3 gap-4 mb-10 pt-6 border-t border-[#D4A84B]/15">
              {[
                { label: language === 'en' ? 'Set I' : 'เซ็ต 1', time: '8:30 PM' },
                { label: language === 'en' ? 'Set II' : 'เซ็ต 2', time: '10:00 PM' },
                { label: language === 'en' ? 'Late' : 'รอบดึก', time: '11:30 PM' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-[#D4A84B] uppercase mb-1">{s.label}</div>
                  <div className="font-serif italic text-xl text-[#F4F1EC]">{s.time}</div>
                </div>
              ))}
            </div>

            <button onClick={handleReserve} className="btn-gold">
              {t('lineup.cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Photo with frame */}
          <div className="lg:col-span-5 relative" data-reveal data-delay="240">
            <div className="relative deco-corners">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src="/sax_player.jpg" alt="Saxophone player on stage" className="w-full h-full object-cover img-warm" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Caption pill */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#0A0908] border border-[#D4A84B]/40 whitespace-nowrap">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#D4A84B] uppercase">
                {language === 'en' ? 'Featuring · Live Brass' : 'ไฮไลต์ · เครื่องเป่าสด'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
