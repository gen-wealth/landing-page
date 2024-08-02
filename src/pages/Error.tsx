import { CSSProperties, useEffect, useState } from "react";
import { useToast } from "../contexts/toast/ToastContext";

interface CountdownCSS extends CSSProperties {
  "--value"?: number;
}
interface RadialProgressCSS extends CountdownCSS {
  "--size"?: string;
  "--thickness"?: string;
}

type sec = number;
function Error(props: { title?: string; message?: string; timeout?: sec }) {
  const showToast = useToast();
  useEffect(() => {
    if (props.message) {
      showToast(
        {
          message: <p>{props.message}</p>,
          alert: "error",
        },
        15_000
      );
    }
  }, []);

  const timeout = props.timeout ?? 60; // sec
  const [countdown, setCountdown] = useState(timeout);
  useEffect(() => {
    if (countdown <= 0) {
      location.reload();
    } else {
      const timeoutID = setTimeout(() => setCountdown(countdown - 1), 1_000);
      return () => clearTimeout(timeoutID);
    }
  }, [countdown]);

  const title = props.title ?? "Page Failed to Load";

  const radialProgressCSS: RadialProgressCSS = {
    "--value": (100 * countdown) / timeout,
    "--size": "24rem",
    "--thickness": "3rem",
  };
  const countdownCSS: CountdownCSS = {
    "--value": countdown,
  };

  return (
    <div className="flex flex-col justify-center text-center items-center gap-4 w-fit h-screen m-auto">
      {/* Title */}
      <h1 className="mt-10 text-[min(10vw,10vh)] font-bold style1">{title}</h1>

      {/* Stopwatch */}
      <div
        className="radial-progress bg-base-content bg-opacity-[calc(2/3)] text-primary-focus border-none
        -scale-x-100 shrink-0 shadow-xl after:shadow-xl after:blur-sm before:blur-3xl"
        style={radialProgressCSS}
        role="progressbar"
      >
        <div className="flex flex-col items-center gap-2 z-10 -scale-x-100">
          <p className="mt-5 style-p">Automatically reload page in</p>

          <div className="shrink countdown text-3xl">
            <span style={countdownCSS} className="font-mono" />
            &nbsp;sec.
          </div>

          <button className="button-primary" onClick={() => location.reload()}>
            Reload now
          </button>
        </div>
      </div>

      {/* to make sure Stopwatch in the middle of the page */}
      <h1 className="mt-10 text-[min(10vw,10vh)] font-bold style1 invisible shrink overflow-clip">{title}</h1>
    </div>
  );
}

export default Error;
