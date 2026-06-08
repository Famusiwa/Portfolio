import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { type Work } from "./data/ServicesData";
// import { motion } from "motion/react";

interface WorkCardProps {
  work: Work;
  id: number;
  // index: number;
}

const OurWorkCard: React.FC<WorkCardProps> = ({ work, id }) => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 30 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: id * 0.2 }}
    //   viewport={{ once: true }}
    //   key={id}
    //   className="hover:scale-102 duration-500 transition-all cursor-pointer items-center"
    // >
    //   <a href={work.link} target="_blank" rel="noopener noreferrer">
    //     <img src={work.image} alt="image" className="w-full rounded-xl" />
    //     <div className="text-center">
    //       <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
    //       <p className="text-sm opacity-60 ">{work.description}</p>
    //     </div>
    //   </a>
    // </motion.div>
    <div
      key={id}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-purple-50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={work.image}
          alt={work.title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

        {/* Featured Badge */}
        {/* {project.featured && (
                  <div className="absolute left-4 top-4 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-lg">
                    Featured
                  </div>
                )} */}
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-2xl font-semibold">{work.title}</h3>

          <ArrowUpRight className="text-indigo-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <p className="mb-6 text-sm leading-relaxed text-gray-700">
          {work.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {work.tech.map((item) => (
            <span
              key={item}
              className=" rounded-full px-2 py-1 text-black
                  bg-linear-to-b from-indigo-100 via-purple-200 to-indigo-400
                  border border-indigo-100
                  shadow-[0_6px_12px_rgba(99,102,241,0.35)]
                  active:translate-y-[2px]hover:text-muted-foreground transition-colors text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-3 py-1 text-sm font-medium text-white transition hover:bg-purple-400"
          >
            Live Preview
            <ExternalLink size={16} />
          </a>

          <a
            href={work.github}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-purple-400 px-3 py-1 text-sm font-medium text-white transition hover:border-indigo-500/40 hover:bg-indigo-500"
          >
            GitHub
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWorkCard;
