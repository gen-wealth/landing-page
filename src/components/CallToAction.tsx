import { FormattedMessage, useIntl } from "react-intl";
import { scrollToElement } from "../util";
import AnchorScrollOffset from "./AnchorScrollOffset";

function CallToAction() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "callToAction.title" });

  return (
    <div>
      <AnchorScrollOffset id={"call-to-action"} />

      {/* Call to Action */}
      <div className="mockup-browser bg-base-content bg-opacity-[calc(2/3)] m-2 shadow-xl hover:animate-wiggle">
        {/* Toolbar */}
        <div className="flex toolbar">
          <div className="input border border-neutral border-opacity-25 bg-base-content bg-opacity-75 w-full h-fit m-4 truncate link-neutral text-primary-focus">
            <a href="https://preview.genwealth.app" className="link link-hover leading-7">
              https://preview.genwealth.app
            </a>
          </div>
          <div className="btn btn-circle btn-xs btn-disabled !btn-success mr-2 my-auto" />
          <div className="btn btn-circle btn-xs btn-disabled !btn-warning mr-2 my-auto" />
          <div className="btn btn-circle btn-xs btn-disabled !btn-error mr-4 my-auto" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 p-8 border-t border-neutral border-opacity-20">
          {/* Title */}
          <h2 className="text-primary my-2 style-h2 xl:tracking-tighter lg:text-5xl max-lg:font-bold lg:tracking-tight md:tracking-normal sm:text-4xl sm:tracking-wide max-sm:text-3xl max-sm:font-black max-sm:tracking-wider">
            <a
              // href="#call-to-action"
              onClick={(e) => scrollToElement(e, "call-to-action")}
            >
              {title}
            </a>
          </h2>

          {/* Body */}
          <div className="w-full">
            <img src="/svg/Prototype.svg" className="float-right w-1/2 ml-2 mb-2 lg:mt-[-72px] sm:mt-4 max-sm:mt-4" />
            <div className="text-secondary-content">
              {/* p1 */}
              <p className="my-2 style-p">
                <FormattedMessage id="callToAction.p1" />
              </p>
              {/* <p className="my-2 style-p">You can already try the demo right now! Make sure to set your wallet network to Preview.</p> */}

              {/* gap-2 */}
              <div className="h-2" />

              {/* p2 */}
              <p className="my-2 style-p">
                <FormattedMessage
                  id="callToAction.p2"
                  values={{
                    note: <b>{intl.formatMessage({ id: "note" }).toUpperCase()}:</b>,
                  }}
                />
              </p>
              {/* <p className="my-2 style-p">
                <b>NOTE:</b> The current look and feel of the app does not represent the actual public Testnet and Mainnet release later.
              </p> */}
            </div>
          </div>

          {/* Actions */}
          <div className="join">
            <a href="https://preview.genwealth.app" className="button-primary join-item">
              {intl.formatMessage({ id: "callToAction.action1" })}
            </a>
            <a href="https://docs.genwealth.app" className="button-secondary join-item">
              {intl.formatMessage({ id: "callToAction.action2" })}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
