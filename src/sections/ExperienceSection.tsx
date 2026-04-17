import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Music, UtensilsCrossed, Wine, Sparkles, ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const items = [
    { num: '01', icon: Music, key: 'exp.music',
      desc: language === 'en' ? 'Live jazz seven nights a week — quartets, vocalists, and special guests.' : 'แจ๊สสดทุกค่ำคืน — ควอเตท นักร้อง และศิลปินรับเชิญ' },
    { num: '02', icon: UtensilsCrossed, key: 'exp.food',
      desc: language === 'en' ? 'A short, deliberate plate menu built for sharing between sets.' : 'เมนูจานสั้นที่ตั้งใจคัดสรร เหมาะสำหรับแบ่งกันระหว่างเซ็ต' },
    { num: '03', icon: Wine, key: 'exp.drinks',
      desc: language === 'en' ? 'Classic cocktails, low-intervention wine, and Northern-Thai craft beers.' : 'ค็อกเทลคลาสสิก ไวน์ธรรมชาติ และคราฟต์เบียร์ภาคเหนือ' },
    { num: '04', icon: Sparkles, key: 'exp.times',
      desc: language === 'en' ? 'A room that holds 60 — close enough to hear the brushes on the snare.' : 'ห้องที่จุได้ 60 ที่ — ใกล้พอจะได้ยินเสียงไม้แปรงบนกลอง' },
  ];

  const handleViewMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={ref} id="experience" className="relative section-pad bg-[#0A0908] overflow-hidden">
      {/* Bar background image */}
      <div className="absolute inset-0 opacity-[0.12]">
        <img src="/bar_cocktails.jpg" alt="" className="w-full h-full object-cover img-cinematic" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-transparent to-[#0A0908]" />
      </div>

      <div className="relative container-deco">
        <div className="text-center mb-20" data-reveal>
          <p className="eyebrow mx-auto justify-center mb-5">
            {language === 'en' ? 'The Experience' : 'ประสบการณ์'}
          </p>
          <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-[1.05]">
            <span className="block text-[#F4F1EC]">{language === 'en' ? 'Slow nights,' : 'ค่ำคืนที่ช้าลง'}</span>
            <span className="block italic gold-text">{language === 'en' ? 'long stories.' : 'เรื่องราวที่ยาวขึ้น'}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 mb-16">
          {items.map((item) => (
            <div key={item.num} className="group flex gap-6 items-start" data-reveal>
              <div className="deco-number flex-shrink-0">{item.num}</div>
              <div className="flex-1 pt-3">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-5 h-5 text-[#D4A84B]" />
                  <h3 className="font-serif italic text-2xl md:text-3xl text-[#F4F1EC]">{t(item.key)}</h3>
                </div>
                <div className="gold-divider w-12 mb-4 group-hover:w-24 transition-all duration-500" />
                <p className="text-[#F4F1EC]/65 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Happy hour ribbon */}
        <div className="relative mt-16 deco-corners bg-gradient-to-r from-[#141210] via-[#1A1714] to-[#141210] py-10 px-8 md:px-16" data-reveal>
          <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] uppercase mb-2">{t('happyhour.label')}</p>
              <h3 className="font-serif italic text-3xl md:text-4xl text-[#F4F1EC]">{t('happyhour.deal')}</h3>
              <p className="font-mono text-sm text-[#F4F1EC]/60 mt-2 tracking-wider">{t('happyhour.time')}</p>
            </div>
            <div className="hidden md:block h-20 w-px bg-[#D4A84B]/30" />
            <div className="text-center md:text-right">
              <p className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B]/70 uppercase mb-2">{t('exp.hours')}</p>
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
