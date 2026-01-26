import assets from "../assets/assets"
import ServiceCard from "./ServiceCard"
import Title from "./Title"
import { serviceData } from "../data/ServicesData"
import { motion } from "motion/react"

 
const Services:React.FC = () => {
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren:0.2}}
      viewport={{once:true}}
      className="relative title-page">
      <img src={assets.bgImage2} alt="services" className="absolute -top-110 -left-70 -z-1 dark:hidden"/>
      <div className="relative text-center">
        <Title
          title="How can we help you?"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </div>
       <div className="flex flex-col md:grid grid-cols-2">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
    </motion.div>
  )
}

export default Services
