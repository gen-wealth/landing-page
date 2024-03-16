import { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import HomeContents from "../components/home/HomeContents";
import IntlProvider from "react-intl/src/components/provider";

Home.defaultProps = {
  locale: "en",
  messages: {},
};
function Home(props: { locale: string; messages: Record<string, string> }) {
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
    <IntlProvider locale={props.locale} messages={props.messages}>
      <NavBar />
      <Hero />

      {/* In the future when we have subpages,
      use <BrowserRouter> from "react-router-dom" instead */}
      <div className="w-full max-w-screen-xl h-min mx-auto">
        <HomeContents />
      </div>

      <Footer />
    </IntlProvider>
  );
}

export default Home;
