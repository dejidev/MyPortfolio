import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App({ show, setShow }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShow(false); // Close the mobile navigation menu (optional)
    }
  };

  return (
    <main
      className={`bg-[#0a192f] text-[#64ffda] relative min-h-screen overflow-x-hidden`}
    >
      {loading ? (
        <Loading setLoading={setLoading} className="py-5 px-5 md:px-5" />
      ) : (
        // <BrowserRouter>
        //   <Navbar />
        //   <Routes>
        //     {/* <Route
        //       path="/"
        //       element={<SharedLayout show={show} setShow={setShow} />}
        //     > */}
        //       <Route path="/"  index element={<Home show={show} />} />
        //       <Route path="/about" element={<About show={show} />} />
        //       <Route path="/experience" element={<Experience show={show} />} />
        //       <Route path="/contact" element={<Contact show={show} />} />
        //       <Route path="/projects" element={<Project show={show} />} />
        //       <Route path="/resume" element={<Resume />} />
        //     {/* </Route> */}

        //   </Routes>
        // </BrowserRouter>

        <BrowserRouter>
          <Navbar
            scrollToElement={scrollToElement}
            className="py-5 px-5 md:px-5"
          />{" "}
          {/* Render the updated Navbar */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  scrollToElement={scrollToElement}
                  className="py-5 px-5 md:px-5"
                />
              }
            />
          </Routes>
          <Footer className="w-full py-5 px-5 md:px-5" />
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;
