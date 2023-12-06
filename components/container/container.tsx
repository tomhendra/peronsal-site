import { JSX } from "preact/jsx-runtime";

export function Container(
  { children, ...rest }: JSX.HTMLAttributes<HTMLDivElement>,
) {
  return <div class="container" {...rest}>{children}</div>;
}
