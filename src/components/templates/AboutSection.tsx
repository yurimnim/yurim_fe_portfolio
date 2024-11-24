import TitleText from '@/components/atoms/TitleText';
import { useLocale } from '@/hooks/useLocale';

const AboutSection = () => {
  const { t } = useLocale();

  return (
  <div className="flex flex-col mb-auto w-8/12 lg:w-7/12 md:w-7/12 border-2 border-lime-300 rounded-[10px] p-12">
      <div className='w-full flex justify-start -mt-20 ml-10'>
         <TitleText titleText='Hello!' />
      </div>

      <div className="flex flex-col max-h-96">
          <h3 className="text-start text-2xl sm:text-xl md:text-2xl lg:text-3xl mt-3 md:mt-3 lg:mt-8 font-sans font-light text-gray-800 dark:text-orange-100 tracking-tight">
            {t('about.title')} 
          </h3>
          <h3 className="text-start text-2xl sm:text-xl md:text-2xl lg:text-3xl font-sans font-light text-gray-800 dark:text-orange-100 tracking-normal">
            {t('about.description')}
          </h3>
      </div>
    </div>
   
  )
}

export default AboutSection