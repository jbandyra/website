import Banner from "@components/banner/Banner";
import Header from "@components/header/Header";
import About from "@components/about/About";
import About2 from "@components/about2/About2";
import About3 from "@components/about3/About3";
import Projects from "@components/projects/Projects";
import Footer from "@components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <About2 />
      <About3 />
      <Projects />
      <Footer />
    </>
  );
}
