"use client";

import "./Skills.scss";
import "devicon/devicon.min.css";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away.css";
import { Reveal } from "../revealanimation/RevealAnimation";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <Reveal width="100%">
            <div className="columns pb-6 mb-6 is-vcentered">
              <div className="column is-one-third">
                <div className="section-header">
                  <h3 className="section-title is-1 has-text-centered">
                    Skills.
                  </h3>
                </div>
              </div>

              <div className="column is-two-third">
                <div className="header-line"></div>
              </div>
            </div>
          </Reveal>

          <div className="block has-text-centered">
            <h2 className="is-size-3">I have worked with :</h2>
          </div>

          <div className="rows">
            <div className="row1">
              <Tippy
                className="tippy"
                placement="bottom"
                content={"JavaScript"}
                delay={50}
                moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                animation="shift-away"
              >
                <motion.i
                  className="devicon-javascript-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"Java"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-java-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"Python"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-python-plain colored"
                  whileHover={{ scale: 1.2 }}
                />
              </Tippy>
            </div>

            <div className="row2">
              <Tippy
                className="tippy"
                placement="bottom"
                content={"HTML"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-html5-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"CSS"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-css3-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"Tailwind CSS"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-tailwindcss-original-wordmark colored"
                  whileHover={{ scale: 1.2 }}
                />
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"SASS"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-sass-original colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"Bulma CSS"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-bulma-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"React"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-react-original colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"NextJS"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-nextjs-original colored dark-mode-icon"
                  whileHover={{ scale: 1.2 }}
                />
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"NodeJS"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-nodejs-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"Express"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-express-original colored dark-mode-icon"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"MongoDB"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-mongodb-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                /> */}
              </Tippy>

              <Tippy
                className="tippy"
                placement="bottom"
                content={"Git"}
                delay={50}
                animation="shift-away"
              >
                <motion.i
                  className="devicon-git-plain colored"
                  whileHover={{ scale: 1.2 }}
                />

                {/* <img
                  className="image is-64x64"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                /> */}
              </Tippy>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
