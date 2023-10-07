const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')
const postcssCustomMedia = require('postcss-custom-media')
const postcssImport = require('postcss-import')
const openpropsMedia = require('open-props/media')

module.exports = {
  plugins: [
    postcssJitProps(OpenProps),
    /* 
      postcss-import needed for path resolutions, but astro does a lot of 
      resolution too, so might not be needed 
     */
    postcssImport(),
    postcssCustomMedia({
      importFrom: [openpropsMedia],
    }),
  ],
}
