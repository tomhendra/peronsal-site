import type {LoaderFunction} from '@remix-run/cloudflare';
import {useLoaderData} from '@remix-run/react';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import {getMarkdownFile} from '~/helpers/github-md.server';

const loader: LoaderFunction = async ({params}) => {
  const {slug} = params;
  const markdown = await getMarkdownFile(`${slug}.md`);

  if (!markdown) {
    throw new Response('Not found', {status: 404});
  }

  return markdown;
};

function Article() {
  const {html, attributes} = useLoaderData();

  return (
    <section>
      <MaxWidthContainer>
        <h1>{attributes.title}</h1>
        <p>{attributes.date}</p>
        <section>
          <div dangerouslySetInnerHTML={{__html: html}} />
        </section>
      </MaxWidthContainer>
    </section>
  );
}

export {loader, Article as default};
