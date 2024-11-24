import TitleText from '@/components/atoms/TitleText';
import { useLocale } from '@/hooks/useLocale';
import TechStackContainer from '../molecules/TechStackContainer';
import my_profile from '@/assets/images/my_profile.jpg';
import { motion } from 'framer-motion';

const HelloSection = () => {
  const { t } = useLocale();

  return (
    <div className="relative min-h-screen w-full bg-white px-5 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Container */}
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={my_profile} 
              alt="my_profile" 
              className="
                w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] 
                h-auto rounded-3xl object-cover 
                shadow-lg shadow-gray-200 dark:shadow-gray-800
                transition-transform duration-300 
                hover:scale-[1.02]
                bottom-0
              "
            />
          </motion.div>

          {/* Text Content Container */}
          <motion.div 
            className="w-full lg:w-2/3 flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Hello Title */}
            <div className="flex justify-center lg:justify-start">
              <TitleText titleText='Hello!' />
            </div>

            {/* About Text */}
            <div className="flex flex-col gap-4">
              <motion.h3 
                className="
                  text-lg sm:text-xl md:text-2xl lg:text-3xl 
                  font-sans font-normal
                  text-gray-700 dark:text-orange-100 
                  tracking-normal
                  text-pretty
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t('about.title')}
              </motion.h3>

              <motion.h3 
                className="
                  text-lg sm:text-xl md:text-2xl lg:text-2xl 
                  font-sans font-light 
                  text-gray-800 dark:text-orange-100 
                  tracking-normal
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {t('about.description')}
              </motion.h3>
            </div>

            {/* Skills Section */}
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex justify-center lg:justify-start mt-7">
                <TitleText titleText='Skills' />
              </div>
              <TechStackContainer />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelloSection;