import assets from "../assets/assets";
import { motion } from "motion/react";
const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 
    sm:px-10 lg:px-24 xl:px-24"
    >
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={assets.dalight} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that moves
            your business forward.
          </p>
          <ul className="flex gap-8 text-sm">
            <li>
              <a href="#hero" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-primary">
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-900"
        >
          <h3 className="font-bold">Suscribe to our newsletters</h3>
          <p>
            The latest news, articles, and resources send to your inbox weekly.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 
                text-sm outline-none rounded bg-transparent dark:text-gray-200 border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6 ">
              Suscribe
            </button>
          </div>
        </motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center text-sm text-gray-500 sm:justify-between flex-wrap gap-4 py-4"
      >
        <p className="text-sm text-gray-600">
          Copyright {new Date().getFullYear()} &copy; MolighTech - All Right
          Reserved
        </p>
        <div className="flex gap-4 justify-between">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
