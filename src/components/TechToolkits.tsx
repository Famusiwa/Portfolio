// import { company_logos } from "../assets/assets";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import Title from "./Title";

const TechToolKits: React.FC = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    // "GraphQL",
    "PostgreSQL",
    // "MongoDB",
    // "Redis",
    // "Docker",
    // "AWS",
    "Vercel",
    "Tailwind CSS",
    // "Prisma",
    // "Jest",
    // "Cypress",
    "Figma",
    "Git",
    "GitHub Actions",
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-5 px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80"
      >
        <div className="text-center">
          <Title title="Technical Toolkits" />
        </div>

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-wrap m-4 gap-10"
        >
          {company_logos.map((logo, index) => (
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              key={index}
              src={logo}
              className=" max-h-5 sm:max-h-6 dark:drop-shadow-xl"
            />
          ))}
        </motion.div> */}
      </motion.div>
      {/* <div className="mt-20">
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Technologies I work with
        </p> */}
      <div className="relative overflow-hidden">
        {/* <div
          className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
        /> */}
        <Marquee speed={30}>
          <div className="flex">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="shrink-0 px-8 py-4">
                <span
                  className="text-md font-semibold text-muted-foreground/50 rounded-full px-4 py-1
                  bg-linear-to-b from-indigo-100 via-purple-200 to-indigo-400
                  border border-indigo-100
                  shadow-[0_6px_12px_rgba(99,102,241,0.35)]
                  active:translate-y-[2px]hover:text-muted-foreground transition-colors"
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      {/* </div> */}
    </>
  );
};

export default TechToolKits;
