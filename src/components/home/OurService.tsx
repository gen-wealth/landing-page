import ContainerImgTxt from "../ContainerImgTxt";

function OurService() {
  return (
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
          Lost assets in the crypto world due to being locked in a wallet forever is a big problem, we offer a <b>secure</b> and <b>trustless</b> solution for
          you to be able to leave assets for your loved ones.
        </>,
      ]}
      links={[]}
    />
  );
}

export default OurService;
