import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Phone, MapPin, Facebook, Instagram, Star, Clock } from 'lucide-react';

export default function ContactSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const handleCall = () => window.open('tel:053908888', '_self');
  const handleFacebook = () => window.open('https://www.facebook.com/themellowshipjazz/', '_blank');
  const handleInstagram = () => window.open('https://www.instagram.com/themellowshipjazz/', '_blank');

  return (
    <section ref={ref} id="contact" className="relative section-pad bg-[#0A0908] border-t border-[#D4A84B]/10">
      <div className="container-deco">
        <div className="text-center mb-16" data-reveal>
          <p className="eyebrow mx-auto justify-center mb-5">{language === 'en' ? 'Location & Reservation' : 'สถานที่และการจอง'}</p>
          <h2 className="font-serif text-[clamp(40px,6vw,84px)] leading-[1.05]">
            <span className="block text-[#F4F1EC]">{language === 'en' ? 'Join us' : 'มาร่วมค่ำคืน'}</span>
            <span className="block italic gold-text">{language === 'en' ? 'tonight' : 'กับเรา'}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Left — info */}
          <div className="lg:col-span-5 space-y-8" data-reveal>
            {/* Rating */}
            <div className="flex items-center gap-3 pb-6 border-b border-[#D4A84B]/15">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A84B] text-[#D4A84B]" />
                ))}
              </div>
              <span className="font-serif italic text-2xl text-[#F4F1EC]">4.9</span>
              <span className="text-[#F4F1EC]/55 text-sm">· {t('rating.reviews')}</span>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A84B]" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] uppercase">{language === 'en' ? 'Reservations' : 'จองโต๊ะ'}</span>
              </div>
              <a href="tel:053908888" className="font-serif text-3xl text-[#F4F1EC] hover:text-[#F0CF65] transition-colors">
                {t('contact.phone')}
              </a>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A84B]" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] uppercase">{language === 'en' ? 'Address' : 'ที่อยู่'}</span>
              </div>
              <p className="font-serif italic text-xl text-[#F4F1EC] leading-relaxed">{t('contact.address')}</p>
              <p className="text-sm text-[#F4F1EC]/55 mt-1">{t('contact.location')}</p>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-3.5 h-3.5 text-[#D4A84B]" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] uppercase">{t('menu.hours')}</span>
              </div>
              <p className="font-serif italic text-xl text-[#F4F1EC]">{t('menu.hours.detail')}</p>
              <p className="text-sm text-[#F4F1EC]/55">{t('menu.closed')}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button onClick={handleCall} className="btn-gold flex-1 justify-center">
                <Phone className="w-4 h-4" />
                {t('contact.cta.call')}
              </button>
              <button onClick={handleFacebook} className="btn-ghost flex-1 justify-center">
                <Facebook className="w-4 h-4" />
                {t('contact.cta.fb')}
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
              style={{ border: 0, filter: 'grayscale(100%) invert(94%) contrast(85%) sepia(20%) hue-rotate(-10deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Mellowship music destination location"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#D4A84B]/15 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] uppercase">Est · 1925</span>
              <span className="h-4 w-px bg-[#D4A84B]/30" />
              <span className="font-serif italic text-base text-[#F4F1EC]">The Mellowship</span>
            </div>

            <p className="font-mono text-[10px] tracking-[0.3em] text-[#F4F1EC]/40 uppercase">{t('footer.copy')}</p>

            <div className="flex items-center gap-6">
              <button onClick={handleInstagram} aria-label="Instagram" className="flex items-center gap-2 text-[#F4F1EC]/55 hover:text-[#F0CF65] transition-colors text-xs font-mono tracking-widest uppercase py-2 px-1">
                <Instagram className="w-4 h-4" />
                {t('footer.ig')}
              </button>
              <button onClick={handleFacebook} aria-label="Facebook" className="flex items-center gap-2 text-[#F4F1EC]/55 hover:text-[#F0CF65] transition-colors text-xs font-mono tracking-widest uppercase py-2 px-1">
                <Facebook className="w-4 h-4" />
                {t('footer.fb')}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
