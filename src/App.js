import React from "react";
import { Routes, Route } from "react-router";
import Resume from "./components/Resume";
import Main from "./components/Main";

export default function App() {
  return (
    <main className="min-h-screen text-gray-400 bg-zinc-700 body-font">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </main>
  );
}
