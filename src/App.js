import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import SharedLayout from "./Components/SharedLayout";

function App({ show, setShow }) {
  const [loading, setLoading] = useState(true);

  return (
    <main
      className={`bg-[#0a192f]  text-[#64ffda] py-5 px-5 md:px-5 relative min-h-screen overflow-x-hidden`}
    >
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<SharedLayout show={show} setShow={setShow} />}
            >
              <Route index element={<Home show={show} />} />
              <Route path="/about" element={<About show={show} />} />
              <Route path="/experience" element={<Experience show={show} />} />
              <Route path="/contact" element={<Contact show={show} />} />
              <Route path="/projects" element={<Project show={show} />} />
              <Route path="/resume" element={<Resume />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;
