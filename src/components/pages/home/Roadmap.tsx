import { useEffect, useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Container from "../../Container";
import AnchorScrollOffset from "../../AnchorScrollOffset";

type Status = "Completed" | "In progress" | "Planned";
type roadmap = {
  time: string;
  title: string;
  status: Status;
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
      status: "Completed",
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

  //   const indexOfInProgress = () => roadmaps.findIndex((roadmap) => roadmap.status === "In progress");
  const scrollToInProgress = async () => {
    const roadmap = roadmapRef.current; // is roadmap landscape?
    if (roadmap && roadmap.clientWidth > roadmap.clientHeight) {
      let lastIndexOfCompleted = roadmaps.length - 1;
      for (let i = lastIndexOfCompleted; i > 0; i--) {
        if (roadmaps[i].status === "Completed") {
          lastIndexOfCompleted = i;
          break;
        } else {
          lastIndexOfCompleted = 0;
        }
      }

      const margin = (document.getElementById("roadmap-0") as HTMLElement).offsetLeft; // margin is always calculated using roadmap-0
      const target = document.getElementById("roadmap-" + lastIndexOfCompleted) as HTMLElement;
      const targetLeft = target.offsetLeft - margin;

      // const scrollPosition = targetLeft - (roadmap.clientWidth - target.clientWidth) / 2;
      roadmap.scrollLeft = targetLeft; // scrollPosition;
    }
  };

  useEffect(() => {
    scrollToInProgress();
  }, []);

  return (
    <Container
      id={"roadmap"}
      title={title}
      paragraphs={[
        <div ref={roadmapRef} className="overflow-x-auto">
          <ul tabIndex={0} className="steps max-sm:steps-vertical">
            {roadmaps.map((roadmap, i) => (
              <li
                key={roadmap.title}
                className={`step sm:!min-w-96 before:!shadow-xl after:!shadow-xl
                max-sm:before:!-translate-y-full max-sm:before:scale-x-150 max-sm:before:mt-28 after:!place-self-start max-sm:after:mt-7 after:mx-auto
                sm:before:!-translate-x-full sm:before:scale-y-150 sm:before:!ml-10 sm:after:!justify-self-start sm:after:!m-1
                ${
                  roadmap.status === "Completed"
                    ? "before:!bg-neutral after:!bg-neutral after:!text-neutral-content"
                    : "step-primary before:!bg-accent after:!bg-accent after:!text-accent-content"
                }`}
                data-content={roadmapStatus[roadmap.status]}
                tabIndex={0}
              >
                <div className="text-start text-neutral place-self-start mb-10">
                  <AnchorScrollOffset id={"roadmap-" + i} />
                  <AnchorScrollOffset id={"roadmap-" + i + "-portrait"} className="-top-20 -left-12" />
                  <time className="font-mono italic">{roadmap.time}</time>
                  <div className="text-lg text-primary font-black pr-7">
                    <button
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
                      className="text-left"
                    >
                      {roadmap.title}
                    </button>
                  </div>
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
