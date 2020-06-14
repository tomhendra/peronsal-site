// prettier-ignore
module.exports = {
  projectId: process.env.SANITY_PROJECT_ID || '<#< sanity.projectId >#>',
  token: process.env.SANITY_AUTH_TOKEN || '<#< sanity.readToken >#>',
  dataset: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
