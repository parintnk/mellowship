import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Cake, Clock, Coffee, FileText, GlassWater, Leaf, UtensilsCrossed } from 'lucide-react';

type Item = { name: { en: string; th: string }; desc?: { en: string; th: string }; price: string };

const refreshments: Item[] = [
  { name: { en: 'My Favorite Things', th: 'My Favorite Things' }, price: '350' },
  { name: { en: 'Chameleon', th: 'Chameleon' }, price: '350' },
  { name: { en: 'In a Sentimental Mood', th: 'In a Sentimental Mood' }, price: '350' },
  { name: { en: 'Naima', th: 'Naima' }, price: '350' },
];

const dishes: Item[] = [
  { name: { en: 'Beef Shoua', th: 'เนื้อชัว' }, price: '490' },
  { name: { en: 'Black Squid Ink Pink Sauce', th: 'หมึกดำซอสพิงค์' }, price: '300' },
  { name: { en: 'Seabass Guacamole', th: 'ปลากะพงกัวคาโมเล่' }, price: '310' },
  { name: { en: 'Ka-prao Moo Krop', th: 'กะเพราหมูกรอบ' }, price: '295' },
];

export default function MenuSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();
  const handleReserve = () => window.open('tel:053908888', '_self');

  return (
    <section ref={ref} id="menu" className="relative section-pad bg-[#14100E]">
      <div className="container-deco">
        {/* Header */}
        <div className="text-center mb-20" data-reveal>
          <p className="eyebrow mx-auto justify-center mb-5">{language === 'en' ? 'Culinary Arts' : 'ศิลปะแห่งรสชาติ'}</p>
          <h2 className="font-serif text-[clamp(38px,5.4vw,74px)] leading-[1.05] mb-6">
            <span className="block text-[#F7EFE2]">{language === 'en' ? 'A Symphony' : 'ซิมโฟนี'}</span>
            <span className="block italic gold-text">{language === 'en' ? 'of Flavors' : 'แห่งรสชาติ'}</span>
          </h2>
          <p className="font-display italic text-xl text-[#F7EFE2]/72 max-w-2xl mx-auto leading-relaxed">
            {t('menu.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 mb-16 sm:mb-20">
          {/* Left: image + hours - appears after menu on mobile */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10 order-2 lg:order-1" data-reveal data-delay="100">
            <div className="relative deco-corners aspect-square lg:aspect-[3/4]">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <img src="/photo/New2/560278413_1268875521946077_7596391040400320143_n.jpg" alt="A symphony of flavors from the kitchen" className="w-full h-full object-cover img-warm" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100E]/60 via-transparent to-transparent" />
            </div>

            {/* Hours card */}
            <div className="relative deco-corners bg-[#1D1815] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-4 h-4 text-[#E0A24B]" />
                <span className="font-mono text-[10px] tracking-[0.22em] sm:tracking-[0.24em] text-[#E0A24B] uppercase">{t('menu.hours')}</span>
              </div>
              <p className="font-serif italic text-xl text-[#F7EFE2] mb-1">{t('menu.hours.detail')}</p>
              <p className="text-sm text-[#F7EFE2]/55">{t('menu.closed')}</p>
            </div>
          </div>

          {/* Right: menu - appears first on mobile */}
          <div className="lg:col-span-7 space-y-10 sm:space-y-12 order-1 lg:order-2" data-reveal data-delay="200">
            {/* Seasonal beverages */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif italic text-3xl md:text-4xl text-[#F7EFE2] flex items-center gap-3">
                  <GlassWater className="w-6 h-6 text-[#E0A24B]" />
                  {t('menu.refreshments')}
                </h3>
                <div className="flex items-center gap-3 text-[#F7EFE2]/45 text-xs font-mono tracking-widest">
                  <Leaf className="w-3 h-3" />
                  <Coffee className="w-3 h-3" />
                </div>
              </div>
              <div className="gold-divider mb-6" />
              <ul className="space-y-5">
                {refreshments.map((d) => (
                  <li key={d.name.en}>
                    <div className="dot-leader">
                      <span className="font-serif text-base sm:text-lg md:text-xl text-[#F7EFE2] flex-shrink min-w-0">{language === 'en' ? d.name.en : d.name.th}</span>
                      <span className="dots" />
                      <span className="font-mono text-sm text-[#E0A24B] flex-shrink-0">{d.price}</span>
                    </div>
                    {d.desc && (
                      <p className="text-sm text-[#F7EFE2]/55 italic mt-1 font-light">
                        {language === 'en' ? d.desc.en : d.desc.th}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature dishes */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif italic text-3xl md:text-4xl text-[#F7EFE2] flex items-center gap-3">
                  <UtensilsCrossed className="w-6 h-6 text-[#E0A24B]" />
                  {t('menu.bites')}
                </h3>
                <Cake className="w-3 h-3 text-[#F7EFE2]/45" />
              </div>
              <div className="gold-divider mb-6" />
              <ul className="space-y-5">
                {dishes.map((d) => (
                  <li key={d.name.en}>
                    <div className="dot-leader">
                      <span className="font-serif text-base sm:text-lg md:text-xl text-[#F7EFE2] flex-shrink min-w-0">{language === 'en' ? d.name.en : d.name.th}</span>
                      <span className="dots" />
                      <span className="font-mono text-sm text-[#E0A24B] flex-shrink-0">{d.price}</span>
                    </div>
                    {d.desc && (
                      <p className="text-sm text-[#F7EFE2]/55 italic mt-1 font-light">
                        {language === 'en' ? d.desc.en : d.desc.th}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleReserve}
              className="btn-ghost"
            >
              <FileText className="w-4 h-4" />
              {t('menu.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
