import { motion } from "framer-motion";
import { FaReact, FaAngular, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiFirebase, SiGraphql, SiDocker, SiPython, SiDjango, SiFlask } from "react-icons/si";

// Array of icons with their properties
const icons = [
  { id: 1, icon: <FaReact className="text-blue-400" />, size: "text-7xl" },
  { id: 2, icon: <SiTailwindcss className="text-blue-300" />, size: "text-6xl" },
  { id: 3, icon: <FaAngular className="text-red-500" />, size: "text-6xl" },
  { id: 4, icon: <FaNodeJs className="text-green-500" />, size: "text-7xl" },
  { id: 5, icon: <SiJavascript className="text-yellow-400" />, size: "text-6xl" },
  { id: 6, icon: <FaVuejs className="text-green-300" />, size: "text-6xl" },
  { id: 7, icon: <SiExpress className="text-gray-400" />, size: "text-6xl" },
  { id: 8, icon: <SiMongodb className="text-green-600" />, size: "text-6xl" },
  { id: 9, icon: <SiFirebase className="text-yellow-500" />, size: "text-6xl" },
  { id: 10, icon: <SiGraphql className="text-pink-600" />, size: "text-6xl" },
  { id: 11, icon: <SiDocker className="text-blue-500" />, size: "text-6xl" },
  { id: 12, icon: <SiPython className="text-blue-700" />, size: "text-6xl" },
  { id: 13, icon: <SiDjango className="text-green-700" />, size: "text-6xl" },
  { id: 14, icon: <SiFlask className="text-black" />, size: "text-6xl" },
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-0 ">
      {icons.map(({ id, icon, size }) => (
        <motion.div
          key={id}
          className={`absolute ${size} opacity-20`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10, // Random duration between 10 and 20 seconds
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
