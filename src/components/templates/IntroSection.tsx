import { useLocale } from '@/hooks/useLocale';
import TypewriterText from '@/components/atoms/TypewriterText';
import { useState } from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const { t } = useLocale();
  const [showDescription, setShowDescription] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const titleSegments = [
    { text: '\u003C', className: 'font-medium text-lime-400 tracking-wide' },
    { text: ' ' + t('main.title') },
    { text: ' \u002F\u003E', className: 'font-medium tracking-tighter text-lime-400' }
  ];

  return (
    <div className="
      relative
      w-screen h-screen
      flex items-center justify-center
      overflow-hidden
      bg-white dark:bg-[#0f0f0f]
      transition-colors duration-300
    ">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 pointer-events-none will-change-filter">
        {/* Main glow: lime-green radial gradient - visible on both modes */}
        <div
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(132, 204, 22, 0.4) 0%, rgba(132, 204, 22, 0.15) 35%, transparent 65%)',
            filter: 'blur(50px)',
            width: '500px',
            height: '500px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Secondary glow: wider spread for atmospheric effect */}
        <div
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(163, 230, 53, 0.25) 0%, transparent 55%)',
            filter: 'blur(90px)',
            width: '800px',
            height: '800px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      <div className="max-w-[90vw] max-h-fit m-auto px-4">
        <h1 className="
          tracking-tight
          text-[2.7rem]
          sm:text-[3.4rem]
          md:text-[4.5rem]
          lg:text-[6.1rem]
          xl:text-[7.65rem]
          font-sans
          break-keep
          whitespace-nowrap
          font-semibold
          text-gray-900 dark:text-gray-100
          mb-2
          leading-tight
        ">
          <TypewriterText
            segments={titleSegments}
            speed={200}
            onComplete={() => setShowDescription(true)}
            showCursor={!showDescription}
          />
        </h1>

        {showDescription && (
          <p className="
            text-lg sm:text-[1.35rem] md:text-[1.7rem] lg:text-[2.3rem]
            mt-3 md:mt-4 lg:mt-6
            font-mono
            text-gray-600 dark:text-gray-400
            text-center
            tracking-wider
          ">
            <TypewriterText
              segments={[{ text: t('main.description') }]}
              speed={50}
              delay={50}
              showCursor
              onComplete={() => setShowScroll(true)}
            />
          </p>
        )}

        {showScroll && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-gray-500 dark:text-gray-500 tracking-widest uppercase font-mono">
              {t('scroll.down')}
            </span>
            <motion.div
              className="w-0.5 h-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(to bottom, rgb(75, 85, 99), transparent)'
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IntroSection;
