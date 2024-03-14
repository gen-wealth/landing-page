import { useEffect, useRef } from "react";
import AnchorScrollOffset from "../AnchorScrollOffset";
import Container from "../Container";

type roadmap = {
  time: string;
  title: string;
  paragraphs: JSX.Element[];
  status: "Completed" | "In progress" | "Planned";
};

const roadmapStatus = {
  ["Completed"]: "✓",
  ["In progress"]: "★",
  ["Planned"]: "",
};

const roadmaps: roadmap[] = [
  {
    time: "2023 Q3",
    title: "On Chain Proof of Concept",
    paragraphs: [<></>],
    status: "Completed",
  },
  {
    time: "2023 Q4",
    title: "Off Chain for Internal Testing",
    paragraphs: [<></>],
    status: "Completed",
  },
  {
    time: "2024 Q1",
    title: "UI/UX Design for Public Testnet",
    paragraphs: [<></>],
    status: "Completed",
  },
  {
    time: "2024 Q2",
    title: "Frontend and Backend Development",
    paragraphs: [<></>],
    status: "In progress",
  },
  {
    time: "2024 Q3",
    title: "Public Testnet and Bug Bounty",
    paragraphs: [<></>],
    status: "Planned",
  },
  {
    time: "2024 Q4",
    title: "Audit and Product Improvements",
    paragraphs: [<></>],
    status: "Planned",
  },
  {
    time: "2025",
    title: "Cardano Mainnet Release",
    paragraphs: [<></>],
    status: "Planned",
  },
  {
    time: "2026",
    title: "Explore Another Blockchain (TBD)",
    paragraphs: [<></>],
    status: "Planned",
  },
  {
    time: "2030s",
    title: "Served 4-5 Blockchains (TBD)",
    paragraphs: [<></>],
    status: "Planned",
  },
];

function Roadmap() {
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

  return (
    <Container
      id={"roadmap"}
      title={"Roadmap"}
      paragraphs={[
        <div ref={roadmapRef} className="overflow-x-auto">
          <ul className="steps max-sm:steps-vertical">
            {roadmaps.map((roadmap, i) => (
              <li
                key={roadmap.title}
                className={`step !min-w-96
                max-sm:before:!-translate-y-full max-sm:before:scale-x-150 max-sm:before:mt-28 after:!place-self-start max-sm:after:mt-7 after:mx-auto
                sm:before:!-translate-x-full sm:before:scale-y-150 sm:before:!ml-10 sm:after:!justify-self-start sm:after:!m-1
                ${
                  roadmap.status === "Completed"
                    ? "before:!bg-[#340b64] before:!saturate-50 after:!bg-[#340b64] after:!saturate-50 after:!text-[rgb(196,181,202)]"
                    : "step-primary before:!bg-[rgb(196,181,202)] before:!saturate-150 after:!bg-[rgb(196,181,202)] after:!saturate-150 after:!text-[#340b64]"
                }`}
                data-content={roadmapStatus[roadmap.status]}
              >
                <div className="text-start text-indigo-950 place-self-start mb-10">
                  <AnchorScrollOffset id={"roadmap-" + i} />
                  <time className="font-mono italic">{roadmap.time}</time>
                  <div className="text-lg text-purple-950 font-black">
                    <a
                      // id={"roadmap-" + i}
                      onClick={(e) => {
                        e.preventDefault();
                        const roadmap = roadmapRef.current;
                        if (roadmap) {
                          const isPortrait = roadmap.clientWidth < roadmap.clientHeight;
                          document.getElementById("roadmap-" + i)?.scrollIntoView({
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
                  {roadmap.status}
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
