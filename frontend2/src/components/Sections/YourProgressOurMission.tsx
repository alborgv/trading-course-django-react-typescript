import Bg from "../../assets/bg-red3.png"
import { FaCheckCircle } from "react-icons/fa"
import { motion } from 'framer-motion';

const features = [
  {
    title: "User-Friendly Platform",
    description: "Offers extensive resources for all trading levels, from basics to advanced strategies.",
  },
  {
    title: "Robust Support System",
    description: "Dedicated team of professionals available to assist traders with inquiries.",
  },
  {
    title: "User-Friendly Platform",
    description: "Offers extensive resources for all trading levels, from basics to advanced strategies.",
  },
  {
    title: "Robust Support System",
    description: "Dedicated team of professionals available to assist traders with inquiries.",
  },
]

export default function YourProgressOurMission() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
    <div
      className="relative h-screen bg-bgSecondaryColor"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 57, 94, 0.7), rgba(23, 32, 66, 0.7)), url(${Bg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Contenido */}
      <div className="relative grid grid-cols-2 items-center justify-center h-full px-20">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-neutral-200 p-4 text-left">
          <h1 className="text-5xl mt-4 font-lato">
            Your Progress, <span className="font-bold">Our Mission</span> 🚀
          </h1>
          <p className="mt-6 mb-4 text-lg">
            Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus in tortor interdum rhoncus id vel orci. Suspendisse lectus erat, tincidunt ultricies tempus ut, rutrum ullamcorper eros. Donec ac blandit est. Phasellus rhoncus purus a venenatis lobortis. Nullam fermentum condimentum metus, vel.<br />
          </p>
          <h1 className="font-semibold inline-flex items-center text-lg">
            <span aria-hidden="true" className="mr-2">
              <FaCheckCircle className="text-primaryColor" />
            </span>
            We support you in maximizing your trading potential.
          </h1>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='mt-4 bg-primaryColor text-neutral-200 font-poppins font-semibold rounded-3xl text-lg py-3 px-10 hover:bg-primaryColorHover'>
            View plans ➜
          </motion.button>
        </motion.div>
        <div>
          {features.map((feature, index) => (
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 * index }}
              viewport={{ once: true }}
              key={index} className="mt-4 px-20 font-lato">
              <h2 className="text-lg font-semibold text-neutral-300">{feature.title}</h2>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
}
