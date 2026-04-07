import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocale } from '@/hooks/useLocale';
import SectionTitle from '@/components/atoms/SectionTitle';
import TechStackContainer from '../molecules/TechStackContainer';

const HelloSection = () => {
  const { t } = useLocale();
  const [containerRef, isContainerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [contentRef, isContentInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [skillsRef, isSkillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <div className="relative w-full bg-white dark:bg-[#0f0f0f] px-6 sm:px-8 lg:px-11 transition-colors duration-300">
      <div className="w-full flex flex-col items-center py-20">
        {/* Section label */}
        <div className="mb-8 lg:mb-12 text-center">
          <SectionTitle text="hello" />
        </div>

        <motion.div
          ref={containerRef}
          className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1400px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Content Container */}
          <motion.div
            ref={contentRef}
            className="flex flex-col gap-6 lg:gap-8 text-center mx-auto lg:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* About Text */}
            <div className="flex flex-col gap-4 mt-0">
              <motion.h3
                className="
                  text-xl sm:text-2xl md:text-2xl lg:text-3xl
                  font-sans font-normal
                  text-gray-800 dark:text-gray-200
                  tracking-normal
                  text-pretty
                  leading-snug
                "
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t('about.title')}
              </motion.h3>

              <motion.p
                className="
                  text-base sm:text-lg md:text-xl lg:text-xl
                  font-sans font-light
                  text-gray-600 dark:text-gray-400
                  tracking-normal
                  leading-relaxed
                  whitespace-pre-wrap
                "
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {t('about.description')}
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.div
              ref={skillsRef}
              className="flex flex-col gap-4 mt-4 lg:mt-8 items-center"
              initial={{ opacity: 0 }}
              animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <SectionTitle text="skills" />
              <div className="flex justify-center w-full">
                <TechStackContainer />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelloSection;
