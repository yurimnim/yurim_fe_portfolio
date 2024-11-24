import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroSection from '@/components/templates/IntroSection';
import HelloSection from '@/components/templates/HelloSection';
import HeaderMenu from '@/components/molecules/HeaderMenu';

const PortfolioMain = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

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
      
      <motion.div 
        className={`
          fixed top-4 left-0 right-0 z-40
          transition-all duration-1000 ease-in-out
          ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 2.5 }}
      >
        <HeaderMenu />
      </motion.div>

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
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HelloSection />
        </motion.section>

        {/* <motion.section 
          className="w-full flex justify-center mt-28 mb-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SkillsetSection />
        </motion.section> */}
      </main>
    </>
  );
};

export default PortfolioMain;