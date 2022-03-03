import type {APIResponse, PostsEndpointOptions} from '$lib/types';
import {getPosts} from '$lib/utils';

export const get = async ({url}): Promise<APIResponse> => {
  try {
    /*
      These let you add query params to change what's retrieved from the 
      endpoint, e.g. /api/posts.json?offset=10&limit=20
    */
    const params = new URLSearchParams(url.search);

    const options: PostsEndpointOptions = {
      offset: parseInt(params.get('offset')) || null,
      limit: parseInt(params.get('limit')) || 10,
    };

    const posts = await getPosts({...options});

    return {
      status: 200,
      body: {
        posts,
      },
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Could not fetch posts. ' + error,
      },
    };
  }
};
