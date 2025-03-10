import React from "react";
import { motion } from "framer-motion";

import htmlLogo from "./images/html.png";
import cssLogo from "./images/CSS-Logo.png";
import jsLogo from "./images/js.png";
import reactLogo from "./images/React.webp";
import tsLogo from "./images/ts.png";
import figmaLogo from "./images/figma.png";
import javaLogo from "./images/java.png";
import mysqlLogo from "./images/mysql.png";
import awsLogo from "./images/aws.png";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const skills = [
  { name: "HTML", logo: htmlLogo, level: "Intermediate", count: 70 },
  { name: "CSS", logo: cssLogo, level: "Intermediate", count: 70 },
  { name: "JAVASCRIPT", logo: jsLogo, level: "Intermediate", count: 70 },
  { name: "REACT", logo: reactLogo, level: "Intermediate", count: 60 },
  { name: "TAILWIND CSS", logo: tsLogo, level: "Beginner", count: 50 },
  { name: "FIGMA", logo: figmaLogo, level: "Beginner", count: 40 },
  { name: "JAVA", logo: javaLogo, level: "Beginner", count: 40 },
  { name: "MYSQL", logo: mysqlLogo, level: "Beginner", count: 40 },
  { name: "AWS", logo: awsLogo, level: "Beginner", count: 40 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.h2 
          variants={textVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="text-4xl md:text-6xl font-bold text-white text-center mb-4 transition-all duration-500 delay-500"
        >
          My <span className="text-cyan-600">Skills</span>
        </motion.h2>
        <motion.p 
          variants={textVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="text-lg text-center font-normal text-gray-300 mb-8 transition-all duration-500 delay-700"
        >
          A showcase of my technical knowledge and proficiency.
        </motion.p>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills.map((skill, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.2 }}
              className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-6 rounded-xl text-center shadow-md"
            >
              <p className="text-xl font-medium text-white mb-4">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#333 ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full mx-auto"
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
              </div>
              <p className="text-lg mt-4 text-gray-300">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
