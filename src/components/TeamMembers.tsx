import { scrollToElement } from "../util";
import Svg from "./Svg";

function TeamMembers() {
  type member = {
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

  const members: member[] = [
    {
      name: "Rafael Cardoso",
      title: "CEO",
      bio: (
        <>
          <p className="my-2 style-p">
            Hello, I'm Rafael. I have more than 5 years of experience in Business Development, Marketing, and Product in Web2 startups.
          </p>
          <div className="h-2" />
          <p className="my-2 style-p">
            Experienced in managing teams, projects, and budgets. I'm also the founder of{" "}
            <a href="https://www.youtube.com/@decentralizednation" className="link">
              Decentralized Nation
            </a>
            , a Youtube Channel. My previous experience includes working with{" "}
            <a href="https://www.willeasy.co.uk" className="link">
              Will Easy
            </a>
            , an Online Will Creation Platform in the UK.
          </p>
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
      name: "Ariady Putra",
      title: "CTO",
      bio: (
        <>
          <p className="my-2 style-p">
            Hi, I'm Ariady. I have more than a decade of experience working as a fulltime software developer. In 2022, I acquired my{" "}
            <a href="https://www.credly.com/badges/d40bc004-8d8d-4249-9cd3-cfd79c55f5ac" className="link">
              Cardano Developer Professional Badge
            </a>
            .
          </p>
          <div className="h-2" />
          <p className="my-2 style-p">
            My role is to design and develop both the on-chain and off-chain part of the system. I also decide which tech we're using. Before GenWealth, I
            developed the{" "}
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
            , a simpler implementation of dead-man's switch contract.
          </p>
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
      name: "You",
      title: "",
      bio: <p className="my-2 style-p">Let's join the Web3 revolution!</p>,
      image: "/svg/You.svg",
      chatPosition: "end",
      social: {
        prefix: "Talk to us:",
        links: [
          {
            linkURL: "mailto:hello@genwealth.app",
            xlinkHref: "#social-email",
          },
        ],
      },
    },
  ];

  const memberBubble = (member: member, index: number) => (
    <div key={member.name} className={`chat text-purple-950 chat-${member.chatPosition} ${index < members.length - 1 ? "mb-4" : ""}`}>
      <div className="chat-image avatar">
        <div className="w-32 mask mask-hexagon bg-neutral bg-opacity-5">
          <div className="h-[7.75rem] mask mask-hexagon m-0.5">
            <img src={member.image} />
          </div>
        </div>
      </div>

      <div className={`flex flex-col w-full items-${member.chatPosition}`}>
        <div className="chat-header">
          <span className="ml-2 mr-1">{member.name}</span>
          <span className="text-xs opacity-50 mr-2">{member.title}</span>
        </div>

        <div className={`chat-bubble ${member.chatPosition === "start" ? "bg-violet-950 text-neutral-content" : "bg-neutral-content text-indigo-950"}`}>
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
  );

  return (
    <div>
      {/* Anchor Scroll Offset */}
      <div id="team-members" className="relative -top-20" />

      {/* Team Members */}
      <div className="mockup-browser bg-base-content bg-opacity-90 m-2 shadow-xl">
        {/* Toolbar */}
        <div className="flex bg-violet-950 shadow-xl">
          <div className="w-full h-fit px-8 py-4 truncate font-bold text-[16px] leading-[30px]">
            <a
              // href="#team-members"
              onClick={(e) => scrollToElement(e, "#team-members")}
            >
              Team Members
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
          {members.map(memberBubble)}
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
