/**
 * Offsets to NavBar height.
 * @param props id: string
 * @returns AnchorScrollOffset
 */
function AnchorScrollOffset(props: { id: string; className?: string }) {
  return (
    <div
      id={props.id}
      className={`relative ${
        props.className ?? "-top-20" // navbar height
      }`}
    />
  );
}

export default AnchorScrollOffset;
