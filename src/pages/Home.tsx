import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HomeContents from "../components/pages/HomeContents";
import Footer from "../components/Footer";

function Home() {
  // Scroll element into view from pathname as anchor on window load
  useEffect(() => {
    const id = location.pathname.slice(1);
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        const scrollElementIntoView = () =>
          element.scrollIntoView({
            behavior: "smooth",
          });
        window.addEventListener("load", scrollElementIntoView);
        return () => window.removeEventListener("load", scrollElementIntoView);
      }
    }
  }, []);

  return (
    <>
      <NavBar />
      <Hero />

      {/* In the future when we have subpages...
      use <BrowserRouter> from "react-router-dom" */}
      <div className="w-full max-w-screen-xl h-min mx-auto">
        <HomeContents />
      </div>

      <Footer />
    </>
  );
}

export default Home;
