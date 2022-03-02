export function getSlugFromPath(path) {
  return path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
}
