import { scrollToElement } from "../util";
// import ContainerTxtImg from "./ContainerTxtImg";

function CallToAction() {
  return (
    <div>
      {/* Anchor Scroll Offset */}
      <div id="call-to-action" className="relative -top-20" />

      {/* Call to Action */}
      <div className="mockup-browser bg-base-content bg-opacity-90 m-2 shadow-xl hover:animate-wiggle">
        <div className="flex bg-violet-950 shadow-xl">
          <div className="input border border-neutral border-opacity-25 bg-base-content bg-opacity-90 w-full h-fit m-4 truncate link-neutral">
            <a href="https://preview.genwealth.app" className="link link-hover leading-7">
              https://preview.genwealth.app
            </a>
          </div>
          <div className="btn btn-circle btn-xs btn-disabled !btn-success mr-2 my-auto" />
          <div className="btn btn-circle btn-xs btn-disabled !btn-warning mr-2 my-auto" />
          <div className="btn btn-circle btn-xs btn-disabled !btn-error mr-4 my-auto" />
        </div>
        <div className="flex flex-col gap-2 p-8 border-t border-neutral border-opacity-20">
          <h2 className="text-purple-950 my-2 style-h2 xl:tracking-tighter xl:font-thin lg:text-5xl lg:tracking-tight lg:font-light md:tracking-normal md:font-medium sm:text-4xl sm:tracking-wide sm:font-bold max-sm:text-3xl max-sm:tracking-wider max-sm:font-black">
            <a
              // href="#call-to-action"
              onClick={(e) => scrollToElement(e, "#call-to-action")}
            >
              Try the Prototype
            </a>
          </h2>
          <div className="w-full">
            <img src="/svg/Prototype.svg" className="float-right w-1/2 ml-2 mb-2 lg:mt-[-72px] sm:mt-4 max-sm:mt-4" />
            <div className="flex flex-col gap-2 text-indigo-950">
              <p className="my-2 style-p">You can already try the demo right now! Make sure to set your wallet network to Preview.</p>
              <p className="my-2 style-p">
                <b>NOTE:</b> The current look and feel of the app does not represent the actual public Testnet and Mainnet release later.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="https://preview.genwealth.app" className="button-primary">
              Launch app
            </a>
            <a href="https://docs.genwealth.app" className="button-primary">
              View docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  // <ContainerTxtImg
  //     id={"call-to-action"}
  //     image={{
  //     imageSource: "/svg/Prototype.svg",
  //     alternateText: "Call to Action",
  //     className: "p-4 max-w-96 max-h-96 !object-contain",
  //     }}
  //     title={"Try the Prototype"}
  //     paragraphs={[
  //     <>You can already try the demo right now! Make sure to set your wallet network to Preview.</>,
  //     <>
  //         <b>NOTE:</b> The current look and feel of the app does not represent the actual public Testnet and Mainnet release later.
  //     </>,
  //     ]}
  //     links={[
  //     {
  //         linkName: "Launch app",
  //         linkURL: "https://preview.genwealth.app",
  //     },
  //     {
  //         linkName: "View docs",
  //         linkURL: "https://docs.genwealth.app",
  //     },
  //     ]}
  // />
  // );
}

export default CallToAction;
