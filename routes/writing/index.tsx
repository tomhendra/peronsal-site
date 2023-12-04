import { useSignal } from "@preact/signals";

export default function Words() {
  const count = useSignal(3);
  console.log({ count });
  return (
    <div>
      <h1>Words about stuff</h1>
    </div>
  );
}
