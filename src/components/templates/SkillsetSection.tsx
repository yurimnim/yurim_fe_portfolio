import TechStackContainer from "../molecules/TechStackContainer"
import TitleText from "@/components/atoms/TitleText"

const SkillsetSection = () => {
  return (
    <div className="flex flex-col mb-auto w-8/12 lg:w-7/12 md:w-7/12 border-2 border-lime-300 rounded-[10px] p-12">
        <div className='w-full flex justify-end -mt-16 pr-10'>
         <TitleText titleText='Skills' />
      </div>

    <div className="flex flex-col">
        <TechStackContainer />
    </div>

    </div>
  )
}

export default SkillsetSection