import assets from "../assets/assets";
import { useState } from "react";
import { motion } from "motion/react";

// import ThemeToggler from './ThemeToggler';

type NavProp = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar: React.FC<NavProp> = ({ theme }) => {
  const navLinks = [
    { label: "Home", to: "#hero" },
    { label: "About Us", to: "#about-us" },
    { label: "Services", to: "#services" },
    { label: "Our Work", to: "#our-work" },
    { label: "Contact Us", to: "#contact-us" },
  ];
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" dark flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4
    sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 "
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.dalight}
        className="w-32 sm:w-40"
      />
      <div className="flex  max-sm:hidden sm:gap-4 lg:gap-10">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.to}
            className="hover:border-b transition-all"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div
        className={`text-gray-700 md:hidden lg:hidden dark:test-white sm:text-sm 
        ${!sidebarOpen ? "max-sm: w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}
        max-sm: fixed top-0 bottom-0 right-0 max-sm: min-h-screen max-sm:h-full 
        max-sm:flex-col max-sm:bg-blue-600 max-sm:test-white max-sm:pt-20 flex sm:item-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="close-icon"
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        {navLinks.map((link, index) => (
          <a key={index} href={link.to} onClick={() => setSidebarOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        {/* <ThemeToggler  theme={theme} setTheme={setTheme} /> */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          className="w-8 sm:hidden"
          onClick={() => setSidebarOpen(true)}
        />
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white
        px-6 py-2 rounded-full cursor-pointer hover: scale-103 transition-all "
        >
          Connect <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
