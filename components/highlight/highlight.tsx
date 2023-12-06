import { JSX } from "preact/jsx-runtime";

export function Highlight(
  { children, ...rest }: JSX.HTMLAttributes<HTMLSpanElement>,
) {
  return (
    <span class="highlight" {...rest}>
      {children}
    </span>
  );
}
