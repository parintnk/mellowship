import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Wine, GlassWater, Beer, Coffee, UtensilsCrossed, Cake, Clock, FileText } from 'lucide-react';

type Item = { name: { en: string; th: string }; desc?: { en: string; th: string }; price: string };

const drinks: Item[] = [
  { name: { en: 'Old Fashioned', th: 'โอลด์แฟชัน' }, desc: { en: 'Bourbon · sugar · bitters', th: 'เบอร์เบิน · น้ำตาล · บิตเตอร์' }, price: '320' },
  { name: { en: 'Negroni Sbagliato', th: 'เนโกรนี สบาเกลียโต' }, desc: { en: 'Campari · sweet vermouth · prosecco', th: 'คัมปารี · เวอร์มุท · พรอเซคโก' }, price: '300' },
  { name: { en: 'Espresso Martini', th: 'เอสเพรสโซ มาร์ตินี่' }, desc: { en: 'Vodka · cold brew · kahlúa', th: 'วอดก้า · โคลด์บรู · คาลัวร์' }, price: '290' },
  { name: { en: 'House Highball', th: 'ไฮบอลเฮาส์' }, desc: { en: 'Japanese whisky · soda · lemon oil', th: 'วิสกี้ญี่ปุ่น · โซดา · น้ำมันเลมอน' }, price: '260' },
];

const bites: Item[] = [
  { name: { en: 'Charcuterie Board', th: 'จานชาร์คูเทอรี' }, desc: { en: 'Cured meats · cheese · seasonal fruit', th: 'เนื้อหมัก · ชีส · ผลไม้ตามฤดู' }, price: '480' },
  { name: { en: 'Truffle Fries', th: 'เฟรนช์ฟรายส์ทรัฟเฟิล' }, desc: { en: 'Hand-cut · parmesan · truffle aioli', th: 'หั่นมือ · พาเมซาน · ทรัฟเฟิลไอโอลี' }, price: '220' },
  { name: { en: 'Crispy Squid', th: 'ปลาหมึกชุบแป้งทอด' }, desc: { en: 'Lemon pepper · house aioli', th: 'เลมอนพริกไทย · ไอโอลีโฮม' }, price: '260' },
  { name: { en: 'Dark Chocolate Tart', th: 'ทาร์ตช็อกโกแลตเข้ม' }, desc: { en: 'Sea salt · espresso ice cream', th: 'เกลือทะเล · ไอศกรีมเอสเพรสโซ' }, price: '180' },
];

export default function MenuSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="menu" className="relative section-pad bg-[#0A0908]">
      <div className="container-deco">
        {/* Header */}
        <div className="text-center mb-20" data-reveal>
          <p className="eyebrow mx-auto justify-center mb-5">{language === 'en' ? 'The List' : 'รายการ'}</p>
          <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-[1.05] mb-6">
            <span className="block text-[#F4F1EC]">{language === 'en' ? 'Drinks &' : 'เครื่องดื่ม &'}</span>
            <span className="block italic gold-text">{language === 'en' ? 'small plates' : 'จานเล็ก'}</span>
          </h2>
          <p className="font-display italic text-xl text-[#F4F1EC]/70 max-w-2xl mx-auto leading-relaxed">
            {t('menu.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Left: image + hours */}
          <div className="lg:col-span-5 space-y-10" data-reveal data-delay="100">
            <div className="relative deco-corners aspect-[3/4]">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <img src="/menu_cocktail.jpg" alt="Signature cocktail" className="w-full h-full object-cover img-warm" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/70 via-transparent to-transparent" />
            </div>

            {/* Hours card */}
            <div className="relative deco-corners bg-[#141210] p-8">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-4 h-4 text-[#D4A84B]" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] uppercase">{t('menu.hours')}</span>
              </div>
              <p className="font-serif italic text-xl text-[#F4F1EC] mb-1">{t('menu.hours.detail')}</p>
              <p className="text-sm text-[#F4F1EC]/50">{t('menu.closed')}</p>
            </div>
          </div>

          {/* Right: menu */}
          <div className="lg:col-span-7 space-y-12" data-reveal data-delay="200">
            {/* Drinks */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif italic text-3xl md:text-4xl text-[#F4F1EC] flex items-center gap-3">
                  <GlassWater className="w-6 h-6 text-[#D4A84B]" />
                  {t('menu.drinks')}
                </h3>
                <div className="flex items-center gap-3 text-[#F4F1EC]/40 text-xs font-mono tracking-widest">
                  <Wine className="w-3 h-3" />
                  <Beer className="w-3 h-3" />
                  <Coffee className="w-3 h-3" />
                </div>
              </div>
              <div className="gold-divider mb-6" />
              <ul className="space-y-5">
                {drinks.map((d) => (
                  <li key={d.name.en}>
                    <div className="dot-leader">
                      <span className="font-serif text-lg md:text-xl text-[#F4F1EC]">{language === 'en' ? d.name.en : d.name.th}</span>
                      <span className="dots" />
                      <span className="font-mono text-sm text-[#D4A84B]">{d.price}</span>
                    </div>
                    {d.desc && (
                      <p className="text-sm text-[#F4F1EC]/50 italic mt-1 font-light">
                        {language === 'en' ? d.desc.en : d.desc.th}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bites */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif italic text-3xl md:text-4xl text-[#F4F1EC] flex items-center gap-3">
                  <UtensilsCrossed className="w-6 h-6 text-[#D4A84B]" />
                  {t('menu.bites')}
                </h3>
                <Cake className="w-3 h-3 text-[#F4F1EC]/40" />
              </div>
              <div className="gold-divider mb-6" />
              <ul className="space-y-5">
                {bites.map((d) => (
                  <li key={d.name.en}>
                    <div className="dot-leader">
                      <span className="font-serif text-lg md:text-xl text-[#F4F1EC]">{language === 'en' ? d.name.en : d.name.th}</span>
                      <span className="dots" />
                      <span className="font-mono text-sm text-[#D4A84B]">{d.price}</span>
                    </div>
                    {d.desc && (
                      <p className="text-sm text-[#F4F1EC]/50 italic mt-1 font-light">
                        {language === 'en' ? d.desc.en : d.desc.th}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.open('https://www.facebook.com/themellowshipjazz/', '_blank')}
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
