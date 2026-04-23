import { Music2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AppLoader({ isReady }: { isReady: boolean }) {
  const { language } = useLanguage();

  return (
    <div
      className={`app-loader ${isReady ? 'app-loader--ready' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={language === 'en' ? 'Loading The Mellowship' : 'กำลังโหลดเดอะ เมลโลชิพ'}
    >
      <div className="app-loader__stage" aria-hidden="true">
        <span className="app-loader__beam app-loader__beam--left" />
        <span className="app-loader__beam app-loader__beam--right" />
      </div>

      <div className="app-loader__content">
        <div className="app-loader__mark">
          <Music2 className="h-6 w-6" />
        </div>
        <p className="app-loader__eyebrow">The Mellowship</p>
        <h1 className="app-loader__title">
          {language === 'en' ? 'Setting the room' : 'กำลังเตรียมห้องดนตรี'}
        </h1>
        <p className="app-loader__copy">
          {language === 'en' ? "Preparing tonight's jazz atmosphere." : 'เตรียมบรรยากาศแจ๊สสำหรับค่ำคืนนี้'}
        </p>

        <div className="app-loader__equalizer" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
