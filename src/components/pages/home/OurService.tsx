import { FormattedMessage, useIntl } from "react-intl";
import ContainerImgTxt from "../../ContainerImgTxt";

function OurService() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "ourService.title" });

  return (
    <ContainerImgTxt
      id={"our-service"}
      image={{
        imageSource: "/svg/Vault.svg",
        alternateText: title,
        className: "p-4 max-w-96 max-h-96 !object-contain",
      }}
      title={title}
      paragraphs={[
        <>
          <FormattedMessage
            id="ourService.p1"
            values={{
              secure: <b>{intl.formatMessage({ id: "secure" })}</b>, // <b>secure</b>
              trustless: <b>{intl.formatMessage({ id: "trustless" })}</b>, // <b>trustless</b>
            }}
          />
        </>,
      ]}
      links={[]}
    />
  );
}

export default OurService;
