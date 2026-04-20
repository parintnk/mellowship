import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Armchair, AudioLines, Music, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const items = [
    { num: '01', icon: Music, key: 'exp.music',
      desc: language === 'en' ? 'Weekly performances from Thailand’s finest jazz maestros and international guest artists.' : 'การแสดงประจำสัปดาห์โดยศิลปินแจ๊สชั้นนำของไทยและศิลปินรับเชิญจากต่างประเทศ' },
    { num: '02', icon: ShieldCheck, key: 'exp.food',
      desc: language === 'en' ? 'Limited seating, measured lighting, and a room designed for focused conversation between sets.' : 'ที่นั่งจำกัด แสงสลัวพอดี และพื้นที่ที่ออกแบบเพื่อบทสนทนาอย่างเป็นส่วนตัวระหว่างเซ็ต' },
    { num: '03', icon: AudioLines, key: 'exp.acoustics',
      desc: language === 'en' ? 'Acoustics tuned so every brush, breath, and bass line arrives with warmth and clarity.' : 'อะคูสติกที่ปรับจูนให้ทุกเสียงแปรง ลมหายใจ และไลน์เบสถ่ายทอดอย่างอบอุ่นและชัดเจน' },
    { num: '04', icon: Armchair, key: 'exp.times',
      desc: language === 'en' ? 'A timeless social space for listeners who appreciate the finer notes in life.' : 'โซเชียลสเปซเหนือกาลเวลาสำหรับผู้ฟังที่เห็นคุณค่าในรายละเอียดของดนตรี' },
  ];

  const handleViewMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={ref} id="experience" className="relative section-pad bg-[#0A0908] overflow-hidden">
      {/* Lounge background image */}
      <div className="absolute inset-0 opacity-[0.12]">
        <img src="/seating_area.jpg" alt="" className="w-full h-full object-cover img-cinematic" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-transparent to-[#0A0908]" />
      </div>

      <div className="relative container-deco">
        <div className="text-center mb-20" data-reveal>
          <p className="eyebrow mx-auto justify-center mb-5">
            {language === 'en' ? 'Our Heritage' : 'เรื่องราวของเรา'}
          </p>
          <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-[1.05]">
            <span className="block text-[#F4F1EC]">{language === 'en' ? 'Beyond the music,' : 'เหนือกว่าเสียงดนตรี'}</span>
            <span className="block italic gold-text">{language === 'en' ? "it's the feeling." : 'คือความรู้สึก'}</span>
          </h2>
          <p className="font-display italic text-xl text-[#F4F1EC]/70 max-w-3xl mx-auto leading-relaxed mt-8">
            {language === 'en'
              ? 'We provide a sanctuary for those who appreciate the finer notes in life. Designed for true jazz enthusiasts, our space offers acoustics that wrap around you like a warm embrace.'
              : 'เราสร้างสถานที่พักใจสำหรับผู้ที่เห็นคุณค่าในรายละเอียดอันประณีตของชีวิต พื้นที่ของเราออกแบบเพื่อคนรักแจ๊สตัวจริง พร้อมอะคูสติกที่โอบล้อมคุณอย่างอบอุ่น'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 sm:gap-y-14 mb-12 sm:mb-16">
          {items.map((item) => (
            <div key={item.num} className="group flex gap-4 sm:gap-6 items-start" data-reveal>
              <div className="deco-number flex-shrink-0 leading-none">{item.num}</div>
              <div className="flex-1 pt-1 sm:pt-3 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A84B] flex-shrink-0" />
                  <h3 className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#F4F1EC]">{t(item.key)}</h3>
                </div>
                <div className="gold-divider w-12 mb-3 sm:mb-4 group-hover:w-24 transition-all duration-500" />
                <p className="text-sm sm:text-base text-[#F4F1EC]/65 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Limited seating ribbon */}
        <div className="relative mt-12 sm:mt-16 deco-corners bg-gradient-to-r from-[#141210] via-[#1A1714] to-[#141210] py-8 sm:py-10 px-6 sm:px-8 md:px-16" data-reveal>
          <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8 text-center md:text-left">
            <div>
              <p className="font-mono text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#D4A84B] uppercase mb-2">{t('happyhour.label')}</p>
              <h3 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F4F1EC]">{t('happyhour.deal')}</h3>
              <p className="font-mono text-xs sm:text-sm text-[#F4F1EC]/60 mt-2 tracking-wider">{t('happyhour.time')}</p>
            </div>
            <div className="hidden md:block h-20 w-px bg-[#D4A84B]/30" />
            <div className="text-center md:text-right">
              <p className="font-mono text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#D4A84B]/70 uppercase mb-3">{t('exp.hours')}</p>
              <button onClick={handleViewMenu} className="btn-ghost">
                {t('exp.cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
