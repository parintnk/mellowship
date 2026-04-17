import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Mail, Send, Check } from 'lucide-react';

export default function NewsletterSection() {
  const { t, language } = useLanguage();
  const ref = useReveal<HTMLElement>();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => { setSubscribed(false); setEmail(''); }, 3000);
  };

  return (
    <section ref={ref} id="newsletter" className="relative section-pad bg-[#0A0908]">
      <div className="container-deco">
        <div className="relative max-w-3xl mx-auto deco-corners bg-gradient-to-br from-[#141210] via-[#1A1714] to-[#141210] p-6 sm:p-10 md:p-16 text-center" data-reveal>
          <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />

          <Mail className="w-8 h-8 text-[#D4A84B] mx-auto mb-6" />

          <p className="eyebrow mx-auto justify-center mb-5">{language === 'en' ? 'The Mailing List' : 'รายชื่อรับข่าวสาร'}</p>

          <h2 className="font-serif text-[clamp(36px,5vw,60px)] leading-[1.1] mb-4">
            <span className="block italic gold-text">{t('news.title')}</span>
          </h2>

          <p className="font-display italic text-lg md:text-xl text-[#F4F1EC]/70 mb-10 max-w-xl mx-auto leading-relaxed">
            {t('news.desc')}
          </p>

          <div className="gold-divider w-24 mx-auto mb-10" />

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('news.placeholder')}
              className="input-gold flex-1"
              required
              aria-label={t('news.placeholder')}
            />
            <button
              type="submit"
              disabled={subscribed}
              className={`btn-gold !px-7 ${subscribed ? '!bg-emerald-600 !bg-none !text-white' : ''}`}
            >
              {subscribed ? (
                <><Check className="w-4 h-4" />{language === 'en' ? 'Subscribed' : 'รับข่าวแล้ว'}</>
              ) : (
                <><Send className="w-4 h-4" />{t('news.button')}</>
              )}
            </button>
          </form>

          <p className="text-[#F4F1EC]/40 text-xs mt-5 font-mono tracking-widest uppercase">{t('news.micro')}</p>
        </div>
      </div>
    </section>
  );
}
