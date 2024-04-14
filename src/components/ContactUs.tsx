import { FormattedMessage, useIntl } from "react-intl";
import ContainerImgTxt from "./ContainerImgTxt";

function ContactUs() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "contactUs.title" });

  return (
    <ContainerImgTxt
      id="contact-us"
      image={{
        imageSource: "https://gen-wealth.github.io/public/svg/DesignAndDevelopmentProcess.svg",
        alternateText: "hello@genwealth.app",
        className: "p-4 max-w-96 max-h-96 !object-contain",
        attribution: (
          <div className="text-primary text-center text-xs text-opacity-[calc(1/3)]">
            <a
              href="https://iconscout.com/illustrations/design"
              className="text-underline font-size-sm link link-hover style-link !text-opacity-[calc(2/3)]"
              target="_blank"
              rel="noreferrer"
            >
              Illustration
            </a>
            {" by "}
            <a
              href="https://iconscout.com/contributors/woobrodesign"
              className="text-underline font-size-sm link link-hover style-link !text-opacity-[calc(2/3)]"
              target="_blank"
              rel="noreferrer"
            >
              WOOBRO LTD
            </a>
          </div>
        ),
      }}
      title={title}
      paragraphs={[
        <>
          {/* Feel free to reach us out at <b>hello@genwealth.app</b> */}
          <FormattedMessage
            id="contactUs.p1"
            values={{
              email: <b>hello@genwealth.app</b>,
            }}
          />
        </>,
      ]}
      links={[{ linkName: intl.formatMessage({ id: "contactUs.action1" }), linkURL: "mailto:hello@genwealth.app" }]}
    />
  );
}

export default ContactUs;
