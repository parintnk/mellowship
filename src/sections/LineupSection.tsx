import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { ArrowRight, CalendarDays, Music2 } from 'lucide-react';

const weeklyLineup = [
  {
    day: { en: 'Tuesday', th: 'อังคาร' },
    genre: 'Bebop',
    artist: 'Natt Buntita Quartet',
    bio: {
      en: 'A horn-led ensemble known for sharp Parker-inspired heads and elastic rhythm section interplay.',
      th: 'วงควอเตทที่นำโดยเครื่องเป่า โดดเด่นด้วยไลน์บีบ็อปเฉียบคมและริธึมเซกชันที่ยืดหยุ่น',
    },
  },
  {
    day: { en: 'Wednesday', th: 'พุธ' },
    genre: 'Swing',
    artist: 'The Sukhumvit Swing Society',
    bio: {
      en: 'Classic swing language with refined phrasing, upright bass focus, and elegant late-night vocals.',
      th: 'ภาษาสวิงคลาสสิกพร้อมการเรียบเรียงประณีต เบสตั้งเด่นชัด และเสียงร้องยามค่ำที่สง่างาม',
    },
  },
  {
    day: { en: 'Thursday', th: 'พฤหัสบดี' },
    genre: 'Fusion',
    artist: 'Arun Electric Trio',
    bio: {
      en: 'Modern harmonic colors, Rhodes textures, and Chiang Mai groove traditions shaped into long-form sets.',
      th: 'สีสันฮาร์โมนีร่วมสมัย เท็กซ์เจอร์โรดส์ และกรูฟแบบกรุงเทพฯ ในเซ็ตที่ขยายอารมณ์ยาวขึ้น',
    },
  },
  {
    day: { en: 'Friday', th: 'ศุกร์' },
    genre: 'Bebop',
    artist: 'Maya Rosen & Local Masters',
    bio: {
      en: 'International guest saxophonist Maya Rosen joins resident players for hard-swinging standards.',
      th: 'มายา โรเซน ศิลปินแซกโซโฟนรับเชิญ ร่วมกับนักดนตรีประจำในสแตนดาร์ดที่สวิงเข้มข้น',
    },
  },
  {
    day: { en: 'Saturday', th: 'เสาร์' },
    genre: 'Swing',
    artist: 'Chao Phraya Big Five',
    bio: {
      en: 'A compact brass-forward lineup built for serious listeners who love melody, movement, and precision.',
      th: 'ไลน์อัปห้าชิ้นที่ขับเคลื่อนด้วยเครื่องเป่า เหมาะสำหรับผู้ฟังที่รักเมโลดี้ การเคลื่อนไหว และความแม่นยำ',
    },
  },
  {
    day: { en: 'Sunday', th: 'อาทิตย์' },
    genre: 'Fusion',
    artist: 'Late Blue Session',
    bio: {
      en: 'A spacious closing set of modal themes, ambient percussion, and reflective improvisation.',
      th: 'เซ็ตปิดสัปดาห์ที่เปิดพื้นที่ให้ธีมโมดัล เพอร์คัสชันบรรยากาศ และอิมโพรไวส์อย่างใคร่ครวญ',
    },
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
                  {language === 'en' ? 'Doors 7:30 PM' : 'เปิด 19:30'}
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#F4F1EC]/50 uppercase">{t('lineup.time')}</span>
            </div>

            <div className="space-y-0 divide-y divide-[#D4A84B]/15">
              {weeklyLineup.map((item, index) => (
                <article key={item.artist} className="grid md:grid-cols-[120px_110px_1fr] gap-4 py-5" data-reveal data-delay={String(index * 60)}>
                  <div>
                    <p className="font-serif italic text-xl text-[#F4F1EC]">{language === 'en' ? item.day.en : item.day.th}</p>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-[#F4F1EC]/45 uppercase mt-1">8 PM</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 border border-[#D4A84B]/35 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-[#D4A84B] uppercase">
                      <Music2 className="w-3.5 h-3.5" />
                      {item.genre}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif italic text-2xl text-[#F4F1EC] mb-2">{item.artist}</h3>
                    <p className="text-sm sm:text-base text-[#F4F1EC]/60 leading-relaxed font-light">
                      {language === 'en' ? item.bio.en : item.bio.th}
                    </p>
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
                <img src="/stage_spotlight.jpg" alt="Double bass and stage spotlight" className="w-full h-full object-cover img-warm" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#0A0908] border border-[#D4A84B]/40 whitespace-nowrap">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#D4A84B] uppercase">
                {language === 'en' ? 'Bebop · Swing · Fusion' : 'บีบ็อป · สวิง · ฟิวชัน'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
