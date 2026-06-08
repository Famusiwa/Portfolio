import React from "react";
import { Layers3, Rocket, Users, Lightbulb, Globe } from "lucide-react";
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
        {/* <div>
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
        </div> */}
        <div className="relative flex items-center justify-center">
          {/* Main Tech Image Container */}
          <div className="relative w-full max-w-[520px] bg-linear-to-br from-indigo-500 via-purple-400 to-pink-200 rounded-xl backdrop-blur-xl p-6 shadow-2xl">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Mock Tech UI */}
            <div className="space-y-5">
              {/* Dashboard Card */}
              <div className="bg-blue-800 border border-blue-400 rounded-xl p-6 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-200">
                      Modern Web Systems
                    </h3>
                    <p className="text-sm text-gray-400">
                      Frontend Architecture
                    </p>
                  </div>

                  <Globe className="text-indigo-400" size={24} />
                </div>

                {/* Progress */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Tailwind CSS</span>
                      <span className="text-gray-200">95%</span>
                    </div>

                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full w-[95%] bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">JavaScript</span>
                      <span className="text-gray-200">80%</span>
                    </div>

                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="h-full w-[80%] bg-linear-to-r from-pink-300 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">TypeScript</span>
                      <span className="text-gray-200">75%</span>
                    </div>

                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full w-[75%] bg-linear-to-r from-indigo-500 to-pink-300 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">React.Js</span>
                      <span className="text-gray-200">88%</span>
                    </div>

                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full w-[88%] bg-linear-to-r from-purple-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Next.js</span>
                      <span className="text-gray-200">65%</span>
                    </div>

                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full w-[65%] bg-linear-to-r from-pink-300 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Cards */}
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111827] rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="text-purple-400" size={20} />
                    <span className="font-medium">Clean Code</span>
                  </div>

                  <p className="text-sm text-gray-400">
                    Maintainable and scalable component architecture.
                  </p>
                </div>

                <div className="bg-[#111827] rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers3 className="text-indigo-400" size={20} />
                    <span className="font-medium">UI Systems</span>
                  </div>

                  <p className="text-sm text-gray-400">
                    Modern responsive layouts and design systems.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Floating Accent Card */}
          {/* <div className="absolute -bottom-6 -right-4 bg-linear-to-r from-indigo-500 to-purple-500 px-5 py-4 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
            <p className="text-sm font-semibold">Optimized Performance ⚡</p>
          </div> */}
        </div>
        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {/* <FeatureCard
            icon={<Code2 size={25} />}
            title="Clean Code"
            description="Writing maintainable, scalable code that stands the test of time."
          /> */}
          <FeatureCard
            icon={<Layers3 size={25} />}
            title="UI Systems"
            description="Modern responsive layouts and design systems."
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
