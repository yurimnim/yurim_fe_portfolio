import React, { useMemo } from 'react';
import ProjectContainer from '@/components/molecules/ProjectContainer';
import SectionTitle from '@/components/atoms/SectionTitle';
import { useLocale } from '@/hooks/useLocale';
import cheiron_gif from '@/assets/images/cheiron.gif';
import cro_1 from '@/assets/images/CRO-1.png';
import cro_2 from '@/assets/images/CRO-2.png';
import knu_1 from '@/assets/images/knu-1.png';
import knu_2 from '@/assets/images/knu-2.png';
import knu_gif from '@/assets/images/knu.gif';
import itall_jpg from '@/assets/images/itall.jpg';
import { ProjectContents } from '@/types';
import { motion } from 'framer-motion';

const ProjectSection = () => {
  const { t } = useLocale();

  const projects = useMemo<ProjectContents[]>(() => [
    {
      title: t('projects.cheiron.title'),
      subtitle: t('projects.cheiron.subtitle'),
      description: t('projects.cheiron.description'),
      imageList: [cheiron_gif],
      techStack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Framer Motion', 'Tailwind CSS', 'Vitest', '@tanstack/react-virtual'],
      url: ['https://cheiron.bio'],
    },
    {
      title: t('projects.healthcare.title'),
      subtitle: t('projects.healthcare.subtitle'),
      description: t('projects.healthcare.description'),
      imageList: [cro_1, cro_2],
      techStack: ['TypeScript', 'Next.js', 'MUI', 'Emotion', 'Redux'],
    },
    {
      title: t('projects.kongju.title'),
      subtitle: t('projects.kongju.subtitle'),
      description: t('projects.kongju.description'),
      imageList: [knu_gif, knu_1, knu_2],
      imageFit: 'cover',
      imagePosition: '100% center',
      techStack: ['TypeScript', 'React', 'MUI', 'Styled-Components', 'Redux', 'Phaser'],
    },
    {
      title: t('projects.itall.title'),
      subtitle: t('projects.itall.subtitle'),
      description: t('projects.itall.description'),
      imageList: [itall_jpg],
      imageFit: 'cover',
      imagePosition: 'center',
      techStack: ['TypeScript', 'React', 'Tailwind CSS', 'React-Query', 'Zustand']
    }
  ], [t]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-screen h-auto flex flex-col bg-slate-50 dark:bg-[#111111] pb-16 lg:pb-28 transition-colors duration-300">
      <div className="w-full flex justify-center my-12 lg:my-20">
        <SectionTitle text="projects" />
      </div>

      <div className="w-full flex flex-col justify-center gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
              margin: "-100px"
            }}
          >
            <ProjectContainer
              {...project}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProjectSection);
