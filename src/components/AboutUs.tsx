import React from "react";
import { Code, Rocket, Users, Lightbulb } from "lucide-react";
import FeatureCard from "./FeatureCard";
import Title from "./Title";
import { motion } from "motion/react";

const AboutUs: React.FC = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="relative title-page"
      >
        <div className="relative text-center">
          <Title
            title="About Me"
            desc="Building the future, one component at a time, through clean architecture and precise frontend design"
          />
        </div>
      </motion.div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 sm:px-12 lg:px-24 xl:px-12">
        {/* LEFT SIDE */}
        <div>
          <motion.p className="text-gray-500 mb-4 leading-relaxed">
            I'm a passionate frontend developer with over 2 years of experience
            crafting digital products that make a difference. My journey started
            with curiosity about how the web works and evolved into a deep love
            for modern frontend technologies.
          </motion.p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            I specialize in React, Next.js, and TypeScript — building everything
            from sleek landing pages to scalable enterprise applications.
          </p>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 bg-blue-800 border border-blue-400/20 rounded-xl p-6 backdrop-blur-md shadow-lg"
          >
            <p className="italic text-gray-300">
              "My mission is to create digital experiences that are not just
              functional, but truly delightful — products users love and
              codebases that developers enjoy maintaining."
            </p>
          </motion.div>
        </div>
        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          <FeatureCard
            icon={<Code size={25} />}
            title="Clean Code"
            description="Writing maintainable, scalable code that stands the test of time."
          />

          <FeatureCard
            icon={<Rocket size={25} />}
            title="Performance"
            description="Optimizing for speed and delivering lightning-fast user experiences."
          />

          <FeatureCard
            icon={<Users size={25} />}
            title="Collaboration"
            description="Working closely with teams to bring ideas to life."
          />

          <FeatureCard
            icon={<Lightbulb size={25} />}
            title="Innovation"
            description="Staying ahead with modern technologies and best practices."
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
