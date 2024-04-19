import { useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { getCookie, setCookie } from "../cookie";

function PrivacyNotice() {
  const [showNotice, setShowNotice] = useState(true);
  useMemo(() => {
    const consent = getCookie()?.cookieConsent;
    // show notice when there's no consent yet
    setShowNotice(!consent);
  }, []);

  const setConsent = (consent: boolean) => {
    setCookie({ cookieConsent: consent });
    setShowNotice(false);
  };

  return (
    <div className="fixed bottom-0 flex justify-end pointer-events-none w-full max-h-full z-30 p-2">
      <div
        role="alert"
        className={`alert flex flex-col text-neutral-content
        bg-neutral bg-opacity-[calc(2/3)] backdrop-blur-3xl
        w-[calc(.5*(100%-1280px))] max-sm:w-full min-w-min
        origin-bottom-right ease-in shadow-xl
        ${showNotice ? "pointer-events-auto" : "transition-all duration-[600ms] opacity-0 scale-0 motion-safe:-rotate-180 motion-safe:translate-y-full"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 size-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-center overflow-auto style-mask-y-md px-4 py-2 -mx-4 -my-2">
          <FormattedMessage
            id="cookieConsent"
            values={{
              cookies: <FormattedMessage id="cookies" />,
            }}
          />
        </span>
        <div className="join gap-px">
          <button className="button-outline w-32 join-item" onClick={() => setConsent(false)}>
            <FormattedMessage id="deny" />
          </button>
          <button className="button-secondary w-32 join-item" onClick={() => setConsent(true)}>
            <FormattedMessage id="accept" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyNotice;
