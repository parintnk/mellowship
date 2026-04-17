import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'en' | 'th';

interface Translations {
  [key: string]: {
    en: string;
    th: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.menu': {
    en: 'MENU',
    th: 'เมนู'
  },
  'nav.book': {
    en: 'BOOK',
    th: 'จอง'
  },
  
  // Hero
  'hero.title': {
    en: 'THE MELLOWSHIP',
    th: 'เดอะ เมลโลชิพ'
  },
  'hero.subtitle': {
    en: 'Live jazz · Crafted cocktails · Chiang Mai',
    th: 'แจ๊สสด · ค็อกเทลระดับมืออาชีพ · เชียงใหม่'
  },
  'hero.cta.book': {
    en: 'Book a Table',
    th: 'จองโต๊ะ'
  },
  'hero.cta.lineup': {
    en: 'See the Lineup',
    th: 'ดูรายการแสดง'
  },
  
  // Section 2 - Tonight Lineup
  'lineup.label': {
    en: 'TONIGHT',
    th: 'คืนนี้'
  },
  'lineup.title': {
    en: 'LIVE JAZZ',
    th: 'แจ๊สสด'
  },
  'lineup.time': {
    en: '8PM–LATE',
    th: '2ทุ่ม–ดึก'
  },
  'lineup.venue': {
    en: 'THE MELLOWSHIP',
    th: 'เดอะ เมลโลชิพ'
  },
  'lineup.cta': {
    en: 'Reserve a seat',
    th: 'จองที่นั่ง'
  },
  
  // Section 3 - Experience
  'exp.music': {
    en: 'GOOD MUSIC',
    th: 'ดนตรีเพราะ'
  },
  'exp.food': {
    en: 'GOOD FOOD',
    th: 'อาหารอร่อย'
  },
  'exp.drinks': {
    en: 'GOOD DRINKS',
    th: 'เครื่องดื่มดี'
  },
  'exp.times': {
    en: 'GOOD TIMES',
    th: 'ช่วงเวลาดีๆ'
  },
  'exp.hours': {
    en: 'TUE–SUN · 5PM–MIDNIGHT',
    th: 'อังคาร–อาทิตย์ · 17:00–00:00'
  },
  'exp.cta': {
    en: 'View the menu',
    th: 'ดูเมนู'
  },
  
  // Section 4 - Poster Wall
  'poster.title': {
    en: 'LIVE JAZZ',
    th: 'แจ๊สสด'
  },
  'poster.time': {
    en: '8PM–LATE',
    th: '2ทุ่ม–ดึก'
  },
  'poster.venue': {
    en: 'THE MELLOWSHIP',
    th: 'เดอะ เมลโลชิพ'
  },
  'poster.cta': {
    en: 'Book now',
    th: 'จองเลย'
  },
  
  // Section 5 - Menu & Hours
  'menu.title': {
    en: 'Menu & Hours',
    th: 'เมนูและเวลา'
  },
  'menu.desc': {
    en: 'A tight, seasonal list of drinks and plates built for sharing—best enjoyed with a live set in the background.',
    th: 'เมนูเครื่องดื่มและอาหารตามฤดูกาลที่คัดสรรมาอย่างดี เหมาะสำหรับการแบ่งปันและเพลิดเพลินไปกับดนตรีสด'
  },
  'menu.drinks': {
    en: 'Drinks',
    th: 'เครื่องดื่ม'
  },
  'menu.cocktails': {
    en: 'Cocktails',
    th: 'ค็อกเทล'
  },
  'menu.wine': {
    en: 'Wine',
    th: 'ไวน์'
  },
  'menu.beers': {
    en: 'Beers',
    th: 'เบียร์'
  },
  'menu.nonalc': {
    en: 'Non-alcoholic',
    th: 'ไม่มีแอลกอฮอล์'
  },
  'menu.bites': {
    en: 'Bites',
    th: 'อาหารทานเล่น'
  },
  'menu.snacks': {
    en: 'Bar snacks',
    th: 'ของทานเล่น'
  },
  'menu.plates': {
    en: 'Plates',
    th: 'จานหลัก'
  },
  'menu.desserts': {
    en: 'Desserts',
    th: 'ของหวาน'
  },
  'menu.hours': {
    en: 'Hours',
    th: 'เวลาเปิด'
  },
  'menu.hours.detail': {
    en: 'Tue–Sun: 5PM–Midnight',
    th: 'อังคาร–อาทิตย์: 17:00–00:00'
  },
  'menu.closed': {
    en: 'Mon: Closed',
    th: 'จันทร์: ปิด'
  },
  'menu.cta': {
    en: 'See full menu (PDF)',
    th: 'ดูเมนูเต็ม (PDF)'
  },
  
  // Section 6 - Stage & Seating
  'stage.title': {
    en: 'STAGE & SEATING',
    th: 'เวทีและที่นั่ง'
  },
  'stage.subtitle': {
    en: 'Intimate room. Big sound. Choose your spot.',
    th: 'ห้องที่ใกล้ชิด เสียงที่ยิ่งใหญ่ เลือกที่นั่งของคุณ'
  },
  'stage.front': {
    en: 'Front row tables (limited)',
    th: 'โต๊ะแถวหน้า (จำกัด)'
  },
  'stage.bar': {
    en: 'Bar counter',
    th: 'เคาน์เตอร์บาร์'
  },
  'stage.lounge': {
    en: 'Lounge seating',
    th: 'โซฟานั่งเล่น'
  },
  'stage.cta': {
    en: 'Reserve your spot',
    th: 'จองที่นั่ง'
  },
  
  // Section 7 - Event Card
  'event.label': {
    en: 'FEATURED EVENT',
    th: 'อีเวนต์พิเศษ'
  },
  'event.title': {
    en: 'LIVE JAZZ',
    th: 'แจ๊สสด'
  },
  'event.time': {
    en: '8PM–LATE',
    th: '2ทุ่ม–ดึก'
  },
  'event.venue': {
    en: 'THE MELLOWSHIP',
    th: 'เดอะ เมลโลชิพ'
  },
  'event.cta': {
    en: 'Get tickets',
    th: 'รับตั๋ว'
  },
  
  // Section 8 - Newsletter
  'news.title': {
    en: 'Stay in the loop',
    th: 'ติดตามข่าวสาร'
  },
  'news.desc': {
    en: 'Lineups, vinyl nights, and one-off sessions—sent weekly.',
    th: 'รายการแสดง ค่ำคืนไวนิล และกิจกรรมพิเศษ—ส่งถึงคุณทุกสัปดาห์'
  },
  'news.placeholder': {
    en: 'Enter your email',
    th: 'กรอกอีเมลของคุณ'
  },
  'news.button': {
    en: 'Subscribe',
    th: 'สมัครรับข่าวสาร'
  },
  'news.micro': {
    en: 'No spam. Unsubscribe anytime.',
    th: 'ไม่ส่งสแปม ยกเลิกได้ตลอดเวลา'
  },
  
  // Section 9 - Contact
  'contact.title': {
    en: 'Book a table',
    th: 'จองโต๊ะ'
  },
  'contact.phone': {
    en: '053 908 888',
    th: '053 908 888'
  },
  'contact.address': {
    en: '231/12 1004, Chang Phueak, Chiang Mai',
    th: '231/12 1004 ต.ช้างเผือก อ.เมืองเชียงใหม่'
  },
  'contact.cta.call': {
    en: 'Call now',
    th: 'โทรเลย'
  },
  'contact.cta.fb': {
    en: 'Message on Facebook',
    th: 'ส่งข้อความบน Facebook'
  },
  'contact.location': {
    en: 'Located at ibis Styles Chiang Mai Hotel',
    th: 'ตั้งอยู่ที่โรงแรมไอบิส สไตล์ เชียงใหม่'
  },
  'footer.copy': {
    en: '© The Mellowship Jazz Club',
    th: '© เดอะ เมลโลชิพ แจ๊ส คลับ'
  },
  'footer.ig': {
    en: 'Instagram',
    th: 'Instagram'
  },
  'footer.fb': {
    en: 'Facebook',
    th: 'Facebook'
  },
  
  // Happy Hour
  'happyhour.label': {
    en: 'HAPPY HOUR',
    th: 'แฮปปี้ อาวร์'
  },
  'happyhour.time': {
    en: '5PM – 8PM',
    th: '17:00 – 20:00'
  },
  'happyhour.deal': {
    en: '2 FOR 1 COCKTAILS',
    th: 'ค็อกเทล 2 แก้ว ราคา 1 แก้ว'
  },
  
  // Rating
  'rating.reviews': {
    en: '758 reviews',
    th: '758 รีวิว'
  },
  'rating.price': {
    en: '฿200-400 per person',
    th: '฿200-400 ต่อคน'
  }
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
