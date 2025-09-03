import { motion } from "framer-motion"
import { TbChevronsUpRight } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";


const features = [
  {
    "icon": TbChevronsUpRight,
    "title": "Sign up to start", 
    "description": "Register quickly and start learning at your own pace - your future starts today!"
  },
  {
    "icon": HiMiniUserGroup,
    "title": "Join the community", 
    "description": "Get started and in seconds begin studying immediately with access to exclusive resources."
  },
  {
    "icon": FaCheck,
    "title": "Put it to use", 
    "description": "Put everything you learn into practice and start seeing concrete results in your career or personal life."
  },
]


export default function Steps() {
  return (
    
    <div className="flex items-center justify-center columns-3 bg-bgPrimaryColor">
    {features.map((feature, index) => {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 * index }}
          viewport={{ once: true }}
          key={index} className="p-24 flex items-center justify-center text-center flex-col">
          <feature.icon className="text-6xl text-primaryColor" />
          <h2 className="text-2xl font-bold font-lato text-slate-50 p-2">{feature.title}</h2>
          <p className="text-slate-300 min-h-[100px] text-lg max-w-xl">{feature.description}</p>
        </motion.div>
      )
    })}
  </div>
  )
}