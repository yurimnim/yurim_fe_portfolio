import { useLocale } from '@/hooks/useLocale';
import TypewriterText from '@/components/atoms/TypewriterText';
import { useState } from 'react';

const IntroSection = () => {
  const { t } = useLocale();
  const [showDescription, setShowDescription] = useState(false);

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
      <div className="max-w-[90vw] max-h-fit m-auto px-4">
        <h1 className="
          tracking-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
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
            text-lg sm:text-xl md:text-2xl lg:text-3xl
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
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default IntroSection;
