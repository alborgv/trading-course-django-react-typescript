import Foto from "@/assets/vertical2.webp"
import { motion } from "motion/react"

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
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-1/2 px-24 py-32 hidden md:block"
                    >
                    <img src={Foto} alt="img" className="h-auto w-full rounded-xl shadow-2xl" />
                </motion.div>
                <div>

                    <motion.h2 
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-2/2 p-4 text-center text-5xl font-bold mt-6 md:mt-0 mb-4 font-poppins">
                        A customer service to match
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-700 font-poppins text-lg text-center max-w-sm md:max-w-lg mx-auto mb-2"
                        >
                        Aliquip elit cillum ea adipisicing reprehenderit sit minim aute aute cillum sint qui est consequat.
                    </motion.p>
                    {Object.entries(features).map(([title, items]) => (
                        <div key={title}>
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="text-2xl font-poppins font-semibold mt-6 mb-2 text-center px-8 md:px-24">
                                {title}
                            </motion.h1>
                            <ul className="list-disc pl-12 md:pl-20 mt-2 max-w-sm md:max-w-lg mx-auto font-poppins">
                                {items.map((item, index) => (
                                    <motion.li 
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity: 1, y: 0}}
                                        transition={{ duration: 0.4 * index, ease: "easeOut" }}
                                        viewport={{ once: true}}
                                        key={index}>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}