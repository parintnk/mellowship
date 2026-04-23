import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { ArrowRight, CalendarDays, Music2 } from 'lucide-react';

type Set = {
  time: string;
  artist: string;
  genre: { en: string; th: string };
};

type DayLineup = {
  day: { en: string; th: string };
  sets: Set[];
};

const weeklyLineup: DayLineup[] = [
  {
    day: { en: 'Tuesday', th: 'อังคาร' },
    sets: [
      { time: '20:30 – 21:30', artist: "Dude Where's My Car?", genre: { en: 'Fusion Jazz', th: 'ฟิวชันแจ๊ส' } },
      { time: '22:00 – 23:00', artist: 'The Stolen Moment', genre: { en: 'Swing · Traditional Jazz', th: 'สวิง · แจ๊สดั้งเดิม' } },
    ],
  },
  {
    day: { en: 'Wednesday', th: 'พุธ' },
    sets: [
      { time: '19:50 – 20:50', artist: 'Chiang Mai Blues', genre: { en: 'Blues', th: 'บลูส์' } },
      { time: '21:00 – 22:30', artist: 'Sheweeddd', genre: { en: 'Indie Soul · Neo Jazz', th: 'อินดี้โซล · นีโอแจ๊ส' } },
    ],
  },
  {
    day: { en: 'Thursday', th: 'พฤหัสบดี' },
    sets: [
      { time: '20:00 – 21:00', artist: 'Pato Quartet', genre: { en: 'Fusion Jazz', th: 'ฟิวชันแจ๊ส' } },
      { time: '21:15 – 22:00', artist: 'Pis-Pis-Pis', genre: { en: 'Modern Jazz', th: 'แจ๊สสมัยใหม่' } },
      { time: '22:15 – 23:15', artist: 'Jam Session', genre: { en: 'Open Jam', th: 'แจมเซสชัน' } },
    ],
  },
  {
    day: { en: 'Friday', th: 'ศุกร์' },
    sets: [
      { time: '19:30 – 20:30', artist: 'Ribbindasky', genre: { en: 'Acoustic Duo · Pop Jazz', th: 'อะคูสติกดูโอ · ป็อปแจ๊ส' } },
      { time: '20:40 – 21:40', artist: 'Dandelion', genre: { en: 'Bebop', th: 'บีบ็อป' } },
      { time: '22:00 – 23:00', artist: 'The Mellowship Quartet', genre: { en: 'Post-bop · Bebop', th: 'โพสต์บ็อป · บีบ็อป' } },
    ],
  },
  {
    day: { en: 'Saturday', th: 'เสาร์' },
    sets: [
      { time: '20:30 – 21:30', artist: 'The Funkster', genre: { en: 'Funk · Neo Soul', th: 'ฟังก์ · นีโอโซล' } },
      { time: '22:00 – 23:00', artist: 'Baan Tuek Super Boogie', genre: { en: 'Funk · Disco · Acid Jazz', th: 'ฟังก์ · ดิสโก้ · แอซิดแจ๊ส' } },
    ],
  },
  {
    day: { en: 'Sunday', th: 'อาทิตย์' },
    sets: [
      { time: '21:30 – 22:30', artist: 'Cosmic Agent', genre: { en: 'Acid Jazz · Funk', th: 'แอซิดแจ๊ส · ฟังก์' } },
    ],
  },
];

export default function LineupSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const handleReserve = () => window.open('tel:053908888', '_self');

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
            <span className="italic font-medium">{language === 'en' ? 'Live Performance Schedule' : 'ตารางการแสดงสด'}</span>
          </h2>
          <p className="font-display italic text-xl text-[#F4F1EC]/70 max-w-3xl mx-auto leading-relaxed mt-8">
            {language === 'en'
              ? 'Weekly Lineups: Featuring Thailand’s finest jazz maestros and international guest artists.'
              : 'ตารางประจำสัปดาห์: พบกับศิลปินแจ๊สชั้นนำของไทยและศิลปินรับเชิญจากต่างประเทศ'}
          </p>
          <div className="gold-divider w-40 mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8 deco-corners relative bg-gradient-to-br from-[#141210] to-[#0F0D0B] p-5 sm:p-8 md:p-10" data-reveal data-delay="100">
            <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />

            <div className="flex items-center justify-between gap-5 mb-8 pb-6 border-b border-[#D4A84B]/15">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-[#D4A84B]" />
                <span className="font-mono text-[10px] tracking-[0.35em] text-[#D4A84B] uppercase">
                  {language === 'en' ? 'Doors 7 PM' : 'เปิด 19:00'}
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#F4F1EC]/50 uppercase">{t('lineup.time')}</span>
            </div>

            <div className="divide-y divide-[#D4A84B]/15">
              {weeklyLineup.map((day, dayIndex) => (
                <article key={day.day.en} className="py-6 first:pt-0 last:pb-0" data-reveal data-delay={String(dayIndex * 60)}>
                  <h3 className="font-serif italic text-2xl md:text-3xl text-[#F4F1EC] mb-4">
                    {language === 'en' ? day.day.en : day.day.th}
                  </h3>
                  <div className="space-y-4">
                    {day.sets.map((set) => (
                      <div key={set.artist} className="grid md:grid-cols-[130px_minmax(160px,auto)_1fr] gap-3 md:gap-5 md:items-center">
                        <p className="font-mono text-[11px] tracking-[0.25em] text-[#F4F1EC]/55 uppercase">
                          {set.time}
                        </p>
                        <div>
                          <span className="inline-flex items-center gap-2 border border-[#D4A84B]/35 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-[#D4A84B] uppercase">
                            <Music2 className="w-3.5 h-3.5" />
                            {language === 'en' ? set.genre.en : set.genre.th}
                          </span>
                        </div>
                        <p className="font-serif italic text-lg md:text-xl text-[#F4F1EC]">
                          {set.artist}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <button onClick={handleReserve} className="btn-gold mt-8">
              {t('lineup.cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-4 relative" data-reveal data-delay="240">
            <div className="relative deco-corners">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src="/photo/Live Performance Schedule.jpg" alt="Live performance schedule" className="w-full h-full object-cover img-warm" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#0A0908] border border-[#D4A84B]/40 whitespace-nowrap">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#D4A84B] uppercase">
                {language === 'en' ? 'Jazz · Funk · Soul' : 'แจ๊ส · ฟังก์ · โซล'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
