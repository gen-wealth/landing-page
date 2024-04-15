import { FormattedMessage, useIntl } from "react-intl";
import ContainerImgTxt from "../../ContainerImgTxt";

function OurService() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "ourService.title" });

  return (
    <ContainerImgTxt
      id={"our-service"}
      image={{
        imageSource: "https://gen-wealth.github.io/public/svg/Vault.svg",
        alternateText: title,
        className: "max-w-96 max-h-96 p-4",
      }}
      title={title}
      paragraphs={[
        <FormattedMessage
          id="ourService.p1"
          values={{
            secure: <b>{intl.formatMessage({ id: "secure" })}</b>, // <b>secure</b>
            trustless: <b>{intl.formatMessage({ id: "trustless" })}</b>, // <b>trustless</b>
          }}
        />,
      ]}
      links={[]}
    />
  );
}

export default OurService;
