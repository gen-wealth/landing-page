import { FormattedMessage, useIntl } from "react-intl";
import ContainerImgTxt from "../../ContainerImgTxt";

function OurService() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "ourService.title" });

  return (
    <ContainerImgTxt
      id={"our-service"}
      image={{
        imageSource: "https://gen-wealth.github.io/public/svg/ManDevelopingWebsiteOnDesk.svg",
        alternateText: title,
        className: "p-4 max-w-96 max-h-96 !object-contain",
        attribution: (
          <div className="text-primary text-center text-xs text-opacity-[calc(1/3)]">
            <a
              href="https://iconscout.com/illustrations/man"
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
            {" on "}
            <a
              href="https://iconscout.com"
              className="text-underline font-size-sm link link-hover style-link !text-opacity-[calc(2/3)]"
              target="_blank"
              rel="noreferrer"
            >
              IconScout
            </a>
          </div>
        ),
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
