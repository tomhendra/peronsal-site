import { Button } from "../components/index.ts";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/images/logo.svg"
          width="128"
          height="128"
          alt="the Tom Hendra logo: a gamified pixel robot"
        />
        <h1 class="text-4xl font-bold">Tom Hendra</h1>
        <p class="my-4">🔨 Site under construction</p>
        <Button>Button</Button>
      </div>
    </div>
  );
}
