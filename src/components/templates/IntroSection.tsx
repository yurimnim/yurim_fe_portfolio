import { useLocale } from '@/hooks/useLocale';
import TypewriterText from '@/components/atoms/TypewriterText';
import { useState } from 'react';

const IntroSection = () => {
  const { t } = useLocale();
  const [showDescription, setShowDescription] = useState(false);

  const titleSegments = [
    { text: '\u003C', className: 'font-medium text-lime-500 tracking-wide' },
    { text: ' ' + t('main.title') },
    { text: ' \u002F\u003E', className: 'font-medium tracking-tighter text-lime-500' }
  ];

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="max-w-[90vw] mx-auto max-h-[10] mt-3">
        <h1 className="tracking-tighte text-6xl font-sans sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-gray-900 dark:text-orange-100 mb-2">
          <TypewriterText
            segments={titleSegments}
            speed={200}
            onComplete={() => setShowDescription(true)}
            showCursor={!showDescription}
          />
        </h1>

        {showDescription && (
          <p className="text-xl sm:text-xl md:text-2xl lg:text-4xl mt-3 md:mt-3 lg:mt-8 font-mono text-gray-800 dark:text-orange-100 text-center tracking-wider">
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
