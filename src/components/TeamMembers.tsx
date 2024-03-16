import { FormattedMessage, useIntl } from "react-intl";
import { scrollToElement } from "../util";
import AnchorScrollOffset from "./AnchorScrollOffset";
import Svg from "./Svg";

type member = {
  id: string;
  name: string;
  title: string;
  bio: JSX.Element;
  image: string;
  chatPosition: "start" | "end";
  social: {
    prefix: string;
    links: {
      linkURL: string;
      xlinkHref: string;
    }[];
  };
};

function TeamMembers() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "teamMembers.title" });

  const members: member[] = [
    {
      id: "rafael-cardoso",
      name: intl.formatMessage({ id: "teamMembers.rafaelCardoso" }),
      title: intl.formatMessage({ id: "ceo" }),
      bio: (
        <>
          {/* p1 */}
          <p className="my-2 style-p">
            <FormattedMessage id="teamMembers.rafaelCardoso.p1" />
          </p>
          {/* <p className="my-2 style-p">
            Hello, I'm Rafael. I have more than 5 years of experience in business development, marketing and product in Web2 startups.
          </p> */}

          {/* gap-2 */}
          <div className="h-2" />

          {/* p2 */}
          <p className="my-2 style-p">
            <FormattedMessage
              id="teamMembers.rafaelCardoso.p2"
              values={{
                decentralizedNation: (
                  <a href="https://www.youtube.com/@decentralizednation" className="link">
                    {<FormattedMessage id="decentralizedNation" />}
                  </a>
                ),
                willEasy: (
                  <a href="https://www.willeasy.co.uk" className="link">
                    {<FormattedMessage id="willEasy" />}
                  </a>
                ),
              }}
            />
          </p>
          {/* <p className="my-2 style-p">
            Experienced in managing teams, projects and budgets. I am also the founder of{" "}
            <a href="https://www.youtube.com/@decentralizednation" className="link">
              Decentralized Nation
            </a>
            , a Cryptocurrency News Youtube Channel. My previous experience includes leading the marketing for the launch of{" "}
            <a href="https://www.willeasy.co.uk" className="link">
              Will Easy
            </a>
            , an Online Will Creation Platform in the UK.
          </p> */}
        </>
      ),
      image: "/team/RafaelCardoso.jpg",
      chatPosition: "start",
      social: {
        prefix: "",
        links: [
          {
            linkURL: "https://twitter.com/DecenNation",
            xlinkHref: "#social-twitter",
          },
          {
            linkURL: "https://www.linkedin.com/in/rafael-cardoso-2b03ba146/",
            xlinkHref: "#social-linkedin",
          },
        ],
      },
    },
    {
      id: "ariady-putra",
      name: intl.formatMessage({ id: "teamMembers.ariadyPutra" }),
      title: intl.formatMessage({ id: "cto" }),
      bio: (
        <>
          {/* p1 */}
          <p className="my-2 style-p">
            <FormattedMessage
              id="teamMembers.ariadyPutra.p1"
              values={{
                cardanoDeveloperProfessionalBadge: (
                  <a href="https://www.credly.com/badges/d40bc004-8d8d-4249-9cd3-cfd79c55f5ac" className="link">
                    {<FormattedMessage id="cardanoDeveloperProfessionalBadge" />}
                  </a>
                ),
              }}
            />
          </p>
          {/* <p className="my-2 style-p">
            Hi, I'm Ariady. I have more than a decade of experience working as a fulltime software developer. In 2022, I acquired my{" "}
            <a href="https://www.credly.com/badges/d40bc004-8d8d-4249-9cd3-cfd79c55f5ac" className="link">
              Cardano Developer Professional Badge
            </a>
            .
          </p> */}

          {/* gap-2 */}
          <div className="h-2" />

          {/* p2 */}
          <p className="my-2 style-p">
            <FormattedMessage
              id="teamMembers.ariadyPutra.p2"
              values={{
                morbid: (
                  <a href="https://github.com/ariady-putra/morbid" className="link">
                    {<FormattedMessage id="morbid" />}
                  </a>
                ),
                awesomeAiken: (
                  <a
                    href="https://github.com/aiken-lang/awesome-aiken?tab=readme-ov-file#Dapps:~:text=morbid%20%2D%20A%20dead%2Dman%27s%20switch%20contract"
                    className="link"
                  >
                    {" "}
                    {<FormattedMessage id="awesomeAiken" />}
                  </a>
                ),
                deadMansSwitch: <i>{<FormattedMessage id="deadMansSwitch" />}</i>,
              }}
            />
          </p>
          {/* <p className="my-2 style-p">
            I am responsible for the development of the DApp, both the on-chain and off-chain part of the system, as well as deciding the tech stack to use.
            Before GenWealth, I developed the{" "}
            <a href="https://github.com/ariady-putra/morbid" className="link">
              morbid
            </a>{" "}
            smart contract as featured on{" "}
            <a
              href="https://github.com/aiken-lang/awesome-aiken?tab=readme-ov-file#Dapps:~:text=morbid%20%2D%20A%20dead%2Dman%27s%20switch%20contract"
              className="link"
            >
              awesome-aiken
            </a>
            , a simpler implementation of <i>dead-man's switch</i> contract.
          </p> */}
        </>
      ),
      image: "/team/AriadyPutra.jpg",
      chatPosition: "start",
      social: {
        prefix: "",
        links: [
          {
            linkURL: "https://www.linkedin.com/in/ariady/",
            xlinkHref: "#social-linkedin",
          },
          {
            linkURL: "https://github.com/ariady-putra",
            xlinkHref: "#social-github",
          },
        ],
      },
    },

    {
      id: "you",
      name: intl.formatMessage({ id: "teamMembers.you" }),
      title: "",
      // bio: <p className="my-2 style-p">Let's join the Web3 revolution!</p>,
      bio: (
        <p className="my-2 style-p">
          <FormattedMessage id="teamMembers.you.p1" />
        </p>
      ),
      image: "/svg/You.svg",
      chatPosition: "end",
      social: {
        // prefix: "Talk to us:",
        prefix: intl.formatMessage({ id: "teamMembers.talkToUs" }) + ":",
        links: [
          {
            linkURL: "mailto:hello@genwealth.app",
            xlinkHref: "#social-email",
          },
        ],
      },
    },
  ];

  return (
    <div>
      <AnchorScrollOffset id={"team-members"} />

      {/* Team Members */}
      <div className="mockup-browser bg-base-content bg-opacity-50 m-2 shadow-xl">
        {/* Toolbar */}
        <div className="flex bg-violet-950 text-[rgb(228,219,235)] shadow-xl">
          <div className="w-full h-fit px-8 py-4 truncate font-bold xl:text-3xl lg:text-2xl md:text-xl sm:text-lg max-sm:text-base !leading-[30px]">
            <a
              // href="#team-members"
              onClick={(e) => scrollToElement(e, "team-members")}
            >
              {title}
            </a>
          </div>
          <div className="btn btn-circle btn-xs btn-disabled !btn-success mr-2 my-auto" />
          <div className="btn btn-circle btn-xs btn-disabled !btn-warning mr-2 my-auto" />
          <div className="btn btn-circle btn-xs btn-disabled !btn-error mr-4 my-auto" />
        </div>

        {/* Content */}
        <div className="mx-4 my-2 mb-4">
          <div className="chat-start chat-end" />
          <div className="items-start" />
          <div className="items-end" />
          {members.map((member, i) => memberBubble(member, i, members.length))}
        </div>
      </div>
    </div>
  );
}

function memberBubble(member: member, index: number, total: number) {
  return (
    <div key={member.id}>
      <AnchorScrollOffset id={member.id} />

      {/* Member Bubble */}
      <div key={member.name} className={`chat text-purple-950 chat-${member.chatPosition} ${index < total - 1 ? "mb-4" : ""}`}>
        <div className="chat-image avatar">
          <div className="w-32 mask mask-hexagon bg-neutral bg-opacity-5">
            <div className="h-[7.75rem] mask mask-hexagon m-0.5">
              <img src={member.image} />
            </div>
          </div>
        </div>

        <div className={`flex flex-col w-full items-${member.chatPosition}`}>
          <div className="chat-header">
            <a className="ml-2 mr-1" onClick={(e) => scrollToElement(e, member.id)}>
              {member.name}
            </a>
            <span className="text-xs opacity-50 mr-2">{member.title}</span>
          </div>

          <div
            className={`chat-bubble bg-opacity-50 ${
              member.chatPosition === "start" ? "bg-violet-950 text-[rgb(241,237,245)]" : "bg-[rgb(248,246,250)] text-indigo-950"
            }`}
          >
            {member.bio}
          </div>

          <div className="chat-footer text-indigo-950">
            <div className="flex items-center">
              <p className="style-p">{member.social.prefix}&nbsp;</p>
              {member.social.links.map((link) => (
                <a key={`${link.xlinkHref}.${member.name}`} href={link.linkURL} className="fill-violet-950 mr-2">
                  <Svg xlinkHref={link.xlinkHref} w={23} h={23} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
