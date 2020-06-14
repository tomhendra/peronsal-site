// prettier-ignore
module.exports = {
  projectId: process.env.SANITY_PROJECT_ID || '<#< sanity.projectId >#>',
  dataset: process.env.SANITY_DATASET || '<#< sanity.dataset >#>',
  token: process.env.SANITY_AUTH_TOKEN || '<#< sanity.readToken >#>',
};
