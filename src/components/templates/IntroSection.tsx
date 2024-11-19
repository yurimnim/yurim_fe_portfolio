import { useLocale } from '@/hooks/useLocale';
import TypewriterText from '@/components/atoms/TypewriterText';

const IntroSection = () => {
  const { t } = useLocale();

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-4">
        <TypewriterText
          text={t('main.title')}
          speed={200}
          className="text-lime-500 dark:text-orange-100 text-9xl"
          cursorClassName='bg-lime-900 dark:bg-white h-1000-pxr'
        />
      </h1>
      
      <p className="font-sans text-5xl tracking-tight leading-snug font-light">
        <TypewriterText
          text={t('main.description')}
          speed={50}
          delay={50}
          className="text-gray-700 dark:text-gray-300"
        />
      </p>
    </div>
  );
};

export default IntroSection;
