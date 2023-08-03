import "./Contact.scss";
import { Reveal } from "../revealanimation/RevealAnimation";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <Reveal width="100%">
            <div className="columns pb-6 mb-6 is-vcentered">
              <div className="column is-one-third">
                <div className="section-header">
                  <h3 className="section-title is-1 has-text-centered">
                    Contact.
                  </h3>
                </div>
              </div>

              <div className="column is-two-third">
                <div className="header-line"></div>
              </div>
            </div>
          </Reveal>

          <div className="block has-text-centered mb-6 pb-6">
            <h1 className="title">
              Thank you for visiting! Feel free to reach out to me
              <a href="mailto:tengfonggoh@gmail.com"> here</a>!
            </h1>
          </div>

          <div className="block is-flex is-justify-content-space-evenly pb-6">
            <a href="https://github.com/GohTengFong" className="social-icon">
              <BsGithub size={40} />
            </a>
            <a href="https://www.google.com/" className="social-icon">
              <BsLinkedin size={40} />
            </a>
            <a href="https://leetcode.com/GohTengFong/" className="social-icon">
              <SiLeetcode size={40} />
            </a>
          </div>

          <div className="block is-flex is-justify-content-space-evenly pt-6 mt-6">
            <a href="#app" className="social-icon">
              <AiOutlineArrowUp size={100} />
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
