import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const educationDetails = [
  {
    logo: "logo-arrow",
    degree: "Bachelor of Science in Information Technology",
    institution: "Laxman Devram Sonawne College, Kalyan",
    grades: "CGPA: 9.33",
    year: " [2021-2024]",
    desc: "I have completed my Bachelor's degree in Information Technology from Laxman Devram Sonawne College, Kalyan, Maharashtra. I have completed my graduation with a CGPA of 9.33.",
  },
  {
    logo: "logo-play",
    degree: "(XII)-HSC",
    institution: "M.K Jr. College, Kalyan (W)",
    grades: "Grade: 83.17% ",
    year: " [2020-2021]",
    desc: "I completed my class 12 high school education at M.K Jr. College, Kalyan(W) where I studied Commerce with IT.",
  },
  {
    logo: "logo-play",
    degree: "(X)-SSC",
    institution: "Bhagwan Bhoir English High School, Kalyan (W)",
    grades: "Grade: 60% ",
    year: " [2018-2019]",
    desc: "I completed my class 10th high school education at Bhagwan Bhoir English High School, Kalyan(W).",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.h2 
          variants={textVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="text-center text-white text-4xl font-bold mb-12"
        >
          <span className="text-blue-400">My</span> Education Details
        </motion.h2>
        
        <div>
          {educationDetails.map((edu, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-start mb-4"
            >
              <ion-icon name={edu.logo} className="text-cyan-400 text-2xl mb-2" />
              <div className="text-lg font-medium mb-2 text-white">{edu.degree}</div>
              <div className="flex-1">
                <div className="text-base text-gray-400">{edu.institution}</div>
                <div className="text-base text-gray-400">{edu.grades}</div>
                <div className="text-base text-gray-400">{edu.year}</div>
              </div>
              <p className="text-gray-300">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
