import React, { createContext, useCallback, useContext, useState } from 'react';

type Language = 'en' | 'th';

interface Translations {
  [key: string]: {
    en: string;
    th: string;
  };
}

export const translations: Translations = {
  'nav.menu': { en: 'MENU', th: 'เมนู' },
  'nav.book': { en: 'RESERVE', th: 'จอง' },
  'hero.title': { en: 'THE MELLOWSHIP', th: 'เดอะ เมลโลชิพ' },
  'hero.subtitle': {
    en: 'Live jazz · Acoustic lounge · Chiang Mai',
    th: 'แจ๊สสด · อะคูสติกเลานจ์ · เชียงใหม่',
  },
  'hero.cta.book': { en: 'Reserve Your Table', th: 'จองโต๊ะ' },
  'hero.cta.lineup': { en: 'View Performance Schedule', th: 'ดูรายการแสดง' },
  'lineup.label': { en: 'WEEKLY LINEUPS', th: 'ตารางการแสดงประจำสัปดาห์' },
  'lineup.title': { en: 'LIVE JAZZ', th: 'แจ๊สสด' },
  'lineup.time': { en: '8 PM – 11 PM', th: '20:00 – 23:00' },
  'lineup.venue': { en: 'THE MELLOWSHIP', th: 'เดอะ เมลโลชิพ' },
  'lineup.cta': { en: 'Reserve a listening seat', th: 'จองที่นั่งฟังเพลง' },
  'exp.music': { en: 'TRUE LISTENING', th: 'การฟังอย่างแท้จริง' },
  'exp.food': { en: 'PRIVATE COMFORT', th: 'ความเป็นส่วนตัว' },
  'exp.acoustics': { en: 'WARM ACOUSTICS', th: 'อะคูสติกอบอุ่น' },
  'exp.times': { en: 'TIMELESS SERVICE', th: 'บริการเหนือกาลเวลา' },
  'exp.hours': { en: 'TUE-SUN · 6 PM – MIDNIGHT', th: 'อังคาร-อาทิตย์ · 18:00 – 00:00' },
  'exp.cta': { en: 'Explore the culinary program', th: 'สำรวจเมนูอาหาร' },
  'menu.title': { en: 'Culinary Arts', th: 'ศิลปะแห่งรสชาติ' },
  'menu.desc': {
    en: 'A Symphony of Flavors. Complement your evening with our curated selection of gourmet bites and signature refreshments designed to enhance your sensory journey.',
    th: 'ซิมโฟนีแห่งรสชาติ เติมเต็มค่ำคืนด้วยอาหารทานเล่นระดับกูร์เมต์และเครื่องดื่มซิกเนเจอร์ที่ออกแบบมาเพื่อยกระดับประสบการณ์ของคุณ',
  },
  'menu.refreshments': { en: 'Signature Refreshments', th: 'เครื่องดื่มซิกเนเจอร์' },
  'menu.bites': { en: 'Signature Dishes', th: 'อาหารซิกเนเจอร์' },
  'menu.hours': { en: 'Opening Hours', th: 'เวลาเปิด' },
  'menu.hours.detail': { en: 'Tue-Sun: 6 PM – Midnight', th: 'อังคาร-อาทิตย์: 18:00 – 00:00' },
  'menu.closed': { en: 'Mon: Private sessions only', th: 'จันทร์: เฉพาะรอบส่วนตัว' },
  'menu.cta': { en: 'Reserve with culinary pairing', th: 'สำรองที่นั่งพร้อมชุดอาหาร' },
  'stage.title': { en: 'WHAT OUR PATRONS SAY', th: 'เสียงจากผู้มาเยือน' },
  'stage.cta': { en: 'Reserve your spot', th: 'จองที่นั่ง' },
  'contact.title': { en: 'Reserve a table', th: 'จองโต๊ะ' },
  'contact.phone': { en: '053 908 888', th: '053 908 888' },
  'contact.address': {
    en: '231/12 1004, Tambon Chang Phueak, Mueang Chiang Mai District, Chiang Mai 50200',
    th: '231/12 1004 ตำบลช้างเผือก อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200',
  },
  'contact.cta.call': { en: 'Call now', th: 'โทรเลย' },
  'contact.cta.fb': { en: 'Message on Facebook', th: 'ส่งข้อความบน Facebook' },
  'contact.location': {
    en: 'Join us tonight. Limited seating to ensure the best acoustic experience.',
    th: 'มาร่วมค่ำคืนนี้กับเรา ที่นั่งมีจำนวนจำกัดเพื่อรักษาประสบการณ์เสียงที่ดีที่สุด',
  },
  'footer.copy': { en: '© The Mellowship Music Destination', th: '© เดอะ เมลโลชิพ มิวสิกเดสติเนชัน' },
  'footer.ig': { en: 'Instagram', th: 'Instagram' },
  'footer.fb': { en: 'Facebook', th: 'Facebook' },
  'happyhour.label': { en: 'LIMITED SEATING', th: 'ที่นั่งจำกัด' },
  'happyhour.time': { en: 'Reservations recommended', th: 'แนะนำให้สำรองที่นั่ง' },
  'happyhour.deal': {
    en: 'Designed for the best acoustic experience',
    th: 'ออกแบบเพื่อประสบการณ์เสียงที่ดีที่สุด',
  },
  'rating.reviews': { en: '758 reviews', th: '758 รีวิว' },
  'rating.price': { en: '฿200-400 per person', th: '฿200-400 ต่อคน' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'th' : 'en');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
