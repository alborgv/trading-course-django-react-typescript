import { motion } from "framer-motion"

export default function OurCourse() {
  return (
    <div className=" bg-bgPrimaryColor">
      <motion.div 
        
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center flex-col pt-28">
        <h1 className="font-lato font-bold text-6xl text-primaryColor">Our Course</h1>
        <p className="p-4 max-w-3xl text-center text-xl font-semibold text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis erat quam. Cras consectetur lectus neque, ut iaculis nulla ultricies ut. Mauris nec convallis massa.</p>
      </motion.div>
    </div>
  )
}