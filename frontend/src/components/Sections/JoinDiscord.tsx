import { FaDiscord } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import LogoDiscord from "@/assets/discord3d.png";
import { motion } from "motion/react";

export default function JoinDiscord() {
    return (
        <div className="bg-primary">
            <motion.div

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-24 max-w-full">
                <img
                    src={LogoDiscord} alt="Discord Logo" className="w-32 h-32 mb-4" />
                <h1 className="text-3xl font-bold mb-2 text-slate-50">Join us on Discord</h1>
                <p className="text-center text-slate-300 mb-6">
                    Become a citizen of our Discord community, where traders connect, learn, and thrive together.
                </p>

                <div className="flex gap-4">
                    <motion.button


                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-200 transition">
                        <FaDiscord className="text-lg" />
                        Discord
                    </motion.button>

                    <motion.button

                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-primaryText text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primaryTextHover transition">
                        <HiOutlineArrowRight className="text-lg" />
                        Buy Course
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
