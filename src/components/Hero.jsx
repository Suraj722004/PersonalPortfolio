import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../pages/Button";
import logo from "./images/logo.avif";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-3xl text-left">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-highlight mb-4"
          >
            Hi there, my name is
          </motion.p>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          >
            SURAJ SUDHIR BAGHEL
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-slate mb-6"
          >
            Aspiring Web Developer.
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-slate max-w-xl mb-8 text-lg"
          >
            I'm a passionate web developer eager to build dynamic and user-friendly websites. 
            I specialize in front-end technologies and continuously explore new frameworks to enhance my skills.
          </motion.p>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <Button 
              className="bg-transparent border-2 border-highlight text-highlight hover:bg-highlight/10 px-6 py-5 text-lg"
              asChild
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </motion.div>
        </div>
        
        {/* Animated Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img 
             src={logo}
        alt="Suraj Baghel" 
        className="w-80 md:w-96 rounded-full shadow-lg"
/>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
