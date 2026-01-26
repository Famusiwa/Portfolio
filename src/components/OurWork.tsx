import Title from "./Title"
import { workData } from "../data/ServicesData"
import OurWorkCard from "../OurWorkCard"
import { motion } from "motion/react"

const OurWork:React.FC = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren:0.2}}
      viewport={{once:true}}
      id="our-work"  className="title-page">
      <div className="relative text-center">
        <Title
          title="Our latest work?"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </div>
       <div className="grid sm:grid-col-2 lg:grid-cols-3 w-full max-w-5xl gap-6">
          {workData.map((work, index) => (
            <OurWorkCard key={index} work={work} index={index} />  
            ))}
        </div>
    </motion.div>
  )
}

export default OurWork
