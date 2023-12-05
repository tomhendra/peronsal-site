import { IS_BROWSER } from "$fresh/runtime.ts";

export function Intro() {
  return (
    <div class="container">
      <div class="header">
        <img
          class="logo"
          src="/images/logo.svg"
          width="52"
          height="52"
          alt="the Tom Hendra logo: an abstract butterfly signifying change"
        />
        <h1 class="title">Tom Hendra.</h1>
      </div>
      <p
        disabled={!IS_BROWSER}
        class="intro"
      >
        Builder of <span class="highlight">React Native</span>{" "}
        apps at Wembley Studios in{" "}
        <span class="highlight">Salamanca</span>, Spain. Norwich,{" "}
        <span class="highlight">England native</span>.

        UX and animation lover. When not coding, I'm immersed in local food
        culture or the gaming world. Hola{" "}
        <span class="highlight">@tomhendra</span>.
      </p>
    </div>
  );
}
