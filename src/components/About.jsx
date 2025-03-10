import { useEffect } from "react";
import { motion } from "framer-motion";
import mylogo from "./images/mylogo.jpeg"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.h2 
          variants={textVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="text-4xl md:text-6xl font-bold text-white text-center mb-4 transition-all duration-500 delay-500"
        >
          About <span className="text-cyan-600">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={textVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-slate mb-4">
              Hello! I'm Suraj Sudhir Baghel, an aspiring web developer passionate about crafting engaging and user-friendly websites.
            </p>
            <p className="text-slate mb-4">
              My journey in web development began with curiosity about how websites function. Since then, I have been honing my skills in front-end technologies like HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-slate mb-4">
              I love building projects that enhance user experience and solve real-world problems. Currently, I am focused on improving my proficiency in modern web frameworks and best development practices.
            </p>
            <p className="text-slate">
              When I'm not coding, I enjoy learning new technologies, exploring design trends, and connecting with fellow developers.
            </p>
          </motion.div>
          
          <motion.div 
            variants={imageVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-[80px] md:w-80 md:h-80 rounded-md overflow-hidden">
                <motion.img
                  src={ mylogo }
                  alt="Suraj Sudhir Baghel"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-highlight rounded-md -z-10"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;