import foto from "../../assets/img-course.jpg"
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const features = [
  "My entire #SetAndForget Strategy and entry point.",
  "Sundays swings and all my signals and trades that I will take during the week.",
  "Access to my Discord private community to get feedback directly from me.",
  "All my psychological hacks that allow me to stay profitable in the markets.",
  "Access to the initiation module, in case you’re starting from the bottom.",
  "Access to my Discord private community to get feedback directly from me.",
  "Access to the initiation module, in case you’re starting from the bottom."
]

export default function InfoCourse() {
  return (

    <div className="flex items-center justify-center bg-bgPrimaryColor">

      <div className="flex max-w-6xl max-h-2xl bg-bgSecondaryColor overflow-hidden">
        <div className="w-1/2">
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            src={foto} alt="course" className="w-full h-full object-cover" />
        </div>

        <div className="col-lg-6 pt-4 pt-lg-0 content p-6">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-white font-poppins">FULL SET AND FORGET STRATEGY</motion.h2>

          <hr className="m-2" />
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-xl text-primaryColor font-semibold font-poppins ml-2">Total - $1,498.00</motion.p>
          <hr className="mx-2 my-4" />
          {features.map((feature, index) => {
            return (
              <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 * index}}
              viewport={{ once: true }}
              key={index}
              className="flex items-center font-poppins text-sm text-slate-100 mb-4"> <IoMdCheckmarkCircleOutline size={25} color="#4dd5ff" className="mr-2" /> {feature}</motion.div>
            )
          })}

          <motion.div 
          
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="">
            <Link to="/" className="bg-primaryColor hover:bg-primaryColorHover rounded-lg p-2 max-w-44 flex items-center justify-center mt-6 text-gray-800">Proceed to Checkout</Link>
          </motion.div>
        </div>
      </div>
    </div>

  )
}