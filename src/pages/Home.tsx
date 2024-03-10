import CallToAction from "../components/CallToAction";
import ContactUs from "../components/ContactUs";
import Container from "../components/Container";
import ContainerImgTxt from "../components/ContainerImgTxt";
import ContainerTxtImg from "../components/ContainerTxtImg";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import TeamMembers from "../components/TeamMembers";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />

      <div className="w-full max-w-screen-xl h-min mx-auto">
        {/* Our Service */}
        <ContainerImgTxt
          id={"our-service"}
          image={{
            imageSource: "/svg/Vault.svg",
            alternateText: "Our Service",
            className: "p-4 max-w-96 max-h-96 !object-contain",
          }}
          title={"Our Service"}
          paragraphs={[
            <>
              A crypto wallet is secure by design, only you can spend your wallet. But what happens when the unexpected happens, like when you cease to exist.
              No one can access your wallet, not even your closest ones.
            </>,
            <>
              Lost assets in the crypto world is a big problem, we offer a secure and trustless solution for you to be able to leave assets for your loved ones.
            </>,
          ]}
          links={[]}
        />

        {/* Wall of Text */}
        <Container
          id={"how-it-works"}
          title={"How it Works"}
          paragraphs={[
            <>
              We are utilizing the inherent security from the design of the blockchain. We start from the&nbsp;
              <a href="https://cardano.org" className="link link-hover style-link">
                Cardano
              </a>
              &nbsp;network, later we're going to expand to other blockchains as well. We wrote a set of smart contracts to validate the transactions in a
              trustless manner, so you can be rest assured that you're always in full control of your assets. Only the people selected by you can access the
              assets with the rules you defined.
            </>,
            <>
              The smart contract generates a unique vault for each user where you can <i>freeze</i> your assets and then it will <i>melt</i> when the time
              comes, which is after the deadline you set. As long as you keep interacting with the vault from time to time, the deadline will be postponed.
            </>,
            <>
              Then the beneficiary, which is a person who holds a key token, will be able to redeem the assets after the vault has melted. Unlike the
              beneficiary, the vault owner is able to withdraw the assets from the vault at any time regardless of the deadline.
            </>,
            <>
              For more details, read the smart contract documentations&nbsp;
              <a href="https://docs.genwealth.app" className="link link-hover style-link">
                here
              </a>
              .
            </>,
          ]}
          links={[]}
        />

        {/* About Us */}
        <ContainerTxtImg
          id={"about-us"}
          image={{
            imageSource: "/svg/AboutUs.svg",
            alternateText: "About Us",
            className: "p-4 max-w-96 max-h-96 !object-contain",
          }}
          title={"About Us"}
          paragraphs={[
            <>
              We are passionate people exploring the possibilities in the blockchain world. With a spirit of innovation, we are open to new ideas. Meet our team
              of talented people from around the globe.
            </>,
          ]}
          links={[]}
        />
        <TeamMembers />

        {/* Testimonials */}

        {/* Partnerships & Sponsors */}
        <div className="max-sm:bg-[url('/CardanoIcon.svg')] sm:bg-[url('/CardanoFull.svg')] bg-no-repeat bg-center max-sm:aspect-[1/2] sm:aspect-[3] mx-auto max-sm:w-1/2 sm:w-11/12" />

        <ContactUs />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}

export default Home;
