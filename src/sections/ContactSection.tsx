import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Phone, MapPin, Star, Clock } from 'lucide-react';

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=231%2F12%201004%2C%20Tambon%20Chang%20Phueak%2C%20Mueang%20Chiang%20Mai%20District%2C%20Chiang%20Mai%2050200';

export default function ContactSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const handleCall = () => window.open('tel:053908888', '_self');
  const handleMap = () => window.open(MAP_URL, '_blank', 'noopener,noreferrer');

  return (
    <section ref={ref} id="contact" className="relative section-pad bg-[#14100E] border-t border-[#E0A24B]/10">
      <div className="container-deco">
        <div className="text-center mb-16" data-reveal>
          <p className="eyebrow mx-auto justify-center mb-5">{language === 'en' ? 'Location & Reservation' : 'สถานที่และการจอง'}</p>
          <h2 className="font-serif text-[clamp(38px,5.4vw,74px)] leading-[1.05]">
            <span className="block text-[#F7EFE2]">{language === 'en' ? 'Join us' : 'มาร่วมค่ำคืน'}</span>
            <span className="block italic gold-text">{language === 'en' ? 'tonight' : 'กับเรา'}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Left — info */}
          <div className="lg:col-span-5 space-y-8" data-reveal>
            {/* Rating */}
            <div className="flex items-center gap-3 pb-6 border-b border-[#E0A24B]/12">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E0A24B] text-[#E0A24B]" />
                ))}
              </div>
              <span className="font-serif italic text-2xl text-[#F7EFE2]">4.9</span>
              <span className="text-[#F7EFE2]/58 text-sm">· {t('rating.reviews')}</span>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-3.5 h-3.5 text-[#E0A24B]" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-[#E0A24B] uppercase">{language === 'en' ? 'Reservations' : 'จองโต๊ะ'}</span>
              </div>
              <a href="tel:053908888" className="font-serif text-3xl text-[#F7EFE2] hover:text-[#E0A24B] transition-colors">
                {t('contact.phone')}
              </a>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#E0A24B]" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-[#E0A24B] uppercase">{language === 'en' ? 'Address' : 'ที่อยู่'}</span>
              </div>
              <p className="font-serif italic text-xl text-[#F7EFE2] leading-relaxed">{t('contact.address')}</p>
              <p className="text-sm text-[#F7EFE2]/58 mt-1">{t('contact.location')}</p>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-3.5 h-3.5 text-[#E0A24B]" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-[#E0A24B] uppercase">{t('menu.hours')}</span>
              </div>
              <p className="font-serif italic text-xl text-[#F7EFE2]">{t('menu.hours.detail')}</p>
              <p className="text-sm text-[#F7EFE2]/58">{t('menu.closed')}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button onClick={handleCall} className="btn-gold flex-1 justify-center">
                <Phone className="w-4 h-4" />
                {t('contact.cta.call')}
              </button>
              <button onClick={handleMap} className="btn-ghost flex-1 justify-center">
                <MapPin className="w-4 h-4" />
                {t('contact.cta.map')}
              </button>
            </div>
          </div>

          {/* Right — map */}
          <div className="lg:col-span-7 relative deco-corners aspect-[4/3] lg:aspect-auto lg:min-h-[500px]" data-reveal data-delay="150">
            <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
            <iframe
              src="https://maps.google.com/maps?q=231%2F12%201004%2C%20Tambon%20Chang%20Phueak%2C%20Mueang%20Chiang%20Mai%20District%2C%20Chiang%20Mai%2050200&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(65%) invert(90%) contrast(80%) sepia(16%) hue-rotate(-8deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Mellowship music destination location"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#E0A24B]/12 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.22em] text-[#E0A24B] uppercase">Est · 1925</span>
              <span className="h-4 w-px bg-[#E0A24B]/28" />
              <span className="font-serif italic text-base text-[#F7EFE2]">The Mellowship</span>
            </div>

            <p className="font-mono text-[10px] tracking-[0.2em] text-[#F7EFE2]/45 uppercase">{t('footer.copy')}</p>

            <div className="flex items-center gap-5">
              <button onClick={handleCall} className="flex items-center gap-2 text-[#F7EFE2]/58 hover:text-[#E0A24B] transition-colors text-xs font-mono tracking-widest uppercase py-2 px-1">
                <Phone className="w-4 h-4" />
                {t('contact.cta.call')}
              </button>
              <button onClick={handleMap} className="flex items-center gap-2 text-[#F7EFE2]/58 hover:text-[#E0A24B] transition-colors text-xs font-mono tracking-widest uppercase py-2 px-1">
                <MapPin className="w-4 h-4" />
                {t('contact.cta.map')}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
