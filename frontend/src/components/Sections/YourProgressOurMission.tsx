import Bg from "@/assets/bg-red.png"
import { motion } from "motion/react"
import { CheckCircle } from "lucide-react"

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
            className="relative overflow-hidden bg-secondary h-full md:h-screen mt-14">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/40"></div>

            <div className="absolute inset-0">
                <img 
                    src={Bg} 
                    alt="Background" 
                    className="w-full h-full object-cover
                                hidden md:block opacity-40"
                />
            </div>
            <div className="relative flex flex-col md:grid md:grid-cols-2 items-center justify-center h-full md:px-20 px-8">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-neutral-200 p-4 text-left">

                    <h1 className="text-4xl md:text-5xl mt-4 font-poppins text-left">
                        Your Progress, <span className="font-bold">Our Mission</span> 🚀
                    </h1>
                    <p className="mt-12 mb-4 text-lg text-left md:text-left">
                        Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus in tortor interdum rhoncus id vel orci. Suspendisse lectus erat, tincidunt ultricies tempus ut, rutrum ullamcorper eros. Donec ac blandit est. Phasellus rhoncus purus a venenatis lobortis. Nullam fermentum condimentum metus, vel.<br />
                    </p>
                    
                    <div className="block md:hidden mt-12 mb-16">
                        {features.map((feature, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 * index }}
                                viewport={{ once: true }}
                                key={index} className="mt-4 px-2 text-center mb-6 md:mb-0 md:text-left md:px-20 font-poppins">
                                <h2 className="text-lg font-semibold mb-2 md:mb-0 text-neutral-300">{feature.title}</h2>
                                <p className="text-neutral-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <h1 className="font-semibold inline-flex items-center text-lg">
                        <span aria-hidden="true" className="mr-2">
                            <CheckCircle className="text-primaryText" />
                        </span>
                        We support you in maximizing your trading potential.
                    </h1>
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mt-6 bg-primaryText text-white font-poppins font-semibold rounded-3xl text-lg w-full md:w-auto py-3 px-10 hover:bg-primaryTextHover cursor-pointer">
                        View plans ➜
                    </motion.button>
                </motion.div>
                <div className="hidden md:block">
                    {features.map((feature, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 * index }}
                            viewport={{ once: true }}
                            key={index} className="mt-4 px-2 text-center mb-6 md:mb-0 md:text-left md:px-20 font-poppins">
                            <h2 className="text-lg font-semibold mb-2 md:mb-0 text-neutral-300">{feature.title}</h2>
                            <p className="text-neutral-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}