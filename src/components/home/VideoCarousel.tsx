import { MouseEvent } from "react";

const videos = [
  {
    url: "https://www.youtube-nocookie.com/embed/8jbSy2PIBa8",
    title: "GenWealth - Eastern TownHall Presentation",
  },
  {
    url: "https://www.youtube-nocookie.com/embed/umr_v0WR0Ek",
    title: "Intro by DecentralizedNation",
  },
  {
    url: "https://www.youtube-nocookie.com/embed/PGOgVaL9EM8",
    title: "Full Demo ft. DecentralizedNation",
  },
  {
    url: "https://www.youtube-nocookie.com/embed/PVJa5Leuz3g",
    title: "Milestone v2 Pt.1",
  },
  {
    url: "https://www.youtube-nocookie.com/embed/56DVog-oSvY",
    title: "Milestone v2 Pt.2",
  },
];

type PropState = { videoIndex: number; slideToVideo: (e: MouseEvent, index: number) => void };

export function VideoCarousel(props: PropState) {
  return (
    <div className="carousel w-full shadow-xl">
      {videos.map((video, index) => (
        <div id={`slide-${index}`} key={`slide-${index}`} className="carousel-item relative w-full gap-2 flex-wrap">
          <div className="absolute flex justify-between pointer-events-none transform -translate-y-1/2 left-5 right-5 top-1/2 -z-50">
            <progress className="progress m-auto w-1/2" />
          </div>

          <iframe
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="grow aspect-video w-full shadow-xl"
          ></iframe>

          <div className="absolute flex justify-between pointer-events-none transform -translate-y-1/2 left-2 right-2 top-1/2">
            <a
              // href={`#slide-${(index - 1 + videos.length) % videos.length}`}
              className={`${
                index == 0 && "invisible"
              } btn btn-circle border-none bg-base-content hover:bg-base-content bg-opacity-[calc(1/3)] hover:bg-opacity-[calc(2/3)] pointer-events-auto shadow-xl`}
              onClick={(e) => props.slideToVideo(e, (index - 1 + videos.length) % videos.length)}
            >
              &#10094;
            </a>
            <a
              // href={`#slide-${(index + 1) % videos.length}`}
              className={`${
                index == videos.length - 1 && "invisible"
              } btn btn-circle  border-none bg-base-content hover:bg-base-content bg-opacity-[calc(1/3)] hover:bg-opacity-[calc(2/3)] pointer-events-auto shadow-xl`}
              onClick={(e) => props.slideToVideo(e, (index + 1) % videos.length)}
            >
              &#10095;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export function VideoCarouselIndicator(props: PropState) {
  return (
    <div className="flex justify-center w-full -my-8 gap-2 scale-50">
      {videos.map((_, index) => (
        <a
          key={`indicator-${index}`}
          // href={`#slide-${index}`}
          className={`button-primary !btn-circle !btn-xs border-none ${
            index == props.videoIndex
              ? "!bg-violet-950 !bg-opacity-100 hover:!bg-violet-950 hover:!bg-opacity-100"
              : "!bg-violet-950 hover:!bg-violet-900 !bg-opacity-[calc(1/3)] hover:!bg-opacity-[calc(2/3)]"
          }`}
          onClick={(e) => props.slideToVideo(e, index)}
        />
      ))}
    </div>
  );
}

export default VideoCarousel;
