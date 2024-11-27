import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import IntroSection from '@/components/templates/IntroSection';
import HelloSection from '@/components/templates/HelloSection';
import ProjectSection from '@/components/templates/ProjectSection';
import HeaderMenu from '@/components/molecules/HeaderMenu';
import Scrolldown from '../atoms/Scrolldown';
import ContactSection from '@/components/templates/ContactSection';

const PortfolioMain = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);
  
  const introRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <HeaderMenu 
          onHomeClick={() => handleScroll(introRef)}
          onHelloClick={() => handleScroll(helloRef)}
          onProjectsClick={() => handleScroll(projectRef)}
          onContactClick={() => handleScroll(contactRef)}
        />
      </motion.div>

      <main className="relative w-full">
        <div ref={introRef} className="w-full flex justify-center min-h-screen relative">
          <IntroSection />

          <div className='absolute bottom-5 w-full flex justify-center'>
            <Scrolldown />
          </div>
        </div>

        <div ref={helloRef} className="w-full flex justify-center min-h-screen">
          <HelloSection />
        </div>

        <div ref={projectRef} className="w-full flex justify-center min-h-screen">
          <ProjectSection />
        </div>

        <div ref={contactRef} className="w-full flex justify-center min-h-[100px]">
          <ContactSection />
        </div>
      </main>
    </>
  );
};

export default PortfolioMain;