import TitleText from '@/components/atoms/TitleText';
import ProjectContainer from '@/components/molecules/ProjectContainer';
import computer from '@/assets/images/computer.jpg';
import lime_2 from '@/assets/images/lime_2.jpg';

const ProjectSection = () => {
  return (
    <div className=" relative w-screen h-screen flex items-center justify-center
      overflow-hidden bg-slate-100">
        <TitleText titleText='Projects' />
        <ProjectContainer 
          title='Project Title'
          subtitle='Project Subtitle'
          description='Project Description'
          imageList={[computer, lime_2]}
        />
    </div>
  )
}

export default ProjectSection