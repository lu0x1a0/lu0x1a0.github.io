import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/SideNavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}