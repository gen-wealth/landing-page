import { scrollToElement } from "../util";

/*************************************
 *                                   *
 *   [Heading]                       *
 *                                   *
 *   Paragraph paragraph paragraph   *
 *   paragraph paragraph             *
 *   paragraph.                      *
 *                                   *
 *   [Button]                        *
 *                                   *
 *************************************/
function Container(props: {
  id: string;
  title: string;
  paragraphs: JSX.Element[];
  links: {
    linkName: string;
    linkURL: string;
  }[];
}) {
  return (
    <div>
      {/* Anchor Scroll Offset */}
      <div id={props.id} className="relative -top-20" />

      {/* Card */}
      <div className="card sm:card-side bg-base-content bg-opacity-90 m-2 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-purple-950 my-2 style-h2 xl:tracking-tighter lg:text-5xl max-lg:!font-bold lg:tracking-tight md:tracking-normal sm:text-4xl sm:tracking-wide max-sm:text-3xl max-sm:!font-black max-sm:tracking-wider">
            <a
              // href={`#${props.id}`}
              onClick={(e) => scrollToElement(e, `#${props.id}`)}
            >
              {props.title}
            </a>
          </h2>
          {props.paragraphs.map((paragraph, i) => (
            <div key={`${props.title}.${i}`} className="text-indigo-950 my-2 style-p">
              {paragraph}
            </div>
          ))}
          <div className="card-actions justify-center">
            {props.links.map((link) => (
              <a key={`${props.title}.${link.linkName}`} href={link.linkURL} className="button-primary">
                {link.linkName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
