import CallToAction from "../CallToAction";
import ContactUs from "../ContactUs";
import TeamMembers from "../TeamMembers";
import AboutUs from "./home/AboutUs";
import HowItWorks from "./home/HowItWorks";
import OurService from "./home/OurService";
import Roadmap from "./home/Roadmap";

function HomeContents() {
  return (
    <>
      <OurService />
      <HowItWorks />

      {/* Testimonials */}

      <Roadmap />

      {/* Partnerships & Sponsors */}
      {/* <div
        className="
        sm:bg-[url('/CardanoFull.svg')] max-sm:bg-[url('/CardanoIcon.svg')]
        bg-center bg-no-repeat mx-auto
        sm:aspect-[3] max-sm:aspect-[1/2]
        sm:w-11/12 max-sm:w-1/2"
      /> */}

      <AboutUs />
      <TeamMembers />
      <ContactUs />

      <CallToAction />
    </>
  );
}

export default HomeContents;
