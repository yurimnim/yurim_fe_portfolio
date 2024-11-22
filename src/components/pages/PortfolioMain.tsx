import IntroSection from '@/components/templates/IntroSection';
import ProjectSection from '@/components/templates/ProjectSection';
import {motion, useScroll } from 'framer-motion';

const PortfolioMain = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-screen h-screen ">
      <motion.div
          className="fixed top-0 left-0 right-0 h-5 bg-gradient-to-r from-lime-500 to-lime-300"
          style={{ scaleX: scrollYProgress, 
            originX: 0,
            zIndex: 1000,
            y: 0,
            x: 0,
            transformOrigin: '0 0',
          }}
          />
        <IntroSection />
        <ProjectSection />

    </div>
  )
}

export default PortfolioMain