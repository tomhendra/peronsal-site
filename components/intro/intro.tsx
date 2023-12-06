import { Highlight, Link } from "../index.ts";

export function Intro() {
  return (
    <p class="intro">
      Builder of <Highlight>React Native</Highlight> apps at Wembley Studios in
      {" "}
      <Highlight>Salamanca</Highlight>, Spain. Norwich,{" "}
      <Highlight>England native</Highlight>. UX and animation lover. Immersed in
      local food culture or the gaming world when not coding. Hola @
      <Highlight>
        <Link
          href="https://x.com/tomhendra"
          target="_blank"
          rel="noopener noreferrer"
        >
          tomhendra
        </Link>
        .
      </Highlight>
    </p>
  );
}
