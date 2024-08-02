import { scrollToElement } from "../util";
import AnchorScrollOffset from "./AnchorScrollOffset";

/***************************************************
 *                                                 *
 *   ***********   [Heading]                       *
 *   *         *                                   *
 *   *         *   Paragraph paragraph paragraph   *
 *   *   Img   *   paragraph paragraph             *
 *   *         *   paragraph.                      *
 *   *         *                                   *
 *   ***********   [Button]                        *
 *                                                 *
 ***************************************************/
function ContainerImgTxt(props: {
  id: string;
  image: {
    imageSource: string;
    alternateText: string;
    className?: string;
  };
  title: string;
  paragraphs: JSX.Element[];
  links: {
    linkName: string;
    linkURL: string;
    className?: string;
  }[];
  linksClassName?: string;
}) {
  return (
    <div>
      <AnchorScrollOffset id={props.id} />

      {/* Card */}
      <div className="card sm:card-side bg-base-content bg-opacity-[calc(2/3)] m-2 shadow-xl">
        {/* Image */}
        <figure>
          <img src={props.image.imageSource} alt={props.image.alternateText} loading="eager" className={`object-contain size-full ${props.image.className}`} />
        </figure>

        {/* Contents */}
        <div className="card-body overflow-auto">
          <h2
            className="card-title text-primary my-2 style-h2
            xl:tracking-tighter lg:text-5xl max-lg:font-bold lg:tracking-tight md:tracking-normal sm:text-4xl sm:tracking-wide max-sm:text-3xl max-sm:font-black max-sm:tracking-wider"
          >
            <button onClick={(e) => scrollToElement(e, props.id)}>{props.title}</button>
          </h2>
          {props.paragraphs.map((paragraph, i) => (
            <div key={`${props.title}.${i}`} className="text-neutral my-2 style-p">
              {paragraph}
            </div>
          ))}
          <div className={`${props.linksClassName ?? "card-actions"} justify-end`}>
            {props.links.map((link) => (
              <a key={`${props.title}.${link.linkName}`} href={link.linkURL} className={link.className ?? "button-primary"}>
                {link.linkName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerImgTxt;
