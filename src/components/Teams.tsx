import Title from "./Title";
import { teamData } from "../assets/assets";
import TeamCard from "./TeamCard";
import { motion } from "motion/react";

const Teams: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="title-page"
    >
      <div className="relative text-center">
        <Title
          title="Meet the team"
          desc="A passionate team of digital experts dedicated  to your brands success."
        />
      </div>
      <div className="grid grid-col-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <TeamCard key={index} team={team} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
