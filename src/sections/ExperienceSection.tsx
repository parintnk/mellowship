import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Instagram, Play } from 'lucide-react';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const ref = useReveal<HTMLElement>();

  const reels = [
    {
      image: '/stage_spotlight.jpg',
      title: language === 'en' ? 'Soundcheck' : 'ซาวด์เช็ก',
      duration: '0:15',
    },
    {
      image: '/sax_player.jpg',
      title: language === 'en' ? 'Sax Feature' : 'แซกโซโฟน',
      duration: '0:22',
    },
    {
      image: '/seating_area.jpg',
      title: language === 'en' ? 'Lounge Mood' : 'บรรยากาศเลานจ์',
      duration: '0:18',
    },
    {
      image: '/stage_drums.jpg',
      title: language === 'en' ? 'Late Set' : 'เซ็ตดึก',
      duration: '0:20',
    },
  ];

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
            <p className="font-mono text-[10px] tracking-[0.35em] text-[#D4A84B] uppercase">
              {language === 'en' ? 'Instagram Reels Preview' : 'ตัวอย่าง Instagram Reels'}
            </p>
            <p className="hidden sm:block text-sm text-[#F4F1EC]/45 max-w-sm text-right">
              {language === 'en' ? 'Mock placements for future IG Reels embeds.' : 'ตำแหน่งจำลองสำหรับฝัง IG Reels ภายหลัง'}
            </p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0">
            <div className="flex gap-4 sm:gap-5 min-w-max">
              {reels.map((reel, index) => (
                <div
                  key={reel.title}
                  className="relative deco-corners w-[190px] sm:w-[220px] lg:w-[240px] flex-shrink-0 bg-[#141210] p-2 shadow-[0_18px_55px_rgba(0,0,0,0.3)]"
                >
                  <span className="corner-tl" /><span className="corner-tr" /><span className="corner-bl" /><span className="corner-br" />
                  <div className="relative aspect-[9/16] overflow-hidden bg-[#0F0D0B]">
                    <img src={reel.image} alt="" className="absolute inset-0 w-full h-full object-cover img-warm opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/30 via-[#0A0908]/5 to-[#0A0908]/85" />
                    <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Instagram className="w-3.5 h-3.5 text-[#F0CF65]" />
                        <span className="font-mono text-[8px] tracking-[0.2em] text-[#F4F1EC]/75 uppercase">Reels</span>
                      </div>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F0CF65] animate-pulse" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#D4A84B]/60 bg-[#0A0908]/55 backdrop-blur-sm">
                        <Play className="w-5 h-5 text-[#F0CF65] fill-[#F0CF65] translate-x-0.5" />
                      </div>
                    </div>
                    <div className="absolute inset-x-3 bottom-3 space-y-2">
                      <div className="h-1.5 w-3/4 bg-[#F4F1EC]/25 animate-pulse" />
                      <div className="h-1.5 w-1/2 bg-[#F4F1EC]/15 animate-pulse" />
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-mono text-[8px] tracking-[0.18em] text-[#D4A84B] uppercase">
                          {reel.title}
                        </span>
                        <span className="font-mono text-[8px] text-[#F4F1EC]/45">{reel.duration}</span>
                      </div>
                    </div>
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
