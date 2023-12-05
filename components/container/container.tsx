import { JSX } from "preact/jsx-runtime";

export function Container({ children }: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div class="container">{children}</div>;
}
