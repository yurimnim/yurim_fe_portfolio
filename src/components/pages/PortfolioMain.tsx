import { motion, useScroll, useSpring } from 'framer-motion';
import IntroSection from '@/components/templates/IntroSection';
import AboutSection from '@/components/templates/AboutSection';
import SkillsetSection from '@/components/templates/SkillsetSection';

const PortfolioMain = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-4 bg-gradient-to-r from-lime-500 to-lime-300"
        style={{ 
          scaleX,
          transformOrigin: '0%',
          zIndex: 50 
        }}
      />

      <main className="relative w-full min-h-screen">
        <motion.section 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <IntroSection />
        </motion.section>

     
        <motion.section 
          className="w-full flex justify-center mt-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AboutSection />
        </motion.section>

        <motion.section 
          className="w-full flex justify-center mt-28 mb-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SkillsetSection />
        </motion.section>
      </main>
    </>
  );
};

export default PortfolioMain;