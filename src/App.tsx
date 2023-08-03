import React from "react";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homepage/HomePage";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import 'bulma/css/bulma.min.css';

// import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="app" id="app">
        <NavBar />
        <HomePage />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
