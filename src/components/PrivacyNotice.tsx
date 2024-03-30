import { useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";

function PrivacyNotice() {
  const [consent, setConsent] = useState<string | null>(null);
  useMemo(() => {
    const consent = localStorage.getItem("genwealth.localStorageConsent");
    setConsent(consent);
  }, []);

  return (
    <div className="fixed bottom-0 flex justify-end pointer-events-none w-full z-30 p-2">
      <div
        role="alert"
        className={`alert flex flex-col text-neutral-content
        bg-neutral bg-opacity-[calc(2/3)] backdrop-blur-3xl
        w-[calc(.5*(100%-1280px))] max-sm:w-full min-w-min
        origin-bottom-right ease-in
        ${consent ? "transition-all duration-[600ms] opacity-0 scale-0 motion-safe:-rotate-180 motion-safe:translate-y-full" : "pointer-events-auto"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-center">
          <FormattedMessage
            id="localStorageConsent"
            values={{
              localStorage: (
                <a href="https://developer.mozilla.org/docs/Web/API/Window/localStorage" target="_blank" className="link link-hover">
                  <pre className="inline font-bold">localStorage</pre>
                </a>
              ),
            }}
          />
        </span>
        <div className="join gap-px">
          <button
            className="btn btn-wide button-outline join-item"
            onClick={() => {
              localStorage.setItem("genwealth.localStorageConsent", "1");
              setConsent("1");
            }}
          >
            <FormattedMessage id="ok" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyNotice;
