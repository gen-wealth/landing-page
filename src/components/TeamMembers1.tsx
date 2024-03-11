import { scrollToElement } from "../util";
import Svg from "./Svg";

// A grid of <Card/>s
function TeamMembers1() {
  type member = {
    id: string;
    name: string;
    headline: JSX.Element;
    image: string;
    links: {
      linkName?: string;
      linkURL: string;
      xlinkHref: string;
    }[];
    figureClassName?: string;
  };

  const members: member[] = [
    {
      id: "rafael-cardoso",
      name: "Rafael Cardoso",
      headline: <>Business and Marketing</>,
      image: "/team/RafaelCardoso.jpg",
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
      // figureClassName: "saturate-[6%] group-hover:saturate-[80%]",
    },
    {
      id: "ariady-putra",
      name: "Ariady Putra",
      headline: <>Tech and Development</>,
      image: "/team/AriadyPutra.jpg",
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
      // figureClassName: "saturate-[4%] group-hover:saturate-[60%]",
    },
  ];

  const memberCard = (member: member) => (
    <div key={member.id} className="flex-1 w-full">
      {/* Anchor Scroll Offset */}
      <div id={member.id} className="relative -top-20" />

      {/* Card */}
      <div className="card sm:card-side sm:min-w-96 sm:h-72 max-w-screen group bg-base-content bg-opacity-90 shadow-xl">
        <figure className={`${member.figureClassName}`}>
          <img src={member.image} alt={member.name} className="object-cover w-full h-full aspect-square" />
        </figure>
        <div className="card-body items-center text-center w-full">
          <h2 className="card-title text-purple-950 style-h2 xl:tracking-tighter xl:font-thin lg:text-5xl lg:tracking-tight lg:font-light md:tracking-normal md:font-medium sm:text-4xl sm:tracking-wide sm:font-bold max-sm:text-3xl max-sm:tracking-wider max-sm:font-black">
            <a
              // href={`#${member.id}`}
              onClick={(e) => scrollToElement(e, `#${member.id}`)}
              className="min-[807px]:w-min"
            >
              {member.name}
            </a>
          </h2>
          <div className="h-full text-indigo-950 style-p">{member.headline}</div>
          <div className="card-actions">
            {member.links.map((link) => (
              <div key={`${link.xlinkHref}.${member.id}`} className="flex items-center">
                <p className="text-indigo-950 style-p">{link.linkName}&nbsp;</p>
                <a href={link.linkURL}>
                  <Svg xlinkHref={link.xlinkHref} w={23} h={23} className="fill-violet-950" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap max-sm:flex-col justify-between gap-2 m-2">
      {members.map((member) => memberCard(member))}
      {memberCard({
        id: "you",
        name: "You",
        headline: <div className="flex flex-col justify-center h-full">Let's join the Web3 revolution!</div>,
        image: "/svg/You.svg",
        links: [
          {
            linkName: "Talk to us:",
            linkURL: "mailto:hello@genwealth.app",
            xlinkHref: "#social-email",
          },
        ],
      })}
    </div>
  );
}

export default TeamMembers1;
