import { motion } from "framer-motion";
import profilepic from "/src/assets/profilepic.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SocialLinkCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-zinc-800 bg-opacity-50 backdrop-blur-lg w-80 sm:w-96 rounded-lg text-center text-white p-4 sm:p-5 space-y-3 shadow-lg"
    >
      <motion.img
        src={profilepic}
        alt="Profile"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="w-32 h-32 sm:w-48 sm:h-48 object-cover object-center mx-auto rounded-full"
      />
      <motion.h1
        className="text-2xl sm:text-3xl font-bold"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Chao Visal
      </motion.h1>
      <motion.p
        className="font-bold text-yellow-500 text-sm sm:text-base"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        Welcome To My Social Links
      </motion.p>
      <motion.p
        className="font-semibold text-xs sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        "Here’s where you can get to know me."
      </motion.p>

      {/* Social Media Buttons */}
      <div className="space-y-3">
        {[
          {
            href: "https://web.facebook.com/Yoo.Sazz/",
            icon: "fab fa-facebook-f",
            bg: "hover:bg-blue-500",
            label: "Facebook",
          },
          {
            href: "https://www.instagram.com/_https.sazz/",
            icon: "fab fa-instagram",
            bg: "hover:bg-red-400",
            label: "Instagram",
          },
          {
            href: "https://t.me/ChaoVisal",
            icon: "fab fa-telegram-plane",
            bg: "hover:bg-blue-400",
            label: "Telegram",
          },
          {
            href: "https://github.com/sazzysazz",
            icon: "fab fa-github",
            bg: "hover:bg-gray-500",
            label: "GitHub",
          },
          {
            href: "https://sazzysazz.github.io/Portfolio/",
            icon: "fas fa-briefcase",
            bg: "hover:bg-blue-400",
            label: "Portfolio",
          },
        ].map(({ href, icon, bg, label }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.1,
              ease: "easeOut",
            }}
            className={`flex items-center bg-zinc-700 p-2 sm:p-3 rounded-md font-semibold gap-3 text-sm sm:text-base transition-all duration-300 ${bg} group`}
          >
            <i
              className={`${icon} text-lg sm:text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-white`}
            ></i>
            {label}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinkCard;
