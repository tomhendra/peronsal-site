import type {APIResponse} from '$lib/types';

export const get = async (): Promise<APIResponse> => {
  try {
    const posts = import.meta.glob(`../../../lib/content/*.md`);

    return {
      status: 200,
      body: {
        total: Object.keys(posts).length,
      },
    };
  } catch {
    return {
      status: 500,
      body: {
        error: 'Could not retrieve total number of posts.',
      },
    };
  }
};
