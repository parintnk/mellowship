import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Cake, Clock, Coffee, FileText, GlassWater, Leaf, UtensilsCrossed } from 'lucide-react';

type Item = { name: { en: string; th: string }; desc?: { en: string; th: string }; price: string };

const refreshments: Item[] = [
  { name: { en: 'Yuzu Jasmine Spritz', th: 'ยูซุจัสมินสปริตซ์' }, desc: { en: 'Yuzu · jasmine tea · bright citrus', th: 'ยูซุ · ชาจัสมิน · ซิตรัสสดชื่น' }, price: '220' },
  { name: { en: 'Smoked Lychee Tonic', th: 'ลิ้นจี่โทนิกรมควัน' }, desc: { en: 'Lychee · rosemary smoke · tonic botanicals', th: 'ลิ้นจี่ · โรสแมรี่รมควัน · โทนิกสมุนไพร' }, price: '240' },
  { name: { en: 'Cold Brew Nocturne', th: 'โคลด์บรูน็อกเทิร์น' }, desc: { en: 'Slow-steeped coffee · cacao · vanilla cream', th: 'กาแฟสกัดเย็น · คาเคา · วานิลลาครีม' }, price: '210' },
  { name: { en: 'Golden Ginger Fizz', th: 'จินเจอร์ฟิซซ์สีทอง' }, desc: { en: 'Ginger · honey · lime leaf · fine bubbles', th: 'ขิง · น้ำผึ้ง · ใบมะกรูด · ฟองละเอียด' }, price: '220' },
];

const dishes: Item[] = [
  { name: { en: 'Seared Hokkaido Scallop', th: 'หอยเชลล์ฮอกไกโดย่าง' }, desc: { en: 'Cauliflower silk · kaffir lime oil', th: 'ครีมกะหล่ำดอก · น้ำมันใบมะกรูด' }, price: '420' },
  { name: { en: 'Truffle Parmesan Mille-Feuille', th: 'มิลเฟยทรัฟเฟิลพาร์เมซาน' }, desc: { en: 'Crisp potato layers · aged parmesan', th: 'ชั้นมันฝรั่งกรอบ · พาร์เมซานบ่ม' }, price: '280' },
  { name: { en: 'Crispy River Prawn Toast', th: 'โทสต์กุ้งแม่น้ำกรอบ' }, desc: { en: 'Herb aioli · pickled shallot', th: 'เฮิร์บไอโอลี · หอมแดงดอง' }, price: '320' },
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
          <p className="eyebrow mx-auto justify-center mb-5">{language === 'en' ? 'Culinary Arts' : 'ศิลปะแห่งรสชาติ'}</p>
          <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-[1.05] mb-6">
            <span className="block text-[#F4F1EC]">{language === 'en' ? 'A Symphony' : 'ซิมโฟนี'}</span>
            <span className="block italic gold-text">{language === 'en' ? 'of Flavors' : 'แห่งรสชาติ'}</span>
          </h2>
          <p className="font-display italic text-xl text-[#F4F1EC]/70 max-w-2xl mx-auto leading-relaxed">
            {t('menu.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 mb-16 sm:mb-20">
          {/* Left: image + hours - appears after menu on mobile */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10 order-2 lg:order-1" data-reveal data-delay="100">
            <div className="relative deco-corners aspect-square lg:aspect-[3/4]">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <img src="/stage_lights.jpg" alt="Warm lounge lighting and refined evening atmosphere" className="w-full h-full object-cover img-warm" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/70 via-transparent to-transparent" />
            </div>

            {/* Hours card */}
            <div className="relative deco-corners bg-[#141210] p-6 sm:p-8">
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-4 h-4 text-[#D4A84B]" />
                <span className="font-mono text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#D4A84B] uppercase">{t('menu.hours')}</span>
              </div>
              <p className="font-serif italic text-xl text-[#F4F1EC] mb-1">{t('menu.hours.detail')}</p>
              <p className="text-sm text-[#F4F1EC]/50">{t('menu.closed')}</p>
            </div>
          </div>

          {/* Right: menu - appears first on mobile */}
          <div className="lg:col-span-7 space-y-10 sm:space-y-12 order-1 lg:order-2" data-reveal data-delay="200">
            {/* Signature refreshments */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif italic text-3xl md:text-4xl text-[#F4F1EC] flex items-center gap-3">
                  <GlassWater className="w-6 h-6 text-[#D4A84B]" />
                  {t('menu.refreshments')}
                </h3>
                <div className="flex items-center gap-3 text-[#F4F1EC]/40 text-xs font-mono tracking-widest">
                  <Leaf className="w-3 h-3" />
                  <Coffee className="w-3 h-3" />
                </div>
              </div>
              <div className="gold-divider mb-6" />
              <ul className="space-y-5">
                {refreshments.map((d) => (
                  <li key={d.name.en}>
                    <div className="dot-leader">
                      <span className="font-serif text-base sm:text-lg md:text-xl text-[#F4F1EC] flex-shrink min-w-0">{language === 'en' ? d.name.en : d.name.th}</span>
                      <span className="dots" />
                      <span className="font-mono text-sm text-[#D4A84B] flex-shrink-0">{d.price}</span>
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

            {/* Signature dishes */}
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
                {dishes.map((d) => (
                  <li key={d.name.en}>
                    <div className="dot-leader">
                      <span className="font-serif text-base sm:text-lg md:text-xl text-[#F4F1EC] flex-shrink min-w-0">{language === 'en' ? d.name.en : d.name.th}</span>
                      <span className="dots" />
                      <span className="font-mono text-sm text-[#D4A84B] flex-shrink-0">{d.price}</span>
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
              onClick={() => window.open('tel:021088888', '_self')}
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
