import { useSignal } from "@preact/signals";

export default function Words() {
  const count = useSignal(3);
  console.log({ count });
  return (
    <div class="px-4 py-8 mx-auto">
      <h1 class="text-4xl font-bold">Words about stuff</h1>
    </div>
  );
}
