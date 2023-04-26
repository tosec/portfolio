import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
