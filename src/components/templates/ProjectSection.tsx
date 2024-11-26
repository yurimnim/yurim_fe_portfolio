import TitleText from '@/components/atoms/TitleText';
import ProjectContainer from '@/components/molecules/ProjectContainer';
import project_a_1 from '@/assets/images/project_a_1.png';
import project_a_2 from '@/assets/images/project_a_2.png';
import project_b_1 from '@/assets/images/project_b_1.png';
import project_b_3 from '@/assets/images/project_b_3.png';
import project_b_2 from '@/assets/images/project_b_2.png';
import project_c_1 from '@/assets/images/project_c_1.png';
import project_c_2 from '@/assets/images/project_c_1.png';
import project_d_1 from '@/assets/images/project_c_1.png';
import project_d_2 from '@/assets/images/project_c_1.png';
import { useLocale } from '@/hooks/useLocale';
interface ProjectContents {
  imageList: string[];
  title: string;
  subtitle: string;
  description: string;
}

const ProjectSection = () => {
  const { t } = useLocale();

  

  return (
    <div className="relative w-screen h-fit flex flex-col bg-slate-100 ">
      <div className="w-full flex justify-center my-12 lg:my-16"> 
        <TitleText titleText='Projects' />
        </div>

    <div className="w-full flex flex-col justify-center">
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