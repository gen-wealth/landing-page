import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SideBar from "../components/SideBar";
import Marketing from "../components/Marketing";
import HomeContents from "../components/pages/HomeContents";
import Footer from "../components/Footer";

function Home() {
  // Scroll element into view from pathname as anchor on page load
  useEffect(() => {
    const anchor = location.pathname.slice(1);
    if (anchor) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    // In the future when we have subpages...
    // use <BrowserRouter> from "react-router-dom"
    <>
      <NavBar />
      <Hero />

      <SideBar />
      {/* <Marketing /> */}

      <div className="w-full max-w-screen-xl h-min mx-auto">
        <HomeContents />
      </div>

      <Footer />
    </>
  );
}

export default Home;
