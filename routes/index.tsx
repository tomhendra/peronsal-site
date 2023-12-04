import { Button } from "../components/index.ts";

export default function Home() {
  return (
    <div>
      <img
        src="/images/logo.svg"
        width="128"
        height="128"
        alt="the Tom Hendra logo: a gamified pixel robot"
      />
      <p class="intro">
        Hello, I'm Tom! Builder of React Native apps at Wembley Studios in
        Salamanca, Spain. Norwich, England native. UX and animation lover. When
        not coding, I'm immersed in either local food culture or the gaming
        world. Hola @tomhendra.
      </p>
    </div>
  );
}
