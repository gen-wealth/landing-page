import { useEffect, useState } from "react";

Error.defaultProps = {
  timeout: 60,
};
function Error(props: { title?: string; message?: string; timeout: number }) {
  const [countdown, setCountdown] = useState(props.timeout);
  function updateCountdown(countdown: number) {
    if (countdown < 0) {
      location.reload();
    } else {
      setTimeout(() => {
        setCountdown(countdown);
        updateCountdown(countdown - 1);
      }, 1000);
    }
  }
  useEffect(() => {
    updateCountdown(countdown - 1);
  }, []);

  const title = props.title ?? "Page Failed to Load";
  return (
    <div className="flex flex-col justify-center text-center items-center gap-4 w-fit h-screen m-auto">
      {/* Title */}
      <h1 className="mt-10 text-5xl font-bold style1">{title}</h1>

      {/* Stopwatch */}
      <div
        className="radial-progress bg-base-content bg-opacity-[calc(2/3)] text-primary-focus border-none
        -scale-x-100 shrink-0 shadow-xl after:shadow-xl after:blur-sm before:blur-3xl"
        style={{ "--value": (100 * countdown) / props.timeout, "--size": "24rem", "--thickness": "3rem" }}
        role="progressbar"
      >
        <div className="flex flex-col items-center gap-2 z-10 -scale-x-100">
          <p className="mt-5 style-p">Automatically reload page in</p>

          <div className="shrink countdown text-3xl">
            <span style={{ "--value": countdown }} className="font-mono" />
            &nbsp;sec.
          </div>

          <a href="/" className="button-primary">
            Reload now
          </a>
        </div>
      </div>

      {/* to make sure Stopwatch in the middle of the page */}
      <h1 className="mt-10 text-5xl font-bold style1 invisible shrink overflow-clip">{title}</h1>

      {/* Error Message */}
      {!props.message ? (
        <></>
      ) : (
        <div className="toast">
          <div className="alert alert-error">
            <span className="font-bold text-xs">{props.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Error;
