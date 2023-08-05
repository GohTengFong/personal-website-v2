"use client";

import "./Projects.scss";
import { Reveal } from "../revealanimation/RevealAnimation";
import HealthCareAIChatbot from "../images/healthcare-ai-chatbot.png";
import PersonalWebsiteV1 from "../images/personal-website-v1.png";
import StockPricePredictor from "../images/stock-price-predictor.png";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away.css";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <Reveal width="100%">
            <div className="columns pb-6 mb-6 is-vcentered">
              <div className="column is-one-third">
                <div className="section-header">
                  <h3 className="section-title is-1 has-text-centered">
                    Projects.
                  </h3>
                </div>
              </div>

              <div className="column is-two-third">
                <div className="header-line"></div>
              </div>
            </div>
          </Reveal>

          <div className="columns is-multiline">
            <div className="column is-one-half-desktop is-half-tablet is-one-third-widescreen">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img
                      src={HealthCareAIChatbot}
                      alt="Healthcare AI Chatbot"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-3 is-spaced has-text-centered">
                    Healthcare AI Chatbot
                  </p>
                  <p className="subtitle is-5">
                    A fullstack webpage that supports authentication, booking
                    and cancelling of appointments. A chatbot feature is also
                    implemented which guides users to navigate the webpage and
                    make bookings for them.
                  </p>
                  <div className="tech">
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
                    </Tippy>
                  </div>
                  <footer className="card-footer">
                    <a href="" className="card-footer-item">
                      <BsGithub size={40} />
                    </a>
                    <a href="http://35.197.150.195:3000/" className="card-footer-item">
                      <AiOutlineExport size={40} />
                    </a>
                  </footer>
                </div>
              </div>
            </div>
            <div className="column is-one-half-desktop is-half-tablet is-one-third-widescreen">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={PersonalWebsiteV1} alt="Personal Website V1" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-3 is-spaced has-text-centered">
                    Personal Website V1
                  </p>
                  <p className="subtitle is-5">
                    My first attempt at creating a webpage! Made using React.
                  </p>

                  <div className="tech">
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
                    </Tippy>
                  </div>
                  <footer className="card-footer">
                    <a
                      href="https://github.com/GohTengFong/personal-website-v1"
                      className="card-footer-item"
                    >
                      <BsGithub size={40} />
                    </a>
                    <a
                      href="https://tengfong.vercel.app/"
                      className="card-footer-item"
                    >
                      <AiOutlineExport size={40} />
                    </a>
                  </footer>
                </div>
              </div>
            </div>
            <div className="column is-one-half-desktop is-half-tablet is-one-third-widescreen">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img
                      src={StockPricePredictor}
                      alt="Stock Price Predictor"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-3 is-spaced has-text-centered">
                    Stock Price Predictor
                  </p>
                  <p className="subtitle is-5">
                    A very simple Python stock price predictor implemented using
                    numpy to perform calculations on the data, scikit-learn to
                    build a model and matplotlib to plot my data.
                  </p>

                  <div className="tech">
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
                    <Tippy
                      className="tippy"
                      placement="bottom"
                      content={"Flask"}
                      delay={50}
                      animation="shift-away"
                    >
                      <motion.i
                        className="devicon-flask-original colored dark-mode-icon"
                        whileHover={{ scale: 1.2 }}
                      />
                    </Tippy>
                  </div>
                  <footer className="card-footer">
                    <a
                      href="https://github.com/GohTengFong/stock-price-predictor"
                      className="card-footer-item"
                    >
                      <BsGithub size={40} />
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
