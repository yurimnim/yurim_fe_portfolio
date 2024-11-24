import TitleText from '@/components/atoms/TitleText';
import { useLocale } from '@/hooks/useLocale';
import TechStackContainer from '../molecules/TechStackContainer';

const HelloSection = () => {
  const { t } = useLocale();

  return (
  <div className="flex flex-col mb-auto relative w-screen h-screen bg-gray-100 px-16 lg:px-96 md:px-20 py-20">
      <div className='w-full flex justify-start'>
         <TitleText titleText='Hello!' />
      </div>

      <div className="flex flex-col max-h-16">
          <h3 className="text-start text-2xl sm:text-xl md:text-2xl lg:text-3xl mt-3 md:mt-3 lg:mt-8 font-sans font-light text-gray-800 dark:text-orange-100 tracking-tight">
            {t('about.title')} 
          </h3>
          <h3 className="text-start text-2xl sm:text-xl md:text-2xl lg:text-3xl font-sans font-light text-gray-800 dark:text-orange-100 tracking-normal">
            {t('about.description')}
          </h3>
      </div>

      <div className='w-full flex justify-start mt-40'>
         <TitleText titleText='Skills' />
      </div>

        <div className="flex flex-col">
            <TechStackContainer />
        </div>
    

    </div>
   
  )
}

export default HelloSection