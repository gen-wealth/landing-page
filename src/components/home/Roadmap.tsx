import { useEffect, useRef } from "react";
import AnchorScrollOffset from "../AnchorScrollOffset";
import Container from "../Container";
import { FormattedMessage, useIntl } from "react-intl";
import { getTheme } from "../ThemeController";

type status = "Completed" | "In progress" | "Planned";
type roadmap = {
  time: string;
  title: string;
  // paragraphs: JSX.Element[];
  status: status;
};

const roadmapStatus = {
  ["Completed"]: "✔", // "✓",
  ["In progress"]: "⚙", // "★",
  ["Planned"]: "",
};

const roadmapStatusLangKey = {
  ["Completed"]: "completed",
  ["In progress"]: "inProgress",
  ["Planned"]: "planned",
};

function Roadmap() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "roadmap.title" });
  const roadmaps: roadmap[] = [
    {
      // 2023 Q3
      time: intl.formatMessage({ id: "roadmap1.time" }),
      // On Chain Proof of Concept
      title: intl.formatMessage({ id: "roadmap1.title" }),
      status: "Completed",
    },
    {
      // 2023 Q4
      time: intl.formatMessage({ id: "roadmap2.time" }),
      // Off Chain for Internal Testing
      title: intl.formatMessage({ id: "roadmap2.title" }),
      status: "Completed",
    },
    {
      // 2024 Q1
      time: intl.formatMessage({ id: "roadmap3.time" }),
      // UI/UX Design for Public Testnet
      title: intl.formatMessage({ id: "roadmap3.title" }),
      status: "Completed",
    },
    {
      // 2024 Q2
      time: intl.formatMessage({ id: "roadmap4.time" }),
      // Frontend and Backend Development
      title: intl.formatMessage({ id: "roadmap4.title" }),
      status: "In progress",
    },
    {
      // 2024 Q3
      time: intl.formatMessage({ id: "roadmap5.time" }),
      // Public Testnet and Bug Bounty
      title: intl.formatMessage({ id: "roadmap5.title" }),
      status: "Planned",
    },
    {
      // 2024 Q4
      time: intl.formatMessage({ id: "roadmap6.time" }),
      // Audit and Product Improvements
      title: intl.formatMessage({ id: "roadmap6.title" }),
      status: "Planned",
    },
    {
      // 2025
      time: intl.formatMessage({ id: "roadmap7.time" }),
      // Cardano Mainnet Release
      title: intl.formatMessage({ id: "roadmap7.title" }),
      status: "Planned",
    },
    {
      // 2026
      time: intl.formatMessage({ id: "roadmap8.time" }),
      // Explore Another Blockchain (TBD)
      title: intl.formatMessage({ id: "roadmap8.title" }),
      status: "Planned",
    },
    {
      // 2030s
      time: intl.formatMessage({ id: "roadmap9.time" }),
      // Served 4-5 Blockchains (TBD)
      title: intl.formatMessage({ id: "roadmap9.title" }),
      status: "Planned",
    },
  ];

  const roadmapRef = useRef<HTMLDivElement>(null);

  const indexOfInProgress = () => roadmaps.findIndex((roadmap) => roadmap.status === "In progress");
  const scrollToInProgress = async () => {
    const roadmap = roadmapRef.current;
    if (roadmap) {
      const lastIndexOfCompleted = indexOfInProgress() - 1;
      const margin = document.getElementById("roadmap-0")!.offsetLeft; // margin is always calculated using roadmap-0
      const target = document.getElementById("roadmap-" + lastIndexOfCompleted)!;
      const targetLeft = target.offsetLeft - margin;

      // const scrollPosition = targetLeft - (roadmap.clientWidth - target.clientWidth) / 2;
      roadmap.scrollLeft = targetLeft; // scrollPosition;
    }
  };

  useEffect(() => {
    scrollToInProgress();
  }, []);

  const theme = getTheme();

  return (
    <Container
      id={"roadmap"}
      title={title}
      paragraphs={[
        <div ref={roadmapRef} className="overflow-x-auto">
          <ul className="steps max-sm:steps-vertical">
            {roadmaps.map((roadmap, i) => (
              <li
                key={roadmap.title}
                className={`step sm:!min-w-96 before:!shadow-xl after:!shadow-xl before:contrast-150 after:contrast-150
                max-sm:before:!-translate-y-full max-sm:before:scale-x-150 max-sm:before:mt-28 after:!place-self-start max-sm:after:mt-7 after:mx-auto
                sm:before:!-translate-x-full sm:before:scale-y-150 sm:before:!ml-10 sm:after:!justify-self-start sm:after:!m-1
                ${
                  roadmap.status === "Completed"
                    ? "before:!bg-[#340b64] before:!saturate-50 after:!bg-[#340b64] after:!saturate-50 after:!text-[rgb(196,181,202)]"
                    : "step-primary before:!bg-[rgb(196,181,202)] before:saturate-150 after:!bg-[rgb(196,181,202)] after:saturate-150 after:!text-[#340b64]"
                }
                ${theme === "sun" ? "before:brightness-150 after:brightness-150" : ""}`}
                data-content={roadmapStatus[roadmap.status]}
              >
                <div className="text-start text-indigo-950 place-self-start mb-10">
                  <AnchorScrollOffset id={"roadmap-" + i} />
                  <AnchorScrollOffset id={"roadmap-" + i + "-portrait"} className="-top-20 -left-12" />
                  <time className="font-mono italic">{roadmap.time}</time>
                  <div className="text-lg text-purple-950 font-black">
                    <a
                      // id={"roadmap-" + i}
                      onClick={(e) => {
                        e.preventDefault();
                        const roadmap = roadmapRef.current;
                        if (roadmap) {
                          const isPortrait = roadmap.clientWidth < roadmap.clientHeight;
                          document.getElementById(`roadmap-${i}${isPortrait ? "-portrait" : ""}`)?.scrollIntoView({
                            behavior: "smooth",
                            block: isPortrait ? "start" : "nearest",
                            inline:
                              // isPortrait ?
                              "start",
                            // : "center",
                          });
                        }
                      }}
                    >
                      {roadmap.title}
                    </a>
                  </div>
                  {/* {roadmap.paragraphs.map((paragraph, i) => (
                    <div key={`${roadmap.title}.${i}`} className="text-indigo-950 my-2 style-p">
                      {paragraph}
                    </div>
                  ))} */}
                  <FormattedMessage id={roadmapStatusLangKey[roadmap.status]} />
                </div>
              </li>
            ))}
          </ul>
        </div>,
      ]}
      links={[]}
    />
  );
}

export default Roadmap;
