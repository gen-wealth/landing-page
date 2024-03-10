function Svg(props: { w?: number; h?: number; className?: string; xlinkHref: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.w} height={props.h} viewBox="0 0 40 40" className={props.className}>
      <use xlinkHref={props.xlinkHref}></use>
    </svg>
  );
}

export default Svg;
