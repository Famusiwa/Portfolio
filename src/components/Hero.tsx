// import assets from "../assets/assets";
import { motion } from "motion/react";
import React from "react";
import {
  Briefcase,
  ArrowUpRight,
  Download,
  // Globe,
  Code2,
  // Layers3,
} from "lucide-react";
import techdev from "../assets/techdev.jpg";

const Hero: React.FC = () => {
  // return (
  //   <div
  //     className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden
  //   text-gray-700 dark:text-white "
  //   >
  //     {/* <motion.div
  //       initial={{opacity:0, y:20}}
  //       whileInView={{opacity:1, y:0}}
  //       transition={{duration:0.5, delay:0.7}}
  //       viewport={{once:true}}
  //       className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
  //           <img src={assets.group_profile} className="w-20" alt="group" />
  //           <p className="text-xs font-semibold">Trusted by 10K+ People</p>
  //       </motion.div> */}
  //     <motion.h1
  //       initial={{ opacity: 0, x: 40 }}
  //       whileInView={{ opacity: 1, x: 0 }}
  //       transition={{ duration: 0.6, delay: 0.8 }}
  //       viewport={{ once: true }}
  //       className="text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-medium xl-leading-[95px] max-w-5xl"
  //     >
  //       Turning imagination into{" "}
  //       <span
  //         className="bg-linear-to-r from-[#5044E5] to-[#4d8cea]
  //        bg-clip-text text-transparent"
  //       >
  //         digital
  //       </span>{" "}
  //       impact.
  //     </motion.h1>
  //     {/* Engineering the interface between creative vision and user impact. */}
  //     <motion.p
  //       initial={{ opacity: 0, y: 30 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.5, delay: 1 }}
  //       viewport={{ once: true }}
  //       className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
  //     >
  //       Creating meaningful connections and turning big ideas into interactive
  //       digital experiences.
  //     </motion.p>
  //     <motion.div
  //       initial={{ opacity: 0, scale: 0.9 }}
  //       whileInView={{ opacity: 1, scale: 1 }}
  //       transition={{ duration: 0.6, delay: 1.8 }}
  //       viewport={{ once: true }}
  //       className="relative"
  //     >
  //       <img src={assets.hero_img} alt="hero" className="max-w-5xl w-full" />
  //       <img
  //         src={assets.bgImage1}
  //         alt="bg-image"
  //         className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
  //       />
  //     </motion.div>
  //   </div>
  // );

  const startYear = 2024;
  const years = new Date().getFullYear() - startYear;

  <p>{years} years</p>;
  return (
    <section className="relative  text-white flex items-center px-6 lg:px-16 py-14">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-75 h-75 bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 text-sm font-medium">
            <Briefcase size={16} />
            <span>Frontend Developer</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-extrabold text-black leading-tight tracking-tight">
              <span className="italic">Hi, I'm Gbenga Famusiwa.</span>
              {/* <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Famusiwa Gbenga
              </span>{" "}
              Dalight */}
            </h3>

            {/* Career Summary */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              I build modern, responsive, and scalable web applications using
              React, TypeScript, and JavaScript. I enjoy transforming complex
              requirements into intuitive, user-friendly digital experiences.
              {/* I'm a passionate frontend developer with over {years} years of
              experience crafting digital products that make a difference. Over
              the years, I’ve focused on building responsive interfaces,
              collaborate with backend team, to deliver high-performance web
              applications with modern technologies. */}
            </p>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              {years}+ Years of Experience • Frontend Developer @ ICMA
              Professional Services
            </p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {/* Portfolio Button */}
            <a
              href="#our-work"
              className="group inline-flex items-center gap-2 bg-indigo-700 hover:bg-purple-400 px-3 py-2  rounded-xl font-medium transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:-translate-y-1"
            >
              <span>View Portfolio</span>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* CV Button */}
            <a
              href="/MyResume.pdf"
              download
              className="group inline-flex items-center gap-2 bg-purple-400 hover:bg-indigo-600 px-3 py-2 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1"
            >
              <Download size={18} className="text-gray-300" />
              <span>Download CV</span>
            </a>
          </motion.div>
          <div className="flex text-indigo-700 gap-2 -mt-5">
            <a href="https://github.com/famusiwa" target="blank">
              GitHub
            </a>
            |{" "}
            <a
              href="https://www.linkedin.com/in/gbenga-famusiwa-7a5925194/"
              target="blank"
            >
              {" "}
              LinkedIn
            </a>
          </div>
        </motion.div>
        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* Glow Effects */}
          <div className="absolute w-80 h-80 bg-indigo-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: -10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-[550px]"
          >
            {/* Main Web Development Image */}
            <img
              src={techdev}
              alt="Web Development Workspace"
              className="w-full h-[420px] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />

            {/* Floating Tech Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#111827]/90 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl w-60">
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="text-indigo-400" size={22} />
                <h3 className="font-semibold text-white">
                  Modern Web Development
                </h3>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Building scalable frontend interfaces, Writing maintainable,
                scalable code that stands the test of time.
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-5 right-5 bg-linear-to-l from-indigo-400 via-purple-500 to-pink-300 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              React • Node • TypeScript
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
