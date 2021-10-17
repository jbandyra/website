import { useState } from "react";

import Banner from "@components/banner/Banner";
import Header from "@components/header/Header";
import About from "@components/about/About";
import About2 from "@components/about2/About2";
import About3 from "@components/about3/About3";
import Projects from "@components/projects/Projects";
import Footer from "@components/footer/Footer";

export default function Home() {
  const [isDarkModeOn, toggleDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    toggleDarkMode((prevState) => !prevState);
  };
  return (
    <div className={`layout ${isDarkModeOn ? "dark" : ""}`}>
      <Header
        isDarkModeOn={isDarkModeOn}
        handleDarkModeToggle={handleDarkModeToggle}
      />
      <Banner />
      <About />
      <About2 />
      <About3 />
      <Projects />
      <Footer />
    </div>
  );
}
