import { JSX } from "preact/jsx-runtime";

export function Link(
  { children, ...rest }: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a class="link" {...rest}>
      {children}
      <span class="revealed" aria-hidden="true">
        {children}
      </span>
    </a>
  );
}
