AnchorScrollOffset.defaultProps = {
  className: "-top-20", // navbar height
};
/**
 * Offsets to NavBar height.
 * @param props id: string
 * @returns AnchorScrollOffset
 */
function AnchorScrollOffset(props: { id: string; className: string }) {
  return <div id={props.id} className={`relative ${props.className}`} />;
}

export default AnchorScrollOffset;
