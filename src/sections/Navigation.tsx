import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { en: 'Home', th: 'หน้าแรก', id: 'hero' },
  { en: 'Heritage', th: 'เรื่องราว', id: 'experience' },
  { en: 'Schedule', th: 'ตาราง', id: 'lineup' },
  { en: 'Culinary', th: 'อาหาร', id: 'menu' },
  { en: 'Patrons', th: 'รีวิว', id: 'stage' },
  { en: 'Contact', th: 'ติดต่อ', id: 'contact' },
];

export default function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleBook = () => {
    window.open('tel:053908888', '_self');
    setIsMenuOpen(false);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0908]/85 backdrop-blur-xl py-3 border-b border-[#D4A84B]/15'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-deco flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3"
            aria-label="The Mellowship — home"
          >
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.4em] text-[#D4A84B] group-hover:text-[#F0CF65] transition-colors">EST · 1925</span>
            <span className="hidden sm:inline-block h-4 w-px bg-[#D4A84B]/40" />
            <span className="font-serif italic text-base md:text-lg text-[#F4F1EC] tracking-wide">The Mellowship</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.slice(1).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="relative font-mono text-[11px] tracking-[0.25em] uppercase text-[#F4F1EC]/80 hover:text-[#F0CF65] transition-colors group"
                  >
                    {language === 'en' ? item.en : item.th}
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#D4A84B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-4">
            {/* Language pill */}
            <div className="hidden md:flex items-center text-[11px] font-mono">
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-2.5 py-1 transition-colors ${language === 'en' ? 'text-[#F0CF65]' : 'text-[#F4F1EC]/40 hover:text-[#F4F1EC]/80'}`}
                aria-pressed={language === 'en'}
              >EN</button>
              <span className="text-[#D4A84B]/40">/</span>
              <button
                onClick={() => language !== 'th' && toggleLanguage()}
                className={`px-2.5 py-1 transition-colors ${language === 'th' ? 'text-[#F0CF65]' : 'text-[#F4F1EC]/40 hover:text-[#F4F1EC]/80'}`}
                aria-pressed={language === 'th'}
              >TH</button>
            </div>

            <button
              onClick={handleBook}
              className="hidden md:inline-flex btn-gold !py-2.5 !px-5 !text-[11px]"
            >
              <Phone className="w-3.5 h-3.5" />
              {t('nav.book')}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 -m-2 text-[#F4F1EC] hover:text-[#F0CF65] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[200] bg-[#0A0908] transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="grain-overlay" />
        <div className="h-full flex flex-col container-deco">
          <div className="flex items-center justify-between py-6">
            <span className="font-serif italic text-lg text-[#F4F1EC]">The Mellowship</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 -m-2 text-[#F4F1EC] hover:text-[#F0CF65] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <div className="gold-divider-ornament mb-10 w-full">
              <span className="font-mono text-[10px] tracking-[0.45em] uppercase">Navigate</span>
            </div>
            <ul className="flex flex-col items-center gap-5">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id} className="overflow-hidden">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="group block"
                    style={{ animation: `fadeRise 0.6s ${i * 60}ms cubic-bezier(0.16,1,0.3,1) both` }}
                  >
                    <span className="font-serif italic text-[clamp(28px,7vw,68px)] text-[#F4F1EC] group-hover:text-[#F0CF65] transition-colors leading-tight">
                      {language === 'en' ? item.en : item.th}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#D4A84B]/15">
            <div className="flex items-center text-[11px] font-mono">
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-3 py-1 ${language === 'en' ? 'text-[#F0CF65]' : 'text-[#F4F1EC]/40'}`}
              >EN</button>
              <span className="text-[#D4A84B]/40">/</span>
              <button
                onClick={() => language !== 'th' && toggleLanguage()}
                className={`px-3 py-1 ${language === 'th' ? 'text-[#F0CF65]' : 'text-[#F4F1EC]/40'}`}
              >TH</button>
            </div>
            <button onClick={handleBook} className="btn-gold">
              <Phone className="w-4 h-4" />
              {t('nav.book')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
