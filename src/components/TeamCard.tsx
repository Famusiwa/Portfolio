import { type Team } from "../assets/assets"
import { motion } from "motion/react"

interface TeamProp {
    team: Team,
    index:number,
}

const TeamCard:React.FC<TeamProp> = ({team, index}) => {
  return (
  <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.4, delay:index * 0.1}}
    viewport={{once:true}}
    key={index} className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100
    dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
    hover:scale-103 transition-all duration-400">
        <img src={team.image} alt="image" className="w-12 h-12 rounded-xl" />
        <div className="flex-1">
             <h3 className="text-sm font-semibold">{team.title}</h3>
             <p className="text-xs opacity-60 ">{team.name}</p>
        </div>
  </motion.div>
  )
}

export default TeamCard
