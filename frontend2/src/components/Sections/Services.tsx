import Foto from "../../assets/vertical.webp"
import { motion } from "framer-motion";

const features = {
  "Qualified and reactive partners": ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione doloremque porro",
    "quam eum atque quas, quis perspiciatis quos voluptatem similique",
    "excepturi unde assumenda voluptates expedita deleniti earum quia nemo consecteturnemo consectetur."],

  "Personal account manager": ["Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "quam eum atque quas, quis perspiciatis quos voluptatem similique",
    "excepturi unde assumenda voluptates expedita deleniti earum quia nemo consecteturnemo consectetur"]
}


export default function Services() {
  return (
    <>
      <div className="flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.9 }}
          viewport={{ once: true }}
          className="w-1/2 px-24 py-32">
          <img src={Foto} alt="img" className="h-auto w-full rounded-xl shadow-2xl" />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-2/2 p-4 text-center">
          <h2 className="text-5xl font-bold mb-4 font-poppins">A customer service to match</h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-700 font-lato text-lg max-w-sm mx-auto">
            Aliquip elit cillum ea adipisicing reprehenderit sit minim aute aute cillum sint qui est consequat.
          </motion.p>

          <div>
            {Object.entries(features).map(([title, items]) => (

              <div key={title}>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl font-poppins font-semibold pt-5 pb-2 text-left px-24">{title}</motion.h1>
                <ul className="list-disc pl-20 max-w-lg mx-auto font-lato">
                  {items.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 * index }}
                      viewport={{ once: true }}
                      key={index}>{item}</motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>

  )
}