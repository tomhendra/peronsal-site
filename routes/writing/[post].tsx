import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    console.log({ ctx });
    const uuid = crypto.randomUUID();
    const id = JSON.stringify(uuid);
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", id);
    return resp;
  },
};

export default function Post(props: PageProps) {
  console.log({ props });
  return <div>Hello {props.params.post}</div>;
}
