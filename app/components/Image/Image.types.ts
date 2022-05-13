import type { TransformerOption } from "@cld-apis/types";
export { TransformerOption };

export type ImageBuilder = {
  (transformations?: TransformerOption): string;
  alt: string;
  id: string;
};
