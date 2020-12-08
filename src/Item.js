export function Item(props) {
  const stagger = 100;
  const { isVisible } = props;
  const transitionStyling = {
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-in-out",
    transitionProperty: "transform",
    transitionDelay: `${stagger * props.index}ms`,
    transform: 'translateX(100%)',
    padding: '25px'
  };
  return !isVisible ? (
    <div style={{ transform: "translateX(0%)",  padding: '25px' }}>{props.name}</div>
  ) : (
    <div style={transitionStyling}>{props.name}</div>
  );
}
