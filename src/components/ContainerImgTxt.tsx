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

import { scrollToElement } from "../util";

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
  }[];
}) {
  return (
    <div>
      {/* Anchor Scroll Offset */}
      <div id={props.id} className="relative -top-20" />

      {/* Card */}
      <div className="card sm:card-side bg-base-content bg-opacity-90 m-2 shadow-xl">
        {/* Image */}
        <figure>
          <img src={props.image.imageSource} alt={props.image.alternateText} className={`object-cover w-full h-full ${props.image.className}`} />
        </figure>

        {/* Content */}
        <div className="card-body">
          <h2 className="card-title text-purple-950 my-2 style-h2 xl:tracking-tighter xl:font-thin lg:text-5xl lg:tracking-tight lg:font-light md:tracking-normal md:font-medium sm:text-4xl sm:tracking-wide sm:font-bold max-sm:text-3xl max-sm:tracking-wider max-sm:font-black">
            <a
              // href={`#${props.id}`}
              onClick={(e) => scrollToElement(e, `#${props.id}`)}
            >
              {props.title}
            </a>
          </h2>
          {props.paragraphs.map((paragraph, i) => (
            <p key={`${props.title}.${i}`} className="text-indigo-950 my-2 style-p">
              {paragraph}
            </p>
          ))}
          <div className="card-actions justify-end">
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

export default ContainerImgTxt;
