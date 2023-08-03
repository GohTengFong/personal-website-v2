"use client";

import "./HomePage.scss";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function HomePage() {
  const initialTitle = {
    x: -300,
    opacity: 0,
  };

  const animateTitle = {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  };

  const initialIcon = {
    opacity: 0,
    scale: 0.5,
  };

  const animateIcon = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };

  const intialSubtitle = {
    x: 300,
    opacity: 0,
  };

  const animateSubtitle = {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  };

  return (
    <div className="home" id="home">
      <section className="section is-large p-0">
        <motion.div className="columns">
          <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop pb-6 mb-6">
            <motion.h1
              className="title is-1 is-size-1 is-size-2-mobile"
              initial={initialTitle}
              animate={animateTitle}
            >
              Hi! My name is Teng Fong!
            </motion.h1>
            <div className="block is-flex is-justify-content-space-evenly">
              <motion.a
                href="https://github.com/GohTengFong"
                className="social-icon"
                initial={initialIcon}
                animate={animateIcon}
              >
                <BsGithub size={40} />
              </motion.a>
              <motion.a
                href="https://www.google.com/"
                className="social-icon"
                initial={initialIcon}
                animate={animateIcon}
              >
                <BsLinkedin size={40} />
              </motion.a>
              <motion.a
                href="https://leetcode.com/GohTengFong/"
                className="social-icon"
                initial={initialIcon}
                animate={animateIcon}
              >
                <SiLeetcode size={40} />
              </motion.a>
            </div>
          </div>
          <div className="column"></div>
        </motion.div>

        <motion.div className="columns">
          <div className="column"></div>
          <div className="column is-two-third">
            <motion.h3
              className="subtitle is-4"
              initial={intialSubtitle}
              animate={animateSubtitle}
            >
              I am currently a Year 2 Computer Science student studying at the
              National University of Singapore. I am interested in many
              different aspects of computing, the main one being Artifical
              Intelligence and Machine Learning. Outside of programming, I am
              passionate about social work, sports and learning new things!
            </motion.h3>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
