---
title: 'Lorem ipsum dolor sit amet'
subtitle: 'lorum ipsum'
date: '2022-03-29'
updated: ''
coverImage: 'bizarre-platypus-2400.png'
alt: 'Bizarre Platypus #2400'
caption: 'Photo by Kaushal Moradiya from Pexels'
tags:
  - 'learning'
  - 'self-improvement'
description: "In 2018 I left my old life behind in the UK, sold everything I owned, and moved
to Spain with the aim of changing career from procurement professional to
software developer, by way of full-time self-guided learning."
---

# Orci

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non.
Scelerisque eleifend donec pretium vulputate. Faucibus et molestie ac feugiat
sed lectus vestibulum mattis ullamcorper. Scelerisque felis imperdiet proin
fermentum leo vel orci porta. Consequat id porta nibh venenatis cras sed. Neque
gravida in fermentum et. Aenean sed adipiscing diam donec adipiscing tristique
risus nec feugiat. Ut tellus elementum sagittis vitae et. Viverra nibh cras
pulvinar mattis. Massa placerat duis ultricies lacus sed turpis.

## Dapibus

Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Facilisis sed odio
morbi quis commodo odio. Enim sit amet venenatis urna cursus eget nunc
scelerisque viverra. Sed nisi lacus sed viverra tellus. Sit amet facilisis magna
etiam tempor orci eu lobortis elementum. Blandit turpis cursus in hac habitasse
platea. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Dui accumsan
sit amet nulla facilisi morbi. Dui ut ornare lectus sit amet est. Ultricies
integer quis auctor elit sed vulputate mi. Non tellus orci ac auctor augue
mauris. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. In hac
habitasse platea dictumst vestibulum rhoncus.

### Ultrices

Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Vitae semper
quis lectus nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl
pretium. Amet justo donec enim diam. Sed turpis tincidunt id aliquet risus
feugiat. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Massa massa
ultricies mi quis hendrerit dolor. Elit sed vulputate mi sit amet. Massa sed
elementum tempus egestas. Velit scelerisque in dictum non consectetur. Maecenas
accumsan lacus vel facilisis volutpat. Neque laoreet suspendisse interdum
consectetur libero.

#### Sollicitudin

Vitae auctor eu augue ut. Vel eros donec ac odio tempor orci dapibus ultrices
in. Orci a scelerisque purus semper eget duis. At imperdiet dui accumsan sit
amet nulla facilisi morbi. Rhoncus aenean vel elit scelerisque. Suscipit
adipiscing bibendum est ultricies integer. Malesuada pellentesque elit eget
gravida cum sociis natoque penatibus. Erat imperdiet sed euismod nisi porta.
Imperdiet massa tincidunt nunc pulvinar sapien et. Turpis cursus in hac
habitasse. Sit amet justo donec enim diam vulputate. Faucibus scelerisque
eleifend donec pretium vulputate sapien nec sagittis. Aenean euismod elementum
nisi quis.

##### Tempor

Leo in vitae turpis massa sed elementum tempus egestas sed. Risus at ultrices mi
tempus imperdiet nulla malesuada pellentesque elit. Fusce ut placerat orci nulla
pellentesque dignissim enim. Tellus in metus vulputate eu scelerisque felis
imperdiet proin fermentum. Mattis aliquam faucibus purus in massa tempor nec.
Elit sed vulputate mi sit amet mauris commodo quis. Vitae purus faucibus ornare
suspendisse sed nisi lacus sed. Sed ullamcorper morbi tincidunt ornare massa
eget. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Non tellus
orci ac auctor augue mauris augue. Pellentesque dignissim enim sit amet
venenatis urna. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.

```typescript
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
```
