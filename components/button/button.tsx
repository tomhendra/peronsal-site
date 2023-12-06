import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      class="ghost-button"
      disabled={!IS_BROWSER || props.disabled}
      {...props}
    />
  );
}
