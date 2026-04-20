import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const ref = useReveal<HTMLElement>();
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const videos = [
    {
      src: '/video/VDO1.mp4',
      poster: '/stage_spotlight.jpg',
      title: language === 'en' ? 'Soundcheck' : 'ซาวด์เช็ก',
    },
    {
      src: '/video/VDO2.mp4',
      poster: '/sax_player.jpg',
      title: language === 'en' ? 'Sax Feature' : 'แซกโซโฟน',
    },
    {
      src: '/video/VDO3.mp4',
      poster: '/seating_area.jpg',
      title: language === 'en' ? 'Lounge Mood' : 'บรรยากาศเลานจ์',
    },
  ];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeVideo) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [activeVideo]);

  return (
    <section ref={ref} id="experience" className="relative section-pad bg-[#0A0908] overflow-hidden">
      {/* Lounge background image */}
      <div className="absolute inset-0 opacity-[0.12]">
        <img src="/seating_area.jpg" alt="" className="w-full h-full object-cover img-cinematic" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908] via-transparent to-[#0A0908]" />
      </div>

      <div className="relative container-deco">
        <div className="max-w-3xl mb-10 sm:mb-14" data-reveal>
          <p className="eyebrow mb-5">
            {language === 'en' ? 'Our Heritage' : 'เรื่องราวของเรา'}
          </p>
          <h2 className="font-serif text-[clamp(40px,6vw,78px)] leading-[1.05] mb-6">
            <span className="block text-[#F4F1EC]">{language === 'en' ? 'Beyond the music,' : 'เหนือกว่าเสียงดนตรี'}</span>
            <span className="block italic gold-text">{language === 'en' ? "it's the feeling." : 'คือความรู้สึก'}</span>
          </h2>
          <p className="font-display italic text-xl text-[#F4F1EC]/70 leading-relaxed">
            {language === 'en'
              ? 'A sanctuary for true jazz enthusiasts, shaped by warm acoustics, private seating, and the quiet energy of the room.'
              : 'พื้นที่พักใจสำหรับคนรักแจ๊สตัวจริง ที่หล่อหลอมด้วยอะคูสติกอบอุ่น ที่นั่งเป็นส่วนตัว และพลังเงียบๆ ของห้อง'}
          </p>
        </div>

        <div data-reveal data-delay="120">
          <div className="flex items-end justify-between gap-6 mb-6">
            <p className="hidden sm:block text-sm text-[#F4F1EC]/45 max-w-sm text-right">
              {language === 'en' ? 'Three short venue moments, played one at a time.' : 'วิดีโอสั้น 3 ช่วงบรรยากาศ เล่นทีละตัว'}
            </p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex gap-4 sm:gap-5 md:grid md:grid-cols-3 md:min-w-0">
              {videos.map((video, index) => (
                <div
                  key={video.src}
                  className={`relative deco-corners w-[170px] flex-shrink-0 bg-[#141210] p-2 shadow-[0_18px_55px_rgba(0,0,0,0.3)] transition-opacity duration-300 sm:w-[190px] md:w-auto md:flex-shrink ${
                    activeVideo === index ? 'opacity-100' : 'opacity-55'
                  }`}
                >
                  <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
                  <div className="relative aspect-[9/16] overflow-hidden bg-[#0F0D0B]">
                    <img
                      src={video.poster}
                      alt=""
                      aria-hidden="true"
                      className={`absolute inset-0 w-full h-full object-cover img-warm transition-opacity duration-300 ${
                        activeVideo === index ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <video
                      ref={(node) => { videoRefs.current[index] = node; }}
                      src={video.src}
                      poster={video.poster}
                      className={`absolute inset-0 w-full h-full object-cover img-warm transition-opacity duration-300 ${
                        activeVideo === index ? 'opacity-100' : 'opacity-0'
                      }`}
                      muted
                      playsInline
                      preload="metadata"
                      onEnded={() => setActiveVideo((index + 1) % videos.length)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
