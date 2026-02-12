import React from "react";
import { motion } from "motion/react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="bg-blue-800 border border-blue-400 rounded-xl p-6 backdrop-blur-md shadow-lg"
    >
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-10 h-10 flex items-center justify-center 
                  rounded-lg 
                  bg-blue-500/10 
                  border border-blue-400/20 
                  text-blue-400 
                  backdrop-blur-sm
                  mr-3"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
