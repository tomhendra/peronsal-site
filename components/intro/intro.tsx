import { Highlight, Link } from "../index.ts";

export function Intro() {
  return (
    <p class="intro">
      Builder of <Highlight>React Native</Highlight> apps at{" "}
      <Highlight>
        <Link href="https://wembleystudios.com/" target="_blank">
          Wembley Studios
        </Link>
      </Highlight>{" "}
      in <Highlight>Salamanca</Highlight>, Spain. Norwich,{" "}
      <Highlight>England native</Highlight>. UX and animation lover. Immersed in
      local food culture or the gaming world when not coding. Hola @
      <Highlight>
        <Link href="https://x.com/tomhendra" target="_blank">tomhendra</Link>
        .
      </Highlight>
    </p>
  );
}
