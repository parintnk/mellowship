import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Ticket } from 'lucide-react';

export default function EventSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const handleGetTickets = () => window.open('tel:053908888', '_self');

  return (
    <section ref={ref} id="event" className="relative section-pad bg-[#0A0908] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/stage_lights.jpg" alt="" className="w-full h-full object-cover img-cinematic opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-[#0A0908]/80 to-[#0A0908]" />
      </div>

      <div className="relative container-deco">
        {/* Ticket-stub card */}
        <div className="max-w-5xl mx-auto" data-reveal>
          <div className="relative grid grid-cols-1 md:grid-cols-[1.6fr_1fr] bg-[#141210] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            {/* Inner border */}
            <div className="absolute inset-3 border border-[#D4A84B]/20 pointer-events-none" />

            {/* Perforation between stubs */}
            <div className="hidden md:block absolute left-[62.5%] top-6 bottom-6 w-px border-l border-dashed border-[#D4A84B]/40" />
            <div className="md:hidden absolute top-[60%] left-6 right-6 h-px border-t border-dashed border-[#D4A84B]/40" />

            {/* Punch holes */}
            <span className="hidden md:block absolute left-[62.5%] -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-[#0A0908]" />
            <span className="hidden md:block absolute left-[62.5%] -translate-x-1/2 -bottom-3 w-6 h-6 rounded-full bg-[#0A0908]" />

            {/* Main stub */}
            <div className="relative p-6 sm:p-10 md:p-16">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#F0CF65] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-[#F0CF65] uppercase">{t('event.label')}</span>
              </div>

              <h2 className="font-serif text-[clamp(40px,8vw,110px)] leading-[0.92] mb-6">
                <span className="block italic gold-shimmer">{t('event.title')}</span>
                <span className="block text-[#F4F1EC] text-[0.4em] sm:text-[0.5em] font-normal italic font-display mt-2 leading-snug">
                  {language === 'en' ? 'an evening with the quartet' : 'ค่ำคืนกับควอเตท'}
                </span>
              </h2>

              <div className="gold-divider w-24 sm:w-32 mb-6" />

              <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] sm:tracking-[0.4em] text-[#D4A84B] uppercase mb-1">{language === 'en' ? 'Date' : 'วันที่'}</div>
                  <div className="font-serif italic text-lg sm:text-xl text-[#F4F1EC]">Sat 26</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] sm:tracking-[0.4em] text-[#D4A84B] uppercase mb-1">{language === 'en' ? 'Doors' : 'เปิด'}</div>
                  <div className="font-serif italic text-lg sm:text-xl text-[#F4F1EC]">{t('event.time')}</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] sm:tracking-[0.4em] text-[#D4A84B] uppercase mb-1">{language === 'en' ? 'Venue' : 'สถานที่'}</div>
                  <div className="font-serif italic text-lg sm:text-xl text-[#F4F1EC]">CNX</div>
                </div>
              </div>
            </div>

            {/* Detached stub */}
            <div className="relative p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center bg-[#0F0D0B] md:bg-transparent">
              <p className="font-mono text-[9px] tracking-[0.4em] text-[#D4A84B] uppercase mb-3">{language === 'en' ? 'Admit One' : 'ตั๋ว'}</p>
              <div className="font-serif italic text-5xl gold-text mb-1">N°</div>
              <div className="font-mono text-2xl text-[#F4F1EC] tracking-widest mb-6">042</div>
              <div className="gold-divider w-16 mb-6" />
              <button onClick={handleGetTickets} className="btn-gold w-full !text-[10px] !py-3">
                <Ticket className="w-3.5 h-3.5" />
                {t('event.cta')}
              </button>
              <p className="font-mono text-[9px] tracking-[0.3em] text-[#F4F1EC]/40 uppercase mt-6">{t('event.venue')}</p>
            </div>
          </div>

          <p className="text-center mt-8 font-display italic text-[#F4F1EC]/55 text-lg">
            {language === 'en' ? '“The room fills early — call ahead.”' : '“ห้องเต็มเร็ว — โทรล่วงหน้านะ”'}
          </p>
        </div>
      </div>
    </section>
  );
}
