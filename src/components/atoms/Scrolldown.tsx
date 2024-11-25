import { ChevronsDown } from "lucide-react"

const Scrolldown = () => {
  return (
<div className="flex flex-col absolute bottom-7 justify-end items-center">
      <h5 className='font-sans font-gray-500 font-light text-gray-700'>
        스크롤을 내려주세요
        </h5>
      
      <div className="flex flex-col items-center">
        <ChevronsDown strokeWidth={1.5}/>
      </div>
    </div>
  )
}

export default Scrolldown