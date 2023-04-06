import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills"

export default function App() {
  return (
    <main className="min-h-screen text-gray-400 bg-zinc-700 body-font">
      <Navbar />
      <About />
      <Skills />
    </main>
  );
}
