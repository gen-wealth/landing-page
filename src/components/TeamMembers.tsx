import { FormattedMessage, IntlShape, useIntl } from "react-intl";
import { scrollToElement } from "../util";
import AnchorScrollOffset from "./AnchorScrollOffset";
import Svg from "./Svg";
import { useEffect } from "react";

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
                  <a href="https://www.youtube.com/@decentralizednation" target="_blank" className="link">
                    {intl.formatMessage({ id: "decentralizedNation" })}
                  </a>
                ),
                willEasy: (
                  <a href="https://www.willeasy.co.uk" target="_blank" className="link">
                    {intl.formatMessage({ id: "willEasy" })}
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
      image: "https://gen-wealth.github.io/public/team/RafaelCardoso.jpg",
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
                  <a href="https://www.credly.com/badges/d40bc004-8d8d-4249-9cd3-cfd79c55f5ac" target="_blank" className="link">
                    {intl.formatMessage({ id: "cardanoDeveloperProfessionalBadge" })}
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
                  <a href="https://github.com/ariady-putra/morbid" target="_blank" className="link">
                    {intl.formatMessage({ id: "morbid" })}
                  </a>
                ),
                awesomeAiken: (
                  <a
                    href="https://github.com/aiken-lang/awesome-aiken?tab=readme-ov-file#Dapps:~:text=morbid%20%2D%20A%20dead%2Dman%27s%20switch%20contract"
                    target="_blank"
                    className="link"
                  >
                    {intl.formatMessage({ id: "awesomeAiken" })}
                  </a>
                ),
                deadMansSwitch: <i>{intl.formatMessage({ id: "deadMansSwitch" })}</i>,
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
      image: "https://gen-wealth.github.io/public/team/AriadyPutra.jpg",
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
      image: "https://gen-wealth.github.io/public/svg/You.svg",
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

  useEffect(() => {
    const manageShowMoreVisibility = () =>
      members.forEach((member, index) => {
        const bio = document.getElementById(`${member.id}.${index}`);
        const more = document.getElementById(`${member.id}.show-more`);
        if (bio && bio.clientHeight == bio.scrollHeight) {
          more?.classList.add("hidden");
        } else {
          more?.classList.remove("hidden");
        }
      });
    manageShowMoreVisibility();

    window.addEventListener("resize", manageShowMoreVisibility);
    return () => window.removeEventListener("resize", manageShowMoreVisibility);
  }, []);

  return (
    <div>
      <AnchorScrollOffset id={"team-members"} />

      {/* Team Members */}
      <div className="mockup-browser bg-base-content bg-opacity-[calc(2/3)] m-2 shadow-xl">
        {/* Toolbar */}
        <div className="flex toolbar">
          <div
            className="w-full h-fit px-8 py-4 truncate font-bold !leading-[30px]
            xl:text-3xl lg:text-2xl md:text-xl sm:text-lg max-sm:text-base"
          >
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
          {members.map((member, i) => memberBubble(member, i, members.length, intl))}
        </div>
      </div>
    </div>
  );
}

function memberBubble(member: member, index: number, total: number, intl: IntlShape) {
  return (
    <div key={member.id}>
      <AnchorScrollOffset id={member.id} />

      {/* Member Bubble */}
      <div key={member.name} className={`chat text-primary chat-${member.chatPosition} ${index < total - 1 ? "mb-4" : ""}`}>
        <div className="chat-image avatar">
          <div className="w-32 mask mask-hexagon bg-primary bg-opacity-[calc(1/3)]">
            <div className="h-[7.75rem] mask mask-hexagon m-0.5">
              <img src={member.image} />
            </div>
          </div>
        </div>

        <div className={`flex flex-col w-full items-${member.chatPosition}`}>
          {/* chat-header */}
          <div className="chat-header flex flex-wrap gap-1 ml-2 items-baseline whitespace-nowrap">
            <a onClick={(e) => scrollToElement(e, member.id)} className="text-[1em]">
              {member.name}
            </a>
            <span className="text-[.75em] opacity-50 mr-2 -mt-2">{member.title}</span>
          </div>

          {/* chat-bubble */}
          <div
            className={`chat-bubble flex flex-col gap-2 bg-opacity-[calc(2/3)] shadow-xl ${
              member.chatPosition === "start" ? "bg-primary-focus text-primary-content" : "bg-secondary text-neutral"
            }`}
          >
            {/* lines... */}
            <div id={`${member.id}.${index}`} className="line-clamp-4 xl:line-clamp-none lg:line-clamp-6 md:line-clamp-5">
              {member.bio}
            </div>

            {/* show more */}
            <div id={`${member.id}.show-more`} className="text-center font-bold hidden hover:bg-base-content hover:bg-opacity-25">
              <div
                className="link no-underline"
                onClick={() => {
                  document.getElementById(`${member.id}.${index}`)?.classList.add("!line-clamp-none");
                  document.getElementById(`${member.id}.show-more`)?.classList.add("hidden");
                  document.getElementById(`${member.id}.show-less`)?.classList.remove("hidden");
                }}
              >
                <sub className="link-hover">
                  {/* show more */}
                  {intl.formatMessage({ id: "showMore" }).toLowerCase()}
                </sub>
                <div className="animate-bounce mt-2 -mb-2">︾</div>
              </div>
            </div>

            {/* show less */}
            <div id={`${member.id}.show-less`} className="text-center font-bold hidden hover:bg-base-content hover:bg-opacity-25">
              <div
                className="link no-underline"
                onClick={() => {
                  document.getElementById(`${member.id}.${index}`)?.classList.remove("!line-clamp-none");
                  document.getElementById(`${member.id}.show-more`)?.classList.remove("hidden");
                  document.getElementById(`${member.id}.show-less`)?.classList.add("hidden");
                }}
              >
                <div className="animate-bounce">︽</div>
                <sup className="link-hover">
                  {/* show less */}
                  {intl.formatMessage({ id: "showLess" }).toLowerCase()}
                </sup>
              </div>
            </div>
          </div>

          {/* chat-footer */}
          <div className="chat-footer text-primary">
            <div className="flex items-center text-[1em]">
              <p className="style-p">{member.social.prefix}&nbsp;</p>
              {member.social.links.map((link) => (
                <a key={`${link.xlinkHref}.${member.name}`} href={link.linkURL} className="fill-primary mr-2">
                  <Svg xlinkHref={link.xlinkHref} w={24} h={24} />
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
