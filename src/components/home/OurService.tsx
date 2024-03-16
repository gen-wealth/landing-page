import ContainerImgTxt from "../ContainerImgTxt";
import { FormattedMessage, useIntl } from "react-intl";

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
            values={{ secure: <b>{<FormattedMessage id="secure" />}</b>, trustless: <b>{<FormattedMessage id="trustless" />}</b> }}
          />
        </>,
      ]}
      links={[]}
    />
  );
}

export default OurService;
