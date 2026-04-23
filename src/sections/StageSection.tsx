import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael R.',
    role: { en: 'Expat listener', th: 'ผู้ฟังต่างชาติ' },
    quote: {
      en: 'The best acoustic experience I have found in Asia. A must-visit for any serious jazz lover.',
      th: 'หนึ่งในประสบการณ์เสียงอะคูสติกที่ดีที่สุดในเอเชีย สำหรับคนรักแจ๊สตัวจริงไม่ควรพลาด',
    },
  },
  {
    name: 'Ananya S.',
    role: { en: 'Pianist', th: 'นักเปียโน' },
    quote: {
      en: 'Every table feels close to the stage without losing privacy. The room lets the music breathe.',
      th: 'ทุกโต๊ะใกล้เวทีแต่ยังมีความเป็นส่วนตัว ห้องนี้ปล่อยให้ดนตรีหายใจได้จริง',
    },
  },
  {
    name: 'Kenji M.',
    role: { en: 'Record collector', th: 'นักสะสมแผ่นเสียง' },
    quote: {
      en: 'A rare listening room where the bass is warm, the cymbals are clear, and the audience is present.',
      th: 'ห้องฟังเพลงที่หาได้ยาก เบสอุ่น ฉาบชัด และผู้ฟังตั้งใจอยู่กับดนตรี',
    },
  },
];

export default function StageSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="stage" className="relative section-pad bg-[#16110F] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/stage_drums.jpg" alt="" className="w-full h-full object-cover img-cinematic opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16110F] via-[#16110F]/76 to-[#16110F]" />
      </div>

      <div className="relative container-deco">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7" data-reveal>
            <p className="eyebrow mb-5">{language === 'en' ? 'Social Proof' : 'เสียงตอบรับ'}</p>
            <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-[1.05] mb-6">
              <span className="block text-[#F7EFE2]">{language === 'en' ? 'What Our' : 'เสียงจาก'}</span>
              <span className="block italic gold-text">{language === 'en' ? 'Patrons Say' : 'ผู้มาเยือน'}</span>
            </h2>
            <p className="font-display italic text-xl text-[#F7EFE2]/76 max-w-xl leading-relaxed">
              {language === 'en'
                ? 'The atmosphere is intimate by design, with every seat close enough to feel the performance unfold.'
                : 'บรรยากาศถูกออกแบบให้ใกล้ชิด ทุกที่นั่งใกล้พอจะรับรู้การแสดงที่ค่อยๆ คลี่คลายตรงหน้า'}
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right" data-reveal data-delay="100">
            <p className="font-mono text-[10px] tracking-[0.22em] text-[#E0A24B] uppercase mb-2">{language === 'en' ? 'Listener rating' : 'คะแนนผู้ฟัง'}</p>
            <div className="flex lg:justify-end gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E0A24B] text-[#E0A24B]" />
              ))}
            </div>
            <p className="font-serif italic text-5xl text-[#F7EFE2]">4.9</p>
            <p className="text-sm text-[#F7EFE2]/58 mt-1">{language === 'en' ? 'from serious listeners' : 'จากผู้ฟังตัวจริง'}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              data-reveal
              data-delay={String(i * 100)}
              className="relative deco-corners p-6 sm:p-8 bg-[#1D1815]/88 hover:bg-[#251F1B] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
            >
              <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
              <Quote className="w-7 h-7 mb-6 text-[#E0A24B]" />
              <p className="font-display italic text-xl text-[#F7EFE2]/82 leading-relaxed mb-6">
                "{language === 'en' ? item.quote.en : item.quote.th}"
              </p>
              <div className="gold-divider mb-4" />
              <h3 className="font-serif italic text-2xl text-[#F7EFE2] mb-1">{item.name}</h3>
              <p className="font-mono text-[10px] tracking-[0.16em] text-[#E0A24B] uppercase">{language === 'en' ? item.role.en : item.role.th}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center" data-reveal>
          <div className="lg:col-span-7 relative deco-corners aspect-[16/9] overflow-hidden">
            <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
            <img src="/photo/New2/596808724_1326546492845646_4228531957484020801_n.jpg" alt="The Mellowship intimate seating" className="w-full h-full object-cover img-warm" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#14100E]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-[10px] tracking-[0.22em] text-[#E0A24B] uppercase">{language === 'en' ? 'The lounge · 9:42 PM' : 'เลานจ์ · 21:42 น.'}</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-serif italic text-3xl md:text-4xl text-[#F7EFE2] mb-4">
              {language === 'en' ? 'Limited by design' : 'จำกัดจำนวนอย่างตั้งใจ'}
            </h3>
            <p className="text-[#F7EFE2]/68 leading-relaxed mb-8">
              {language === 'en'
                ? 'Limited seating keeps the room balanced, quiet, and focused on the performance.'
                : 'จำนวนที่นั่งจำกัดช่วยให้ห้องสมดุล เงียบพอดี และจดจ่อกับการแสดง'}
            </p>
            <button onClick={() => window.open('tel:053908888', '_self')} className="btn-gold">
              {t('stage.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
