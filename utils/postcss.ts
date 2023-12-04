import { debounce } from "$std/async/mod.ts";
import postcss from "https://deno.land/x/postcss@8.4.16/mod.js";
import { CustomMedia } from "https://esm.sh/open-props/src/media";
import customMediaPlugin from "https://esm.sh/postcss-custom-media@8.x.x";
import importGlob from "https://esm.sh/postcss-import-ext-glob@2.1.1";
import importUrl from "https://esm.sh/postcss-import-url@7.1.0";
import inlineImports from "https://esm.sh/postcss-import@15.0.1";
import jitProps from "https://esm.sh/postcss-jit-props@1.0.8";
import mqRanges from "https://esm.sh/postcss-media-minmax";
import cssNesting from "https://esm.sh/postcss-nesting";
import cssnano from "npm:cssnano";
import OpenProps from "open-props";

const config = {
  plugins: [
    customMediaPlugin({
      importFrom: [{
        customMedia: CustomMedia,
      }],
    }),
    importGlob(),
    inlineImports({
      path: ["styles"],
    }),
    importUrl(),
    cssNesting(),
    mqRanges(),
    jitProps({
      ...OpenProps,
      layer: "base.props",
    }),
    cssnano(),
  ],
};

export async function watchAndBuildStyles() {
  const watcher = Deno.watchFs([
    "./styles/",
    "./components/",
    "./islands/",
  ]);

  const protectedBuildCall = debounce(buildStyles, 200);

  for await (const _event of watcher) {
    protectedBuildCall();
  }
}

export async function buildStyles() {
  const css = await Deno.readTextFile("./styles/index.css");

  const result = await postcss(config.plugins)
    .process(css, {
      from: "./static/index.css",
      to: "./static/styles.css",
    });

  Deno.writeTextFile("./static/styles.css", result.css);
  console.log("styles updated");
}
