import TitleText from '@/components/atoms/TitleText';
import ProjectContainer from '@/components/molecules/ProjectContainer';

import project_a_1 from '@/assets/images/project_a_1.png';
import project_a_2 from '@/assets/images/project_a_2.png';

const ProjectSection = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
  <div className="absolute top-10 lg:top-20 lg:left-52">
    <TitleText titleText='Projects' />
    </div>

    <div className="w-full mt-20 ml-10">
        <ProjectContainer 
          title='Project Title'
          subtitle='Project Subtitle'
          description='Project Description'
          imageList={[
            project_a_1,
            project_a_2
          ]}
        />
      </div>
    </div>
  )
}

export default ProjectSection