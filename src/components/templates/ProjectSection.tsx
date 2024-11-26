import React, { useMemo } from 'react';
import TitleText from '@/components/atoms/TitleText';
import ProjectContainer from '@/components/molecules/ProjectContainer';
import { useLocale } from '@/hooks/useLocale';
import project_a_1 from '@/assets/images/project_a_1.png';
import project_a_2 from '@/assets/images/project_a_2.png';
import project_b_1 from '@/assets/images/project_b_1.png';
import project_b_2 from '@/assets/images/project_b_2.png';
import project_b_3 from '@/assets/images/project_b_3.png';
import project_c_1 from '@/assets/images/project_c_1.png';
import project_c_2 from '@/assets/images/project_c_2.png';
import project_d_1 from '@/assets/images/project_d_1.png';
import project_d_2 from '@/assets/images/project_d_2.png';
import { ProjectContents } from '@/types';
import { motion } from 'framer-motion';

const ProjectSection = () => {
  const { t } = useLocale();

  const projects = useMemo<ProjectContents[]>(() => [
    {
      title: t('projects.healthcare.title'),
      subtitle: t('projects.healthcare.subtitle'),
      description: t('projects.healthcare.description'),
      imageList: [project_a_1, project_a_2], 
      techStack: [ 'TypeScript', 'Next.js', 'MUI', 'Emotion', 'Redux'],
      url: ['http://222.122.186.31/admin']
    },
    {
      title: t('projects.education.title'),
      subtitle: t('projects.education.subtitle'),
      description: t('projects.education.description'),
      imageList: [project_b_1, project_b_2, project_b_3],
      techStack: [ 'TypeScript', 'Next.js', 'MUI', 'Emotion', 'Redux'],
      url: ['https://healthcare.drmeta.kr']
    },
    {
      title: t('projects.kongju.title'),
      subtitle: t('projects.kongju.subtitle'),
      description: t('projects.kongju.description'),
      imageList: [project_c_1, project_c_2], 
      techStack: [ 'TypeScript', 'React', 'MUI', 'Styled-Components', 'Redux', 'Phaser'],
      url: ['http://knu.220.90.208.8.nip.io:30029/']
    },
    {
      title: t('projects.itall.title'),
      subtitle: t('projects.itall.subtitle'),
      description: t('projects.itall.description'),
      imageList: [project_d_1, project_d_2], 
      techStack: [ 'TypeScript', 'React', 'Tailwind CSS', 'React-Query', 'Zustand']
    }
  ], [t]); 

  const ProjectContainerMemo = React.memo(ProjectContainer);

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
    <div className="relative w-screen h-auto flex flex-col bg-slate-100 pb-16 lg:pb-28">
      <div className="w-full flex justify-center my-12 lg:my-16">
        <TitleText titleText='Projects' />
      </div>
      
      <div className="w-full flex flex-col justify-center gap-10">
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
            <ProjectContainerMemo
              key={`project-${index}`}
              {...project}
            />
           </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProjectSection);