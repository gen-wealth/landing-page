import { FormattedMessage, useIntl } from "react-intl";
import ContainerTxtImg from "../ContainerTxtImg";

function AboutUs() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "aboutUs.title" });

  return (
    <ContainerTxtImg
      id={"about-us"}
      image={{
        imageSource: "/svg/AboutUs.svg",
        alternateText: title,
        className: "p-4 max-w-96 max-h-96 !object-contain",
      }}
      title={title}
      paragraphs={[
        // <>
        //   We are passionate people exploring the possibilities in the blockchain world. With a spirit of innovation, we are open to new ideas. Meet our team
        //   of talented people from around the globe.
        // </>,
        <>
          <FormattedMessage id="aboutUs.p1" />
        </>,
        // <>
        //   We are a team with complementary skills, passionate about Web3 Tech and its potentials. We aim to build tools that empower individuals financially,
        //   giving them more options, safety and control over their assets.
        // </>,
      ]}
      links={[]}
    />
  );
}

export default AboutUs;
