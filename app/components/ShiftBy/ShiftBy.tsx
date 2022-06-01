function ShiftBy({
  x = 0,
  y = 0,
  children,
  as = "div",
  style = {},
  ...delegated
}: {
  x: number;
  y: number;
  children: React.FunctionComponent;
  as?: keyof JSX.IntrinsicElements;
  style: {};
}) {
  const Element = as;
  return (
    <Element style={{ transform: `translate(${x}px, ${y}px)` }} {...delegated}>
      {children}
    </Element>
  );
}

export { ShiftBy as default };
