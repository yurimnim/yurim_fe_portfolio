import { ChevronsDown } from "lucide-react"
import { motion } from "framer-motion"

const Scrolldown = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2.5, delay: 2 }}
    className="flex flex-col justify-center items-center z-10"
  >
    <h5 className='font-sans font-gray-500 font-light text-gray-700 mb-2'>
      스크롤을 내려주세요
    </h5>
    
    <motion.div 
      animate={{ 
        y: [0, 10, 0] 
      }}
      transition={{ 
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ChevronsDown strokeWidth={1.5} />
    </motion.div>
  </motion.div>
  )
}

export default Scrolldown