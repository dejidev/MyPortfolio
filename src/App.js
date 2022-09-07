import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Skills from "./Components/Skill";
import Loading from "./Components/Loading";
import Home from "./Components/Home";
import SharedLayout from "./Components/SharedLayout";

function App({ show, setShow }) {
  return (
    <main className={`bg-[#0a192f]  text-[#64ffda] py-5 px-5 md:px-5 relative`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SharedLayout show={show} setShow={setShow} />}
          >
            <Route index element={<Home show={show} />} />
            <Route path="/about" element={<About show={show} />} />
            <Route path="/experience" element={<Experience show={show} />} />
            <Route path="/skills" element={<Skills show={show} />} />
            <Route path="/projects" element={<Project show={show} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
