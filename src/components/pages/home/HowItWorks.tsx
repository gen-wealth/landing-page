import { MouseEvent, useState } from "react";
import VideoCarousel, { VideoCarouselIndicator } from "./VideoCarousel";
import { FormattedMessage, useIntl } from "react-intl";
import Container from "../../Container";

function HowItWorks() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "howItWorks.title" });

  // Video Carousel
  const [videoIndex, setVideoIndex] = useState(0);
  const slideToVideo = (e: MouseEvent, index: number) => {
    e.preventDefault();
    document.getElementById(`slide-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setVideoIndex(index);
  };

  return (
    <Container
      id={"how-it-works"}
      title={title}
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

        // p1
        <>
          <FormattedMessage
            id="howItWorks.p1"
            values={{
              vaults: <b>{intl.formatMessage({ id: "vaults" })}</b>,
              vaultKey: <b>{intl.formatMessage({ id: "vaultKey" })}</b>,
              deadline: <b>{intl.formatMessage({ id: "deadline" })}</b>,
              proofOfLife: <i>{intl.formatMessage({ id: "proofOfLife" })}</i>,
            }}
          />
        </>,
        // <>
        //   Our DApp allows you to setup <b>vaults</b>. A vault is a smart contract address, it's just like a wallet where you have self custody and total control
        //   of its contents. In addition to that, you're able to define rules on how you want the assets to be distributed. When you create a vault, you'll get a
        //   unique address, you'll also get a <b>vault key</b>, and you set a <b>deadline</b>. The deadline can be postponed from time to time, we call this{" "}
        //   <i>Proof of Life</i>. As the vault owner, you can withdraw from the vault at any time regardless of the deadline. You can share the vault access by
        //   minting more vault key tokens and send them to your other wallets.
        // </>,

        // p2
        <>
          <FormattedMessage
            id="howItWorks.p2"
            values={{
              pockets: <b>{intl.formatMessage({ id: "pockets" })}</b>,
              pocketKeys: <b>{intl.formatMessage({ id: "pocketKeys" })}</b>,
            }}
          />
        </>,
        // <>
        //   Within your vault, you can create subdivisions called <b>pockets</b> where you allocate your inheritance assets across them. You're then able to mint
        //   the associated <b>pocket keys</b> to be sent to the beneficiaries. These pocket key tokens allow them to claim their share of the assets from the
        //   corresponding pockets only after the vault's deadline has completely elapsed.
        // </>,

        // video-carousel
        <VideoCarousel videoIndex={videoIndex} slideToVideo={slideToVideo} />,
        // <VideoCarouselIndicator videoIndex={videoIndex} slideToVideo={slideToVideo} />, // Doesn't sync when swiped

        // p3
        <>
          <FormattedMessage id="howItWorks.p3" />
        </>,
        // <>
        //   With this DApp, you can avoid the issue of your crypto assets being lost forever, locked in a wallet if you lose your seedphrase, or if something
        //   unexpected happens and you're gone without having an inheritance plan ready yet. Now you can keep your crypto assets safer as there's no need to share
        //   seedphrases anymore.
        // </>,

        // p4
        <>
          <FormattedMessage
            id="howItWorks.p4"
            values={{
              cardano: (
                <a href="https://cardano.org" className="link link-hover style-link">
                  {intl.formatMessage({ id: "cardano" })}
                </a>
              ),
              here: (
                <a href="https://docs.genwealth.app" className="link link-hover style-link">
                  {intl.formatMessage({ id: "here" })}
                </a>
              ),
            }}
          />
        </>,
        // <>
        //   GenWealth is the first inheritance protocol on{" "}
        //   <a href="https://cardano.org" className="link link-hover style-link">
        //     Cardano
        //   </a>
        //   , we're planning to expand our service to other blockchains in the future. For more technical details on how the smart contract works, you can take a
        //   look at the code documentations{" "}
        //   <a href="https://docs.genwealth.app" className="link link-hover style-link">
        //     here
        //   </a>
        //   .
        // </>,
      ]}
      links={[]}
    />
  );
}

export default HowItWorks;
