import ContainerImgTxt from "./ContainerImgTxt";

function ContactUs() {
  return (
    <ContainerImgTxt
      id="contact-us"
      image={{
        imageSource: "/svg/ContactUs.svg",
        alternateText: "hello@genwealth.app",
        className: "p-4 max-w-96 max-h-96 !object-contain",
      }}
      title={"Contact Us"}
      paragraphs={[
        <>
          Feel free to reach us out at <b>hello@genwealth.app</b>
        </>,
      ]}
      links={[{ linkName: "Send email", linkURL: "mailto:hello@genwealth.app" }]}
    />
  );
}

export default ContactUs;
