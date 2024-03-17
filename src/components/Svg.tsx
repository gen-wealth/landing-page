function Svg(props: { w?: number; h?: number; className?: string; filter?: string; xlinkHref: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.w} height={props.h} viewBox="0 0 40 40" className={props.className} filter={props.filter}>
      <use xlinkHref={props.xlinkHref}></use>
    </svg>
  );
}

export default Svg;
