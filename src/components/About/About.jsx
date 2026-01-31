// src/components/About/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/MyPassport.jpg" alt="Profile" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate software developer with 5+ years of experience
              building web and mobile applications. I specialize in creating
              intuitive, scalable solutions that solve real-world problems.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work,
              which evolved into a love for crafting digital experiences. I'm
              constantly learning and staying updated with the latest
              technologies to deliver the best results.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new coffee shops,
              reading tech blogs, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import "./About.css";

// const About = () => {
//   const targetRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end start"],
//   });

//   const rotateY = useTransform(scrollYProgress, [0.3, 0.7], [0, 180]);

//   return (
//     <section id="about" className="about" ref={targetRef}>
//       <div className="container">
//         <div className="about-content">
//           <div className="about-image-wrapper">
//             <motion.div
//               className="about-image"
//               style={{ rotateY }}
//             >
//               <div className="face front">
//                 <img src="/assets/MyPassport.jpg" alt="Profile Front" />
//               </div>

//               <div className="face back">
//                 <img src="/assets/MyPassport.jpg" alt="Profile Back" />
//               </div>
//             </motion.div>
//           </div>

//           <div className="about-text">
//             <h2>About Me</h2>
//             <p>I'm a passionate software developer...</p>
//             {/* ... rest of your text ... */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
