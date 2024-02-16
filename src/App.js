import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import ParticlesBg from "./components/particles/ParticlesBg";

const App = () => {
  return (
    <div>
      <Navbar />
      <ParticlesBg />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </div>
  );
};

export default App;
