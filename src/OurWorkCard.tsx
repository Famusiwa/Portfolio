import { type Work } from "./data/ServicesData";
import { motion } from "motion/react"

interface WorkCardProps {
  work: Work;
  index: number;
}

const OurWorkCard:React.FC<WorkCardProps> = ({work, index}) => {
  return (
    <motion.div 
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:index * 0.2}}
      viewport={{once:true}}
      key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer items-center">
        <a href={work.link} target="_blank" rel="noopener noreferrer">
          <img src={work.image} alt="image" className="w-full rounded-xl" />
          <div className="text-center">
             <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
             <p className="text-sm opacity-60 ">{work.description}</p>
          </div>
        </a>
       
       
    </motion.div>
  )
}

export default OurWorkCard














