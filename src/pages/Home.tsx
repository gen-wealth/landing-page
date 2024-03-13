import { MouseEvent, useEffect, useState } from "react";
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

  const [videoIndex, setVideoIndex] = useState(0);
  const videos = [
    {
      url: "https://www.youtube-nocookie.com/embed/8jbSy2PIBa8",
      title: "GenWealth - Eastern TownHall Presentation",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/umr_v0WR0Ek",
      title: "Intro by DecentralizedNation",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/PGOgVaL9EM8",
      title: "Full Demo ft. DecentralizedNation",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/PVJa5Leuz3g",
      title: "Milestone v2 Pt.1",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/56DVog-oSvY",
      title: "Milestone v2 Pt.2",
    },
  ];
  const slideToVideo = (e: MouseEvent, index: number) => {
    e.preventDefault();
    document.querySelector(`#slide-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setVideoIndex(index);
  };
  const videosCarousel = (
    <div className="carousel w-full">
      {videos.map((video, index) => (
        <div id={`slide-${index}`} key={`slide-${index}`} className="carousel-item relative w-full gap-2 flex-wrap">
          <div className="absolute flex justify-between pointer-events-none transform -translate-y-1/2 left-5 right-5 top-1/2 -z-50">
            <progress className="progress m-auto w-1/2" />
          </div>

          <iframe
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="grow aspect-video w-full shadow-xl"
          ></iframe>

          <div className="absolute flex justify-between pointer-events-none transform -translate-y-1/2 left-2 right-2 top-1/2">
            <a
              // href={`#slide-${(index - 1 + videos.length) % videos.length}`}
              className={`${
                index == 0 && "invisible"
              } btn btn-circle border-none bg-base-content hover:bg-base-content bg-opacity-[calc(1/3)] hover:bg-opacity-[calc(2/3)] pointer-events-auto shadow-xl`}
              onClick={(e) => slideToVideo(e, (index - 1 + videos.length) % videos.length)}
            >
              &#10094;
            </a>
            <a
              // href={`#slide-${(index + 1) % videos.length}`}
              className={`${
                index == videos.length - 1 && "invisible"
              } btn btn-circle  border-none bg-base-content hover:bg-base-content bg-opacity-[calc(1/3)] hover:bg-opacity-[calc(2/3)] pointer-events-auto shadow-xl`}
              onClick={(e) => slideToVideo(e, (index + 1) % videos.length)}
            >
              &#10095;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
  const videosCarouselIndicator = (
    <div className="flex justify-center w-full -my-8 gap-2 scale-50">
      {videos.map((_, index) => (
        <a
          key={`indicator-${index}`}
          // href={`#slide-${index}`}
          className={`button-primary !btn-circle !btn-xs ${
            index == videoIndex
              ? "!btn-disabled !bg-violet-950 !bg-opacity-100 hover:!bg-violet-950 hover:!bg-opacity-100"
              : "!btn-outline !bg-violet-950 hover:!bg-violet-900 !bg-opacity-[calc(1/3)] hover:!bg-opacity-[calc(2/3)]"
          }`}
          onClick={(e) => slideToVideo(e, index)}
        />
      ))}
    </div>
  );

  return (
    <>
      <NavBar />
      <Hero />

      {/* Use <BrowserRouter> in the future from "react-router-dom" */}
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
              Lost assets in the crypto world due to being locked in a wallet forever is a big problem, we offer a <b>secure</b> and <b>trustless</b> solution
              for you to be able to leave assets for your loved ones.
            </>,
          ]}
          links={[]}
        />

        {/* Wall of Text */}
        <Container
          id={"how-it-works"}
          title={"How it Works"}
          paragraphs={[
            // <>
            //   We are utilizing the inherent security from the design of the blockchain. We start from the{" "}
            //   <a href="https://cardano.org" className="link link-hover style-link">
            //     Cardano
            //   </a>{" "}
            //   network, later we're going to expand to other blockchains as well. We wrote a set of smart contracts to validate the transactions in a trustless
            //   manner, so you can be rest assured that you're always in full control of your assets. Only the people selected by you can access the assets with
            //   the rules you defined.
            // </>,
            // <>
            //   The smart contract generates a unique vault for each user where you can <i>freeze</i> your assets and then it will <i>melt</i> when the time
            //   comes, which is after the deadline you set. As long as you keep interacting with the vault from time to time, the deadline will be postponed.
            // </>,
            // <>
            //   Then the beneficiary, which is a person who holds a key token, will be able to redeem the assets after the vault has melted. Unlike the
            //   beneficiary, the vault owner is able to withdraw the assets from the vault at any time regardless of the deadline.
            // </>,
            <>
              Our DApp allows you to setup <b>vaults</b>. A vault is a smart contract address, it's just like a wallet where you have self custody and total
              control of its contents. In addition to that, you're able to define rules on how you want the assets to be distributed. When you create a vault,
              you'll get a unique address, you'll also get a <b>vault key</b>, and you set a <b>deadline</b>. The deadline can be postponed from time to time,
              we call this <i>Proof of Life</i>. As the vault owner, you can withdraw from the vault at any time regardless of the deadline. You can share the
              vault access by minting more vault key tokens and send them to your other wallets.
            </>,
            <>
              Within your vault, you can create subdivisions called <b>pockets</b> where you allocate your inheritance assets across them. You're then able to
              mint the associated <b>pocket keys</b> to be sent to the beneficiaries. These pocket key tokens allow them to claim their share of the assets from
              the corresponding pockets only after the vault's deadline has completely elapsed.
            </>,
            <>{videosCarousel}</>,
            // <>{videosCarouselIndicator}</>, // Doesn't sync when swiped
            <>
              With this DApp, you can avoid the issue of your crypto assets being lost forever, locked in a wallet if you lose your seedphrase, or if something
              unexpected happens and you're gone without having an inheritance plan ready yet. Now you can keep your crypto assets safer as there's no need to
              share seedphrases anymore.
            </>,
            <>
              GenWealth is the first inheritance protocol on{" "}
              <a href="https://cardano.org" className="link link-hover style-link">
                Cardano
              </a>
              , we're planning to expand our service to other blockchains in the future. For more technical details on how the smart contract works, you can
              take a look at the code documentations{" "}
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
            // <>
            //   We are passionate people exploring the possibilities in the blockchain world. With a spirit of innovation, we are open to new ideas. Meet our team
            //   of talented people from around the globe.
            // </>,
            <>
              We are a team with complementary skills, passionate about Web3 Tech and its potentials. We aim to build tools that empower individuals
              financially, giving them more options, safety and control over their assets.
            </>,
          ]}
          links={[]}
        />
        <TeamMembers />

        {/* Testimonials */}

        {/* Partnerships & Sponsors */}
        {/* <div className="max-sm:bg-[url('/CardanoIcon.svg')] sm:bg-[url('/CardanoFull.svg')] bg-no-repeat bg-center max-sm:aspect-[1/2] sm:aspect-[3] mx-auto max-sm:w-1/2 sm:w-11/12" /> */}

        <ContactUs />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}

export default Home;
