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
          <div
            className="input truncate link-neutral rounded-full
            border border-neutral border-opacity-25
            bg-base-content bg-opacity-75
            w-full h-fit m-4"
          >
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
          <h2
            className="text-primary my-2 style-h2
            xl:tracking-tighter lg:text-5xl max-lg:font-bold lg:tracking-tight md:tracking-normal sm:text-4xl sm:tracking-wide max-sm:text-3xl max-sm:font-black max-sm:tracking-wider"
          >
            <button onClick={(e) => scrollToElement(e, "call-to-action")}>{title}</button>
          </h2>

          {/* Body */}
          <div className="w-full">
            <img src="https://gen-wealth.github.io/public/svg/Prototype.svg" className="float-right w-1/2 ml-2 mb-2 lg:mt-[-4.5rem] sm:mt-4 max-sm:mt-4" />
            <div className="text-neutral">
              {/* p1 */}
              <p className="my-2 style-p">
                <FormattedMessage id="callToAction.p1" />
              </p>

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
            </div>
          </div>

          {/* Actions */}
          <div className="join gap-px">
            <a href="https://preview.genwealth.app" className="button-primary join-item">
              {intl.formatMessage({ id: "callToAction.action1" })}
            </a>
            <a href="https://help.genwealth.app" className="button-outline-dark join-item">
              {intl.formatMessage({ id: "callToAction.action2" })}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
