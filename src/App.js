import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
  return (
    <main className="min-h-screen text-gray-400 bg-zinc-700 body-font">
      <Navbar />
      <About />
    </main>
  );
}
