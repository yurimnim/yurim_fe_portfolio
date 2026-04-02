import { ChevronsDown } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/hooks/useLocale"

const Scrolldown = () => {
  const { t } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5, delay: 2 }}
      className="flex flex-col justify-center items-center z-10"
    >
      <h5 className='font-mono text-sm font-light text-gray-500 dark:text-gray-500 mb-2 tracking-wide'>
        {t('scroll.down')}
      </h5>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-gray-500 dark:text-gray-500"
      >
        <ChevronsDown strokeWidth={1.5} size={20} />
      </motion.div>
    </motion.div>
  )
}

export default Scrolldown
