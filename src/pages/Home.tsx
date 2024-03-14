import { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import HomeContents from "../components/home/HomeContents";

function Home() {
  // Scroll element into view from pathname as anchor on window load
  useEffect(() => {
    const selector = location.pathname.slice(1);
    if (selector) {
      const element = document.querySelector("#" + selector);
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

      {/* In the future when we have subpages,
      use <BrowserRouter> from "react-router-dom" instead */}
      <div className="w-full max-w-screen-xl h-min mx-auto">
        <HomeContents />
      </div>

      <Footer />
    </>
  );
}

export default Home;
