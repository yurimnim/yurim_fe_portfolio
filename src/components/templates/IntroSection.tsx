import { useLocale } from '@/hooks/useLocale';
import TypewriterText from '@/components/atoms/TypewriterText';

const IntroSection = () => {
  const { t } = useLocale();

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
    <div className="max-w-[90vw] mx-auto max-h-[10] mt-3">
        <h1 className="tracking-tighte text-6xl font-sans sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-gray-900 dark:text-orange-100 mb-2">
          <span className='font-medium text-lime-500 tracking-wide'>{'\u003C'}</span>
          <TypewriterText
            text={' '+ t('main.title')}
            speed={200}
            cursorClassName='bg-lime-200 dark:bg-white'
          />
          <span className='font-medium tracking-tighter text-lime-500'>&nbsp;{'\u002F'}{'\u003E'}</span>
        </h1>
        
     <p className="text-xl sm:text-xl md:text-2xl lg:text-4xl
        mt-3
        md:mt-3
        lg:mt-8
        font-mono
        text-gray-800 dark:text-orange-100
        text-center
        tracking-wider
      ">
        <TypewriterText
          text={t('main.description')}
          speed={50}
          delay={50}
        />
      </p>
      </div>
    </div>
  );
};

export default IntroSection;
