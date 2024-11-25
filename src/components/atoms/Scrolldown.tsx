import { ChevronsDown } from "lucide-react"
import { motion } from "framer-motion"

const Scrolldown = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 2 }} className="flex flex-col absolute bottom-7 justify-end items-center">
      <h5 className='font-sans font-gray-500 font-light text-gray-700'>
        스크롤을 내려주세요
        </h5>
      
      <div className="flex flex-col items-center">
        <ChevronsDown strokeWidth={1.5}/>
      </div>
    </motion.div>
  )
}

export default Scrolldown