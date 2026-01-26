import {type Service } from "../data/ServicesData"
import { useRef, useState } from "react"
import { motion } from "motion/react"

type ServiceProp = {
    service: Service,
    index: number, 
}

interface Position {
    x: number,
    y: number
}

const ServiceCard:React.FC<ServiceProp> = ({service, index}) => {
    const [position, setPosition] = useState<Position>({x:0, y:0});
    
    const divRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(divRef.current){
            const bound = divRef.current.getBoundingClientRect();
            setPosition({x: e.clientX - bound.left, y: e.clientY - bound.top})
        }  
    }

  return (
    <motion.div
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:index * 0.2}}
        viewport={{once:true}}
        className="service-div" ref={divRef} onMouseMove={handleMouseMove}>
        <div className= 'mouse-glow'
            style={{top:position.y -150, left: position.x -150}}
        />
        <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounder-[10px]
        bg-white dark:bg-gray-900 z-0 relative">
            
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-full">
                <img src={service.icon} alt=""  className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2" />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
            </div>
        </div>
        
    </motion.div>
  )
}
export default ServiceCard
