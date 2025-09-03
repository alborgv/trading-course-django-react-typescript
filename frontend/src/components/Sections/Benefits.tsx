import { motion } from "framer-motion";
import { AlarmClock, User, House, Bell, PersonStanding } from "lucide-react";

const features = [
    {
        icon: PersonStanding,
        title: "Flexibility",
        description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus.",
    },
    {
        icon: House,
        title: "Home",
        description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus commodo ut. Suspendisse vitae.",
    },
    {
        icon: User,
        title: "User Friendly",
        description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus. commodo ut. Suspendisse vitaecommodo ut..",
    },
    {
        icon: AlarmClock,
        title: "Settings",
        description: "Lorem ipsum dolor sit amet, urna commodo ut.  Suspendisse urna commodo vitae commodo vitae purus",
    },
    {
        icon: Bell,
        title: "Notifications",
        description: "Lorem ipsum dolor sit amet, urna commodo ut. Suspendisse vitae purus.",
    },
];

export default function Benefits() {
    return (
        <div className="bg-neutral-100 py-12">
            <h1 className="text-center text-5xl mt-10 font-poppins text-primaryText pb-12">Benefits</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {features.map((feature, index) => {

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 * index }}
                            viewport={{ once: true }}
                            className={`
                                ${index == 4 ? 'col-span-2 mx-auto px-24 md:col-span-1': ''}
                                flex flex-col items-center text-center px-2 md:px-8 font-poppins space-y-2`}
                        >
                            <feature.icon className="w-8 h-8 text-primaryText" />
                            <h2 className="text-lg font-semibold text-slate-800">{feature.title}</h2>
                            <p className="text-slate-700">{feature.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
