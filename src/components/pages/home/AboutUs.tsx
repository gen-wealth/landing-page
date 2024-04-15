import { FormattedMessage, useIntl } from "react-intl";
import ContainerTxtImg from "../../ContainerTxtImg";

function AboutUs() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "aboutUs.title" });

  return (
    <ContainerTxtImg
      id={"about-us"}
      image={{
        imageSource: "https://gen-wealth.github.io/public/svg/AboutUs.svg",
        alternateText: title,
        className: "max-w-96 max-h-96 p-4",
      }}
      title={title}
      paragraphs={[<FormattedMessage id="aboutUs.p1" />]}
      links={[]}
    />
  );
}

export default AboutUs;
