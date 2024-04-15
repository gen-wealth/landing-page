import { FormattedMessage, useIntl } from "react-intl";
import ContainerImgTxt from "./ContainerImgTxt";

function ContactUs() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "contactUs.title" });

  return (
    <ContainerImgTxt
      id="contact-us"
      image={{
        imageSource: "https://gen-wealth.github.io/public/svg/ContactUs.svg",
        alternateText: "hello@genwealth.app",
        className: "max-w-96 max-h-96 p-4",
      }}
      title={title}
      paragraphs={[
        <FormattedMessage
          id="contactUs.p1"
          values={{
            email: <b>hello@genwealth.app</b>,
          }}
        />,
      ]}
      links={[{ linkName: intl.formatMessage({ id: "contactUs.action1" }), linkURL: "mailto:hello@genwealth.app" }]}
    />
  );
}

export default ContactUs;
