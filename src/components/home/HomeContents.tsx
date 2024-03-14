import CallToAction from "../CallToAction";
import ContactUs from "../ContactUs";
import TeamMembers from "../TeamMembers";
import AboutUs from "./AboutUs";
import HowItWorks from "./HowItWorks";
import OurService from "./OurService";

function HomeContents() {
  return (
    <>
      <OurService />
      <HowItWorks />
      {/* TODO: Roadmap */}
      <AboutUs />
      <TeamMembers />
      {/* Testimonials */}
      {/* Partnerships & Sponsors */}
      {/* <div className="max-sm:bg-[url('/CardanoIcon.svg')] sm:bg-[url('/CardanoFull.svg')] bg-no-repeat bg-center max-sm:aspect-[1/2] sm:aspect-[3] mx-auto max-sm:w-1/2 sm:w-11/12" /> */}
      <ContactUs />
      <CallToAction />
    </>
  );
}

export default HomeContents;
