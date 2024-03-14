AnchorScrollOffset.defaultProps = {
  navbarHeight: 20,
};
/**
 * Offsets to NavBar height.
 * @param props id: string
 * @returns AnchorScrollOffset
 */
function AnchorScrollOffset(props: { id: string }) {
  return (
    <div
      id={props.id}
      className="relative -top-20" // navbar height
    />
  );
}

export default AnchorScrollOffset;
