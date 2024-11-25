import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroSection from '@/components/templates/IntroSection';
import HelloSection from '@/components/templates/HelloSection';
import ProjectSection from '@/components/templates/ProjectSection';
import HeaderMenu from '@/components/molecules/HeaderMenu';
import Scrolldown from '../atoms/Scrolldown';

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
    {/* 스크롤 프로그레서 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-4 bg-gradient-to-r from-lime-500 to-lime-300"
        style={{
          scaleX,
          transformOrigin: '0%',
          zIndex: 50
        }}
      />
      
      {/* 헤더 */}
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


    {/* 스크롤 프로그레서 */}
      <main className="relative w-full min-h-screen">
        <div className="w-full flex justify-center">
          <IntroSection />
        </div>

        <div className='absolute bottom-0 w-full flex justify-center'>
           <Scrolldown />
        </div>

        <div className="w-full flex justify-center">
          <HelloSection />
        </div>

        <div className="w-full flex justify-center">
          <ProjectSection />
        </div>
      </main>
    </>
  );
};

export default PortfolioMain;