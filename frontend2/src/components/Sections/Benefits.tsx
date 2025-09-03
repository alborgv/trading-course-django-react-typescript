import { FaLocationDot, FaUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaLocationDot,
    title: "Flexibility",
    description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus.",
  },
  {
    icon: FaHome,
    title: "Home",
    description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus commodo ut. Suspendisse vitae.",
  },
  {
    icon: FaUser,
    title: "User Friendly",
    description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus. commodo ut. Suspendisse vitaecommodo ut. Suspendisse vitae.",
  },
  {
    icon: TfiAlarmClock,
    title: "Settings",
    description: "Lorem ipsum dolor sit amet, urna commodo ut.",
  },
  {
    icon: TfiAlarmClock,
    title: "Settings",
    description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus.",
  },
];

export default function Benefits() {
  return (
    <div className="bg-neutral-100 py-12">
      <h1 className="text-center text-5xl font-poppins text-slate-800 pb-12">Benefits</h1>
      <div className="grid grid-cols-5 gap-8">
        {features.map((feature, index) => {

          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 * index }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-8 font-poppins space-y-4"
            >
              <feature.icon className="text-4xl text-primaryColor" />
              <h2 className="text-lg font-semibold text-slate-800">{feature.title}</h2>
              <p className="text-slate-700 min-h-[100px]">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
