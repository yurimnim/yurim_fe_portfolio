import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocale } from '@/hooks/useLocale';
import TechStackContainer from '../molecules/TechStackContainer';
import my_profile from '@/assets/images/my_profile.jpg';

const HelloSection = () => {
  const { t } = useLocale();
  const [containerRef, isContainerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [imageRef, isImageInView] = useInView({
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
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0f0f0f] px-6 sm:px-8 lg:px-11 lg:pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-20">
        {/* Section label */}
        <div className="mb-8 lg:mb-12">
          <span className="font-mono text-sm text-gray-400 dark:text-gray-500 tracking-wider">{'// hello'}</span>
        </div>

        <motion.div
          ref={containerRef}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Container */}
          <motion.div
            ref={imageRef}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: -50 }}
            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={my_profile}
              alt="Yurim Lee"
              className="
                w-[280px] sm:w-[320px] md:w-[380px] lg:w-[440px]
                h-auto rounded-2xl object-cover
                shadow-lg shadow-gray-200 dark:shadow-gray-900
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-xl hover:shadow-lime-200/30 dark:hover:shadow-lime-400/10
                mt-0 lg:mt-24
              "
            />
          </motion.div>

          {/* Text Content Container */}
          <motion.div
            ref={contentRef}
            className="w-full lg:w-2/3 flex flex-col gap-6 lg:gap-8"
            initial={{ opacity: 0, x: 80 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* About Text */}
            <div className="flex flex-col gap-4 mt-0 lg:mt-12">
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
              className="flex flex-col gap-4 mt-4 lg:mt-8"
              initial={{ opacity: 0 }}
              animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className="font-mono text-sm text-gray-400 dark:text-gray-500 tracking-wider">{'// skills'}</span>
              <TechStackContainer />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelloSection;
