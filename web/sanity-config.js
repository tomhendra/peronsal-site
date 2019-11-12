// prettier-ignore
module.exports = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID || '<#< sanity.projectId >#>',
  dataset: process.env.GATSBY_SANITY_DATASET || '<#< sanity.dataset >#>',
  token: process.env.SANITY_READ_TOKEN || '<#< sanity.readToken >#>',
};
