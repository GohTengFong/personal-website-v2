"use client";

import "./NavBar.scss";
import { useState } from "react";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" aria-label="main-navigation">
      <div className="navbar-brand">
        <h1 className="title is-1">Fong</h1>

        <div className="small-screen-wrapper">
          <DarkModeToggle />
        </div>

        {/* navbar-burger only appears on small screens, modifier class is-active to turn burger into cross */}
        <button
          className={isOpen ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          onClick={openBurger}
        >
          {/* Burger Display */}
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      {/* navbar-menu is hidden on small screens, modifier class is-active to display it */}
      <div className={isOpen ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <div className="navbar-item">
            <a className="subtitle is-3" href="#skills">
              Skills
            </a>
          </div>
          <div className="navbar-item">
            <a className="subtitle is-3" href="#projects">
              Projects
            </a>
          </div>
          <div className="navbar-item">
            <a className="subtitle is-3" href="experience">
              Experience
            </a>
          </div>
          <div className="navbar-item">
            <a className="subtitle is-3" href="#contact">
              Contact
            </a>
          </div>
          <div className="navbar-item">
            <div className="darkmode-wrapper">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
